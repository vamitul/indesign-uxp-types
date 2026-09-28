/**
 * FileNameVariablePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { TextVariable } from './TextVariable';

/**
 * The preferences for a file name variable.
 */
export interface FileNameVariablePreference<M extends Mode = 'single'> extends EventTargetDOMObject<TextVariable, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FileNameVariablePreference';

  /** Resolves the proxy into the individual {@link FileNameVariablePreference} objects it stands for. */
  getElements(): FileNameVariablePreference<'single'>[];

  /** The text that precedes the value of the variable. (Limit: 128 characters). */
  get textBefore(): Read<M, string>;
  set textBefore(value: string);

  /** If true, includes the entire path of the file. */
  get includePath(): Read<M, boolean>;
  set includePath(value: boolean);

  /** If true, includes the file extension. */
  get includeExtension(): Read<M, boolean>;
  set includeExtension(value: boolean);

  /** The text that follows the value of the variable. (Limit: 128 characters). */
  get textAfter(): Read<M, string>;
  set textAfter(value: string);
}
