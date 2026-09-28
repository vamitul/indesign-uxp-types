/**
 * CellStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { CellStyleGroup } from './CellStyleGroup';
import type { CellStyleAttributes } from './_base/TableAttributes';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Cell } from './Cell';
import type { CellStyles } from './CellStyles';
import type { FirstBaseline } from './Enums/FirstBaseline';
import type { NothingEnum } from './Enums/NothingEnum';
import type { ParagraphStyle } from './ParagraphStyle';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { MeasurementValue } from './_base/Types';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { VerticalJustification } from './Enums/VerticalJustification';
/**
 * A named cell style definition, held in a document's or the application's {@link CellStyles} collection (optionally nested inside a {@link CellStyleGroup}).
 *
 * Holds only the edge, inset, and fill attributes explicitly set on it, rather than
 * every attribute a live {@link Cell} carries. Reading an attribute that was never set
 * returns `NothingEnum.NOTHING` rather than a live default.
 */
export interface CellStyle {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document | Application | CellStyleGroup;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<CellStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<CellStyle, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): string;
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): string;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The left inset of the graphic cell. */
  get graphicLeftInset(): number | NothingEnum.NOTHING;
  set graphicLeftInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The top inset of the graphic cell. */
  get graphicTopInset(): number | NothingEnum.NOTHING;
  set graphicTopInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right inset of the graphic cell. */
  get graphicRightInset(): number | NothingEnum.NOTHING;
  set graphicRightInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): number | NothingEnum.NOTHING;
  set graphicBottomInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): boolean | NothingEnum.NOTHING;
  set clipContentToGraphicCell(value: boolean | NothingEnum.NOTHING);
  /** The top inset of the text cell. */
  get textTopInset(): number | NothingEnum.NOTHING;
  set textTopInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The left inset of the text cell. */
  get textLeftInset(): number | NothingEnum.NOTHING;
  set textLeftInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom inset of the text cell. */
  get textBottomInset(): number | NothingEnum.NOTHING;
  set textBottomInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right inset of the text cell. */
  get textRightInset(): number | NothingEnum.NOTHING;
  set textRightInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): boolean | NothingEnum.NOTHING;
  set clipContentToTextCell(value: boolean | NothingEnum.NOTHING);
  /** The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. */
  get gradientFillLength(): number | NothingEnum.NOTHING;
  set gradientFillLength(value: number | NothingEnum.NOTHING);
  /** The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). */
  get gradientFillAngle(): number | NothingEnum.NOTHING;
  set gradientFillAngle(value: number | NothingEnum.NOTHING);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. */
  get gradientFillStart(): number[] | NothingEnum.NOTHING;
  set gradientFillStart(value: number[] | NothingEnum.NOTHING);
  /** The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. */
  get topInset(): number | NothingEnum.NOTHING;
  set topInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. */
  get leftInset(): number | NothingEnum.NOTHING;
  set leftInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. */
  get bottomInset(): number | NothingEnum.NOTHING;
  set bottomInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. */
  get rightInset(): number | NothingEnum.NOTHING;
  set rightInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. */
  get fillColor(): Swatch | null;
  set fillColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the fill of the object. */
  get fillTint(): number | NothingEnum.NOTHING;
  set fillTint(value: number | NothingEnum.NOTHING);
  /** If true, the fill of the object will overprint. */
  get overprintFill(): boolean | NothingEnum.NOTHING;
  set overprintFill(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a diagonal line starting from the top left. */
  get topLeftDiagonalLine(): boolean | NothingEnum.NOTHING;
  set topLeftDiagonalLine(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a diagonal line starting from the top right. */
  get topRightDiagonalLine(): boolean | NothingEnum.NOTHING;
  set topRightDiagonalLine(value: boolean | NothingEnum.NOTHING);
  /** If true, draws the diagonal line in front of cell contents. */
  get diagonalLineInFront(): boolean | NothingEnum.NOTHING;
  set diagonalLineInFront(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the cell's diagonal line(s) — see {@link topLeftDiagonalLine} and {@link topRightDiagonalLine}. */
  get diagonalLineStrokeWeight(): number | NothingEnum.NOTHING;
  set diagonalLineStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the diagonal line(s). */
  get diagonalLineStrokeType(): StrokeStyle | null;
  set diagonalLineStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The diagonal line color, specified as a swatch. */
  get diagonalLineStrokeColor(): Swatch | null;
  set diagonalLineStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The diagonal line tint (as a percentage). (Range: 0 to 100). */
  get diagonalLineStrokeTint(): number | NothingEnum.NOTHING;
  set diagonalLineStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the diagonal line stroke will overprint. */
  get diagonalLineStrokeOverprint(): boolean | NothingEnum.NOTHING;
  set diagonalLineStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapColor(): Swatch | null;
  set diagonalLineStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapTint(): number | NothingEnum.NOTHING;
  set diagonalLineStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapOverprint(): boolean | NothingEnum.NOTHING;
  set diagonalLineStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. */
  get clipContentToCell(): boolean | NothingEnum.NOTHING;
  set clipContentToCell(value: boolean | NothingEnum.NOTHING);
  /** How the distance between the first line's baseline and the cell's top inset is measured. See {@link FirstBaseline}. */
  get firstBaselineOffset(): FirstBaseline | NothingEnum.NOTHING;
  set firstBaselineOffset(value: FirstBaseline | NothingEnum.NOTHING);
  /** The vertical alignment of cell. */
  get verticalJustification(): VerticalJustification | NothingEnum.NOTHING;
  set verticalJustification(value: VerticalJustification | NothingEnum.NOTHING);
  /** The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. */
  get paragraphSpacingLimit(): number | NothingEnum.NOTHING;
  set paragraphSpacingLimit(value: MeasurementValue | NothingEnum.NOTHING);
  /** The space between the baseline of the text and the top inset of the frame or cell. */
  get minimumFirstBaselineOffset(): number | NothingEnum.NOTHING;
  set minimumFirstBaselineOffset(value: number | NothingEnum.NOTHING);
  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): number | NothingEnum.NOTHING;
  set rotationAngle(value: number | NothingEnum.NOTHING);
  /** The stroke weight of the left edge border stroke. */
  get leftEdgeStrokeWeight(): number | NothingEnum.NOTHING;
  set leftEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the left edge. */
  get leftEdgeStrokeType(): StrokeStyle | null;
  set leftEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. */
  get leftEdgeStrokeColor(): Swatch | null;
  set leftEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). */
  get leftEdgeStrokeTint(): number | NothingEnum.NOTHING;
  set leftEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the left edge border stroke will overprint. */
  get leftEdgeStrokeOverprint(): boolean | NothingEnum.NOTHING;
  set leftEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapColor(): Swatch | null;
  set leftEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapTint(): number | NothingEnum.NOTHING;
  set leftEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapOverprint(): boolean | NothingEnum.NOTHING;
  set leftEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the top edge border stroke. */
  get topEdgeStrokeWeight(): number | NothingEnum.NOTHING;
  set topEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the top edge. */
  get topEdgeStrokeType(): StrokeStyle | null;
  set topEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. */
  get topEdgeStrokeColor(): Swatch | null;
  set topEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). */
  get topEdgeStrokeTint(): number | NothingEnum.NOTHING;
  set topEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the top edge border stroke will overprint. */
  get topEdgeStrokeOverprint(): boolean | NothingEnum.NOTHING;
  set topEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapColor(): Swatch | null;
  set topEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapTint(): number | NothingEnum.NOTHING;
  set topEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapOverprint(): boolean | NothingEnum.NOTHING;
  set topEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the right edge border stroke. */
  get rightEdgeStrokeWeight(): number | NothingEnum.NOTHING;
  set rightEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the right edge. */
  get rightEdgeStrokeType(): StrokeStyle | null;
  set rightEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The color, specified as a swatch, of the right edge border stroke. */
  get rightEdgeStrokeColor(): Swatch | null;
  set rightEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). */
  get rightEdgeStrokeTint(): number | NothingEnum.NOTHING;
  set rightEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the right edge border stroke will overprint. */
  get rightEdgeStrokeOverprint(): boolean | NothingEnum.NOTHING;
  set rightEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapColor(): Swatch | null;
  set rightEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapTint(): number | NothingEnum.NOTHING;
  set rightEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapOverprint(): boolean | NothingEnum.NOTHING;
  set rightEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the bottom edge border stroke. */
  get bottomEdgeStrokeWeight(): number | NothingEnum.NOTHING;
  set bottomEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the bottom edge. */
  get bottomEdgeStrokeType(): StrokeStyle | null;
  set bottomEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. */
  get bottomEdgeStrokeColor(): Swatch | null;
  set bottomEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the bottom edge border stroke. */
  get bottomEdgeStrokeTint(): number | NothingEnum.NOTHING;
  set bottomEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the bottom edge border stroke will overprint. */
  get bottomEdgeStrokeOverprint(): boolean | NothingEnum.NOTHING;
  set bottomEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapColor(): Swatch | null;
  set bottomEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapTint(): number | NothingEnum.NOTHING;
  set bottomEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapOverprint(): boolean | NothingEnum.NOTHING;
  set bottomEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /**
   * The {@link ParagraphStyle} the cell style applies to text in the cell, or
   * {@link NothingEnum.NOTHING} when the style leaves it unset.
   *
   * A style-definition member only: a live {@link Cell} carries no paragraph
   * style of its own, its text ranges do.
   */
  get appliedParagraphStyle(): ParagraphStyle | NothingEnum.NOTHING;
  set appliedParagraphStyle(value: ParagraphStyle | string | NothingEnum.NOTHING);
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyle';
  /** Resolves the proxy into the individual {@link CellStyle} objects it stands for. */
  getElements(): CellStyle[];
  /** The unique ID of the cell style, stable across saves and reopens. */
  readonly id: number;
  /** The name of the cell style. */
  get name(): string;
  set name(value: string);
  /** The style this style is based on. Accepts a {@link CellStyle} or its name. */
  get basedOn(): CellStyle | string;
  set basedOn(value: CellStyle | string);
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any cells currently tagged with this style. Cells are left unstyled if omitted.
   */
  remove(replacingWith?: CellStyle): void;
  /** Duplicates the cell style. */
  duplicate(): CellStyle;
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): CellStyle;
}


