/**
 * RuleDataObjects.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { RuleDataType } from './Enums/RuleDataType';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { RuleDataObject } from './RuleDataObject';
import type { PreflightProfileRule } from './PreflightProfileRule';

/**
 * A recursive type representing the valid data formats for Preflight Rule Data.
 * Rule data can be primitives or deeply nested arrays of those primitives.
 */
export type RuleDataValue =
  | string
  | number
  | boolean
  | object
  | RuleDataValue[];

/**
 * A collection of {@link RuleDataObject} objects belonging to a {@link PreflightProfileRule}.
 * Rule data objects store the configuration parameters for preflight checks,
 * such as resolution thresholds or prohibited font types.
 *
 * @collection RuleDataObject
 */
export interface RuleDataObjects
  extends
    BaseCollection<RuleDataObject, RuleDataObject, RuleDataObject<'plural'>>,
    IdCollection<RuleDataObject>,
    NamedCollection<RuleDataObject> {
  /** The object's DOM class name. */
  readonly constructorName: 'RuleDataObjects';

  /**
   * Adds a new preflight rule data entry to a {@link PreflightProfileRule}.
   * Rule data objects function as the parameters for Preflight Rules
   * (e.g., setting the maximum resolution for an image check).
   *
   * @param name The unique name/key for the rule data (e.g., "max_resolution").
   * @param dataType The explicit {@link RuleDataType} of the data being stored.
   * @param dataValue The actual value. This must align with the specified `dataType`.
   * Supports strings, numbers, booleans, and nested arrays.
   * @param withProperties Initial values for properties of the new {@link RuleDataObject}.
   */
  add(
    name: string,
    dataType: RuleDataType,
    dataValue: RuleDataValue,
    withProperties?: PropertiesSetter<RuleDataObject>,
  ): RuleDataObject;
}
