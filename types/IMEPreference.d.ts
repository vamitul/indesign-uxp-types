/**
 * IMEPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Input method editor (IME) preferences.
 */
export interface IMEPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'IMEPreference';

  /** Resolves the proxy into the individual {@link IMEPreference} objects it stands for. */
  getElements(): IMEPreference<'single'>[];

  /** If true, allows inline input for non-Latin text. */
  get inlineInput(): Read<M, boolean>;
  set inlineInput(value: boolean);

  /** If true, use native digits for Arabic languages. */
  get useNativeDigits(): Read<M, boolean>;
  set useNativeDigits(value: boolean);
}
