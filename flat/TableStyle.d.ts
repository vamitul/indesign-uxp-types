/**
 * TableStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { TableStyleGroup } from './TableStyleGroup';
import type { TableStyleAttributes } from './_base/TableAttributes';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { CellStyle } from './CellStyle';
import type { Table } from './Table';
import type { TableStyles } from './TableStyles';
import type { TableCaptionPositionOptions } from './Enums/TableCaptionPositionOptions';
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
import type { StrokeOrderTypes } from './Enums/StrokeOrderTypes';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
/**
 * A named table style definition, held in a document's or the application's {@link TableStyles} collection (optionally nested inside a {@link TableStyleGroup}).
 *
 * Stores the same border, inset and alternating-fill attributes a live {@link Table} carries,
 * but as a reusable named definition rather than formatting applied to one table.
 */
export interface TableStyle {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document | Application | TableStyleGroup;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TableStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TableStyle, 'single'>);
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
  /** Where the table's caption sits relative to the table. See {@link TableCaptionPositionOptions}. */
  get captionPosition(): TableCaptionPositionOptions;
  set captionPosition(value: TableCaptionPositionOptions);
  /** The left inset of the graphic cell. */
  get graphicLeftInset(): number;
  set graphicLeftInset(value: MeasurementValue);
  /** The top inset of the graphic cell. */
  get graphicTopInset(): number;
  set graphicTopInset(value: MeasurementValue);
  /** The right inset of the graphic cell. */
  get graphicRightInset(): number;
  set graphicRightInset(value: MeasurementValue);
  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): number;
  set graphicBottomInset(value: MeasurementValue);
  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): boolean;
  set clipContentToGraphicCell(value: boolean);
  /** The top inset of the text cell. */
  get textTopInset(): number;
  set textTopInset(value: MeasurementValue);
  /** The left inset of the text cell. */
  get textLeftInset(): number;
  set textLeftInset(value: MeasurementValue);
  /** The bottom inset of the text cell. */
  get textBottomInset(): number;
  set textBottomInset(value: MeasurementValue);
  /** The right inset of the text cell. */
  get textRightInset(): number;
  set textRightInset(value: MeasurementValue);
  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): boolean;
  set clipContentToTextCell(value: boolean);
  /** The order in which to display row and column strokes at corners. */
  get strokeOrder(): StrokeOrderTypes;
  set strokeOrder(value: StrokeOrderTypes);
  /** The stroke weight of the table's top border stroke. */
  get topBorderStrokeWeight(): number;
  set topBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the top border. */
  get topBorderStrokeType(): StrokeStyle;
  set topBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. */
  get topBorderStrokeColor(): Swatch;
  set topBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the table's top border stroke. (Range: 0 to 100) */
  get topBorderStrokeTint(): number;
  set topBorderStrokeTint(value: number);
  /** If true, the top border strokes will overprint. */
  get topBorderStrokeOverprint(): boolean;
  set topBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapColor(): Swatch;
  set topBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the table's top border stroke. (Range: 0 to 100) Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapTint(): number;
  set topBorderStrokeGapTint(value: number);
  /** If true, the gap of the top border stroke will overprint. Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapOverprint(): boolean;
  set topBorderStrokeGapOverprint(value: boolean);
  /** The stroke weight of the left border stroke. */
  get leftBorderStrokeWeight(): number;
  set leftBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the left border. */
  get leftBorderStrokeType(): StrokeStyle;
  set leftBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. */
  get leftBorderStrokeColor(): Swatch;
  set leftBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the left border stroke. (Range: 0 to 100) */
  get leftBorderStrokeTint(): number;
  set leftBorderStrokeTint(value: number);
  /** If true, the left border stroke will overprint. */
  get leftBorderStrokeOverprint(): boolean;
  set leftBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapColor(): Swatch;
  set leftBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the left border stroke. (Range: 0 to 100) Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapTint(): number;
  set leftBorderStrokeGapTint(value: number);
  /** If true, the gap of the left border stroke will overprint. Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapOverprint(): boolean;
  set leftBorderStrokeGapOverprint(value: boolean);
  /** The stroke weight of the bottom border stroke. */
  get bottomBorderStrokeWeight(): number;
  set bottomBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the bottom border. */
  get bottomBorderStrokeType(): StrokeStyle;
  set bottomBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. */
  get bottomBorderStrokeColor(): Swatch;
  set bottomBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the bottom border stroke. (Range: 0 to 100) */
  get bottomBorderStrokeTint(): number;
  set bottomBorderStrokeTint(value: number);
  /** If true, the bottom border stroke will overprint. */
  get bottomBorderStrokeOverprint(): boolean;
  set bottomBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapColor(): Swatch;
  set bottomBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the bottom border stroke. (Range: 0 to 100) Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapTint(): number;
  set bottomBorderStrokeGapTint(value: number);
  /** If true, the gap of the bottom border stroke will overprint. Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapOverprint(): boolean;
  set bottomBorderStrokeGapOverprint(value: boolean);
  /** The stroke weight of the right border stroke. */
  get rightBorderStrokeWeight(): number;
  set rightBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the right border. */
  get rightBorderStrokeType(): StrokeStyle;
  set rightBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. */
  get rightBorderStrokeColor(): Swatch;
  set rightBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the right border stroke. (Range: 0 to 100) */
  get rightBorderStrokeTint(): number;
  set rightBorderStrokeTint(value: number);
  /** If true, the right border stroke will overprint. */
  get rightBorderStrokeOverprint(): boolean;
  set rightBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapColor(): Swatch;
  set rightBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the right border stroke. (Range: 0 to 100) Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapTint(): number;
  set rightBorderStrokeGapTint(value: number);
  /** If true, the gap color of the right border stroke will overprint. Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapOverprint(): boolean;
  set rightBorderStrokeGapOverprint(value: boolean);
  /** The space above the table. */
  get spaceBefore(): number;
  set spaceBefore(value: MeasurementValue);
  /** The space below the table. */
  get spaceAfter(): number;
  set spaceAfter(value: MeasurementValue);
  /** The number of body rows at the beginning of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater. */
  get skipFirstAlternatingStrokeRows(): number;
  set skipFirstAlternatingStrokeRows(value: number);
  /** The number of body rows at the end of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater. */
  get skipLastAlternatingStrokeRows(): number;
  set skipLastAlternatingStrokeRows(value: number);
  /** The number of rows in the first alternating row strokes group. */
  get startRowStrokeCount(): number;
  set startRowStrokeCount(value: number);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeColor(): Swatch;
  set startRowStrokeColor(value: Swatch);
  /** The stroke weight of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeWeight(): number;
  set startRowStrokeWeight(value: MeasurementValue);
  /** The stroke type of rows in the first alternating strokes group. */
  get startRowStrokeType(): StrokeStyle;
  set startRowStrokeType(value: StrokeStyle | string);
  /** The tint (as a percentage) of the borders in the first alternating row strokes group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeTint(): number;
  set startRowStrokeTint(value: number);
  /** If true, the gap color of the row border stroke in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapOverprint(): boolean;
  set startRowStrokeGapOverprint(value: boolean);
  /** The stroke gap color of row borders in the first alternating row strokes group, specified as a swatch (color, gradient, tint, or mixed ink). Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapColor(): Swatch;
  set startRowStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of row borders in the first alternating rows group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapTint(): number;
  set startRowStrokeGapTint(value: number);
  /** If true, the row borders in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeOverprint(): boolean;
  set startRowStrokeOverprint(value: boolean);
  /** The number of rows in the second alternating row strokes group. */
  get endRowStrokeCount(): number;
  set endRowStrokeCount(value: number);
  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeColor(): Swatch;
  set endRowStrokeColor(value: Swatch);
  /** The stroke weight of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeWeight(): number;
  set endRowStrokeWeight(value: MeasurementValue);
  /** The stroke type of rows in the second alternating strokes group. */
  get endRowStrokeType(): StrokeStyle;
  set endRowStrokeType(value: StrokeStyle | string);
  /** The tint (as a percentage) of the row borders in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeTint(): number;
  set endRowStrokeTint(value: number);
  /** If true, the rows in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeOverprint(): boolean;
  set endRowStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating rows group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeGapColor(): Swatch;
  set endRowStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of rows in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater and end row stroke type is not solid. */
  get endRowStrokeGapTint(): number;
  set endRowStrokeGapTint(value: number);
  /** If true, the gap of the row borders in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeGapOverprint(): boolean;
  set endRowStrokeGapOverprint(value: boolean);
  /** The number of columns on the left of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater. */
  get skipFirstAlternatingStrokeColumns(): number;
  set skipFirstAlternatingStrokeColumns(value: number);
  /** The number of columns on the right side of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater. */
  get skipLastAlternatingStrokeColumns(): number;
  set skipLastAlternatingStrokeColumns(value: number);
  /** The number of columns in the first alternating column strokes group. */
  get startColumnStrokeCount(): number;
  set startColumnStrokeCount(value: number);
  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. */
  get startColumnStrokeColor(): Swatch;
  set startColumnStrokeColor(value: Swatch);
  /** The stroke weight of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeWeight(): number;
  set startColumnStrokeWeight(value: MeasurementValue);
  /** The stroke type of columns in the first alternating strokes group. */
  get startColumnStrokeType(): StrokeStyle;
  set startColumnStrokeType(value: StrokeStyle | string);
  /** The tint (as a percentage) of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeTint(): number;
  set startColumnStrokeTint(value: number);
  /** If true, the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeOverprint(): boolean;
  set startColumnStrokeOverprint(value: boolean);
  /** The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapColor(): Swatch;
  set startColumnStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapTint(): number;
  set startColumnStrokeGapTint(value: number);
  /** If true, the gap of the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapOverprint(): boolean;
  set startColumnStrokeGapOverprint(value: boolean);
  /** The number of columns in the second alternating column strokes group. */
  get endColumnStrokeCount(): number;
  set endColumnStrokeCount(value: number);
  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeColor(): Swatch;
  set endColumnStrokeColor(value: Swatch);
  /** The stroke weight of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeWeight(): number;
  set endColumnStrokeWeight(value: MeasurementValue);
  /** The stroke type of columns in the second alternating strokes group. */
  get endColumnLineStyle(): StrokeStyle;
  set endColumnLineStyle(value: StrokeStyle | string);
  /** The tint (as a percentage) of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeTint(): number;
  set endColumnStrokeTint(value: number);
  /** If true, the column borders in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeOverprint(): boolean;
  set endColumnStrokeOverprint(value: boolean);
  /** The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapColor(): Swatch;
  set endColumnStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapTint(): number;
  set endColumnStrokeGapTint(value: number);
  /** If true, the gap of the column border stroke in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapOverprint(): boolean;
  set endColumnStrokeGapOverprint(value: boolean);
  /** If true, hides alternating row fills. If false, hides alternating column fills. */
  get columnFillsPriority(): boolean;
  set columnFillsPriority(value: boolean);
  /** The number of body rows at the beginning of the table to skip before applying the row fill color. Note: Valid when alternating fills are defined for table rows. */
  get skipFirstAlternatingFillRows(): number;
  set skipFirstAlternatingFillRows(value: number);
  /** The number of body rows at the end of the table in which to not apply the row fill color. Note: Valid when alternating fills are defined for table rows. */
  get skipLastAlternatingFillRows(): number;
  set skipLastAlternatingFillRows(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillColor(): Swatch;
  set startRowFillColor(value: Swatch);
  /** The number of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillCount(): number;
  set startRowFillCount(value: number);
  /** The tint (as a percentage) of the rows in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows. */
  get startRowFillTint(): number;
  set startRowFillTint(value: number);
  /** If true, the rows in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillOverprint(): boolean;
  set startRowFillOverprint(value: boolean);
  /** The number of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillCount(): number;
  set endRowFillCount(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillColor(): Swatch;
  set endRowFillColor(value: Swatch);
  /** The tint (as a percentage) of the rows in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows. */
  get endRowFillTint(): number;
  set endRowFillTint(value: number);
  /** If true, the rows in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillOverprint(): boolean;
  set endRowFillOverprint(value: boolean);
  /** The number of columns on the left side of the table to skip before applying the column fill color. Note: Valid when alternating fills are defined for table columns. */
  get skipFirstAlternatingFillColumns(): number;
  set skipFirstAlternatingFillColumns(value: number);
  /** The number columns on the right side of the table in which to not apply the column fill color. Note: Valid when alternating fills are defined for table columns. */
  get skipLastAlternatingFillColumns(): number;
  set skipLastAlternatingFillColumns(value: number);
  /** The number of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillCount(): number;
  set startColumnFillCount(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillColor(): Swatch;
  set startColumnFillColor(value: Swatch);
  /** The tint (as a percentage) of the columns in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillTint(): number;
  set startColumnFillTint(value: number);
  /** If true, the columns in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillOverprint(): boolean;
  set startColumnFillOverprint(value: boolean);
  /** The number of columns in the second alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillCount(): number;
  set endColumnFillCount(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the second alternating fill group. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillColor(): Swatch;
  set endColumnFillColor(value: Swatch);
  /** The tint (as a percentage) of the columns in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillTint(): number;
  set endColumnFillTint(value: number);
  /** If true, the columns in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillOverprint(): boolean;
  set endColumnFillOverprint(value: boolean);
  /** If true, use the cell style of the body region for the header region. */
  get headerRegionSameAsBodyRegion(): boolean;
  set headerRegionSameAsBodyRegion(value: boolean);
  /** If true, uses the cell style of the body region for the footer region. */
  get footerRegionSameAsBodyRegion(): boolean;
  set footerRegionSameAsBodyRegion(value: boolean);
  /** If true, uses the cell style of the body region for the left column region. */
  get leftColumnRegionSameAsBodyRegion(): boolean;
  set leftColumnRegionSameAsBodyRegion(value: boolean);
  /** If true, uses the cell style of the body region for the right column region. */
  get rightColumnRegionSameAsBodyRegion(): boolean;
  set rightColumnRegionSameAsBodyRegion(value: boolean);
  /** The {@link CellStyle} applied to cells in the header region. */
  get headerRegionCellStyle(): CellStyle;
  set headerRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the footer region. */
  get footerRegionCellStyle(): CellStyle;
  set footerRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the left column region. */
  get leftColumnRegionCellStyle(): CellStyle;
  set leftColumnRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the right column region. */
  get rightColumnRegionCellStyle(): CellStyle;
  set rightColumnRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the body region. */
  get bodyRegionCellStyle(): CellStyle;
  set bodyRegionCellStyle(value: CellStyle | string);
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyle';
  /** Resolves the proxy into the individual {@link TableStyle} objects it stands for. */
  getElements(): TableStyle[];
  // ---- Caption and header columns --------------------------------------------
  // Absent from the InDesign 2026 object-model dictionary; modelled from the
  // live UXP runtime. Reading either on a style that does not define it throws
  // `This attribute is not defined for table styles`.

  /** How many paragraphs of the caption story the style formats. */
  get captionParagraphCount(): number;
  set captionParagraphCount(value: number);
  /** The {@link CellStyle} applied to cells in the header column region. */
  get headerColumnCellStyle(): CellStyle;
  set headerColumnCellStyle(value: CellStyle | string);
  /** The unique ID of the table style, stable across saves and reopens. */
  readonly id: number;
  /** The name of the table style. */
  get name(): string;
  set name(value: string);
  /** The style this style is based on. Accepts a {@link TableStyle} or its name. */
  get basedOn(): TableStyle | string;
  set basedOn(value: TableStyle | string);
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any tables currently tagged with this style. Tables are left unstyled if omitted.
   */
  remove(replacingWith?: TableStyle): void;
  /** Duplicates the table style. */
  duplicate(): TableStyle;
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): TableStyle;
}


