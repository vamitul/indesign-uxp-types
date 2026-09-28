/**
 * TabStop.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ParagraphAttributeOwner } from './_base/Parents';
import type { TabStopAlignment } from './Enums/TabStopAlignment';
import type { MeasurementValue } from './_base/Types';
import type { Paragraph } from './Paragraph';
import type { ParagraphStyle } from './ParagraphStyle';
import type { TabStops } from './TabStops';

/**
 * A single tab stop within a {@link Paragraph} or {@link ParagraphStyle},
 * held in a {@link TabStops} collection. Governs where the text following a
 * tab character aligns and what leader character fills the gap before it.
 */
export interface TabStop<M extends Mode = 'single'>
  extends EventTargetDOMObject<ParagraphAttributeOwner, M>,
    IndexedDOMObject<ParagraphAttributeOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TabStop';

  /** Resolves the proxy into the individual {@link TabStop} objects it stands for. */
  getElements(): TabStop<'single'>[];

  /** How text aligns to the tab stop. */
  get alignment(): Read<M, TabStopAlignment>;
  set alignment(value: TabStopAlignment);

  /**
   * The character text aligns to. Applies only when {@link alignment} is
   * {@link TabStopAlignment.CHARACTER_ALIGN}.
   */
  get alignmentCharacter(): Read<M, string>;
  set alignmentCharacter(value: string);

  /** The character repeated to fill the gap before the tab stop, if any. */
  get leader(): Read<M, string>;
  set leader(value: string);

  /** The position of the tab stop, measured from the left indent. */
  get position(): Read<M, number>;
  set position(value: MeasurementValue);

  /** Deletes the tab stop. */
  remove(): Read<M, void>;
}
