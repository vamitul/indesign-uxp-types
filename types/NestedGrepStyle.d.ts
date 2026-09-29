/**
 * NestedGrepStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ParagraphAttributeOwner } from './_base/Parents';
import type { CharacterStyle } from './CharacterStyle';
import type { NestedGrepStyles } from './NestedGrepStyles';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A single rule within a {@link ParagraphStyle}'s {@link NestedGrepStyles}
 * collection, automatically applying a {@link CharacterStyle} to every
 * substring matching a GREP regular expression.
 */
export interface NestedGrepStyle<M extends Mode = 'single'>
  extends EventTargetDOMObject<ParagraphAttributeOwner, M>,
    IndexedDOMObject<ParagraphAttributeOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NestedGrepStyle';

  /** Resolves the proxy into the individual {@link NestedGrepStyle} objects it stands for. */
  getElements(): NestedGrepStyle<'single'>[];

  /** The character style applied to matching text. Accepts a {@link CharacterStyle} or its name. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /** The GREP regular expression that selects the text to style. */
  get grepExpression(): Read<M, string>;
  set grepExpression(value: string);

  /** Deletes the nested GREP style rule. */
  remove(): Read<M, void>;
}
