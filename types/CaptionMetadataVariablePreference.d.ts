/**
 * CaptionMetadataVariablePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { TextVariable } from './TextVariable';

/**
 * The preferences for a caption metadata variable.
 */
export interface CaptionMetadataVariablePreference<M extends Mode = 'single'> extends EventTargetDOMObject<TextVariable, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CaptionMetadataVariablePreference';

  /** Resolves the proxy into the individual {@link CaptionMetadataVariablePreference} objects it stands for. */
  getElements(): CaptionMetadataVariablePreference<'single'>[];

  /** The text that precedes the value of the variable. (Limit: 128 characters). */
  get textBefore(): Read<M, string>;
  set textBefore(value: string);

  /** Name of the metadata provider. */
  get metadataProviderName(): Read<M, string>;
  set metadataProviderName(value: string);

  /** The text that follows the value of the variable. (Limit: 128 characters). */
  get textAfter(): Read<M, string>;
  set textAfter(value: string);
}
