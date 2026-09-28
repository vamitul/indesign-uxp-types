/**
 * CellStyleGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, IdCollection, BaseCollection } from './_base/Collections';
import type { CellStyleGroup } from './CellStyleGroup';

/**
 * A collection of {@link CellStyleGroup} objects. Style groups allow you to
 * organize cell styles into hierarchical folders for better management
 * in large documents.
 *
 * @collection CellStyleGroup
 */
export interface CellStyleGroups
  extends BaseCollection<CellStyleGroup, CellStyleGroup, CellStyleGroup<'plural'>>,
    IdCollection<CellStyleGroup>,
    NamedCollection<CellStyleGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyleGroups';

  /**
   * Creates a new cell style group.
   *
   * * **Duplicate Names:** If a style group with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link CellStyleGroup}.
   */
  add(withProperties?: PropertiesSetter<CellStyleGroup>): CellStyleGroup;
}
