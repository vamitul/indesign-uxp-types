/**
 * Grammar.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';

/**
 * Grammar checking, on a {@link Document} and on every text object: {@link Story},
 * {@link XmlStory}, {@link Text} and its ranges.
 *
 * Grammar is checked a story at a time. Called on any text object, these methods act on
 * the whole story that contains it, not only on the range itself; called on a document,
 * they act on every story in it.
 *
 * The issues come back as a JSON string holding an array of issue objects. Each issue has
 * `storyId`, `startIndex`, `length`, `foundText`, `message`, `ruleName`, `kind`,
 * `suggestions` (an array of strings), `removal` (a boolean), `highlightStart`,
 * `highlightLength` and `resultText`.
 */
export interface GrammarCheckable<M extends Mode = 'single'> {
  /**
   * Checks the grammar of this text's story, or of every story on a document, and returns
   * the issues found as a JSON string. The result also becomes the cached issue list that
   * {@link getGrammarIssues}, {@link applyGrammarFix} and {@link applyAllGrammarFixes} work from.
   *
   * @since 22.0
   */
  checkGrammar(): Read<M, string>;

  /**
   * Returns the grammar issues currently cached for this text's story, or for every story on
   * a document, as the same JSON string {@link checkGrammar} returns, without checking again.
   * The cache holds what the last check, or the background checker, produced.
   *
   * @since 22.0
   */
  getGrammarIssues(): Read<M, string>;

  /**
   * Queues this text's story, or every story on a document, for the background grammar
   * checker, and returns at once. Read the results later with {@link getGrammarIssues}.
   *
   * Returns the number of stories queued.
   *
   * @since 22.0
   */
  requestGrammarCheck(): Read<M, number>;

  /**
   * Applies a suggestion for one cached grammar issue.
   *
   * Returns `1` when the fix was applied, and `0` when it was not: the story has not been
   * checked, no cached issue starts at `startIndex`, or `suggestionIndex` is out of range.
   *
   * @param startIndex The issue's `startIndex`, as {@link checkGrammar} or {@link getGrammarIssues} report it.
   * @param suggestionIndex Which of the issue's `suggestions` to apply, counting from `0`.
   * @since 22.0
   */
  applyGrammarFix(startIndex: number, suggestionIndex?: number): Read<M, number>;

  /**
   * Applies the first suggestion of every fixable cached issue in this text's story, or in
   * every story on a document, skipping issues whose spans overlap.
   *
   * Returns the number of fixes applied: `0` when the story has not been checked.
   *
   * @since 22.0
   */
  applyAllGrammarFixes(): Read<M, number>;
}
