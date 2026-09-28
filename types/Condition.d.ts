/**
 * Condition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { ConditionIndicatorMethod } from './Enums/ConditionIndicatorMethod';
import type { ConditionUnderlineIndicatorAppearance } from './Enums/ConditionUnderlineIndicatorAppearance';
import type { UIColors } from './Enums/UIColors';

/**
 * A condition for conditional text — a named tag that can be applied to text
 * ranges so they can be shown or hidden together, as either visible published
 * content or an editing-time annotation (indicated by {@link indicatorColor}).
 */
export interface Condition<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Condition';

  /** Resolves the proxy into the individual {@link Condition} objects it stands for. */
  getElements(): Condition<'single'>[];

  /** The unique ID of the condition, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /**
   * The color used to mark text tagged with this condition. Either an
   * `[R, G, B]` triple (each `0`–`255`) or a named {@link UIColors} value.
   */
  get indicatorColor(): Read<M, [number, number, number] | UIColors>;
  set indicatorColor(value: [number, number, number] | UIColors);

  /** How the condition indicator is drawn on tagged text — underline, highlight, and so on. */
  get indicatorMethod(): Read<M, ConditionIndicatorMethod>;
  set indicatorMethod(value: ConditionIndicatorMethod);

  /** The appearance of the underline indicator, when {@link indicatorMethod} uses one. */
  get underlineIndicatorAppearance(): Read<M, ConditionUnderlineIndicatorAppearance>;
  set underlineIndicatorAppearance(value: ConditionUnderlineIndicatorAppearance);

  /** Whether text tagged with this condition is currently shown in the document. */
  get visible(): Read<M, boolean>;
  set visible(value: boolean);

  /**
   * Deletes the condition, removing its tag from every text range it was applied to.
   * @param replacingWith A condition (or its name) to apply to the affected text instead. If omitted, no replacement condition is applied.
   */
  remove(replacingWith?: Condition | string): Read<M, void>;
}
