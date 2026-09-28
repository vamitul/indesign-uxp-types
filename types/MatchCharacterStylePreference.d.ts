/**
 * MatchCharacterStylePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { CharacterStyle } from './CharacterStyle';
import type { TextVariable } from './TextVariable';
import type { ChangeCaseOptions } from './Enums/ChangeCaseOptions';
import type { SearchStrategies } from './Enums/SearchStrategies';

/**
 * The preferences for a running header/footer (match character style) variable.
 */
export interface MatchCharacterStylePreference<M extends Mode = 'single'> extends EventTargetDOMObject<TextVariable, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MatchCharacterStylePreference';

  /** Resolves the proxy into the individual {@link MatchCharacterStylePreference} objects it stands for. */
  getElements(): MatchCharacterStylePreference<'single'>[];

  /** The text that precedes the value of the variable. (Limit: 128 characters). */
  get textBefore(): Read<M, string>;
  set textBefore(value: string);

  /** The text that follows the value of the variable. (Limit: 128 characters). */
  get textAfter(): Read<M, string>;
  set textAfter(value: string);

  /** The character style applied to the text. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /** The starting point and direction in which the search will be conducted. */
  get searchStrategy(): Read<M, SearchStrategies>;
  set searchStrategy(value: SearchStrategies);

  /** The capitalization applied to the matched text — see {@link ChangeCaseOptions}. */
  get changeCase(): Read<M, ChangeCaseOptions>;
  set changeCase(value: ChangeCaseOptions);

  /** If true, deletes end punctuation from the matched text. */
  get deleteEndPunctuation(): Read<M, boolean>;
  set deleteEndPunctuation(value: boolean);
}
