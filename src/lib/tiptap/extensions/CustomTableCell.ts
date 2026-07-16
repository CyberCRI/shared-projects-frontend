import TableCell from '@tiptap/extension-table-cell'

export const CustomTableCell = TableCell.extend({
  name: 'custom-table-cell',

  addAttributes() {
    return {
      // extend the existing attributes …
      //...(this.parent ? this.parent() : {}),
      ...(TableCell?.config?.addAttributes?.call(this) || {}),
      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-background-color'),
        renderHTML: (attributes) => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          }
        },
      },
    }
  },
})
