/**
 * Endnotes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Endnote } from './Endnote';

/**
 * A collection of {@link Endnote} objects. Endnotes consist of a reference marker
 * in the main text and a corresponding text range that is collected at the end
 * of the story or document.
 *
 * @collection Endnote
 */
export interface Endnotes
  extends
    BaseCollection<Endnote, Endnote, Endnote<'plural'>>,
    IdCollection<Endnote>,
    NamedCollection<Endnote> {
  /** The object's DOM class name. */
  readonly constructorName: 'Endnotes';
}
