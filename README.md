# Scratch-BeepBox

Scratch-BeepBox is an extension/wrapper for Scratch that allows playback from the BeepBox synthesizer via BeepBox's alphanumerical project strings (example: https://beepbox.co/#*`9s8k0l0e00t2a7g0fj16r1i0o1p1175...`*).

## Installation

It is relatively simple to use this extension.

#### Turbowarp

Unfortunately, this extension has no way to avoid being **unsandboxed**. This means that it is harder to use in Turbowarp. Turbowarp disables the use of unsandboxed plugins to prevent malicious code from running. This means that when a new update to this extension is released, you must follow this process again. To use in Turbowarp, follow these steps:

1. [Download the `extension.js` file](https://raw.githubusercontent.com/notkirb/Scratch-BeepBox/refs/heads/main/extension.js).
2. Open Turbowarp and open the extensions pane.
3. Choose `Custom Extension`
4. Click on the `Files` tab
5. Open the previously downloaded `extension.js` file
6. **Use the extension in your project!**

#### PenguinMod

PenguinMod, despite it being a fork of Turbowarp, allows unsandboxed custom extensions without restriction.

1. Open PenguinMod and open the extensions pane.
2. Click on `Load Custom Extension`
3. Copy and paste [this link](https://raw.githubusercontent.com/notkirb/Scratch-BeepBox/refs/heads/main/extension.js) into the text field.
4. **Use the extension in your project!**

#### Other custom-plugin-compatible VMs

1. Find and open a custom extension prompt.
2. Copy and paste [this link](https://raw.githubusercontent.com/notkirb/Scratch-BeepBox/refs/heads/main/extension.js) into a custom extension URL field. 
## Development

1. Fork the repository
2. Make some changes
3. Create a pull request

## To-do
| Task | Completion |
|-|-|
| Integrate BeepBox synth code into extension to allow for offline use | ⚫ Not started |
| Support for BeepBox forks | ⚫ Not started |
| Use global volume setting | ⚫ Not started |
| Branding | ⚫ Not started |

## Credits
[BeepBox Synthesizer](https://beepbox.co) by [John Nesky](https://johnnesky.com/) and the community
