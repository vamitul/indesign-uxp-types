/**
 * PreflightProfileRule.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { PreflightProfile } from './PreflightProfile';
import type { RuleDataObjects } from './RuleDataObjects';
import type { PreflightRuleFlag } from './Enums/PreflightRuleFlag';
import type { PreflightRule } from './PreflightRule';
import type { PreflightRuleInstance } from './PreflightRuleInstance';

/**
 * A {@link PreflightRule} activated within a {@link PreflightProfile}, carrying
 * its severity {@link flag} and any rule-specific {@link ruleDataObjects}.
 */
export interface PreflightProfileRule<M extends Mode = 'single'>
  extends LabelableEventDOMObject<PreflightProfile, M>,
    IndexedDOMObject<PreflightProfile, M> {
  /** The object's DOM class name — reports the specific kind, such as `'PreflightRuleInstance'` when the object is a {@link PreflightRuleInstance}. */
  readonly constructorName: 'PreflightProfileRule' | 'PreflightRuleInstance';

  /** Resolves the proxy into the individual {@link PreflightProfileRule} objects it stands for. */
  getElements(): PreflightProfileRule<'single'>[];

  /** The rule ID for this rule. */
  readonly id: Read<M, string>;

  /** The name of the rule. */
  readonly name: Read<M, string>;

  /** The description of the rule. */
  readonly description: Read<M, string>;

  /** The rule-specific data values configuring this rule. */
  readonly ruleDataObjects: RuleDataObjects;

  /** Whether the rule is disabled, or its feedback severity when enabled. */
  get flag(): Read<M, PreflightRuleFlag>;
  set flag(value: PreflightRuleFlag);

  /** Deletes the preflight profile rule. */
  remove(): Read<M, void>;
}
