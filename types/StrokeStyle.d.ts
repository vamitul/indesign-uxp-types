/**
 * StrokeStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { DashedStrokeStyle } from './DashedStrokeStyle';
import type { DottedStrokeStyle } from './DottedStrokeStyle';
import type { StripedStrokeStyle } from './StripedStrokeStyle';

/**
 * The base of a custom stroke pattern — {@link DashedStrokeStyle},
 * {@link DottedStrokeStyle}, or {@link StripedStrokeStyle} — applicable via
 * `strokeType` on any drawable object.
 */
export interface StrokeStyle<M extends Mode = 'single'>
  extends EventTargetDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name — reports the specific pattern, such as `'DashedStrokeStyle'` when this is a {@link DashedStrokeStyle}. */
  readonly constructorName: 'StrokeStyle' | 'DashedStrokeStyle' | 'DottedStrokeStyle' | 'StripedStrokeStyle';

  /** Resolves the proxy into the individual {@link StrokeStyle} objects it stands for. */
  getElements(): StrokeStyle<'single'>[];

  /** The unique ID of the stroke style, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The kind of stroke pattern — dashed, dotted, or striped. */
  readonly strokeStyleType: Read<M, string>;

  /** Duplicates the stroke style. */
  duplicate(): Read<M, StrokeStyle>;

  /**
   * Deletes the stroke style.
   * @param replacingWith The stroke style (or its name) to apply in place of the deleted style, wherever it was in use.
   */
  remove(replacingWith?: StrokeStyle | string): Read<M, void>;
}
