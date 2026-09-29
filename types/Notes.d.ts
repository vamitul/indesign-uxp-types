/**
 * Notes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { InsertionPoint } from './InsertionPoint';
import type {
  AddableTextElementCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Note } from './Note';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of {@link Note} objects within a story or text range. Notes are
 * non-printing annotations typically used for internal editorial comments
 * and feedback.
 *
 * @collection Note
 */
export interface Notes
  extends
    BaseCollection<Note, Note, Note<'plural'>>,
    IdCollection<Note>,
    NamedCollection<Note>,
    AddableTextElementCollection<Note, Note | InsertionPoint> {
  /** The object's DOM class name. */
  readonly constructorName: 'Notes';
}
