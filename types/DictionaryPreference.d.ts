/**
 * DictionaryPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { ComposeUsing } from './Enums/ComposeUsing';

/**
 * User dictionary preferences.
 */
export interface DictionaryPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DictionaryPreference';

  /** Resolves the proxy into the individual {@link DictionaryPreference} objects it stands for. */
  getElements(): DictionaryPreference<'single'>[];

  /** The hyphenation exception list to use when composing text. */
  get composition(): Read<M, ComposeUsing>;
  set composition(value: ComposeUsing);

  /** If true, merges the spelling and hyphenation exceptions lists in the external user dictionary with the lists stored within the document. */
  get mergeUserDictionary(): Read<M, boolean>;
  set mergeUserDictionary(value: boolean);

  /** If true, recomposes all stories when the compose using settings are changed, or when words are added to or removed from the user dictionary. */
  get recomposeWhenChanged(): Read<M, boolean>;
  set recomposeWhenChanged(value: boolean);
}
