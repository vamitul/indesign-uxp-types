/**
 * ColorGroupSwatches.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Swatch } from './Swatch';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { ColorGroupSwatch } from './ColorGroupSwatch';
import type { ColorGroup } from './ColorGroup';

/**
 * A collection of {@link ColorGroupSwatch} objects. These represent the specific
 * swatches (colors, gradients, etc.) that have been organized into a {@link ColorGroup}.
 *
 * @collection ColorGroupSwatch
 */
export interface ColorGroupSwatches
  extends BaseCollection<ColorGroupSwatch, ColorGroupSwatch, ColorGroupSwatch<'plural'>>, IdCollection<ColorGroupSwatch> {
  /** The object's DOM class name. */
  readonly constructorName: 'ColorGroupSwatches';

  /**
   * Adds an existing swatch to the color group.
   *
   * @param swatchItemRef The {@link Swatch} to be added to the color group.
   * @param withProperties Initial values for properties of the new ColorGroupSwatch.
   */
  add(
    swatchItemRef: Swatch,
    withProperties?: PropertiesSetter<ColorGroupSwatch>,
  ): ColorGroupSwatch;
}
