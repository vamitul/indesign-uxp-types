/**
 * ConditionalTextPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { ConditionSet } from './ConditionSet';
import type { ConditionIndicatorMode } from './Enums/ConditionIndicatorMode';

/**
 * Conditional text preferences.
 */
export interface ConditionalTextPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ConditionalTextPreference';

  /** Resolves the proxy into the individual {@link ConditionalTextPreference} objects it stands for. */
  getElements(): ConditionalTextPreference<'single'>[];

  /** Shows or hides condition indicators. */
  get showConditionIndicators(): Read<M, ConditionIndicatorMode>;
  set showConditionIndicators(value: ConditionIndicatorMode);

  /** The currently active condition set. */
  get activeConditionSet(): Read<M, ConditionSet>;
  set activeConditionSet(value: ConditionSet);
}
