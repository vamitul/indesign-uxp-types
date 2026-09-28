/**
 * PreflightProfileRules.d.ts — indesign-uxp-types
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
import type { PreflightProfileRule } from './PreflightProfileRule';
import type { PreflightProfile } from './PreflightProfile';

/**
 * A collection of {@link PreflightProfileRule} objects. These rules represent
 * individual checks (e.g., image resolution, color space) configured within
 * a {@link PreflightProfile}.
 *
 * @collection PreflightProfileRule
 */
export interface PreflightProfileRules
  extends
    BaseCollection<PreflightProfileRule, PreflightProfileRule, PreflightProfileRule<'plural'>>,
    IdCollection<PreflightProfileRule>,
    NamedCollection<PreflightProfileRule> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightProfileRules';

  /**
   * Adds a new preflight rule to the profile.
   *
   * @param id The unique ID of the rule to be added to the profile.
   * @param withProperties Initial values for properties of the new PreflightProfileRule.
   */
  add(
    id: string,
    withProperties?: PropertiesSetter<PreflightProfileRule>,
  ): PreflightProfileRule;
}
