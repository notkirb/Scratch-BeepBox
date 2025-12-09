# Scratch-BeepBox

Scratch-BeepBox is an extension/wrapper for Scratch that allows playback from the BeepBox synthesizer via BeepBox's alphanumerical project strings (example: `9s8k0l0e00t2a7g0fj16r1i0o1p1175...`).

## Installation

It is relatively simple to use this extension. Simply find the version of scratch you want to use and follow the steps.

### Vanilla Scratch

Vanilla Scratch does not support custom extensions.

### Turbowarp

Unfortunately, this extension has no way to avoid being **unsandboxed**. This means that it is harder to use in Turbowarp. Turbowarp disables the use of unsandboxed plugins to prevent malicious code from running. This means that when a new update to this extension is released, you must follow this process again. To use in Turbowarp, follow these steps:

1. [Download the `extension.js` file](https://github.com/notkirb/Scratch-BeepBox/releases/download/1.0.0/extension.js).
2. Open Turbowarp and open the extensions pane.
3. Choose `Custom Extension`
4. Click on the `Files` tab
5. Open the previously downloaded `extension.js` file
6. **Use the extension in your project!**

### PenguinMod

> [!NOTE]
> This extension does not yet have support for PenguinMod.

PenguinMod, despite it being a fork of Turbowarp, allows unsandboxed custom extensions without restriction.

1. Open PenguinMod and open the extensions pane.
2. Click on `Load Custom Extension`
3. Copy and paste [this link](https://github.com/notkirb/Scratch-BeepBox/releases/download/1.0.0/extension.js) into the text field.
4. Tick `Run extension without sandbox`
5. **Use the extension in your project!**

### Other custom-plugin-compatible editors

1. Find and open a custom extension prompt.
2. Copy and paste [this link](https://github.com/notkirb/Scratch-BeepBox/releases/download/1.0.0/extension.js) into a custom extension URL field. 
## Building

1. Fork and clone the repository
   ```bash
   $ git clone https://github.com/notkirb/Scratch-BeepBox.git && cd Scratch-BeepBox
   ```
2. Install dependencies
   ```bash
   $ npm install
   ```
3. (optional) replace `vendor/beepbox_synth.min.js` with one from a fork of BeepBox (such as JummBox). Note that the name of the file cannot change.
4. Package project
   ```bash
   $ npm run build
   ```
5. Use `dist/extension.js` in your Scratch VM of choice
## To-do
| Task | Completion |
|-|-|
| Integrate BeepBox synth code into extension to allow for offline use | 🟢 Completed |
| Support for BeepBox forks | 🔴 Canceled |
| Use global volume setting | ⚫ Not started |
| PenguinMod support | ⚫ Not started |
| Branding | ⚫ Not started |

## Credits
[BeepBox Synthesizer](https://beepbox.co) by [John Nesky](https://johnnesky.com/) and the community

ChatGPT for some of the code
