/**
 * Cell.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Table } from './Table';
import type { Row } from './Row';
import type { Column } from './Column';
import type { XMLItem } from './XMLItem';
import type { TableGeometry, TableCellAttributes } from './_base/TableAttributes';
import type { TextContainerContent } from './_base/TextContent';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { CellStyle } from './CellStyle';
import type { MeasurementValue } from './_base/Types';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { CellTypeEnum } from './Enums/CellTypeEnum';
import type { Text } from './Text';

import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';

import type { Footnotes } from './Footnotes';
import type { Endnotes } from './Endnotes';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Changes } from './Changes';
import type { Notes } from './Notes';
import type { HiddenTexts } from './HiddenTexts';
import type { Tables } from './Tables';
import type { ColumnTypes } from './Enums/ColumnTypes';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { FirstBaseline } from './Enums/FirstBaseline';
import type { RowTypes } from './Enums/RowTypes';
import type { Cells } from './Cells';
import type { Characters } from './Characters';
import type { Columns } from './Columns';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { InsertionPoints } from './InsertionPoints';
import type { Lines } from './Lines';
import type { NothingEnum } from './Enums/NothingEnum';
import type { Paragraphs } from './Paragraphs';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { Rows } from './Rows';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { StartParagraph } from './Enums/StartParagraph';
import type { TextColumns } from './TextColumns';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { VerticalJustification } from './Enums/VerticalJustification';
import type { Words } from './Words';
/**
 * A single cell of a {@link Table}, the fundamental text- or graphic-bearing
 * unit of a table grid.
 *
 * Holds its own story, reachable at any granularity — {@link characters},
 * {@link words}, {@link paragraphs} — and searchable with find/change. Size,
 * span, position, edge strokes, insets, and fill follow the same member
 * names on {@link Row} and {@link Column}, since all three describe the same
 * grid.
 */
