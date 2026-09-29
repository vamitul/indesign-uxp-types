/**
 * AutoCorrectPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Auto-correct preferences.
 */
export interface AutoCorrectPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AutoCorrectPreference';

  /** Resolves the proxy into the individual {@link AutoCorrectPreference} objects it stands for. */
  getElements(): AutoCorrectPreference<'single'>[];

  /** If true, automatically corrects misspelled words listed in the auto-correct table. */
  get autoCorrect(): Read<M, boolean>;
  set autoCorrect(value: boolean);

  /** If true, automatically corrects capitalization errors listed in the auto-correct table. */
  get autoCorrectCapitalizationErrors(): Read<M, boolean>;
  set autoCorrectCapitalizationErrors(value: boolean);
}
