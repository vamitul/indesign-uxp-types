/**
 * ObjectStyleGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { ObjectStyleGroup } from './ObjectStyleGroup';

/**
 * A collection of {@link ObjectStyleGroup} objects. Style groups allow you to
 * organize object styles into hierarchical folders for better management
 * in large documents.
 *
 * @collection ObjectStyleGroup
 */
export interface ObjectStyleGroups
  extends
    BaseCollection<ObjectStyleGroup, ObjectStyleGroup, ObjectStyleGroup<'plural'>>,
    IdCollection<ObjectStyleGroup>,
    NamedCollection<ObjectStyleGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyleGroups';

  /**
   * Creates a new object style group.
   *
   * * **Duplicate Names:** If a style group with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link ObjectStyleGroup}.
   */
  add(withProperties?: PropertiesSetter<ObjectStyleGroup>): ObjectStyleGroup;
}
