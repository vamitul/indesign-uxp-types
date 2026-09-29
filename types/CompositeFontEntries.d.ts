/**
 * CompositeFontEntries.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { CompositeFontEntry } from './CompositeFontEntry';
import type { CompositeFont } from './CompositeFont';

/**
 * A collection of {@link CompositeFontEntry} objects within a {@link CompositeFont}.
 * Each entry defines the font, size, and character range (e.g., Kanji, Kana, Punctuation)
 * for one component of the composite font.
 *
 * @collection CompositeFontEntry
 */
export interface CompositeFontEntries
  extends
    BaseCollection<CompositeFontEntry, CompositeFontEntry, CompositeFontEntry<'plural'>>,
    IdCollection<CompositeFontEntry>,
    NamedCollection<CompositeFontEntry> {
  /** The object's DOM class name. */
  readonly constructorName: 'CompositeFontEntries';

  /**
   * Creates a new composite font entry.
   * @param withProperties Initial values for properties of the new {@link CompositeFontEntry}.
   */
  add(withProperties?: PropertiesSetter<CompositeFontEntry>): CompositeFontEntry;
}
