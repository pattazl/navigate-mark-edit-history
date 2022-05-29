# Navigate and mark Edit History Bookmarks

A Visual Studio Extension for quick navigation of edits/markers (NEH) . This is a fork and derivative of [Edit History Bookmarks](https://github.com/pgsandstrom/vscode-navigate-edit-history) , add multi-lang support and marker function

## Features

- Quick access back and forward between edits and marked locations
- Search edits across all files
- Persistent storage edit history
- Bookmarks with stack workflow pattern
- Remove, Create, Toggle edit/mark at location for quick back tracking
- Auto-move edits/marks to top of navigation stack (optional)
- Define the marker style by your self , 6 styles preset

## Extension Settings

This extension contributes the following commands (Set in Keyboard Preferences):

- `navigateEditHistory.moveCursorToPreviousEdit`: NEH: Navigate back in edit history
- `navigateEditHistory.moveCursorToPreviousEditInCurrentFile`: NEH: Navigate back in edit history in the current file
- `navigateEditHistory.moveCursorToNextEdit`: NEH: Navigate forward in edit history
- `navigateEditHistory.moveCursorToNextEditInCurrentFile`: NEH: Navigate forward in edit history in the current file
- `navigateEditHistory.list`: NEH: List edit history in all files
- `navigateEditHistory.createEditAtCursor`: NEH: Create edit at cursor position (Moves edit to top of stack)
- `navigateEditHistory.removeEditAtCursor`: NEH: Remove any edits on the current line
- `navigateEditHistory.toggleEditAtCursor`: NEH: Toggle any edits on the current line
- `navigateEditHistory.moveCursorCancelNavigation`: NEH: Navigate back to beginning of stack before any jumps
- `navigateEditHistory.clearEdits`: NEH: Clear All Edits
- `navigateEditHistory.clearCurrEdits`: NEH: Clear All Edits in the current file

This extension contributes the following settings (Set in User Preferences):

- `navigateEditHistory.maxHistorySize`: Maximum number of entries for the edits history.
- `navigateEditHistory.centerOnReveal`: When navigating to an edit outside the view, should we always put the edit in the center of the screen?
- `navigateEditHistory.groupEditsWithinLines`: Group edits if they are within a certain amount of lines from each other.
- `navigateEditHistory.logDebug`: Log a bunch of stuff to the console. Use if submitting a bug report.
- `navigateEditHistory.topStackWhenQuickPickSelect`: Move edit to top of stack on quick pick select.
- `navigateEditHistory.topStackWhenMove`: Move edit to top of stack on cursor position change.
- `navigateEditHistory.filterOnPathInEditList`: When filtering the edit list, also match on the file path.
- `navigateEditHistory.markerStyle`: Marker Style, you can define JSON `#navigateEditHistory.markerJSONCustom#` by yourself, SVG maybe has conflict with breakpoint [Issue](https://github.com/Microsoft/vscode/issues/5923) ,
- `navigateEditHistory.markerColor`: Such as #FF00FF99, not worked in SVG, you can define JSON `#navigateEditHistory.markerJSONCustom#` by yourself, see the [theme-color](https://code.visualstudio.com/api/references/theme-color),
- `navigateEditHistory.markerJSON`: Current marker style's JSON, it is readonly and for custom reference, custom key(gutterIconPathExt) support relative/absolute SVG path,
- `navigateEditHistory.markerJSONCustom`: The custom marker style's JSON, see the `#navigateEditHistory.markerJSON#` and [DecorationRenderOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions),
- `navigateEditHistory.markerWholeLine` : Whether marker the whole line, you can define JSON `#navigateEditHistory.markerJSONCustom#` by yourself.,
- `navigateEditHistory.markerStyleEnum1` : The Line on the left,
- `navigateEditHistory.markerStyleEnum2` : The dash on the left,
- `navigateEditHistory.markerStyleEnum3` : The dot on the left,
- `navigateEditHistory.markerStyleEnum4` : The dot on the bottom,
- `navigateEditHistory.markerStyleEnum5` : Set background color,
- `navigateEditHistory.markerStyleEnum6` : SVG rectangle on the left, the key gutterIconPathExt support relative/absolute,
- `navigateEditHistory.markerStyleEnum7` : SVG triangle on the left, the key gutterIconPathExt support relative/absolute,
- `navigateEditHistory.markerStyleEnum8` : Set your own style by marker JSONCustom,

## Workflow Guide

Yet another edit history navigator extension for VsCode. Offers a command to go one step further back in edit history, defaults to KeyBinding ctrl+q. Any navigation or selection will reset the command to once again go to the latest edit. Any edits close to the last edit will be bundled into one edit history item, the closeness can be configured.

With create/toggle edit on current line command the current position is moved to the top of the bookmark/edit stack, making for quick back tracking. Config options can be set to automatically move current bookmark up to top of stack, for a stack back jumping workflow. Can also open up search pallet to view edit/mark history.

This extension is very opinionated, but I'm happy to take suggestions. Just open an issue or pull request on Github!

## Known Issues

- Cant save edit history in files that has not yet been saved to disk.

[ Logo Credit ](https://icons8.com/)
