/**
 * TOCStyleEntries.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { TOCStyleEntry } from './TOCStyleEntry';
import type { TOCStyle } from './TOCStyle';

/**
 * A collection of {@link TOCStyleEntry} objects within a {@link TOCStyle}.
 * Each entry defines a mapping for a paragraph style to be included in the Table of Contents,
 * along with its associated formatting and indentation level.
 *
 * @collection TOCStyleEntry
 */
export interface TOCStyleEntries
  extends BaseCollection<TOCStyleEntry, TOCStyleEntry, TOCStyleEntry<'plural'>>, NamedCollection<TOCStyleEntry> {
  /** The object's DOM class name. */
  readonly constructorName: 'TOCStyleEntries';

  /**
   * Creates a new {@link TOCStyleEntry} from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link TOCStyleEntry}.
   */
  add(withProperties: PropertiesSetter<TOCStyleEntry>): TOCStyleEntry;

  /**
   * Adds a paragraph style to the TOC style definition.
   *
   * @param styleName The name of the paragraph style to include as an entry in the Table of Contents.
   * @param withProperties Initial values for properties of the new {@link TOCStyleEntry}.
   */
  add(
    styleName?: string,
    withProperties?: PropertiesSetter<TOCStyleEntry>,
  ): TOCStyleEntry;
}