/**
 * The broadcast proxy for {@link CellStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link CellStyle} there.
 */
export interface CellStylePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document | Application | CellStyleGroup)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<CellStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<CellStylePlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): (string)[];
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): (string)[];
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The left inset of the graphic cell. */
  get graphicLeftInset(): (number | NothingEnum.NOTHING)[];
  set graphicLeftInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The top inset of the graphic cell. */
  get graphicTopInset(): (number | NothingEnum.NOTHING)[];
  set graphicTopInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right inset of the graphic cell. */
  get graphicRightInset(): (number | NothingEnum.NOTHING)[];
  set graphicRightInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): (number | NothingEnum.NOTHING)[];
  set graphicBottomInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): (boolean | NothingEnum.NOTHING)[];
  set clipContentToGraphicCell(value: boolean | NothingEnum.NOTHING);
  /** The top inset of the text cell. */
  get textTopInset(): (number | NothingEnum.NOTHING)[];
  set textTopInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The left inset of the text cell. */
  get textLeftInset(): (number | NothingEnum.NOTHING)[];
  set textLeftInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom inset of the text cell. */
  get textBottomInset(): (number | NothingEnum.NOTHING)[];
  set textBottomInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right inset of the text cell. */
  get textRightInset(): (number | NothingEnum.NOTHING)[];
  set textRightInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): (boolean | NothingEnum.NOTHING)[];
  set clipContentToTextCell(value: boolean | NothingEnum.NOTHING);
  /** The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. */
  get gradientFillLength(): (number | NothingEnum.NOTHING)[];
  set gradientFillLength(value: number | NothingEnum.NOTHING);
  /** The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). */
  get gradientFillAngle(): (number | NothingEnum.NOTHING)[];
  set gradientFillAngle(value: number | NothingEnum.NOTHING);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. */
  get gradientFillStart(): (number[] | NothingEnum.NOTHING)[];
  set gradientFillStart(value: number[] | NothingEnum.NOTHING);
  /** The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. */
  get topInset(): (number | NothingEnum.NOTHING)[];
  set topInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. */
  get leftInset(): (number | NothingEnum.NOTHING)[];
  set leftInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. */
  get bottomInset(): (number | NothingEnum.NOTHING)[];
  set bottomInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. */
  get rightInset(): (number | NothingEnum.NOTHING)[];
  set rightInset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. */
  get fillColor(): (Swatch | null)[];
  set fillColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the fill of the object. */
  get fillTint(): (number | NothingEnum.NOTHING)[];
  set fillTint(value: number | NothingEnum.NOTHING);
  /** If true, the fill of the object will overprint. */
  get overprintFill(): (boolean | NothingEnum.NOTHING)[];
  set overprintFill(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a diagonal line starting from the top left. */
  get topLeftDiagonalLine(): (boolean | NothingEnum.NOTHING)[];
  set topLeftDiagonalLine(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a diagonal line starting from the top right. */
  get topRightDiagonalLine(): (boolean | NothingEnum.NOTHING)[];
  set topRightDiagonalLine(value: boolean | NothingEnum.NOTHING);
  /** If true, draws the diagonal line in front of cell contents. */
  get diagonalLineInFront(): (boolean | NothingEnum.NOTHING)[];
  set diagonalLineInFront(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the cell's diagonal line(s) — see {@link topLeftDiagonalLine} and {@link topRightDiagonalLine}. */
  get diagonalLineStrokeWeight(): (number | NothingEnum.NOTHING)[];
  set diagonalLineStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the diagonal line(s). */
  get diagonalLineStrokeType(): (StrokeStyle | null)[];
  set diagonalLineStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The diagonal line color, specified as a swatch. */
  get diagonalLineStrokeColor(): (Swatch | null)[];
  set diagonalLineStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The diagonal line tint (as a percentage). (Range: 0 to 100). */
  get diagonalLineStrokeTint(): (number | NothingEnum.NOTHING)[];
  set diagonalLineStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the diagonal line stroke will overprint. */
  get diagonalLineStrokeOverprint(): (boolean | NothingEnum.NOTHING)[];
  set diagonalLineStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapColor(): (Swatch | null)[];
  set diagonalLineStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapTint(): (number | NothingEnum.NOTHING)[];
  set diagonalLineStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set diagonalLineStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. */
  get clipContentToCell(): (boolean | NothingEnum.NOTHING)[];
  set clipContentToCell(value: boolean | NothingEnum.NOTHING);
  /** How the distance between the first line's baseline and the cell's top inset is measured. See {@link FirstBaseline}. */
  get firstBaselineOffset(): (FirstBaseline | NothingEnum.NOTHING)[];
  set firstBaselineOffset(value: FirstBaseline | NothingEnum.NOTHING);
  /** The vertical alignment of cell. */
  get verticalJustification(): (VerticalJustification | NothingEnum.NOTHING)[];
  set verticalJustification(value: VerticalJustification | NothingEnum.NOTHING);
  /** The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. */
  get paragraphSpacingLimit(): (number | NothingEnum.NOTHING)[];
  set paragraphSpacingLimit(value: MeasurementValue | NothingEnum.NOTHING);
  /** The space between the baseline of the text and the top inset of the frame or cell. */
  get minimumFirstBaselineOffset(): (number | NothingEnum.NOTHING)[];
  set minimumFirstBaselineOffset(value: number | NothingEnum.NOTHING);
  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): (number | NothingEnum.NOTHING)[];
  set rotationAngle(value: number | NothingEnum.NOTHING);
  /** The stroke weight of the left edge border stroke. */
  get leftEdgeStrokeWeight(): (number | NothingEnum.NOTHING)[];
  set leftEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the left edge. */
  get leftEdgeStrokeType(): (StrokeStyle | null)[];
  set leftEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. */
  get leftEdgeStrokeColor(): (Swatch | null)[];
  set leftEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). */
  get leftEdgeStrokeTint(): (number | NothingEnum.NOTHING)[];
  set leftEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the left edge border stroke will overprint. */
  get leftEdgeStrokeOverprint(): (boolean | NothingEnum.NOTHING)[];
  set leftEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapColor(): (Swatch | null)[];
  set leftEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapTint(): (number | NothingEnum.NOTHING)[];
  set leftEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set leftEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the top edge border stroke. */
  get topEdgeStrokeWeight(): (number | NothingEnum.NOTHING)[];
  set topEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the top edge. */
  get topEdgeStrokeType(): (StrokeStyle | null)[];
  set topEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. */
  get topEdgeStrokeColor(): (Swatch | null)[];
  set topEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). */
  get topEdgeStrokeTint(): (number | NothingEnum.NOTHING)[];
  set topEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the top edge border stroke will overprint. */
  get topEdgeStrokeOverprint(): (boolean | NothingEnum.NOTHING)[];
  set topEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapColor(): (Swatch | null)[];
  set topEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapTint(): (number | NothingEnum.NOTHING)[];
  set topEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set topEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the right edge border stroke. */
  get rightEdgeStrokeWeight(): (number | NothingEnum.NOTHING)[];
  set rightEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the right edge. */
  get rightEdgeStrokeType(): (StrokeStyle | null)[];
  set rightEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The color, specified as a swatch, of the right edge border stroke. */
  get rightEdgeStrokeColor(): (Swatch | null)[];
  set rightEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). */
  get rightEdgeStrokeTint(): (number | NothingEnum.NOTHING)[];
  set rightEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the right edge border stroke will overprint. */
  get rightEdgeStrokeOverprint(): (boolean | NothingEnum.NOTHING)[];
  set rightEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapColor(): (Swatch | null)[];
  set rightEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapTint(): (number | NothingEnum.NOTHING)[];
  set rightEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set rightEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke weight of the bottom edge border stroke. */
  get bottomEdgeStrokeWeight(): (number | NothingEnum.NOTHING)[];
  set bottomEdgeStrokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke type of the bottom edge. */
  get bottomEdgeStrokeType(): (StrokeStyle | null)[];
  set bottomEdgeStrokeType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. */
  get bottomEdgeStrokeColor(): (Swatch | null)[];
  set bottomEdgeStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the bottom edge border stroke. */
  get bottomEdgeStrokeTint(): (number | NothingEnum.NOTHING)[];
  set bottomEdgeStrokeTint(value: number | NothingEnum.NOTHING);
  /** If true, the bottom edge border stroke will overprint. */
  get bottomEdgeStrokeOverprint(): (boolean | NothingEnum.NOTHING)[];
  set bottomEdgeStrokeOverprint(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapColor(): (Swatch | null)[];
  set bottomEdgeStrokeGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapTint(): (number | NothingEnum.NOTHING)[];
  set bottomEdgeStrokeGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set bottomEdgeStrokeGapOverprint(value: boolean | NothingEnum.NOTHING);
  /**
   * The {@link ParagraphStyle} the cell style applies to text in the cell, or
   * {@link NothingEnum.NOTHING} when the style leaves it unset.
   *
   * A style-definition member only: a live {@link Cell} carries no paragraph
   * style of its own, its text ranges do.
   */
  get appliedParagraphStyle(): (ParagraphStyle | NothingEnum.NOTHING)[];
  set appliedParagraphStyle(value: ParagraphStyle | string | NothingEnum.NOTHING);
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyle';
  /** Resolves the proxy into the individual {@link CellStyle} objects it stands for. */
  getElements(): CellStyle[];
  /** The unique ID of the cell style, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the cell style. */
  get name(): (string)[];
  set name(value: string);
  /** The style this style is based on. Accepts a {@link CellStyle} or its name. */
  get basedOn(): (CellStyle | string)[];
  set basedOn(value: CellStyle | string);
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any cells currently tagged with this style. Cells are left unstyled if omitted.
   */
  remove(replacingWith?: CellStyle): (void)[];
  /** Duplicates the cell style. */
  duplicate(): (CellStyle)[];
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): (CellStyle)[];
}
