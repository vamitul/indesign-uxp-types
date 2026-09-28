/**
 * NestedStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ParagraphAttributeOwner } from './_base/Parents';
import type { CharacterStyle } from './CharacterStyle';
import type { NestedStyleDelimiters } from './Enums/NestedStyleDelimiters';
import type { NestedStyles } from './NestedStyles';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A single rule within a {@link ParagraphStyle}'s {@link NestedStyles} collection.
 *
 * Automatically applies a {@link CharacterStyle} to the span of text from the
 * start of the paragraph up to (or through) a delimiter, repeated a given
 * number of times.
 */
export interface NestedStyle<M extends Mode = 'single'>
  extends EventTargetDOMObject<ParagraphAttributeOwner, M>,
    IndexedDOMObject<ParagraphAttributeOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NestedStyle';

  /** Resolves the proxy into the individual {@link NestedStyle} objects it stands for. */
  getElements(): NestedStyle<'single'>[];

  /** The character style applied to the nested text. Accepts a {@link CharacterStyle} or its name. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /**
   * The delimiter marking how deep into the paragraph the nested style
   * reaches, as literal text or a {@link NestedStyleDelimiters} enumerator
   * (e.g. any word, any character, a tab).
   */
  get delimiter(): Read<M, string | NestedStyleDelimiters>;
  set delimiter(value: string | NestedStyleDelimiters);

  /** The number of occurrences of {@link delimiter} the nested style reaches to. */
  get repetition(): Read<M, number>;
  set repetition(value: number);

  /**
   * If `true`, the nested style is applied through the last matched
   * delimiter; if `false`, it stops just before it.
   */
  get inclusive(): Read<M, boolean>;
  set inclusive(value: boolean);

  /** Deletes the nested style rule. */
  remove(): Read<M, void>;
}
