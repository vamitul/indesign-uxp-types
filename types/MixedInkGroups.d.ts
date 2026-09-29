/**
 * MixedInkGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Ink } from './Ink';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { MixedInkGroup } from './MixedInkGroup';

/**
 * A collection of {@link MixedInkGroup} objects. Mixed ink groups allow you to
 * generate a series of mixed ink swatches based on combinations of starting
 * ink percentages and incremental steps.
 *
 * @collection MixedInkGroup
 */
export interface MixedInkGroups
  extends
    BaseCollection<MixedInkGroup, MixedInkGroup, MixedInkGroup<'plural'>>,
    IdCollection<MixedInkGroup>,
    NamedCollection<MixedInkGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'MixedInkGroups';

  /**
   * Creates a new mixed ink group and its component swatches.
   *
   * * **Hierarchy:** The total number of swatches generated is the product of all `(repeatValues + 1)` entries.
   * * **Mapping:** All array parameters (`inkList`, `inkPercentages`, `repeatValues`, and `incrementValues`) must have matching lengths.
   *
   * @param inkList An array of {@link Ink} objects to combine.
   * @param inkPercentages The starting percentage for each corresponding ink. Valid range: `0` to `100`.
   * @param repeatValues The number of incremental steps for each ink. Valid range: `0` to `100`.
   * @param incrementValues The percentage value to add to each ink at every step. Valid range: `0` to `100`. Note: The cumulative percentage per ink cannot exceed `100`.
   * @param withProperties Initial values for properties of the new MixedInkGroup.
   */
  add(
    inkList: Ink[],
    inkPercentages: number[],
    repeatValues: number[],
    incrementValues: number[],
    withProperties?: PropertiesSetter<MixedInkGroup>,
  ): MixedInkGroup;
}
