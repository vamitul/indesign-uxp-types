/**
 * Footnotes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { InsertionPoint } from './InsertionPoint';
import type { Note } from './Note';
import type {
  AddableTextElementCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Footnote } from './Footnote';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of {@link Footnote} objects within a story or text range.
 * Footnotes consist of a reference marker in the main text and a corresponding
 * text range that typically appears at the bottom of the page or column.
 *
 * @collection Footnote
 */
export interface Footnotes
  extends
    BaseCollection<Footnote, Footnote, Footnote<'plural'>>,
    IdCollection<Footnote>,
    NamedCollection<Footnote>,
    AddableTextElementCollection<Footnote, Note | InsertionPoint> {
  /** The object's DOM class name. */
  readonly constructorName: 'Footnotes';
}