/**
 * The broadcast proxy for {@link TableStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TableStyle} there.
 */
export interface TableStylePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document | Application | TableStyleGroup)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TableStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TableStylePlural, 'plural'>);
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
  /** Where the table's caption sits relative to the table. See {@link TableCaptionPositionOptions}. */
  get captionPosition(): (TableCaptionPositionOptions)[];
  set captionPosition(value: TableCaptionPositionOptions);
  /** The left inset of the graphic cell. */
  get graphicLeftInset(): (number)[];
  set graphicLeftInset(value: MeasurementValue);
  /** The top inset of the graphic cell. */
  get graphicTopInset(): (number)[];
  set graphicTopInset(value: MeasurementValue);
  /** The right inset of the graphic cell. */
  get graphicRightInset(): (number)[];
  set graphicRightInset(value: MeasurementValue);
  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): (number)[];
  set graphicBottomInset(value: MeasurementValue);
  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): (boolean)[];
  set clipContentToGraphicCell(value: boolean);
  /** The top inset of the text cell. */
  get textTopInset(): (number)[];
  set textTopInset(value: MeasurementValue);
  /** The left inset of the text cell. */
  get textLeftInset(): (number)[];
  set textLeftInset(value: MeasurementValue);
  /** The bottom inset of the text cell. */
  get textBottomInset(): (number)[];
  set textBottomInset(value: MeasurementValue);
  /** The right inset of the text cell. */
  get textRightInset(): (number)[];
  set textRightInset(value: MeasurementValue);
  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): (boolean)[];
  set clipContentToTextCell(value: boolean);
  /** The order in which to display row and column strokes at corners. */
  get strokeOrder(): (StrokeOrderTypes)[];
  set strokeOrder(value: StrokeOrderTypes);
  /** The stroke weight of the table's top border stroke. */
  get topBorderStrokeWeight(): (number)[];
  set topBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the top border. */
  get topBorderStrokeType(): (StrokeStyle)[];
  set topBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. */
  get topBorderStrokeColor(): (Swatch)[];
  set topBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the table's top border stroke. (Range: 0 to 100) */
  get topBorderStrokeTint(): (number)[];
  set topBorderStrokeTint(value: number);
  /** If true, the top border strokes will overprint. */
  get topBorderStrokeOverprint(): (boolean)[];
  set topBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapColor(): (Swatch)[];
  set topBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the table's top border stroke. (Range: 0 to 100) Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapTint(): (number)[];
  set topBorderStrokeGapTint(value: number);
  /** If true, the gap of the top border stroke will overprint. Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapOverprint(): (boolean)[];
  set topBorderStrokeGapOverprint(value: boolean);
  /** The stroke weight of the left border stroke. */
  get leftBorderStrokeWeight(): (number)[];
  set leftBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the left border. */
  get leftBorderStrokeType(): (StrokeStyle)[];
  set leftBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. */
  get leftBorderStrokeColor(): (Swatch)[];
  set leftBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the left border stroke. (Range: 0 to 100) */
  get leftBorderStrokeTint(): (number)[];
  set leftBorderStrokeTint(value: number);
  /** If true, the left border stroke will overprint. */
  get leftBorderStrokeOverprint(): (boolean)[];
  set leftBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapColor(): (Swatch)[];
  set leftBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the left border stroke. (Range: 0 to 100) Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapTint(): (number)[];
  set leftBorderStrokeGapTint(value: number);
  /** If true, the gap of the left border stroke will overprint. Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapOverprint(): (boolean)[];
  set leftBorderStrokeGapOverprint(value: boolean);
  /** The stroke weight of the bottom border stroke. */
  get bottomBorderStrokeWeight(): (number)[];
  set bottomBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the bottom border. */
  get bottomBorderStrokeType(): (StrokeStyle)[];
  set bottomBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. */
  get bottomBorderStrokeColor(): (Swatch)[];
  set bottomBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the bottom border stroke. (Range: 0 to 100) */
  get bottomBorderStrokeTint(): (number)[];
  set bottomBorderStrokeTint(value: number);
  /** If true, the bottom border stroke will overprint. */
  get bottomBorderStrokeOverprint(): (boolean)[];
  set bottomBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapColor(): (Swatch)[];
  set bottomBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the bottom border stroke. (Range: 0 to 100) Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapTint(): (number)[];
  set bottomBorderStrokeGapTint(value: number);
  /** If true, the gap of the bottom border stroke will overprint. Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapOverprint(): (boolean)[];
  set bottomBorderStrokeGapOverprint(value: boolean);
  /** The stroke weight of the right border stroke. */
  get rightBorderStrokeWeight(): (number)[];
  set rightBorderStrokeWeight(value: MeasurementValue);
  /** The stroke type of the right border. */
  get rightBorderStrokeType(): (StrokeStyle)[];
  set rightBorderStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. */
  get rightBorderStrokeColor(): (Swatch)[];
  set rightBorderStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the right border stroke. (Range: 0 to 100) */
  get rightBorderStrokeTint(): (number)[];
  set rightBorderStrokeTint(value: number);
  /** If true, the right border stroke will overprint. */
  get rightBorderStrokeOverprint(): (boolean)[];
  set rightBorderStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapColor(): (Swatch)[];
  set rightBorderStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the gap color of the right border stroke. (Range: 0 to 100) Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapTint(): (number)[];
  set rightBorderStrokeGapTint(value: number);
  /** If true, the gap color of the right border stroke will overprint. Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapOverprint(): (boolean)[];
  set rightBorderStrokeGapOverprint(value: boolean);
  /** The space above the table. */
  get spaceBefore(): (number)[];
  set spaceBefore(value: MeasurementValue);
  /** The space below the table. */
  get spaceAfter(): (number)[];
  set spaceAfter(value: MeasurementValue);
  /** The number of body rows at the beginning of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater. */
  get skipFirstAlternatingStrokeRows(): (number)[];
  set skipFirstAlternatingStrokeRows(value: number);
  /** The number of body rows at the end of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater. */
  get skipLastAlternatingStrokeRows(): (number)[];
  set skipLastAlternatingStrokeRows(value: number);
  /** The number of rows in the first alternating row strokes group. */
  get startRowStrokeCount(): (number)[];
  set startRowStrokeCount(value: number);
  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeColor(): (Swatch)[];
  set startRowStrokeColor(value: Swatch);
  /** The stroke weight of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeWeight(): (number)[];
  set startRowStrokeWeight(value: MeasurementValue);
  /** The stroke type of rows in the first alternating strokes group. */
  get startRowStrokeType(): (StrokeStyle)[];
  set startRowStrokeType(value: StrokeStyle | string);
  /** The tint (as a percentage) of the borders in the first alternating row strokes group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeTint(): (number)[];
  set startRowStrokeTint(value: number);
  /** If true, the gap color of the row border stroke in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapOverprint(): (boolean)[];
  set startRowStrokeGapOverprint(value: boolean);
  /** The stroke gap color of row borders in the first alternating row strokes group, specified as a swatch (color, gradient, tint, or mixed ink). Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapColor(): (Swatch)[];
  set startRowStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of row borders in the first alternating rows group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapTint(): (number)[];
  set startRowStrokeGapTint(value: number);
  /** If true, the row borders in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeOverprint(): (boolean)[];
  set startRowStrokeOverprint(value: boolean);
  /** The number of rows in the second alternating row strokes group. */
  get endRowStrokeCount(): (number)[];
  set endRowStrokeCount(value: number);
  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeColor(): (Swatch)[];
  set endRowStrokeColor(value: Swatch);
  /** The stroke weight of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeWeight(): (number)[];
  set endRowStrokeWeight(value: MeasurementValue);
  /** The stroke type of rows in the second alternating strokes group. */
  get endRowStrokeType(): (StrokeStyle)[];
  set endRowStrokeType(value: StrokeStyle | string);
  /** The tint (as a percentage) of the row borders in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeTint(): (number)[];
  set endRowStrokeTint(value: number);
  /** If true, the rows in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeOverprint(): (boolean)[];
  set endRowStrokeOverprint(value: boolean);
  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating rows group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeGapColor(): (Swatch)[];
  set endRowStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of rows in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater and end row stroke type is not solid. */
  get endRowStrokeGapTint(): (number)[];
  set endRowStrokeGapTint(value: number);
  /** If true, the gap of the row borders in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeGapOverprint(): (boolean)[];
  set endRowStrokeGapOverprint(value: boolean);
  /** The number of columns on the left of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater. */
  get skipFirstAlternatingStrokeColumns(): (number)[];
  set skipFirstAlternatingStrokeColumns(value: number);
  /** The number of columns on the right side of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater. */
  get skipLastAlternatingStrokeColumns(): (number)[];
  set skipLastAlternatingStrokeColumns(value: number);
  /** The number of columns in the first alternating column strokes group. */
  get startColumnStrokeCount(): (number)[];
  set startColumnStrokeCount(value: number);
  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. */
  get startColumnStrokeColor(): (Swatch)[];
  set startColumnStrokeColor(value: Swatch);
  /** The stroke weight of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeWeight(): (number)[];
  set startColumnStrokeWeight(value: MeasurementValue);
  /** The stroke type of columns in the first alternating strokes group. */
  get startColumnStrokeType(): (StrokeStyle)[];
  set startColumnStrokeType(value: StrokeStyle | string);
  /** The tint (as a percentage) of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeTint(): (number)[];
  set startColumnStrokeTint(value: number);
  /** If true, the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeOverprint(): (boolean)[];
  set startColumnStrokeOverprint(value: boolean);
  /** The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapColor(): (Swatch)[];
  set startColumnStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapTint(): (number)[];
  set startColumnStrokeGapTint(value: number);
  /** If true, the gap of the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapOverprint(): (boolean)[];
  set startColumnStrokeGapOverprint(value: boolean);
  /** The number of columns in the second alternating column strokes group. */
  get endColumnStrokeCount(): (number)[];
  set endColumnStrokeCount(value: number);
  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeColor(): (Swatch)[];
  set endColumnStrokeColor(value: Swatch);
  /** The stroke weight of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeWeight(): (number)[];
  set endColumnStrokeWeight(value: MeasurementValue);
  /** The stroke type of columns in the second alternating strokes group. */
  get endColumnLineStyle(): (StrokeStyle)[];
  set endColumnLineStyle(value: StrokeStyle | string);
  /** The tint (as a percentage) of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeTint(): (number)[];
  set endColumnStrokeTint(value: number);
  /** If true, the column borders in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeOverprint(): (boolean)[];
  set endColumnStrokeOverprint(value: boolean);
  /** The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapColor(): (Swatch)[];
  set endColumnStrokeGapColor(value: Swatch);
  /** The tint (as a percentage) of the gap color of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapTint(): (number)[];
  set endColumnStrokeGapTint(value: number);
  /** If true, the gap of the column border stroke in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapOverprint(): (boolean)[];
  set endColumnStrokeGapOverprint(value: boolean);
  /** If true, hides alternating row fills. If false, hides alternating column fills. */
  get columnFillsPriority(): (boolean)[];
  set columnFillsPriority(value: boolean);
  /** The number of body rows at the beginning of the table to skip before applying the row fill color. Note: Valid when alternating fills are defined for table rows. */
  get skipFirstAlternatingFillRows(): (number)[];
  set skipFirstAlternatingFillRows(value: number);
  /** The number of body rows at the end of the table in which to not apply the row fill color. Note: Valid when alternating fills are defined for table rows. */
  get skipLastAlternatingFillRows(): (number)[];
  set skipLastAlternatingFillRows(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillColor(): (Swatch)[];
  set startRowFillColor(value: Swatch);
  /** The number of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillCount(): (number)[];
  set startRowFillCount(value: number);
  /** The tint (as a percentage) of the rows in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows. */
  get startRowFillTint(): (number)[];
  set startRowFillTint(value: number);
  /** If true, the rows in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillOverprint(): (boolean)[];
  set startRowFillOverprint(value: boolean);
  /** The number of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillCount(): (number)[];
  set endRowFillCount(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillColor(): (Swatch)[];
  set endRowFillColor(value: Swatch);
  /** The tint (as a percentage) of the rows in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows. */
  get endRowFillTint(): (number)[];
  set endRowFillTint(value: number);
  /** If true, the rows in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillOverprint(): (boolean)[];
  set endRowFillOverprint(value: boolean);
  /** The number of columns on the left side of the table to skip before applying the column fill color. Note: Valid when alternating fills are defined for table columns. */
  get skipFirstAlternatingFillColumns(): (number)[];
  set skipFirstAlternatingFillColumns(value: number);
  /** The number columns on the right side of the table in which to not apply the column fill color. Note: Valid when alternating fills are defined for table columns. */
  get skipLastAlternatingFillColumns(): (number)[];
  set skipLastAlternatingFillColumns(value: number);
  /** The number of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillCount(): (number)[];
  set startColumnFillCount(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillColor(): (Swatch)[];
  set startColumnFillColor(value: Swatch);
  /** The tint (as a percentage) of the columns in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillTint(): (number)[];
  set startColumnFillTint(value: number);
  /** If true, the columns in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillOverprint(): (boolean)[];
  set startColumnFillOverprint(value: boolean);
  /** The number of columns in the second alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillCount(): (number)[];
  set endColumnFillCount(value: number);
  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the second alternating fill group. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillColor(): (Swatch)[];
  set endColumnFillColor(value: Swatch);
  /** The tint (as a percentage) of the columns in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillTint(): (number)[];
  set endColumnFillTint(value: number);
  /** If true, the columns in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillOverprint(): (boolean)[];
  set endColumnFillOverprint(value: boolean);
  /** If true, use the cell style of the body region for the header region. */
  get headerRegionSameAsBodyRegion(): (boolean)[];
  set headerRegionSameAsBodyRegion(value: boolean);
  /** If true, uses the cell style of the body region for the footer region. */
  get footerRegionSameAsBodyRegion(): (boolean)[];
  set footerRegionSameAsBodyRegion(value: boolean);
  /** If true, uses the cell style of the body region for the left column region. */
  get leftColumnRegionSameAsBodyRegion(): (boolean)[];
  set leftColumnRegionSameAsBodyRegion(value: boolean);
  /** If true, uses the cell style of the body region for the right column region. */
  get rightColumnRegionSameAsBodyRegion(): (boolean)[];
  set rightColumnRegionSameAsBodyRegion(value: boolean);
  /** The {@link CellStyle} applied to cells in the header region. */
  get headerRegionCellStyle(): (CellStyle)[];
  set headerRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the footer region. */
  get footerRegionCellStyle(): (CellStyle)[];
  set footerRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the left column region. */
  get leftColumnRegionCellStyle(): (CellStyle)[];
  set leftColumnRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the right column region. */
  get rightColumnRegionCellStyle(): (CellStyle)[];
  set rightColumnRegionCellStyle(value: CellStyle | string);
  /** The {@link CellStyle} applied to cells in the body region. */
  get bodyRegionCellStyle(): (CellStyle)[];
  set bodyRegionCellStyle(value: CellStyle | string);
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyle';
  /** Resolves the proxy into the individual {@link TableStyle} objects it stands for. */
  getElements(): TableStyle[];
  // ---- Caption and header columns --------------------------------------------
  // Absent from the InDesign 2026 object-model dictionary; modelled from the
  // live UXP runtime. Reading either on a style that does not define it throws
  // `This attribute is not defined for table styles`.

  /** How many paragraphs of the caption story the style formats. */
  get captionParagraphCount(): (number)[];
  set captionParagraphCount(value: number);
  /** The {@link CellStyle} applied to cells in the header column region. */
  get headerColumnCellStyle(): (CellStyle)[];
  set headerColumnCellStyle(value: CellStyle | string);
  /** The unique ID of the table style, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the table style. */
  get name(): (string)[];
  set name(value: string);
  /** The style this style is based on. Accepts a {@link TableStyle} or its name. */
  get basedOn(): (TableStyle | string)[];
  set basedOn(value: TableStyle | string);
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any tables currently tagged with this style. Tables are left unstyled if omitted.
   */
  remove(replacingWith?: TableStyle): (void)[];
  /** Duplicates the table style. */
  duplicate(): (TableStyle)[];
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): (TableStyle)[];
}
