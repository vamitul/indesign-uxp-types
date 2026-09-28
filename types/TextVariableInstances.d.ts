/**
 * TextVariableInstances.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Change } from './Change';
import type { Character } from './Character';
import type { Word } from './Word';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { TextStyleRange } from './TextStyleRange';
import type { TextColumn } from './TextColumn';
import type { Table } from './Table';
import type { Footnote } from './Footnote';
import type { Cell } from './Cell';
import type { Note } from './Note';
import type { Story } from './Story';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { TextFrame } from './TextFrame';
import type { XmlStory } from './XmlStory';
import type {
  AddableTextElementCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { TextVariableInstance } from './TextVariableInstance';
import type { TextVariable } from './TextVariable';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of {@link TextVariableInstance} objects within a story or text range.
 * A variable instance represents a specific placement of a {@link TextVariable}
 * that displays dynamic content within the text flow.
 *
 * @collection TextVariableInstance
 */
export interface TextVariableInstances
  extends
    BaseCollection<TextVariableInstance, TextVariableInstance, TextVariableInstance<'plural'>>,
    IdCollection<TextVariableInstance>,
    NamedCollection<TextVariableInstance>,
    AddableTextElementCollection<
      TextVariableInstance,
      | TextVariableInstance
      | XmlStory
      | TextFrame
      | EndnoteTextFrame
      | Story
      | Note
      | Cell
      | Footnote
      | Table
      | TextColumn
      | TextStyleRange
      | Text
      | InsertionPoint
      | Paragraph
      | Line
      | Word
      | Character
      | Change
    > {
  /** The object's DOM class name. */
  readonly constructorName: 'TextVariableInstances';
}
