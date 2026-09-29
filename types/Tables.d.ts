/**
 * Tables.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Cell } from './Cell';
import type { Story } from './Story';
import type { Character } from './Character';
import type { Word } from './Word';
import type { Line } from './Line';
import type { TextColumn } from './TextColumn';
import type { Paragraph } from './Paragraph';
import type { TextStyleRange } from './TextStyleRange';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { TextFrame } from './TextFrame';
import type { XmlStory } from './XmlStory';
import type { XMLElement } from './XMLElement';
import type {
  AddableTextElementCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Table } from './Table';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of {@link Table} objects within a story, text frame, table cell, or other Text-based items.
 * Tables are grid-based structures managed by the text composer,
 * flowing inline with the surrounding text stream.
 *
 * @collection Table
 */
export interface Tables
  extends
    BaseCollection<Table, Table, Table<'plural'>>,
    IdCollection<Table>,
    NamedCollection<Table>,
    AddableTextElementCollection<
      Table,
      | Table
      | XMLElement
      | XmlStory
      | TextFrame
      | EndnoteTextFrame
      | Text
      | InsertionPoint
      | TextStyleRange
      | Paragraph
      | TextColumn
      | Line
      | Word
      | Character
      | Story
      | Cell
    > {
  /** The object's DOM class name. */
  readonly constructorName: 'Tables';
}
