/**
 * TableStyleGroups.d.ts — indesign-uxp-types
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
import type { TableStyleGroup } from './TableStyleGroup';

/**
 * A collection of {@link TableStyleGroup} objects. Style groups allow you to
 * organize table styles into hierarchical folders for better management
 * in large documents.
 *
 * @collection TableStyleGroup
 */
export interface TableStyleGroups
  extends
    BaseCollection<TableStyleGroup, TableStyleGroup, TableStyleGroup<'plural'>>,
    IdCollection<TableStyleGroup>,
    NamedCollection<TableStyleGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyleGroups';

  /**
   * Creates a new table style group.
   *
   * * **Duplicate Names:** If a style group with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link TableStyleGroup}.
   */
  add(withProperties?: PropertiesSetter<TableStyleGroup>): TableStyleGroup;
}
