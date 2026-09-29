/**
 * CharacterStyleGroups.d.ts — indesign-uxp-types
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
import type { CharacterStyleGroup } from './CharacterStyleGroup';

/**
 * A collection of {@link CharacterStyleGroup} objects. Style groups allow you to
 * organize character styles into hierarchical folders for better management
 * in large documents.
 *
 * @collection CharacterStyleGroup
 */
export interface CharacterStyleGroups
  extends
    BaseCollection<CharacterStyleGroup, CharacterStyleGroup, CharacterStyleGroup<'plural'>>,
    IdCollection<CharacterStyleGroup>,
    NamedCollection<CharacterStyleGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'CharacterStyleGroups';

  /**
   * Creates a new character style group from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link CharacterStyleGroup}.
   */
  add(withProperties: PropertiesSetter<CharacterStyleGroup>): CharacterStyleGroup;

  /**
   * Creates a new character style group. Throws if a group with the given name
   * already exists — check `itemByName("Name").isValid` first.
   * @param withProperties Initial values for properties of the new CharacterStyleGroup.
   */
  add(
    withProperties?: PropertiesSetter<CharacterStyleGroup>,
  ): CharacterStyleGroup;
}
