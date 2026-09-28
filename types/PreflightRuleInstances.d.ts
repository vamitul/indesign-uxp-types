/**
 * PreflightRuleInstances.d.ts — indesign-uxp-types
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
import type { PreflightRuleInstance } from './PreflightRuleInstance';
import type { PreflightProfile } from './PreflightProfile';

/**
 * A collection of {@link PreflightRuleInstance} objects configured within a {@link PreflightProfile}.
 *
 * Each instance represents a specific check (such as font usage, image resolution, or color
 * space) performed by the preflight engine, along with its assigned severity and
 * configuration parameters.
 * @collection PreflightRuleInstance
 */
export interface PreflightRuleInstances
  extends
    BaseCollection<PreflightRuleInstance, PreflightRuleInstance, PreflightRuleInstance<'plural'>>,
    IdCollection<PreflightRuleInstance>,
    NamedCollection<PreflightRuleInstance> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightRuleInstances';

  /**
   * Adds a specific preflight rule to the parent profile.
   *
   * @param id The unique string identifier of the preflight rule to add (e.g., "ADBE_ImageResolution", "ADBE_MissingFont").
   * @param withProperties Initial configuration for the rule instance, including its `flag` (severity) and rule-specific data.
   */
  add(
    id: string,
    withProperties?: PropertiesSetter<PreflightRuleInstance>,
  ): PreflightRuleInstance;
}
