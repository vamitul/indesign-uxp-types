/**
 * RuleDataObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { PreflightProfileRule } from './PreflightProfileRule';
import type { PreflightRuleInstance } from './PreflightRuleInstance';
import type { RuleDataType } from './Enums/RuleDataType';
import type { RuleDataValue } from './RuleDataObjects';

/**
 * A single named data value attached to a {@link PreflightProfileRule} or
 * {@link PreflightRuleInstance}, configuring that preflight rule's behavior.
 */
export interface RuleDataObject<M extends Mode = 'single'>
  extends EventTargetDOMObject<PreflightProfileRule | PreflightRuleInstance, M>,
    IndexedDOMObject<PreflightProfileRule | PreflightRuleInstance, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'RuleDataObject';

  /** Resolves the proxy into the individual {@link RuleDataObject} objects it stands for. */
  getElements(): RuleDataObject<'single'>[];

  /** The name of the rule data object. */
  readonly name: Read<M, string>;

  /** The type of data held by {@link dataValue}. */
  readonly dataType: Read<M, RuleDataType>;

  /** The ID for this rule data object. */
  readonly id: Read<M, string>;

  /** The value for this data object. */
  get dataValue(): Read<M, RuleDataValue>;
  set dataValue(value: RuleDataValue);

  /** Deletes the rule data object. */
  remove(): Read<M, void>;
}
