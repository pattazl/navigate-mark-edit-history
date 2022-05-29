/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

// 此文件用于导出所有以 getLang 函数方式引用的多语言包
import * as util from 'util'

const config = JSON.parse(process.env.VSCODE_NLS_CONFIG || '')
const locale = (config['locale'] as string) || 'en'

// 总共需要的词组清单
type langGroup = 'hello' | 'QuickPic'
// 英文字典清单
const defaultLang: Record<langGroup, string> = {
  hello: 'default hello',
  QuickPic: 'Type a line number or a piece of code to navigate to',
}
// 中文需要填写的
const zhcnLang: Record<langGroup, string> = {
  hello: '你好',
  QuickPic: '请输入行号或代码片段,然后跳转',
}
// 语言包汇总
type stringLang = Record<string, Record<langGroup, string>>
const lang: stringLang = {
  en: defaultLang,
  'zh-cn': zhcnLang,
}
// 通过此方法获取信息
export function getLang(key: langGroup, ...msg: any): string {
  const local = lang[locale][key]
  if (msg != null) {
    return util.format(local, ...msg)
  } else {
    return local
  }
}
