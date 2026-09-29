/**
 * PreflightProfiles.d.ts — indesign-uxp-types
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
import type { PreflightProfile } from './PreflightProfile';

/**
 * A collection of {@link PreflightProfile} objects available.
 * Preflight profiles are named sets of rules and settings used by the preflight engine
 * to identify potential output issues in InDesign documents.
 *
 * @collection PreflightProfile
 */
export interface PreflightProfiles
  extends
    BaseCollection<PreflightProfile, PreflightProfile, PreflightProfile<'plural'>>,
    IdCollection<PreflightProfile>,
    NamedCollection<PreflightProfile> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightProfiles';

  /**
   * Creates a new, empty {@link PreflightProfile}.
   * After creation, specific rules can be configured through the returned
   * profile's `preflightRuleInstances` collection.
   * @param withProperties Initial values for properties of the new {@link PreflightProfile}, such as its `name` and `description`.
   */
  add(withProperties?: PropertiesSetter<PreflightProfile>): PreflightProfile;
}
