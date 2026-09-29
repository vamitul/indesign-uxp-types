/**
 * NestedLineStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ParagraphAttributeOwner } from './_base/Parents';
import type { CharacterStyle } from './CharacterStyle';
import type { NestedLineStyles } from './NestedLineStyles';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A single rule within a {@link ParagraphStyle}'s {@link NestedLineStyles}
 * collection, automatically applying a {@link CharacterStyle} to a run of
 * whole lines, optionally cycling back after a number of line-style rules.
 */
export interface NestedLineStyle<M extends Mode = 'single'>
  extends EventTargetDOMObject<ParagraphAttributeOwner, M>,
    IndexedDOMObject<ParagraphAttributeOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NestedLineStyle';

  /** Resolves the proxy into the individual {@link NestedLineStyle} objects it stands for. */
  getElements(): NestedLineStyle<'single'>[];

  /** The character style applied to the lines. Accepts a {@link CharacterStyle} or its name. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /** The number of lines the nested style applies to. */
  get lineCount(): Read<M, number>;
  set lineCount(value: number);

  /**
   * The number of preceding line-style rules to back up before repeating
   * this rule's cycle.
   */
  get repeatLast(): Read<M, number>;
  set repeatLast(value: number);

  /** Deletes the nested line style rule. */
  remove(): Read<M, void>;
}