export interface Cell {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Table;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Cell, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Cell, 'single'>);
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
  /** The number of rows that the object spans. */
  readonly rowSpan: number;
  /** The number of columns that the object spans. */
  readonly columnSpan: number;
  /** If true, the story has overset text. */
  readonly overflows: boolean;
  /** The parent row of the cell. */
  readonly parentRow: Row;
  /** The parent column of the cell. */
  readonly parentColumn: Column;
  /** A collection of table cells. */
  readonly cells: Cells;
  /** A collection of table rows. */
  readonly rows: Rows;
  /** A collection of table columns. */
  readonly columns: Columns;
  /** The height of the cell. For a table or column, specifies the sum of the row heights. */
  get height(): number;
  set height(value: MeasurementValue);
  /** The width of the cell. For a table or row, specifies the sum of the column widths. */
  get width(): number;
  set width(value: MeasurementValue);
  /**
   * The text contents.
   *
   * A single cell reads back one value; a row, column or table reads back an
   * array — the first value is the left-most cell of a row or the top-most cell
   * of a column, then each following cell in turn. Assigning a plain string to a
   * row or column puts that same string in every one of its cells, and assigning
   * an array shorter than the cell count leaves the remaining cells unchanged.
   */
  get contents(): PageItem | string | SpecialCharacters | Array<string | SpecialCharacters | PageItem>
  ;
  set contents(
    value:
      | PageItem
      | string
      | SpecialCharacters
      | NothingEnum.NOTHING
      | Array<string | SpecialCharacters | PageItem | NothingEnum.NOTHING>,
  );
  /** The minimum height the cell may shrink to. A cell set to grow automatically can still grow taller than this when content is added; the minimum can also affect how row height is redistributed. */
  get minimumHeight(): number;
  set minimumHeight(value: MeasurementValue);
  /** The maximum height the cell may grow to, even when it is set to grow automatically. Can also affect how row height is redistributed. */
  get maximumHeight(): number;
  set maximumHeight(value: MeasurementValue);
  /** Indicates where to start the row. */
  get startRow(): StartParagraph;
  set startRow(value: StartParagraph);
  /** Whether the row is a body, header, or footer row. A header or footer row must sit at the table's edge or adjoin an existing row of the same type. See {@link RowTypes}. */
  get rowType(): RowTypes;
  set rowType(value: RowTypes);
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
  /** The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. */
  get gradientFillLength(): number;
  set gradientFillLength(value: number);
  /** The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. */
  get gradientFillStart(): number[];
  set gradientFillStart(value: number[]);
  /** The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. */
  get topInset(): number;
  set topInset(value: MeasurementValue);
  /** The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. */
  get leftInset(): number;
  set leftInset(value: MeasurementValue);
  /** The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. */
  get bottomInset(): number;
  set bottomInset(value: MeasurementValue);
  /** The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. */
  get rightInset(): number;
  set rightInset(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The tint (as a percentage) of the fill of the object. */
  get fillTint(): number;
  set fillTint(value: number);
  /** If true, the fill of the object will overprint. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /** If true, draws a diagonal line starting from the top left. */
  get topLeftDiagonalLine(): boolean;
  set topLeftDiagonalLine(value: boolean);
  /** If true, draws a diagonal line starting from the top right. */
  get topRightDiagonalLine(): boolean;
  set topRightDiagonalLine(value: boolean);
  /** If true, draws the diagonal line in front of cell contents. */
  get diagonalLineInFront(): boolean;
  set diagonalLineInFront(value: boolean);
  /** The stroke weight of the cell's diagonal line(s) — see {@link topLeftDiagonalLine} and {@link topRightDiagonalLine}. */
  get diagonalLineStrokeWeight(): number;
  set diagonalLineStrokeWeight(value: MeasurementValue);
  /** The stroke type of the diagonal line(s). */
  get diagonalLineStrokeType(): StrokeStyle;
  set diagonalLineStrokeType(value: StrokeStyle | string);
  /** The diagonal line color, specified as a swatch. */
  get diagonalLineStrokeColor(): Swatch;
  set diagonalLineStrokeColor(value: Swatch | string);
  /** The diagonal line tint (as a percentage). (Range: 0 to 100). */
  get diagonalLineStrokeTint(): number;
  set diagonalLineStrokeTint(value: number);
  /** If true, the diagonal line stroke will overprint. */
  get diagonalLineStrokeOverprint(): boolean;
  set diagonalLineStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapColor(): Swatch;
  set diagonalLineStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapTint(): number;
  set diagonalLineStrokeGapTint(value: number);
  /** If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapOverprint(): boolean;
  set diagonalLineStrokeGapOverprint(value: boolean);
  /** If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. */
  get clipContentToCell(): boolean;
  set clipContentToCell(value: boolean);
  /** How the distance between the first line's baseline and the cell's top inset is measured. See {@link FirstBaseline}. */
  get firstBaselineOffset(): FirstBaseline;
  set firstBaselineOffset(value: FirstBaseline);
  /** The vertical alignment of cell. */
  get verticalJustification(): VerticalJustification;
  set verticalJustification(value: VerticalJustification);
  /** The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. */
  get paragraphSpacingLimit(): number;
  set paragraphSpacingLimit(value: MeasurementValue);
  /** The space between the baseline of the text and the top inset of the frame or cell. */
  get minimumFirstBaselineOffset(): number;
  set minimumFirstBaselineOffset(value: number);
  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): number;
  set rotationAngle(value: number);
  /** The stroke weight of the left edge border stroke. */
  get leftEdgeStrokeWeight(): number;
  set leftEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the left edge. */
  get leftEdgeStrokeType(): StrokeStyle;
  set leftEdgeStrokeType(value: StrokeStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. */
  get leftEdgeStrokeColor(): Swatch;
  set leftEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). */
  get leftEdgeStrokeTint(): number;
  set leftEdgeStrokeTint(value: number);
  /** If true, the left edge border stroke will overprint. */
  get leftEdgeStrokeOverprint(): boolean;
  set leftEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapColor(): Swatch;
  set leftEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapTint(): number;
  set leftEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapOverprint(): boolean;
  set leftEdgeStrokeGapOverprint(value: boolean);
  /** The stroke weight of the top edge border stroke. */
  get topEdgeStrokeWeight(): number;
  set topEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the top edge. */
  get topEdgeStrokeType(): StrokeStyle;
  set topEdgeStrokeType(value: StrokeStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. */
  get topEdgeStrokeColor(): Swatch;
  set topEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). */
  get topEdgeStrokeTint(): number;
  set topEdgeStrokeTint(value: number);
  /** If true, the top edge border stroke will overprint. */
  get topEdgeStrokeOverprint(): boolean;
  set topEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapColor(): Swatch;
  set topEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapTint(): number;
  set topEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapOverprint(): boolean;
  set topEdgeStrokeGapOverprint(value: boolean);
  /** The stroke weight of the right edge border stroke. */
  get rightEdgeStrokeWeight(): number;
  set rightEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the right edge. */
  get rightEdgeStrokeType(): StrokeStyle;
  set rightEdgeStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch, of the right edge border stroke. */
  get rightEdgeStrokeColor(): Swatch;
  set rightEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). */
  get rightEdgeStrokeTint(): number;
  set rightEdgeStrokeTint(value: number);
  /** If true, the right edge border stroke will overprint. */
  get rightEdgeStrokeOverprint(): boolean;
  set rightEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapColor(): Swatch;
  set rightEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapTint(): number;
  set rightEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapOverprint(): boolean;
  set rightEdgeStrokeGapOverprint(value: boolean);
  /** The stroke weight of the bottom edge border stroke. */
  get bottomEdgeStrokeWeight(): number;
  set bottomEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the bottom edge. */
  get bottomEdgeStrokeType(): StrokeStyle;
  set bottomEdgeStrokeType(value: StrokeStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. */
  get bottomEdgeStrokeColor(): Swatch;
  set bottomEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the bottom edge border stroke. */
  get bottomEdgeStrokeTint(): number;
  set bottomEdgeStrokeTint(value: number);
  /** If true, the bottom edge border stroke will overprint. */
  get bottomEdgeStrokeOverprint(): boolean;
  set bottomEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapColor(): Swatch;
  set bottomEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapTint(): number;
  set bottomEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapOverprint(): boolean;
  set bottomEdgeStrokeGapOverprint(value: boolean);
  /** A collection of text objects. */
  readonly texts: Texts<Cell>;
  /** A collection of characters. */
  readonly characters: Characters<Cell>;
  /** A collection of words. */
  readonly words: Words<Cell>;
  /** A collection of lines. */
  readonly lines: Lines<Cell>;
  /** A collection of text columns. */
  readonly textColumns: TextColumns<Cell>;
  /** A collection of paragraphs. */
  readonly paragraphs: Paragraphs<Cell>;
  /** A collection of insertion points. */
  readonly insertionPoints: InsertionPoints<Cell>;
  /** A collection of text style ranges. */
  readonly textStyleRanges: TextStyleRanges<Cell>;
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds glyphs that match the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Text[];
  /**
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Text[];
  /** The object's DOM class name. */
  readonly constructorName: 'Cell';
  /** Resolves the proxy into the individual {@link Cell} objects it stands for. */
  getElements(): Cell[];
  /** The unique ID of the cell, stable across saves and reopens. */
  readonly id: number;
  /** The name of the cell, in the form `"Row n : Column m"`. */
  readonly name: string;
  /** Whether the column is a body column or a repeating header column. */
  get columnType(): ColumnTypes;
  set columnType(value: ColumnTypes);
  /** Forces the text to recompose, applying any pending composition changes. */
  recompose(): void;
  /** Converts bullets and numbering in the cell's text to literal characters. */
  convertBulletsAndNumberingToText(): void;
  /** The {@link XMLItem} this cell is associated with, if the table is tagged. */
  readonly associatedXMLElement: XMLItem;
  /** If `true`, keeps the row with the next row when the table is split across text frames or pages. */
  get keepWithNextRow(): boolean;
  set keepWithNextRow(value: boolean);
  /**
   * If `true`, the cell grows or shrinks automatically to fit its content.
   *
   * Bounded by {@link TableGeometry.maximumHeight} and {@link TableGeometry.minimumHeight}.
   * This is the Row Height control in the Table panel: `At least` sets it `true`,
   * `Exactly` sets it `false`.
   */
  get autoGrow(): boolean;
  set autoGrow(value: boolean);
  /** Whether the cell holds text or a graphic/page item. */
  get cellType(): CellTypeEnum;
  set cellType(value: CellTypeEnum);
  /** The {@link CellStyle} applied to the cell. Accepts a style or its name. */
  get appliedCellStyle(): CellStyle;
  set appliedCellStyle(value: CellStyle | string);
  /** The direction of the text in the cell. */
  get writingDirection(): HorizontalOrVertical;
  set writingDirection(value: HorizontalOrVertical);
  /** The stroke weight of the inner row (horizontal gridline) border strokes. */
  get innerRowStrokeWeight(): number;
  set innerRowStrokeWeight(value: MeasurementValue);
  /** The stroke type of the inner row gridlines. Accepts a {@link StrokeStyle} or its name. */
  get innerRowStrokeType(): StrokeStyle;
  set innerRowStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch, of the inner row gridline stroke. */
  get innerRowStrokeColor(): Swatch;
  set innerRowStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner row gridline stroke. Range `0`–`100`. */
  get innerRowStrokeTint(): number;
  set innerRowStrokeTint(value: number);
  /** If `true`, the inner row gridline stroke will overprint. */
  get innerRowStrokeOverprint(): boolean;
  set innerRowStrokeOverprint(value: boolean);
  /** The swatch applied to the gap of the inner row gridline stroke. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapColor(): Swatch;
  set innerRowStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner row gridline stroke gap color. Range `0`–`100`. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapTint(): number;
  set innerRowStrokeGapTint(value: number);
  /** If `true`, the gap color of the inner row gridline stroke will overprint. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapOverprint(): boolean;
  set innerRowStrokeGapOverprint(value: boolean);
  /** The stroke weight of the inner column (vertical gridline) border strokes. */
  get innerColumnStrokeWeight(): number;
  set innerColumnStrokeWeight(value: MeasurementValue);
  /** The stroke type of the inner column gridlines. Accepts a {@link StrokeStyle} or its name. */
  get innerColumnStrokeType(): StrokeStyle;
  set innerColumnStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch, of the inner column gridline stroke. */
  get innerColumnStrokeColor(): Swatch;
  set innerColumnStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner column gridline stroke. Range `0`–`100`. */
  get innerColumnStrokeTint(): number;
  set innerColumnStrokeTint(value: number);
  /** If `true`, the inner column gridline stroke will overprint. */
  get innerColumnStrokeOverprint(): boolean;
  set innerColumnStrokeOverprint(value: boolean);
  /** The swatch applied to the gap of the inner column gridline stroke. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapColor(): Swatch;
  set innerColumnStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner column gridline stroke gap color. Range `0`–`100`. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapTint(): number;
  set innerColumnStrokeGapTint(value: number);
  /** If `true`, the gap color of the inner column gridline stroke will overprint. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapOverprint(): boolean;
  set innerColumnStrokeGapOverprint(value: boolean);
  /** {@link Footnotes} anchored in this cell's text. */
  readonly footnotes: Footnotes;
  /** {@link Endnotes} anchored in this cell's text. */
  readonly endnotes: Endnotes;
  /** {@link TextVariableInstances} resolved within this cell's text. */
  readonly textVariableInstances: TextVariableInstances;
  /** {@link Tables} nested inside this cell's text. */
  readonly tables: Tables;
  /** {@link Changes} (tracked-change records) in this cell's text. */
  readonly changes: Changes;
  /** {@link Notes} attached to this cell's text. */
  readonly notes: Notes;
  /** {@link HiddenTexts} (conditional/hidden runs) in this cell's text. */
  readonly hiddenTexts: HiddenTexts;
  /** {@link Ovals} (ellipses) directly in this cell. */
  readonly ovals: Ovals<Cell>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this cell. */
  readonly splineItems: SplineItems<Cell>;
  /** All {@link PageItems} directly in this cell, regardless of type. */
  readonly pageItems: PageItems<Cell>;
  /** {@link Rectangles} directly in this cell. */
  readonly rectangles: Rectangles<Cell>;
  /** {@link GraphicLines} directly in this cell. */
  readonly graphicLines: GraphicLines<Cell>;
  /** {@link TextFrames} directly in this cell. */
  readonly textFrames: TextFrames<Cell>;
  /** {@link Polygons} directly in this cell. */
  readonly polygons: Polygons<Cell>;
  /** {@link EndnoteTextFrames} directly in this cell. */
  readonly endnoteTextFrames: EndnoteTextFrames<Cell>;
  /** {@link Groups} directly in this cell. */
  readonly groups: Groups<Cell>;
  /** {@link EPSTexts} directly in this cell. */
  readonly epstexts: EPSTexts<Cell>;
  /** {@link FormFields} of every kind directly in this cell. */
  readonly formFields: FormFields<Cell>;
  /** {@link Buttons} directly in this cell. */
  readonly buttons: Buttons<Cell>;
  /** {@link MultiStateObjects} directly in this cell. */
  readonly multiStateObjects: MultiStateObjects<Cell>;
  /** {@link CheckBoxes} directly in this cell. */
  readonly checkBoxes: CheckBoxes<Cell>;
  /** {@link ComboBoxes} directly in this cell. */
  readonly comboBoxes: ComboBoxes<Cell>;
  /** {@link ListBoxes} directly in this cell. */
  readonly listBoxes: ListBoxes<Cell>;
  /** {@link RadioButtons} directly in this cell. */
  readonly radioButtons: RadioButtons<Cell>;
  /** {@link TextBoxes} directly in this cell. */
  readonly textBoxes: TextBoxes<Cell>;
  /** {@link SignatureFields} directly in this cell. */
  readonly signatureFields: SignatureFields<Cell>;
  /** Every {@link Graphic} anywhere in this cell, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: AnyGraphic[];
  /** Every {@link PageItem} anywhere in this cell, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: AnyPageItem[];
  /**
   * Converts text to outlines, one polygon per line. A single letter with no
   * internal spaces or detached parts yields a single-path polygon.
   * @param deleteOriginal If `true`, deletes the original text; if `false`, adds the outlines as separate object(s) on top of it. Defaults to `true`.
   */
  createOutlines(deleteOriginal?: boolean): PageItem[];
  /** Tags the cell (or its parent story) using the default tags defined in the XML import preferences. */
  autoTag(): void;
  /**
   * Finds text matching the transliterate (character-type) find query.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Text[];
  /**
   * Finds text matching the transliterate find query and applies the change settings.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Text[];
  /** Deletes the cell. */
  remove(): void;
  /**
   * Merges this cell with another cell, row, or column into a single cell.
   * @param withItems The cell, row, or column to merge with.
   */
  merge(withItems?: Cell | Row | Column): Cell;
  /** Unmerges every merged cell that overlaps this cell, restoring the original grid. */
  unmerge(): Cell[];
  /**
   * Splits the cell along the given axis.
   * @param using The direction in which to split the cell.
   */
  split(using: HorizontalOrVertical): void;
  /**
   * Converts the cell to a different {@link CellTypeEnum}.
   * @param finalCellType The cell type to convert to.
   * @param flagToPreserveData If `true`, preserves the cell's existing content; converting a graphic cell to a text cell makes the page item inline. Defaults to `false`.
   */
  convertCellType(finalCellType: CellTypeEnum, flagToPreserveData?: boolean): void;
  /**
   * Clears the cell's style overrides.
   * @param clearingOverridesThroughRootCellStyle If `true`, clears every override regardless of whether it is also defined in the underlying cell style. Defaults to `false`.
   */
  clearCellStyleOverrides(clearingOverridesThroughRootCellStyle?: boolean): void;
  /**
   * Selects the cell in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): void;
}


/**
 * The broadcast proxy for {@link Cell} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Cell} there.
 */
export interface CellPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Table)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<CellPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<CellPlural, 'plural'>);
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
  /** The number of rows that the object spans. */
  readonly rowSpan: (number)[];
  /** The number of columns that the object spans. */
  readonly columnSpan: (number)[];
  /** If true, the story has overset text. */
  readonly overflows: (boolean)[];
  /** The parent row of the cell. */
  readonly parentRow: (Row)[];
  /** The parent column of the cell. */
  readonly parentColumn: (Column)[];
  /** A collection of table cells. */
  readonly cells: Cells;
  /** A collection of table rows. */
  readonly rows: Rows;
  /** A collection of table columns. */
  readonly columns: Columns;
  /** The height of the cell. For a table or column, specifies the sum of the row heights. */
  get height(): (number)[];
  set height(value: MeasurementValue);
  /** The width of the cell. For a table or row, specifies the sum of the column widths. */
  get width(): (number)[];
  set width(value: MeasurementValue);
  /**
   * The text contents.
   *
   * A single cell reads back one value; a row, column or table reads back an
   * array — the first value is the left-most cell of a row or the top-most cell
   * of a column, then each following cell in turn. Assigning a plain string to a
   * row or column puts that same string in every one of its cells, and assigning
   * an array shorter than the cell count leaves the remaining cells unchanged.
   */
  get contents(): (PageItem | string | SpecialCharacters | Array<string | SpecialCharacters | PageItem>
  )[];
  set contents(
    value:
      | PageItem
      | string
      | SpecialCharacters
      | NothingEnum.NOTHING
      | Array<string | SpecialCharacters | PageItem | NothingEnum.NOTHING>,
  );
  /** The minimum height the cell may shrink to. A cell set to grow automatically can still grow taller than this when content is added; the minimum can also affect how row height is redistributed. */
  get minimumHeight(): (number)[];
  set minimumHeight(value: MeasurementValue);
  /** The maximum height the cell may grow to, even when it is set to grow automatically. Can also affect how row height is redistributed. */
  get maximumHeight(): (number)[];
  set maximumHeight(value: MeasurementValue);
  /** Indicates where to start the row. */
  get startRow(): (StartParagraph)[];
  set startRow(value: StartParagraph);
  /** Whether the row is a body, header, or footer row. A header or footer row must sit at the table's edge or adjoin an existing row of the same type. See {@link RowTypes}. */
  get rowType(): (RowTypes)[];
  set rowType(value: RowTypes);
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
  /** The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. */
  get gradientFillLength(): (number)[];
  set gradientFillLength(value: number);
  /** The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. */
  get gradientFillStart(): (number[])[];
  set gradientFillStart(value: number[]);
  /** The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. */
  get topInset(): (number)[];
  set topInset(value: MeasurementValue);
  /** The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. */
  get leftInset(): (number)[];
  set leftInset(value: MeasurementValue);
  /** The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. */
  get bottomInset(): (number)[];
  set bottomInset(value: MeasurementValue);
  /** The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. */
  get rightInset(): (number)[];
  set rightInset(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The tint (as a percentage) of the fill of the object. */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** If true, the fill of the object will overprint. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /** If true, draws a diagonal line starting from the top left. */
  get topLeftDiagonalLine(): (boolean)[];
  set topLeftDiagonalLine(value: boolean);
  /** If true, draws a diagonal line starting from the top right. */
  get topRightDiagonalLine(): (boolean)[];
  set topRightDiagonalLine(value: boolean);
  /** If true, draws the diagonal line in front of cell contents. */
  get diagonalLineInFront(): (boolean)[];
  set diagonalLineInFront(value: boolean);
  /** The stroke weight of the cell's diagonal line(s) — see {@link topLeftDiagonalLine} and {@link topRightDiagonalLine}. */
  get diagonalLineStrokeWeight(): (number)[];
  set diagonalLineStrokeWeight(value: MeasurementValue);
  /** The stroke type of the diagonal line(s). */
  get diagonalLineStrokeType(): (StrokeStyle)[];
  set diagonalLineStrokeType(value: StrokeStyle | string);
  /** The diagonal line color, specified as a swatch. */
  get diagonalLineStrokeColor(): (Swatch)[];
  set diagonalLineStrokeColor(value: Swatch | string);
  /** The diagonal line tint (as a percentage). (Range: 0 to 100). */
  get diagonalLineStrokeTint(): (number)[];
  set diagonalLineStrokeTint(value: number);
  /** If true, the diagonal line stroke will overprint. */
  get diagonalLineStrokeOverprint(): (boolean)[];
  set diagonalLineStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapColor(): (Swatch)[];
  set diagonalLineStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapTint(): (number)[];
  set diagonalLineStrokeGapTint(value: number);
  /** If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapOverprint(): (boolean)[];
  set diagonalLineStrokeGapOverprint(value: boolean);
  /** If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. */
  get clipContentToCell(): (boolean)[];
  set clipContentToCell(value: boolean);
  /** How the distance between the first line's baseline and the cell's top inset is measured. See {@link FirstBaseline}. */
  get firstBaselineOffset(): (FirstBaseline)[];
  set firstBaselineOffset(value: FirstBaseline);
  /** The vertical alignment of cell. */
  get verticalJustification(): (VerticalJustification)[];
  set verticalJustification(value: VerticalJustification);
  /** The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. */
  get paragraphSpacingLimit(): (number)[];
  set paragraphSpacingLimit(value: MeasurementValue);
  /** The space between the baseline of the text and the top inset of the frame or cell. */
  get minimumFirstBaselineOffset(): (number)[];
  set minimumFirstBaselineOffset(value: number);
  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): (number)[];
  set rotationAngle(value: number);
  /** The stroke weight of the left edge border stroke. */
  get leftEdgeStrokeWeight(): (number)[];
  set leftEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the left edge. */
  get leftEdgeStrokeType(): (StrokeStyle)[];
  set leftEdgeStrokeType(value: StrokeStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. */
  get leftEdgeStrokeColor(): (Swatch)[];
  set leftEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). */
  get leftEdgeStrokeTint(): (number)[];
  set leftEdgeStrokeTint(value: number);
  /** If true, the left edge border stroke will overprint. */
  get leftEdgeStrokeOverprint(): (boolean)[];
  set leftEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapColor(): (Swatch)[];
  set leftEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapTint(): (number)[];
  set leftEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapOverprint(): (boolean)[];
  set leftEdgeStrokeGapOverprint(value: boolean);
  /** The stroke weight of the top edge border stroke. */
  get topEdgeStrokeWeight(): (number)[];
  set topEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the top edge. */
  get topEdgeStrokeType(): (StrokeStyle)[];
  set topEdgeStrokeType(value: StrokeStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. */
  get topEdgeStrokeColor(): (Swatch)[];
  set topEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). */
  get topEdgeStrokeTint(): (number)[];
  set topEdgeStrokeTint(value: number);
  /** If true, the top edge border stroke will overprint. */
  get topEdgeStrokeOverprint(): (boolean)[];
  set topEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapColor(): (Swatch)[];
  set topEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapTint(): (number)[];
  set topEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapOverprint(): (boolean)[];
  set topEdgeStrokeGapOverprint(value: boolean);
  /** The stroke weight of the right edge border stroke. */
  get rightEdgeStrokeWeight(): (number)[];
  set rightEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the right edge. */
  get rightEdgeStrokeType(): (StrokeStyle)[];
  set rightEdgeStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch, of the right edge border stroke. */
  get rightEdgeStrokeColor(): (Swatch)[];
  set rightEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). */
  get rightEdgeStrokeTint(): (number)[];
  set rightEdgeStrokeTint(value: number);
  /** If true, the right edge border stroke will overprint. */
  get rightEdgeStrokeOverprint(): (boolean)[];
  set rightEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapColor(): (Swatch)[];
  set rightEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapTint(): (number)[];
  set rightEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapOverprint(): (boolean)[];
  set rightEdgeStrokeGapOverprint(value: boolean);
  /** The stroke weight of the bottom edge border stroke. */
  get bottomEdgeStrokeWeight(): (number)[];
  set bottomEdgeStrokeWeight(value: MeasurementValue);
  /** The stroke type of the bottom edge. */
  get bottomEdgeStrokeType(): (StrokeStyle)[];
  set bottomEdgeStrokeType(value: StrokeStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. */
  get bottomEdgeStrokeColor(): (Swatch)[];
  set bottomEdgeStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the bottom edge border stroke. */
  get bottomEdgeStrokeTint(): (number)[];
  set bottomEdgeStrokeTint(value: number);
  /** If true, the bottom edge border stroke will overprint. */
  get bottomEdgeStrokeOverprint(): (boolean)[];
  set bottomEdgeStrokeOverprint(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapColor(): (Swatch)[];
  set bottomEdgeStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapTint(): (number)[];
  set bottomEdgeStrokeGapTint(value: number);
  /** If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapOverprint(): (boolean)[];
  set bottomEdgeStrokeGapOverprint(value: boolean);
  /** A collection of text objects. */
  readonly texts: Texts<Cell>;
  /** A collection of characters. */
  readonly characters: Characters<Cell>;
  /** A collection of words. */
  readonly words: Words<Cell>;
  /** A collection of lines. */
  readonly lines: Lines<Cell>;
  /** A collection of text columns. */
  readonly textColumns: TextColumns<Cell>;
  /** A collection of paragraphs. */
  readonly paragraphs: Paragraphs<Cell>;
  /** A collection of insertion points. */
  readonly insertionPoints: InsertionPoints<Cell>;
  /** A collection of text style ranges. */
  readonly textStyleRanges: TextStyleRanges<Cell>;
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds glyphs that match the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): (Text[])[];
  /** The object's DOM class name. */
  readonly constructorName: 'Cell';
  /** Resolves the proxy into the individual {@link Cell} objects it stands for. */
  getElements(): Cell[];
  /** The unique ID of the cell, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the cell, in the form `"Row n : Column m"`. */
  readonly name: (string)[];
  /** Whether the column is a body column or a repeating header column. */
  get columnType(): (ColumnTypes)[];
  set columnType(value: ColumnTypes);
  /** Forces the text to recompose, applying any pending composition changes. */
  recompose(): (void)[];
  /** Converts bullets and numbering in the cell's text to literal characters. */
  convertBulletsAndNumberingToText(): (void)[];
  /** The {@link XMLItem} this cell is associated with, if the table is tagged. */
  readonly associatedXMLElement: (XMLItem)[];
  /** If `true`, keeps the row with the next row when the table is split across text frames or pages. */
  get keepWithNextRow(): (boolean)[];
  set keepWithNextRow(value: boolean);
  /**
   * If `true`, the cell grows or shrinks automatically to fit its content.
   *
   * Bounded by {@link TableGeometry.maximumHeight} and {@link TableGeometry.minimumHeight}.
   * This is the Row Height control in the Table panel: `At least` sets it `true`,
   * `Exactly` sets it `false`.
   */
  get autoGrow(): (boolean)[];
  set autoGrow(value: boolean);
  /** Whether the cell holds text or a graphic/page item. */
  get cellType(): (CellTypeEnum)[];
  set cellType(value: CellTypeEnum);
  /** The {@link CellStyle} applied to the cell. Accepts a style or its name. */
  get appliedCellStyle(): (CellStyle)[];
  set appliedCellStyle(value: CellStyle | string);
  /** The direction of the text in the cell. */
  get writingDirection(): (HorizontalOrVertical)[];
  set writingDirection(value: HorizontalOrVertical);
  /** The stroke weight of the inner row (horizontal gridline) border strokes. */
  get innerRowStrokeWeight(): (number)[];
  set innerRowStrokeWeight(value: MeasurementValue);
  /** The stroke type of the inner row gridlines. Accepts a {@link StrokeStyle} or its name. */
  get innerRowStrokeType(): (StrokeStyle)[];
  set innerRowStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch, of the inner row gridline stroke. */
  get innerRowStrokeColor(): (Swatch)[];
  set innerRowStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner row gridline stroke. Range `0`–`100`. */
  get innerRowStrokeTint(): (number)[];
  set innerRowStrokeTint(value: number);
  /** If `true`, the inner row gridline stroke will overprint. */
  get innerRowStrokeOverprint(): (boolean)[];
  set innerRowStrokeOverprint(value: boolean);
  /** The swatch applied to the gap of the inner row gridline stroke. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapColor(): (Swatch)[];
  set innerRowStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner row gridline stroke gap color. Range `0`–`100`. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapTint(): (number)[];
  set innerRowStrokeGapTint(value: number);
  /** If `true`, the gap color of the inner row gridline stroke will overprint. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapOverprint(): (boolean)[];
  set innerRowStrokeGapOverprint(value: boolean);
  /** The stroke weight of the inner column (vertical gridline) border strokes. */
  get innerColumnStrokeWeight(): (number)[];
  set innerColumnStrokeWeight(value: MeasurementValue);
  /** The stroke type of the inner column gridlines. Accepts a {@link StrokeStyle} or its name. */
  get innerColumnStrokeType(): (StrokeStyle)[];
  set innerColumnStrokeType(value: StrokeStyle | string);
  /** The color, specified as a swatch, of the inner column gridline stroke. */
  get innerColumnStrokeColor(): (Swatch)[];
  set innerColumnStrokeColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner column gridline stroke. Range `0`–`100`. */
  get innerColumnStrokeTint(): (number)[];
  set innerColumnStrokeTint(value: number);
  /** If `true`, the inner column gridline stroke will overprint. */
  get innerColumnStrokeOverprint(): (boolean)[];
  set innerColumnStrokeOverprint(value: boolean);
  /** The swatch applied to the gap of the inner column gridline stroke. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapColor(): (Swatch)[];
  set innerColumnStrokeGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the inner column gridline stroke gap color. Range `0`–`100`. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapTint(): (number)[];
  set innerColumnStrokeGapTint(value: number);
  /** If `true`, the gap color of the inner column gridline stroke will overprint. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapOverprint(): (boolean)[];
  set innerColumnStrokeGapOverprint(value: boolean);
  /** {@link Footnotes} anchored in this cell's text. */
  readonly footnotes: Footnotes;
  /** {@link Endnotes} anchored in this cell's text. */
  readonly endnotes: Endnotes;
  /** {@link TextVariableInstances} resolved within this cell's text. */
  readonly textVariableInstances: TextVariableInstances;
  /** {@link Tables} nested inside this cell's text. */
  readonly tables: Tables;
  /** {@link Changes} (tracked-change records) in this cell's text. */
  readonly changes: Changes;
  /** {@link Notes} attached to this cell's text. */
  readonly notes: Notes;
  /** {@link HiddenTexts} (conditional/hidden runs) in this cell's text. */
  readonly hiddenTexts: HiddenTexts;
  /** {@link Ovals} (ellipses) directly in this cell. */
  readonly ovals: Ovals<Cell>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this cell. */
  readonly splineItems: SplineItems<Cell>;
  /** All {@link PageItems} directly in this cell, regardless of type. */
  readonly pageItems: PageItems<Cell>;
  /** {@link Rectangles} directly in this cell. */
  readonly rectangles: Rectangles<Cell>;
  /** {@link GraphicLines} directly in this cell. */
  readonly graphicLines: GraphicLines<Cell>;
  /** {@link TextFrames} directly in this cell. */
  readonly textFrames: TextFrames<Cell>;
  /** {@link Polygons} directly in this cell. */
  readonly polygons: Polygons<Cell>;
  /** {@link EndnoteTextFrames} directly in this cell. */
  readonly endnoteTextFrames: EndnoteTextFrames<Cell>;
  /** {@link Groups} directly in this cell. */
  readonly groups: Groups<Cell>;
  /** {@link EPSTexts} directly in this cell. */
  readonly epstexts: EPSTexts<Cell>;
  /** {@link FormFields} of every kind directly in this cell. */
  readonly formFields: FormFields<Cell>;
  /** {@link Buttons} directly in this cell. */
  readonly buttons: Buttons<Cell>;
  /** {@link MultiStateObjects} directly in this cell. */
  readonly multiStateObjects: MultiStateObjects<Cell>;
  /** {@link CheckBoxes} directly in this cell. */
  readonly checkBoxes: CheckBoxes<Cell>;
  /** {@link ComboBoxes} directly in this cell. */
  readonly comboBoxes: ComboBoxes<Cell>;
  /** {@link ListBoxes} directly in this cell. */
  readonly listBoxes: ListBoxes<Cell>;
  /** {@link RadioButtons} directly in this cell. */
  readonly radioButtons: RadioButtons<Cell>;
  /** {@link TextBoxes} directly in this cell. */
  readonly textBoxes: TextBoxes<Cell>;
  /** {@link SignatureFields} directly in this cell. */
  readonly signatureFields: SignatureFields<Cell>;
  /** Every {@link Graphic} anywhere in this cell, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: (AnyGraphic[])[];
  /** Every {@link PageItem} anywhere in this cell, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: (AnyPageItem[])[];
  /**
   * Converts text to outlines, one polygon per line. A single letter with no
   * internal spaces or detached parts yields a single-path polygon.
   * @param deleteOriginal If `true`, deletes the original text; if `false`, adds the outlines as separate object(s) on top of it. Defaults to `true`.
   */
  createOutlines(deleteOriginal?: boolean): (PageItem[])[];
  /** Tags the cell (or its parent story) using the default tags defined in the XML import preferences. */
  autoTag(): (void)[];
  /**
   * Finds text matching the transliterate (character-type) find query.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text matching the transliterate find query and applies the change settings.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): (Text[])[];
  /** Deletes the cell. */
  remove(): (void)[];
  /**
   * Merges this cell with another cell, row, or column into a single cell.
   * @param withItems The cell, row, or column to merge with.
   */
  merge(withItems?: Cell | Row | Column): (Cell)[];
  /** Unmerges every merged cell that overlaps this cell, restoring the original grid. */
  unmerge(): (Cell[])[];
  /**
   * Splits the cell along the given axis.
   * @param using The direction in which to split the cell.
   */
  split(using: HorizontalOrVertical): (void)[];
  /**
   * Converts the cell to a different {@link CellTypeEnum}.
   * @param finalCellType The cell type to convert to.
   * @param flagToPreserveData If `true`, preserves the cell's existing content; converting a graphic cell to a text cell makes the page item inline. Defaults to `false`.
   */
  convertCellType(finalCellType: CellTypeEnum, flagToPreserveData?: boolean): (void)[];
  /**
   * Clears the cell's style overrides.
   * @param clearingOverridesThroughRootCellStyle If `true`, clears every override regardless of whether it is also defined in the underlying cell style. Defaults to `false`.
   */
  clearCellStyleOverrides(clearingOverridesThroughRootCellStyle?: boolean): (void)[];
  /**
   * Selects the cell in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): (void)[];
}
