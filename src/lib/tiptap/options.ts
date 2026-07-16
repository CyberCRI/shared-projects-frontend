import type { StarterKitOptions } from '@tiptap/starter-kit'
import TableHeader from '@tiptap/extension-table-header'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import Color from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'

import { CustomTableCell } from './extensions/CustomTableCell'
import { ExternalVideo } from './extensions/ExternalVideo'
import { AnyExtension, Extensions } from '@tiptap/core'
import { CustomImage } from './extensions/CustomImage'
import { CodeBlock } from './extensions/CodeBlock'
import { lowlight } from './lowlight'

export const getExtensions = (options: Partial<StarterKitOptions> = {}): Extensions => [
  // StarterKit.configure no return a type satisfied AnyExtension, why ?
  StarterKit.configure({ ...options, codeBlock: false }) as AnyExtension,
  Link.configure({
    openOnClick: false,
  }),
  TextStyle,
  Color,
  Underline,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
    alignments: ['left', 'center', 'right'],
  }),
  ExternalVideo,
  Table.configure({
    resizable: true,
    cellMinWidth: 300,
  }),
  TableRow,
  TableHeader,
  CustomTableCell,
  CustomImage,
  CodeBlock.configure({
    lowlight,
  }),
]
