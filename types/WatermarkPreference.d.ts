/**
 * WatermarkPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { UIColors } from './Enums/UIColors';
import type { WatermarkHorizontalPositionEnum } from './Enums/WatermarkHorizontalPositionEnum';
import type { WatermarkVerticalPositionEnum } from './Enums/WatermarkVerticalPositionEnum';

/**
 * The watermark drawn over a document's pages — its text, font, colour, opacity,
 * rotation, and where it sits on the page.
 */
export interface WatermarkPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'WatermarkPreference';

  /** Resolves the proxy into the individual {@link WatermarkPreference} objects it stands for. */
  getElements(): WatermarkPreference<'single'>[];

  /** If true, the watermark is shown. */
  get watermarkVisibility(): Read<M, boolean>;
  set watermarkVisibility(value: boolean);

  /** If true, the watermark prints with the document. */
  get watermarkDoPrint(): Read<M, boolean>;
  set watermarkDoPrint(value: boolean);

  /** If true, draws the watermark behind the page content rather than in front of it. */
  get watermarkDrawInBack(): Read<M, boolean>;
  set watermarkDrawInBack(value: boolean);

  /** The watermark's text content. */
  get watermarkText(): Read<M, string>;
  set watermarkText(value: string);

  /** The font family used for the watermark text. */
  get watermarkFontFamily(): Read<M, string>;
  set watermarkFontFamily(value: string);

  /** The font style used for the watermark text. */
  get watermarkFontStyle(): Read<M, string>;
  set watermarkFontStyle(value: string);

  /** The point size of the watermark text. */
  get watermarkFontPointSize(): Read<M, number>;
  set watermarkFontPointSize(value: number);

  /** The color of the watermark text, as an `[R, G, B]` triple or a named {@link UIColors} value. */
  get watermarkFontColor(): Read<M, number[] | UIColors>;
  set watermarkFontColor(value: number[] | UIColors);

  /** The watermark's opacity, as a percentage. (Range: 0 to 100). */
  get watermarkOpacity(): Read<M, number>;
  set watermarkOpacity(value: number);

  /** The rotation angle of the watermark text. */
  get watermarkRotation(): Read<M, number>;
  set watermarkRotation(value: number);

  /** The watermark's horizontal position — left, center, or right — see {@link WatermarkHorizontalPositionEnum}. */
  get watermarkHorizontalPosition(): Read<M, WatermarkHorizontalPositionEnum>;
  set watermarkHorizontalPosition(value: WatermarkHorizontalPositionEnum);

  /** The horizontal offset of the watermark from {@link watermarkHorizontalPosition}. */
  get watermarkHorizontalOffset(): Read<M, number>;
  set watermarkHorizontalOffset(value: MeasurementValue);

  /** The watermark's vertical position — top, center, or bottom — see {@link WatermarkVerticalPositionEnum}. */
  get watermarkVerticalPosition(): Read<M, WatermarkVerticalPositionEnum>;
  set watermarkVerticalPosition(value: WatermarkVerticalPositionEnum);

  /** The vertical offset of the watermark from {@link watermarkVerticalPosition}. */
  get watermarkVerticalOffset(): Read<M, number>;
  set watermarkVerticalOffset(value: MeasurementValue);
}
