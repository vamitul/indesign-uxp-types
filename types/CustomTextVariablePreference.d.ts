/**
 * CustomTextVariablePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { TextVariable } from './TextVariable';
import type { SpecialCharacters } from './Enums/SpecialCharacters';

/**
 * The preferences for a custom text variable.
 */
export interface CustomTextVariablePreference<M extends Mode = 'single'> extends EventTargetDOMObject<TextVariable, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CustomTextVariablePreference';

  /** Resolves the proxy into the individual {@link CustomTextVariablePreference} objects it stands for. */
  getElements(): CustomTextVariablePreference<'single'>[];

  /** The contents of the text. */
  get contents(): Read<M, string | SpecialCharacters>;
  set contents(value: string | SpecialCharacters);
}
