(function (Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("This extension must be run unsandboxed.");
    }

    // Utility: load external script (BeepBox synth)
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    class BeepBoxWrapper {
        constructor() {
            this._synth = null;
            this._synthLoaded = false;
            this._currentData = ""; // track the currently-playing song data

            loadScript("https://cdn.jsdelivr.net/npm/beepbox/global/beepbox_synth.min.js")
            .then(() => {
                this._synthLoaded = true;
                console.log("BeepBox Synth Loaded!");
            })
            .catch(e => {
                console.error("Failed to load BeepBox synth:", e);
            });

            // Stop playback when project stops
            Scratch.vm.runtime.on("PROJECT_STOP_ALL", () => {
                if (this._synth) {
                    this._synth.pause();
                }
            });
        }

        getInfo() {
            return {
                id: "beepboxwrapper",
                name: "BeepBox",
                color1: "#7744ff",
                color2: "#5934bdff",
                color3: "#5934bdff",
                
                blocks: [
                    {
                        opcode: "playSong",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "play BeepBox song [DATA]",
                        arguments: {
                            DATA: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Paste all text after the '#' in the beepbox URL"
                            }
                        }
                    },
                    {
                        opcode: "stopSong",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "stop BeepBox"
                    },
                    {
                        opcode: "getCurrentSong",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "current BeepBox data"
                    },
                    {
                        opcode: "setTempo",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "set BeepBox tempo to [BPM] BPM",
                        arguments: {
                            BPM: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 120
                            }
                        }
                    },
                    {
                        opcode: "getTempo",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "BeepBox tempo"
                    },
                    {
                        opcode: "setVolume",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "set BeepBox volume to [VOL] percent",
                        arguments: {
                            VOL: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            }
                        }
                    },
                    {
                        opcode: "getVolume",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "BeepBox volume"
                    },
                    {
                        opcode: "isPlaying",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "BeepBox is playing?"
                    }
                ]
            };
        }

        playSong(args) {
            if (!this._synthLoaded) {
                console.warn("BeepBox synth not loaded yet.");
                return;
            }

            const data = args.DATA ?? "";
            this._currentData = data;

            if (this._synth) {
                this._synth.pause();
            }

            try {
                this._synth = new beepbox.Synth(data);
                this._synth.play();
            } catch (e) {
                console.error("Error playing song:", e);
            }
        }

        stopSong() {
            if (this._synth) {
                this._synth.pause();
            }
        }

        getCurrentSong() {
            return this._currentData;
        }

        // ---------------------------
        // TEMPO
        // ---------------------------
        setTempo(args) {
            if (!this._synth || !this._synth.song) return;
            const bpm = Number(args.BPM);
            if (isNaN(bpm)) return;

            this._synth.song.tempo = bpm;
        }

        getTempo() {
            if (!this._synth || !this._synth.song) return 0;
            return this._synth.song.tempo;
        }

        // ---------------------------
        // VOLUME
        // ---------------------------
        setVolume(args) {
            if (!this._synth || !this._synth.song) return;
            const vol = Number(args.VOL);
            if (isNaN(vol)) return;
            const factor = Math.min(1.0, Math.pow(vol / 50.0, 0.5)) * Math.pow(2.0, (vol - 75.0) / 25.0);
            this._synth.volume = factor
            this._lastvolume = vol;
        }

        getVolume() {
            if (!this._synth || !this._synth.song) return 0;
            const vol = this._lastvolume;
            return vol;
        }

        // ---------------------------
        // STATUS
        // ---------------------------
        isPlaying() {
            if (!this._synth) return false;
            return !!this._synth.isPlayingSong;
        }
    }

    Scratch.extensions.register(new BeepBoxWrapper());
})(Scratch);
