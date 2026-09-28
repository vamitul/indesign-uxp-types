/**
 * MixedInks.d.ts — indesign-uxp-types
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
import type { MixedInk } from './MixedInk';
import type { Ink } from './Ink';
import type { MixedInkGroup } from './MixedInkGroup';

/**
 * A collection of {@link MixedInk} swatches. Mixed inks are created by combining
 * specific percentages of two or more existing process or spot inks.
 *
 * @collection MixedInk
 */
export interface MixedInks
  extends
    BaseCollection<MixedInk, MixedInk, MixedInk<'plural'>>,
    IdCollection<MixedInk>,
    NamedCollection<MixedInk> {
  /** The object's DOM class name. */
  readonly constructorName: 'MixedInks';

  /**
   * Creates a new mixed ink swatch.
   *
   * * **Requirement:** The ink list must contain at least two existing inks (process or spot).
   * * **Mapping:** The `inkPercentages` array must match the length of `inkList`, with each percentage value mapping to the corresponding ink.
   *
   * @param inkList The component inks to mix. Can be an array of {@link Ink} objects or a {@link MixedInkGroup}.
   * @param inkPercentages An array of numbers (0 to 100) representing the density percentage for each corresponding ink in the list.
   * @param withProperties Initial values for properties of the new MixedInk.
   */
  add(
    inkList: Ink[] | MixedInkGroup,
    inkPercentages: number[],
    withProperties?: PropertiesSetter<MixedInk>,
  ): MixedInk;
}
