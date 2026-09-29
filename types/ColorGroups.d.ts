/**
 * ColorGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Swatch } from './Swatch';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { ColorGroup } from './ColorGroup';

/**
 * A collection of {@link ColorGroup} objects. Color groups provide a way to
 * organize and categorize swatches within the document's Swatches panel.
 *
 * @collection ColorGroup
 */
export interface ColorGroups
  extends
    BaseCollection<ColorGroup, ColorGroup, ColorGroup<'plural'>>,
    IdCollection<ColorGroup>,
    NamedCollection<ColorGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'ColorGroups';

  /**
   * Creates a new color group from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link ColorGroup}.
   */
  add(withProperties: PropertiesSetter<ColorGroup>): ColorGroup;

  /**
   * Creates a new color group.
   *
   * * **Duplicate Names:** If a color group with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param name The display name for the new color group.
   * @param swatchList An initial {@link Swatch} (or array of swatches) to add to the new group.
   * @param withProperties Initial values for properties of the new ColorGroup.
   */
  add(
    name?: string,
    swatchList?: Swatch | Swatch[],
    withProperties?: PropertiesSetter<ColorGroup>,
  ): ColorGroup;
}
