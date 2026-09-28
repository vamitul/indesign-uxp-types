/**
 * FrameFittingOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';
import type { ObjectStyle } from './ObjectStyle';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { Rectangle } from './Rectangle';
import type { AnchorPoint } from './Enums/AnchorPoint';
import type { EmptyFrameFittingOptions } from './Enums/EmptyFrameFittingOptions';

/**
 * Options for fitting placed or pasted content in a frame.
 */
export interface FrameFittingOption<M extends Mode = 'single'> extends EventTargetDOMObject<ObjectStyle | Oval | Rectangle | Polygon | Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FrameFittingOption';

  /** Resolves the proxy into the individual {@link FrameFittingOption} objects it stands for. */
  getElements(): FrameFittingOption<'single'>[];

  /** If true, the last saved fitting options will be applied to the contents of a frame when it is resized. */
  get autoFit(): Read<M, boolean>;
  set autoFit(value: boolean);

  /** The amount in measurement units to crop the left edge of a graphic. */
  get leftCrop(): Read<M, number>;
  set leftCrop(value: MeasurementValue);

  /** The amount in measurement units to crop the top edge of a graphic. */
  get topCrop(): Read<M, number>;
  set topCrop(value: MeasurementValue);

  /** The amount in measurement units to crop the right edge of a graphic. */
  get rightCrop(): Read<M, number>;
  set rightCrop(value: MeasurementValue);

  /** The amount in measurement units to crop the bottom edge of a graphic. */
  get bottomCrop(): Read<M, number>;
  set bottomCrop(value: MeasurementValue);

  /** The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application. */
  get fittingOnEmptyFrame(): Read<M, EmptyFrameFittingOptions>;
  set fittingOnEmptyFrame(value: EmptyFrameFittingOptions);

  /** The anchor point content aligns to when fitted into the frame. */
  get fittingAlignment(): Read<M, AnchorPoint>;
  set fittingAlignment(value: AnchorPoint);
}
