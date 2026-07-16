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

export const CodeBlock = CodeBlockLowlight.extend<LpiBlockOptions>({
  name: 'code-block',

  addOptions() {
    return {
      ...this.parent?.(),
      themeClassPrefix: 'theme-',
      tabClassPrefix: 'tab-',
      defaultTheme: DEFAULT_THEME,
      defaultTab: DEFAULT_TAB,
    }
  },

  addAttributes() {
    return {
      ...this.parent?.(),

      theme: {
        default: null,
        parseHTML: (element) => {
          const { themeClassPrefix } = this.options

          const classNames = element.getAttribute('class')?.split(/\s+/).filter(Boolean) ?? []

          const theme = classNames
            .find((c) => c.startsWith(themeClassPrefix))
            ?.slice(themeClassPrefix.length)

          return theme ?? DEFAULT_THEME
        },
        rendered: false,
      },

      tab: {
        default: null,
        parseHTML: (element) => {
          const { tabClassPrefix } = this.options

          const classNames = element.getAttribute('class')?.split(/\s+/).filter(Boolean) ?? []

          const tab = classNames
            .find((c) => c.startsWith(tabClassPrefix))
            ?.slice(tabClassPrefix.length)

          return tab ?? DEFAULT_TAB.toString()
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
    const langClass = node.attrs.language
      ? this.options.languageClassPrefix + node.attrs.language
      : null

    const themeClass = node.attrs.theme
      ? this.options.themeClassPrefix + node.attrs.theme
      : this.options.themeClassPrefix + DEFAULT_THEME

    const tabClass = node.attrs.tab
      ? this.options.tabClassPrefix + node.attrs.tab
      : this.options.tabClassPrefix + DEFAULT_TAB.toString()

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
