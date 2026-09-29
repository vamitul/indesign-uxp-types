/**
 * PageItemDefault.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { ObjectStyle } from './ObjectStyle';
import type { Preferences } from './Preferences';
import type { StrokeStyle } from './StrokeStyle';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TransparencySetting } from './TransparencySetting';
import type { ArrowHead } from './Enums/ArrowHead';
import type { ArrowHeadAlignmentEnum } from './Enums/ArrowHeadAlignmentEnum';
import type { CornerOptions } from './Enums/CornerOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { StrokeAlignment } from './Enums/StrokeAlignment';

/**
 * Application- or document-level default page-item formatting (fill, stroke, object styles) applied to newly created page items.
 */
export interface PageItemDefault<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PageItemDefault';

  /** Resolves the proxy into the individual {@link PageItemDefault} objects it stands for. */
  getElements(): PageItemDefault<'single'>[];

  /** Opacity, blend mode, and the fill, stroke and content transparency groups applied to new page items — see {@link TransparencySetting}. */
  readonly transparencySettings: Read<M, TransparencySetting>;

  /** Transparency settings for the stroke. */
  readonly strokeTransparencySettings: Read<M, StrokeTransparencySetting>;

  /** Transparency settings for the fill applied to the PageItemDefault. */
  readonly fillTransparencySettings: Read<M, FillTransparencySetting>;

  /** Transparency settings for the content of the PageItemDefault. */
  readonly contentTransparencySettings: Read<M, ContentTransparencySetting>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): Read<M, CornerOptions>;
  set topLeftCornerOption(value: CornerOptions);

  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): Read<M, CornerOptions>;
  set topRightCornerOption(value: CornerOptions);

  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): Read<M, CornerOptions>;
  set bottomLeftCornerOption(value: CornerOptions);

  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): Read<M, CornerOptions>;
  set bottomRightCornerOption(value: CornerOptions);

  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): Read<M, number>;
  set topLeftCornerRadius(value: MeasurementValue);

  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): Read<M, number>;
  set topRightCornerRadius(value: MeasurementValue);

  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): Read<M, number>;
  set bottomLeftCornerRadius(value: MeasurementValue);

  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): Read<M, number>;
  set bottomRightCornerRadius(value: MeasurementValue);

  /** The default graphic object style applied to the PageItemDefault. */
  get appliedGraphicObjectStyle(): Read<M, ObjectStyle>;
  set appliedGraphicObjectStyle(value: ObjectStyle | string);

  /** The default text object style applied to the PageItemDefault. */
  get appliedTextObjectStyle(): Read<M, ObjectStyle>;
  set appliedTextObjectStyle(value: ObjectStyle | string);

  /** The default frame grid object style applied to the PageItemDefault. */
  get appliedGridObjectStyle(): Read<M, ObjectStyle>;
  set appliedGridObjectStyle(value: ObjectStyle | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItemDefault. */
  get fillColor(): Read<M, Swatch>;
  set fillColor(value: Swatch | string);

  /** The percent of tint to use in the PageItemDefault's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): Read<M, number>;
  set fillTint(value: number);

  /** The weight (in points) to apply to the PageItemDefault's stroke. */
  get strokeWeight(): Read<M, number>;
  set strokeWeight(value: MeasurementValue);

  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): Read<M, number>;
  set miterLimit(value: number);

  /** The end shape of an open path. */
  get endCap(): Read<M, EndCap>;
  set endCap(value: EndCap);

  /** The corner join applied to the PageItemDefault. */
  get endJoin(): Read<M, EndJoin>;
  set endJoin(value: EndJoin);

  /** The name of the stroke style to apply. */
  get strokeType(): Read<M, StrokeStyle>;
  set strokeType(value: StrokeStyle | string);

  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): Read<M, ArrowHead>;
  set leftLineEnd(value: ArrowHead);

  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): Read<M, ArrowHead>;
  set rightLineEnd(value: ArrowHead);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItemDefault. */
  get strokeColor(): Read<M, Swatch>;
  set strokeColor(value: Swatch | string);

  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): Read<M, number>;
  set strokeTint(value: number);

  /** The angle of a linear gradient applied to the fill of the PageItemDefault. (Range: -180 to 180) */
  get gradientFillAngle(): Read<M, number>;
  set gradientFillAngle(value: number);

  /** The angle of a linear gradient applied to the stroke of the PageItemDefault. (Range: -180 to 180) */
  get gradientStrokeAngle(): Read<M, number>;
  set gradientStrokeAngle(value: number);

  /** If true, the PageItemDefault's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): Read<M, boolean>;
  set overprintStroke(value: boolean);

  /** If true, the PageItemDefault's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): Read<M, boolean>;
  set overprintFill(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Read<M, Swatch>;
  set gapColor(value: Swatch);

  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): Read<M, number>;
  set gapTint(value: number);

  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): Read<M, boolean>;
  set overprintGap(value: boolean);

  /** The stroke alignment applied to the PageItemDefault. */
  get strokeAlignment(): Read<M, StrokeAlignment>;
  set strokeAlignment(value: StrokeAlignment);

  /** If true, the PageItemDefault does not print. */
  get nonprinting(): Read<M, boolean>;
  set nonprinting(value: boolean);

  /** The arrowhead alignment applied to the PageItemDefault. */
  get arrowHeadAlignment(): Read<M, ArrowHeadAlignmentEnum>;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);

  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): Read<M, number>;
  set leftArrowHeadScale(value: number);

  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): Read<M, number>;
  set rightArrowHeadScale(value: number);

  /**
   * Applies the specified object style.
   * @param using The object style to apply.
   * @param clearingOverrides If true, clears the PageItemDefault's existing attributes before applying the style.
   * @param clearingOverridesThroughRootObjectStyle If true, clears attributes and formatting applied to the PageItemDefault that are not defined in the object style.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): Read<M, void>;

  /** Clear overrides for object style */
  clearObjectStyleOverrides(): Read<M, void>;
}
