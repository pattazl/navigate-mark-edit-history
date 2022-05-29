# Navigate and mark Edit History

VSCode 中编辑位置(曾经修改过的地方)进行导航的插件，简称 (NEH) . 根据插件 [Edit History Bookmarks](https://github.com/pgsandstrom/vscode-navigate-edit-history) 进行 fork 和修改，主要新增多语言支持，并对编辑位置增加自定义标记功能

## 特色

- 快速回退或前进到之前编辑过的位置
- 编辑位置可以自定义添加或删除
- 可在多文件间查找编辑位置 Search edits across all files
- 编辑位置持久化保存，可设定最大数量
- 可通过下拉框对编辑位置列表进行管理(创建，切换，删除，清空，顺序调整等)
- 对编辑位置可显示不同样式标记，内置 6 种标记，也可以自定义标记，比如支持 SVG 图片进行标记等等

## 标记样式举例

你可通过参考当前样式 JSON 编写自定义 JSON 来定义自己的样式
![img](img%5C4.png) ![img](img%5C5.png) ![img](img%5C1.png) ![img](img%5C2.png) ![img](img%5C3.png)

## 扩展设置

支持如下命令控制，建议自定义键盘快捷键

- `navigateEditHistory.moveCursorToPreviousEdit`：NEH: 跳转到前一个编辑记录
- `navigateEditHistory.moveCursorToNextEdit`：NEH: 跳转到后一个编辑记录
- `navigateEditHistory.moveCursorToPreviousEditInCurrentFile`：NEH: 当前文件中跳转到前一个编辑记录
- `navigateEditHistory.moveCursorToNextEditInCurrentFile`：NEH: 当前文件中跳转到后一个编辑记录
- `navigateEditHistory.list`：NEH: 列出全部编辑记录
- `navigateEditHistory.createEditAtCursor`：NEH: 当前光标位置创建编辑记录并登记到队列开头
- `navigateEditHistory.removeEditAtCursor`：NEH: 清除当前编辑记录
- `navigateEditHistory.toggleEditAtCursor`：NEH: 对当前行进行编辑记录的新增或删除
- `navigateEditHistory.moveCursorCancelNavigation`：NEH: 取消编辑位置跳转，退回到原先位置
- `navigateEditHistory.clearEdits`：NEH: 清除全部编辑记录
- `navigateEditHistory.clearCurrEdits`：NEH: 清除当前文件的全部编辑记录![](img%5Ccommand.png)

如下为配置中的相关设置，可自定义配置:

- `navigateEditHistory.maxHistorySize`：最大编辑历史记录条数
- `navigateEditHistory.centerOnReveal`：当导航到视图外时，是否始终将编辑位置处于屏幕中央?
- `navigateEditHistory.groupEditsWithinLines`：合并分组的编辑相距行数
- `navigateEditHistory.logDebug`：启用调试模式，可在控制台上记录供提交错误报告时使用
- `navigateEditHistory.topStackWhenQuickPickSelect`：在列表选择时，将选择的内容移动到列表顶部
- `navigateEditHistory.topStackWhenMove`：位置跳转后，光标移动后，将对应的编辑位置移到列表顶部
- `navigateEditHistory.filterOnPathInEditList`：展示列表清单时可根据文件路径过滤
- `navigateEditHistory.markerStyle`：标记样式,可在`#navigateEditHistory.markerJSONCustom#`中自定义, 如果使用 SVG 将可能和断点功能冲突,官方[Issue](https://github.com/Microsoft/vscode/issues/5923)
- `navigateEditHistory.markerColor`：标记颜色,比如 #FF00FF99,但无法改变 SVG 中颜色, 可在`#navigateEditHistory.markerJSONCustom#`中自定义, 颜色资料见 [theme-color](https://code.visualstudio.com/api/references/theme-color)
- `navigateEditHistory.markerJSON`：当前生效的 JSON,只读,供自定义 JSON 参考, 自定义键(gutterIconPathExt) 支持 SVG 图的相对和绝对路径
- `navigateEditHistory.markerJSONCustom`：自定义样式的 JSON 配置,参考当前样式的 JSON `#navigateEditHistory.markerJSON#` 以及官方文档 [DecorationRenderOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions)
- `navigateEditHistory.markerWholeLine`：是否标记整行,可在自定义中设置 `#navigateEditHistory.markerJSONCustom#` ![](img%5Cconfig2.png)
  ![](img%5Cconfig.png)

## 注意

- 因为编辑位置的历史是保存到 workspace，所以文件需要保存到磁盘后后才能起作用。
