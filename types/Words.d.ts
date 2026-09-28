/**
 * Words.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { BaseCollection } from './_base/Collections';
import type { Word } from './Word';
import type { Text } from './Text';
import type { TextParent } from './_base/Parents';
import type { Character } from './Character';
import type { InsertionPoint } from './InsertionPoint';
import type { Paragraph } from './Paragraph';

/**
 * A collection of {@link Word} objects. In InDesign, a word is defined as a
 * contiguous run of alphanumeric characters separated by whitespace or punctuation.
 *
 * @collection Word
 */
export interface Words<TParent = TextParent> extends BaseCollection<Word<TParent>, Text, Word<TParent, 'plural'>, Text<TParent, 'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Words';

  /**
   * Returns the contiguous {@link Text} range between two bounds (inclusive).
   *
   * * Unlike {@link everyItem}, this resolves to a **single** `Text` range covering the
   * span — not one object per item. `getElements()` on the result yields a one-element
   * array, so reach the range itself with `.getElements()[0]`.
   * * Either bound may be any text range object, whatever its class: an {@link InsertionPoint}
   * may bound a range of {@link Paragraph}s, a {@link Character} a range of {@link Word}s.
   * @param from The object or index at the beginning of the range.
   * @param to The object or index at the end of the range.
   */
  itemByRange(from: number | Text, to: number | Text): Text<TParent, 'plural'>;
}
