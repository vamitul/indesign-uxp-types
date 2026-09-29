/**
 * PreflightRule.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { PreflightProfileRule } from './PreflightProfileRule';
import type { PreflightRuleInstance } from './PreflightRuleInstance';

/**
 * A globally registered preflight rule definition (the catalog entry a
 * {@link PreflightProfileRule} or {@link PreflightRuleInstance} activates).
 */
export interface PreflightRule<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightRule';

  /** Resolves the proxy into the individual {@link PreflightRule} objects it stands for. */
  getElements(): PreflightRule<'single'>[];

  /** The rule ID for this rule. */
  readonly id: Read<M, string>;

  /** The name of the rule. */
  readonly name: Read<M, string>;

  /** The description of the rule. */
  readonly description: Read<M, string>;

  /** If `true`, the preflight rule is fully supported. */
  get fullFeature(): Read<M, boolean>;
  set fullFeature(value: boolean);
}
