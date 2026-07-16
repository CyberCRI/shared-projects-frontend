import type { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { mergeAttributes } from '@tiptap/core'

export const DEFAULT_LANGUAGE = 'plaintext'
export const DEFAULT_THEME = 'dark'
export const DEFAULT_TAB = 2

export interface LpiBlockOptions extends CodeBlockLowlightOptions {
  tabClassPrefix: string
  themeClassPrefix: string
  defaultTheme: string | null | undefined
}

const getClassValue = (element: Element, classPrefix: string): string => {
  const classNames = element.getAttribute('class')?.split(/\s+/).filter(Boolean) ?? []

  return classNames.find((c) => c.startsWith(classPrefix))?.slice(classPrefix.length) || ''
}

export const CodeBlock = CodeBlockLowlight.extend<LpiBlockOptions>({
  name: 'code-block',

  addOptions() {
    return {
      ...this.parent?.(),
      themeClassPrefix: 'theme-',
      tabClassPrefix: 'tab-',
      languageClassPrefix: 'language-',
      defaultTheme: DEFAULT_THEME,
      defaultTab: DEFAULT_TAB,
    }
  },

  addAttributes() {
    return {
      ...this.parent?.(),

      language: {
        default: null,
        parseHTML: (element) => {
          const { languageClassPrefix } = this.options
          return getClassValue(element, languageClassPrefix) || DEFAULT_LANGUAGE
        },
        rendered: false,
      },

      theme: {
        default: null,
        parseHTML: (element) => {
          const { themeClassPrefix } = this.options
          return getClassValue(element, themeClassPrefix) || DEFAULT_THEME
        },
        rendered: false,
      },

      tab: {
        default: null,
        parseHTML: (element) => {
          const { tabClassPrefix } = this.options
          return getClassValue(element, tabClassPrefix) || DEFAULT_TAB.toString()
        },
        rendered: false,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'pre.lpi-code-block',
        preserveWhitespace: 'full',
      },
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    const langClass = `${this.options.languageClassPrefix}${node.attrs.language || DEFAULT_LANGUAGE}`
    const themeClass = `${this.options.themeClassPrefix}${node.attrs.theme || DEFAULT_THEME}`
    const tabClass = `${this.options.tabClassPrefix}${node.attrs.tab || DEFAULT_TAB}`

    return [
      'pre',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `lpi-code-block ${themeClass} ${tabClass}`,
      }),
      [
        'code',
        {
          class: langClass,
          spellcheck: 'false',
        },
        0,
      ],
    ]
  },
})
