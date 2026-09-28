/**
 * PreflightRules.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { PreflightRule } from './PreflightRule';
import type { PreflightProfile } from './PreflightProfile';

/**
 * A collection of available {@link PreflightRule} objects. These rules define
 * the core validation checks that can be enabled and configured within
 * a {@link PreflightProfile}.
 *
 * @collection PreflightRule
 */
export interface PreflightRules
  extends
    BaseCollection<PreflightRule, PreflightRule, PreflightRule<'plural'>>,
    IdCollection<PreflightRule>,
    NamedCollection<PreflightRule> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightRules';
}
