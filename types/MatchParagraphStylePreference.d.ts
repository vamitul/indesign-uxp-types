/**
 * MatchParagraphStylePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ParagraphStyle } from './ParagraphStyle';
import type { TextVariable } from './TextVariable';
import type { ChangeCaseOptions } from './Enums/ChangeCaseOptions';
import type { SearchStrategies } from './Enums/SearchStrategies';

/**
 * The preferences for a running header/footer (match paragraph style) variable.
 */
export interface MatchParagraphStylePreference<M extends Mode = 'single'> extends EventTargetDOMObject<TextVariable, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MatchParagraphStylePreference';

  /** Resolves the proxy into the individual {@link MatchParagraphStylePreference} objects it stands for. */
  getElements(): MatchParagraphStylePreference<'single'>[];

  /** The text that precedes the value of the variable. (Limit: 128 characters). */
  get textBefore(): Read<M, string>;
  set textBefore(value: string);

  /** The text that follows the value of the variable. (Limit: 128 characters). */
  get textAfter(): Read<M, string>;
  set textAfter(value: string);

  /** The paragraph style applied to the text. */
  get appliedParagraphStyle(): Read<M, ParagraphStyle>;
  set appliedParagraphStyle(value: ParagraphStyle | string);

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
