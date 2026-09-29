/**
 * ChapterNumberVariablePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { TextVariable } from './TextVariable';
import type { VariableNumberingStyles } from './Enums/VariableNumberingStyles';

/**
 * The preferences for a chapter number variable.
 */
export interface ChapterNumberVariablePreference<M extends Mode = 'single'> extends EventTargetDOMObject<TextVariable, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ChapterNumberVariablePreference';

  /** Resolves the proxy into the individual {@link ChapterNumberVariablePreference} objects it stands for. */
  getElements(): ChapterNumberVariablePreference<'single'>[];

  /** The text that precedes the value of the variable. (Limit: 128 characters). */
  get textBefore(): Read<M, string>;
  set textBefore(value: string);

  /** The numbering style the chapter number is displayed in — see {@link VariableNumberingStyles}. */
  get format(): Read<M, VariableNumberingStyles>;
  set format(value: VariableNumberingStyles);

  /** The text that follows the value of the variable. (Limit: 128 characters). */
  get textAfter(): Read<M, string>;
  set textAfter(value: string);
}
