/**
 * ConditionSets.d.ts — indesign-uxp-types
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
import type { ConditionSet } from './ConditionSet';
import type { Condition } from './Condition';

/**
 * A collection of {@link ConditionSet} objects in the document or application.
 *
 * Condition sets allow for the rapid toggling of multiple {@link Condition} visibility
 * states, enabling quick switching between different document versions (e.g., "Full Price"
 * vs. "Sale", "Technical" vs. "User-Facing").
 * @collection ConditionSet
 */
export interface ConditionSets
  extends
    BaseCollection<ConditionSet, ConditionSet, ConditionSet<'plural'>>,
    IdCollection<ConditionSet>,
    NamedCollection<ConditionSet> {
  /** The object's DOM class name. */
  readonly constructorName: 'ConditionSets';

  /**
   * Creates a new {@link ConditionSet} by capturing the current visibility
   * states of all {@link Condition} objects in the document.
   * @param withProperties Initial values for properties of the new {@link ConditionSet},
   * primarily used to specify the `name`.
   */
  add(withProperties?: PropertiesSetter<ConditionSet>): ConditionSet;
}
