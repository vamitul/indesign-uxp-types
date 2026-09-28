/**
 * GraphicAttributes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { ArrowHead } from '../Enums/ArrowHead';
import type { ArrowHeadAlignmentEnum } from '../Enums/ArrowHeadAlignmentEnum';
import type { CornerOptions } from '../Enums/CornerOptions';
import type { EndCap } from '../Enums/EndCap';
import type { EndJoin } from '../Enums/EndJoin';
import type { StrokeAlignment } from '../Enums/StrokeAlignment';
import type { StrokeCornerAdjustment } from '../Enums/StrokeCornerAdjustment';
import type { StrokeStyle } from '../StrokeStyle';
import type { Swatch } from '../Swatch';
import type { MeasurementValue } from './Types';
import type { ObjectStyle } from '../ObjectStyle';

/**
 * Stroke, fill, gradient, overprint, corner-effect, and arrowhead attributes of
 * any drawable object — also the attribute set carried by an {@link ObjectStyle}.
 *
 * Object-or-name properties (`fillColor`, `strokeColor`, `strokeType`) accept a
 * swatch or stroke style object, or its name.
 */
export interface GraphicAttributesBase<M extends Mode = 'single'> {
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): Read<M, Swatch>;
  set fillColor(value: Swatch | string);

  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): Read<M, number>;
  set fillTint(value: number);

  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): Read<M, boolean>;
  set overprintFill(value: boolean);

  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): Read<M, number>;
  set strokeWeight(value: MeasurementValue);

  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): Read<M, number>;
  set miterLimit(value: number);

  /** The end shape of an open path. */
  get endCap(): Read<M, EndCap>;
  set endCap(value: EndCap);

  /** The corner join applied to the PageItem. */
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

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): Read<M, Swatch>;
  set strokeColor(value: Swatch | string);

  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): Read<M, number>;
  set strokeTint(value: number);

  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): Read<M, number>;
  set gradientFillAngle(value: number);

  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): Read<M, number>;
  set gradientStrokeAngle(value: number);

  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): Read<M, boolean>;
  set overprintStroke(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Read<M, Swatch>;
  set gapColor(value: Swatch);

  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): Read<M, number>;
  set gapTint(value: number);

  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): Read<M, boolean>;
  set overprintGap(value: boolean);

  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): Read<M, StrokeAlignment>;
  set strokeAlignment(value: StrokeAlignment);

  /** If true, the PageItem does not print. */
  get nonprinting(): Read<M, boolean>;
  set nonprinting(value: boolean);

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

  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): Read<M, ArrowHeadAlignmentEnum>;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);

  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): Read<M, number>;
  set leftArrowHeadScale(value: number);

  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): Read<M, number>;
  set rightArrowHeadScale(value: number);

}
/**
 * Where a drawn object's stroke and gradient actually sit: the gradient's start point and
 * length, the dash-and-gap spacing along the stroke.
 *
 * An {@link ObjectStyle} records that a fill *is* a gradient, but has nowhere to put it, so
 * these members belong to drawn objects only.
 */
export interface GraphicAttributes {
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): number;
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): number;
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): EndCap;
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): EndJoin;
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): StrokeStyle;
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): ArrowHead;
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): ArrowHead;
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): number;
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): boolean;
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Swatch;
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): number;
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): boolean;
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): StrokeAlignment;
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): boolean;
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): CornerOptions;
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): CornerOptions;
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): CornerOptions;
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): CornerOptions;
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): number;
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): number;
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): number;
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): number;
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): ArrowHeadAlignmentEnum;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): number;
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): number;
  set rightArrowHeadScale(value: number);
  /** The corner adjustment applied to the PageItem. */
  get strokeCornerAdjustment(): StrokeCornerAdjustment;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): number[];
  set strokeDashAndGap(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the PageItem, in the format [x, y]. */
  get gradientFillStart(): number[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the PageItem. */
  get gradientFillLength(): number;
  set gradientFillLength(value: MeasurementValue);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the PageItem, in the format [x, y]. */
  get gradientStrokeStart(): number[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the PageItem. */
  get gradientStrokeLength(): number;
  set gradientStrokeLength(value: MeasurementValue);
}


/**
 * The broadcast proxy for {@link GraphicAttributes} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link GraphicAttributes} there.
 */
export interface GraphicAttributesPlural {
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): (number)[];
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): (EndCap)[];
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): (EndJoin)[];
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): (StrokeStyle)[];
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): (ArrowHead)[];
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): (ArrowHead)[];
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): (number)[];
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): (boolean)[];
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): (Swatch)[];
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): (number)[];
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): (boolean)[];
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): (StrokeAlignment)[];
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): (boolean)[];
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): (CornerOptions)[];
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): (CornerOptions)[];
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): (CornerOptions)[];
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): (CornerOptions)[];
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): (number)[];
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): (number)[];
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): (number)[];
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): (number)[];
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): (ArrowHeadAlignmentEnum)[];
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): (number)[];
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): (number)[];
  set rightArrowHeadScale(value: number);
  /** The corner adjustment applied to the PageItem. */
  get strokeCornerAdjustment(): (StrokeCornerAdjustment)[];
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): (number[])[];
  set strokeDashAndGap(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the PageItem, in the format [x, y]. */
  get gradientFillStart(): (number[])[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the PageItem. */
  get gradientFillLength(): (number)[];
  set gradientFillLength(value: MeasurementValue);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the PageItem, in the format [x, y]. */
  get gradientStrokeStart(): (number[])[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the PageItem. */
  get gradientStrokeLength(): (number)[];
  set gradientStrokeLength(value: MeasurementValue);
}
