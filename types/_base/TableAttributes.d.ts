/**
 * TableAttributes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { CellStyle } from '../CellStyle';
import type { Cells } from '../Cells';
import type { Column } from '../Column';
import type { Columns } from '../Columns';
import type { FirstBaseline } from '../Enums/FirstBaseline';
import type { HorizontalOrVertical } from '../Enums/HorizontalOrVertical';
import type { NothingEnum } from '../Enums/NothingEnum';
import type { RowTypes } from '../Enums/RowTypes';
import type { SpecialCharacters } from '../Enums/SpecialCharacters';
import type { StartParagraph } from '../Enums/StartParagraph';
import type { StrokeOrderTypes } from '../Enums/StrokeOrderTypes';
import type { VerticalJustification } from '../Enums/VerticalJustification';
import type { PageItem } from '../PageItem';
import type { ParagraphStyle } from '../ParagraphStyle';
import type { Row } from '../Row';
import type { Rows } from '../Rows';
import type { StrokeStyle } from '../StrokeStyle';
import type { Swatch } from '../Swatch';
import type { MeasurementValue } from './Types';
import type { TableCaptionPositionOptions } from '../Enums/TableCaptionPositionOptions';
import type { Cell } from '../Cell';
import type { Table } from '../Table';
import type { TableStyle } from '../TableStyle';

/**
 * Grid geometry shared by {@link Cell}, {@link Row}, and {@link Column}:
 * size, span, and position within the table.
 */
export interface TableGeometry<M extends Mode = 'single'> {
  /** The number of rows that the object spans. */
  readonly rowSpan: Read<M, number>;

  /** The number of columns that the object spans. */
  readonly columnSpan: Read<M, number>;

  /** If true, the story has overset text. */
  readonly overflows: Read<M, boolean>;

  /** The parent row of the cell. */
  readonly parentRow: Read<M, Row>;

  /** The parent column of the cell. */
  readonly parentColumn: Read<M, Column>;

  /** A collection of table cells. */
  readonly cells: Cells;

  /** A collection of table rows. */
  readonly rows: Rows;

  /** A collection of table columns. */
  readonly columns: Columns;

  /** The height of the cell. For a table or column, specifies the sum of the row heights. */
  get height(): Read<M, number>;
  set height(value: MeasurementValue);

  /** The width of the cell. For a table or row, specifies the sum of the column widths. */
  get width(): Read<M, number>;
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
  get contents(): Read<
    M,
    PageItem | string | SpecialCharacters | Array<string | SpecialCharacters | PageItem>
  >;
  set contents(
    value:
      | PageItem
      | string
      | SpecialCharacters
      | NothingEnum.NOTHING
      | Array<string | SpecialCharacters | PageItem | NothingEnum.NOTHING>,
  );

  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): Read<M, number>;
  set rotationAngle(value: number);

  /** The minimum height the cell may shrink to. A cell set to grow automatically can still grow taller than this when content is added; the minimum can also affect how row height is redistributed. */
  get minimumHeight(): Read<M, number>;
  set minimumHeight(value: MeasurementValue);

  /** The maximum height the cell may grow to, even when it is set to grow automatically. Can also affect how row height is redistributed. */
  get maximumHeight(): Read<M, number>;
  set maximumHeight(value: MeasurementValue);

  /** Indicates where to start the row. */
  get startRow(): Read<M, StartParagraph>;
  set startRow(value: StartParagraph);

  /** Whether the row is a body, header, or footer row. A header or footer row must sit at the table's edge or adjoin an existing row of the same type. See {@link RowTypes}. */
  get rowType(): Read<M, RowTypes>;
  set rowType(value: RowTypes);

  /** The direction of the text in the cell. */
  get writingDirection(): Read<M, HorizontalOrVertical>;
  set writingDirection(value: HorizontalOrVertical);

}

/** Cell-level formatting members shared by the live {@link TableCellAttributes} and style-definition {@link CellStyleAttributes}. */
/**
 *
 * - A live object always resolves every attribute, and reports the FIRST value
 *   across a mixed range rather than a "mixed" marker. Assigning
 *   `NothingEnum.NOTHING` to one throws. Binds all three to `never`.
 * - A SPARSE style (`CharacterStyle`, `CellStyle`) carries only what was set on
 *   it, so an unset attribute reads back `NothingEnum.NOTHING` when it is
 *   scalar-valued and `null` when it is object-valued.
 * - A COMPLETE style (`ParagraphStyle`, `TableStyle`, `ObjectStyle`) always
 *   resolves a value like a live object, but still accepts
 *   `NothingEnum.NOTHING` on assignment, meaning "revert to the default".
 *
 * `NGet` is the extra read type for scalar members, `NObj` for object-valued
 * ones, and `NSet` the extra write type. All default to `never`, which unions
 * away, so an unbound consumer keeps the live shape.
 */
export interface TableCellAttributesBase<M extends Mode = 'single', NGet = never, NObj = never, NSet = never> {
  /** The left inset of the graphic cell. */
  get graphicLeftInset(): Read<M, number | NGet>;
  set graphicLeftInset(value: MeasurementValue | NSet);

  /** The top inset of the graphic cell. */
  get graphicTopInset(): Read<M, number | NGet>;
  set graphicTopInset(value: MeasurementValue | NSet);

  /** The right inset of the graphic cell. */
  get graphicRightInset(): Read<M, number | NGet>;
  set graphicRightInset(value: MeasurementValue | NSet);

  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): Read<M, number | NGet>;
  set graphicBottomInset(value: MeasurementValue | NSet);

  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): Read<M, boolean | NGet>;
  set clipContentToGraphicCell(value: boolean | NSet);

  /** The top inset of the text cell. */
  get textTopInset(): Read<M, number | NGet>;
  set textTopInset(value: MeasurementValue | NSet);

  /** The left inset of the text cell. */
  get textLeftInset(): Read<M, number | NGet>;
  set textLeftInset(value: MeasurementValue | NSet);

  /** The bottom inset of the text cell. */
  get textBottomInset(): Read<M, number | NGet>;
  set textBottomInset(value: MeasurementValue | NSet);

  /** The right inset of the text cell. */
  get textRightInset(): Read<M, number | NGet>;
  set textRightInset(value: MeasurementValue | NSet);

  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): Read<M, boolean | NGet>;
  set clipContentToTextCell(value: boolean | NSet);

  /** The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. */
  get gradientFillLength(): Read<M, number | NGet>;
  set gradientFillLength(value: number | NSet);

  /** The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). */
  get gradientFillAngle(): Read<M, number | NGet>;
  set gradientFillAngle(value: number | NSet);

  /** The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. */
  get gradientFillStart(): Read<M, number[] | NGet>;
  set gradientFillStart(value: number[] | NSet);

  /** The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. */
  get topInset(): Read<M, number | NGet>;
  set topInset(value: MeasurementValue | NSet);

  /** The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. */
  get leftInset(): Read<M, number | NGet>;
  set leftInset(value: MeasurementValue | NSet);

  /** The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. */
  get bottomInset(): Read<M, number | NGet>;
  set bottomInset(value: MeasurementValue | NSet);

  /** The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. */
  get rightInset(): Read<M, number | NGet>;
  set rightInset(value: MeasurementValue | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. */
  get fillColor(): Read<M, Swatch | NObj>;
  set fillColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the fill of the object. */
  get fillTint(): Read<M, number | NGet>;
  set fillTint(value: number | NSet);

  /** If true, the fill of the object will overprint. */
  get overprintFill(): Read<M, boolean | NGet>;
  set overprintFill(value: boolean | NSet);

  /** If true, draws a diagonal line starting from the top left. */
  get topLeftDiagonalLine(): Read<M, boolean | NGet>;
  set topLeftDiagonalLine(value: boolean | NSet);

  /** If true, draws a diagonal line starting from the top right. */
  get topRightDiagonalLine(): Read<M, boolean | NGet>;
  set topRightDiagonalLine(value: boolean | NSet);

  /** If true, draws the diagonal line in front of cell contents. */
  get diagonalLineInFront(): Read<M, boolean | NGet>;
  set diagonalLineInFront(value: boolean | NSet);

  /** The stroke weight of the cell's diagonal line(s) — see {@link topLeftDiagonalLine} and {@link topRightDiagonalLine}. */
  get diagonalLineStrokeWeight(): Read<M, number | NGet>;
  set diagonalLineStrokeWeight(value: MeasurementValue | NSet);

  /** The stroke type of the diagonal line(s). */
  get diagonalLineStrokeType(): Read<M, StrokeStyle | NObj>;
  set diagonalLineStrokeType(value: StrokeStyle | string | NSet);

  /** The diagonal line color, specified as a swatch. */
  get diagonalLineStrokeColor(): Read<M, Swatch | NObj>;
  set diagonalLineStrokeColor(value: Swatch | string | NSet);

  /** The diagonal line tint (as a percentage). (Range: 0 to 100). */
  get diagonalLineStrokeTint(): Read<M, number | NGet>;
  set diagonalLineStrokeTint(value: number | NSet);

  /** If true, the diagonal line stroke will overprint. */
  get diagonalLineStrokeOverprint(): Read<M, boolean | NGet>;
  set diagonalLineStrokeOverprint(value: boolean | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapColor(): Read<M, Swatch | NObj>;
  set diagonalLineStrokeGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapTint(): Read<M, number | NGet>;
  set diagonalLineStrokeGapTint(value: number | NSet);

  /** If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapOverprint(): Read<M, boolean | NGet>;
  set diagonalLineStrokeGapOverprint(value: boolean | NSet);

  /** If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. */
  get clipContentToCell(): Read<M, boolean | NGet>;
  set clipContentToCell(value: boolean | NSet);

  /** How the distance between the first line's baseline and the cell's top inset is measured. See {@link FirstBaseline}. */
  get firstBaselineOffset(): Read<M, FirstBaseline | NGet>;
  set firstBaselineOffset(value: FirstBaseline | NSet);

  /** The vertical alignment of cell. */
  get verticalJustification(): Read<M, VerticalJustification | NGet>;
  set verticalJustification(value: VerticalJustification | NSet);

  /** The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. */
  get paragraphSpacingLimit(): Read<M, number | NGet>;
  set paragraphSpacingLimit(value: MeasurementValue | NSet);

  /** The space between the baseline of the text and the top inset of the frame or cell. */
  get minimumFirstBaselineOffset(): Read<M, number | NGet>;
  set minimumFirstBaselineOffset(value: number | NSet);

  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): Read<M, number | NGet>;
  set rotationAngle(value: number | NSet);

  /** The stroke weight of the left edge border stroke. */
  get leftEdgeStrokeWeight(): Read<M, number | NGet>;
  set leftEdgeStrokeWeight(value: MeasurementValue | NSet);

  /** The stroke type of the left edge. */
  get leftEdgeStrokeType(): Read<M, StrokeStyle | NObj>;
  set leftEdgeStrokeType(value: StrokeStyle | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. */
  get leftEdgeStrokeColor(): Read<M, Swatch | NObj>;
  set leftEdgeStrokeColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). */
  get leftEdgeStrokeTint(): Read<M, number | NGet>;
  set leftEdgeStrokeTint(value: number | NSet);

  /** If true, the left edge border stroke will overprint. */
  get leftEdgeStrokeOverprint(): Read<M, boolean | NGet>;
  set leftEdgeStrokeOverprint(value: boolean | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapColor(): Read<M, Swatch | NObj>;
  set leftEdgeStrokeGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapTint(): Read<M, number | NGet>;
  set leftEdgeStrokeGapTint(value: number | NSet);

  /** If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapOverprint(): Read<M, boolean | NGet>;
  set leftEdgeStrokeGapOverprint(value: boolean | NSet);

  /** The stroke weight of the top edge border stroke. */
  get topEdgeStrokeWeight(): Read<M, number | NGet>;
  set topEdgeStrokeWeight(value: MeasurementValue | NSet);

  /** The stroke type of the top edge. */
  get topEdgeStrokeType(): Read<M, StrokeStyle | NObj>;
  set topEdgeStrokeType(value: StrokeStyle | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. */
  get topEdgeStrokeColor(): Read<M, Swatch | NObj>;
  set topEdgeStrokeColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). */
  get topEdgeStrokeTint(): Read<M, number | NGet>;
  set topEdgeStrokeTint(value: number | NSet);

  /** If true, the top edge border stroke will overprint. */
  get topEdgeStrokeOverprint(): Read<M, boolean | NGet>;
  set topEdgeStrokeOverprint(value: boolean | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapColor(): Read<M, Swatch | NObj>;
  set topEdgeStrokeGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapTint(): Read<M, number | NGet>;
  set topEdgeStrokeGapTint(value: number | NSet);

  /** If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapOverprint(): Read<M, boolean | NGet>;
  set topEdgeStrokeGapOverprint(value: boolean | NSet);

  /** The stroke weight of the right edge border stroke. */
  get rightEdgeStrokeWeight(): Read<M, number | NGet>;
  set rightEdgeStrokeWeight(value: MeasurementValue | NSet);

  /** The stroke type of the right edge. */
  get rightEdgeStrokeType(): Read<M, StrokeStyle | NObj>;
  set rightEdgeStrokeType(value: StrokeStyle | string | NSet);

  /** The color, specified as a swatch, of the right edge border stroke. */
  get rightEdgeStrokeColor(): Read<M, Swatch | NObj>;
  set rightEdgeStrokeColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). */
  get rightEdgeStrokeTint(): Read<M, number | NGet>;
  set rightEdgeStrokeTint(value: number | NSet);

  /** If true, the right edge border stroke will overprint. */
  get rightEdgeStrokeOverprint(): Read<M, boolean | NGet>;
  set rightEdgeStrokeOverprint(value: boolean | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapColor(): Read<M, Swatch | NObj>;
  set rightEdgeStrokeGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapTint(): Read<M, number | NGet>;
  set rightEdgeStrokeGapTint(value: number | NSet);

  /** If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapOverprint(): Read<M, boolean | NGet>;
  set rightEdgeStrokeGapOverprint(value: boolean | NSet);

  /** The stroke weight of the bottom edge border stroke. */
  get bottomEdgeStrokeWeight(): Read<M, number | NGet>;
  set bottomEdgeStrokeWeight(value: MeasurementValue | NSet);

  /** The stroke type of the bottom edge. */
  get bottomEdgeStrokeType(): Read<M, StrokeStyle | NObj>;
  set bottomEdgeStrokeType(value: StrokeStyle | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. */
  get bottomEdgeStrokeColor(): Read<M, Swatch | NObj>;
  set bottomEdgeStrokeColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the bottom edge border stroke. */
  get bottomEdgeStrokeTint(): Read<M, number | NGet>;
  set bottomEdgeStrokeTint(value: number | NSet);

  /** If true, the bottom edge border stroke will overprint. */
  get bottomEdgeStrokeOverprint(): Read<M, boolean | NGet>;
  set bottomEdgeStrokeOverprint(value: boolean | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapColor(): Read<M, Swatch | NObj>;
  set bottomEdgeStrokeGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapTint(): Read<M, number | NGet>;
  set bottomEdgeStrokeGapTint(value: number | NSet);

  /** If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapOverprint(): Read<M, boolean | NGet>;
  set bottomEdgeStrokeGapOverprint(value: boolean | NSet);
}

/**
 * Live cell formatting: edge and inner strokes, diagonal lines, text and
 * graphic insets, vertical justification, and first-baseline offset.
 *
 * Available on {@link Cell}, {@link Row}, and {@link Column}. The
 * style-definition twin is {@link CellStyleAttributes}.
 */
export interface TableCellAttributes<M extends Mode = 'single'> extends TableCellAttributesBase<M> {

  /** The left inset of the graphic cell. */
  get graphicLeftInset(): Read<M, number>;
  set graphicLeftInset(value: MeasurementValue);

  /** The top inset of the graphic cell. */
  get graphicTopInset(): Read<M, number>;
  set graphicTopInset(value: MeasurementValue);

  /** The right inset of the graphic cell. */
  get graphicRightInset(): Read<M, number>;
  set graphicRightInset(value: MeasurementValue);

  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): Read<M, number>;
  set graphicBottomInset(value: MeasurementValue);

  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): Read<M, boolean>;
  set clipContentToGraphicCell(value: boolean);

  /** The top inset of the text cell. */
  get textTopInset(): Read<M, number>;
  set textTopInset(value: MeasurementValue);

  /** The left inset of the text cell. */
  get textLeftInset(): Read<M, number>;
  set textLeftInset(value: MeasurementValue);

  /** The bottom inset of the text cell. */
  get textBottomInset(): Read<M, number>;
  set textBottomInset(value: MeasurementValue);

  /** The right inset of the text cell. */
  get textRightInset(): Read<M, number>;
  set textRightInset(value: MeasurementValue);

  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): Read<M, boolean>;
  set clipContentToTextCell(value: boolean);

  /** The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. */
  get gradientFillLength(): Read<M, number>;
  set gradientFillLength(value: number);

  /** The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). */
  get gradientFillAngle(): Read<M, number>;
  set gradientFillAngle(value: number);

  /** The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. */
  get gradientFillStart(): Read<M, number[]>;
  set gradientFillStart(value: number[]);

  /** The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. */
  get topInset(): Read<M, number>;
  set topInset(value: MeasurementValue);

  /** The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. */
  get leftInset(): Read<M, number>;
  set leftInset(value: MeasurementValue);

  /** The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. */
  get bottomInset(): Read<M, number>;
  set bottomInset(value: MeasurementValue);

  /** The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. */
  get rightInset(): Read<M, number>;
  set rightInset(value: MeasurementValue);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. */
  get fillColor(): Read<M, Swatch>;
  set fillColor(value: Swatch | string);

  /** The tint (as a percentage) of the fill of the object. */
  get fillTint(): Read<M, number>;
  set fillTint(value: number);

  /** If true, the fill of the object will overprint. */
  get overprintFill(): Read<M, boolean>;
  set overprintFill(value: boolean);

  /** If true, draws a diagonal line starting from the top left. */
  get topLeftDiagonalLine(): Read<M, boolean>;
  set topLeftDiagonalLine(value: boolean);

  /** If true, draws a diagonal line starting from the top right. */
  get topRightDiagonalLine(): Read<M, boolean>;
  set topRightDiagonalLine(value: boolean);

  /** If true, draws the diagonal line in front of cell contents. */
  get diagonalLineInFront(): Read<M, boolean>;
  set diagonalLineInFront(value: boolean);

  /** The stroke weight of the cell's diagonal line(s) — see {@link topLeftDiagonalLine} and {@link topRightDiagonalLine}. */
  get diagonalLineStrokeWeight(): Read<M, number>;
  set diagonalLineStrokeWeight(value: MeasurementValue);

  /** The stroke type of the diagonal line(s). */
  get diagonalLineStrokeType(): Read<M, StrokeStyle>;
  set diagonalLineStrokeType(value: StrokeStyle | string);

  /** The diagonal line color, specified as a swatch. */
  get diagonalLineStrokeColor(): Read<M, Swatch>;
  set diagonalLineStrokeColor(value: Swatch | string);

  /** The diagonal line tint (as a percentage). (Range: 0 to 100). */
  get diagonalLineStrokeTint(): Read<M, number>;
  set diagonalLineStrokeTint(value: number);

  /** If true, the diagonal line stroke will overprint. */
  get diagonalLineStrokeOverprint(): Read<M, boolean>;
  set diagonalLineStrokeOverprint(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapColor(): Read<M, Swatch>;
  set diagonalLineStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapTint(): Read<M, number>;
  set diagonalLineStrokeGapTint(value: number);

  /** If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. */
  get diagonalLineStrokeGapOverprint(): Read<M, boolean>;
  set diagonalLineStrokeGapOverprint(value: boolean);

  /** If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. */
  get clipContentToCell(): Read<M, boolean>;
  set clipContentToCell(value: boolean);

  /** How the distance between the first line's baseline and the cell's top inset is measured. See {@link FirstBaseline}. */
  get firstBaselineOffset(): Read<M, FirstBaseline>;
  set firstBaselineOffset(value: FirstBaseline);

  /** The vertical alignment of cell. */
  get verticalJustification(): Read<M, VerticalJustification>;
  set verticalJustification(value: VerticalJustification);

  /** The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. */
  get paragraphSpacingLimit(): Read<M, number>;
  set paragraphSpacingLimit(value: MeasurementValue);

  /** The space between the baseline of the text and the top inset of the frame or cell. */
  get minimumFirstBaselineOffset(): Read<M, number>;
  set minimumFirstBaselineOffset(value: number);

  /** The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. */
  get rotationAngle(): Read<M, number>;
  set rotationAngle(value: number);

  /** The stroke weight of the left edge border stroke. */
  get leftEdgeStrokeWeight(): Read<M, number>;
  set leftEdgeStrokeWeight(value: MeasurementValue);

  /** The stroke type of the left edge. */
  get leftEdgeStrokeType(): Read<M, StrokeStyle>;
  set leftEdgeStrokeType(value: StrokeStyle | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. */
  get leftEdgeStrokeColor(): Read<M, Swatch>;
  set leftEdgeStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). */
  get leftEdgeStrokeTint(): Read<M, number>;
  set leftEdgeStrokeTint(value: number);

  /** If true, the left edge border stroke will overprint. */
  get leftEdgeStrokeOverprint(): Read<M, boolean>;
  set leftEdgeStrokeOverprint(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapColor(): Read<M, Swatch>;
  set leftEdgeStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapTint(): Read<M, number>;
  set leftEdgeStrokeGapTint(value: number);

  /** If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. */
  get leftEdgeStrokeGapOverprint(): Read<M, boolean>;
  set leftEdgeStrokeGapOverprint(value: boolean);

  /** The stroke weight of the top edge border stroke. */
  get topEdgeStrokeWeight(): Read<M, number>;
  set topEdgeStrokeWeight(value: MeasurementValue);

  /** The stroke type of the top edge. */
  get topEdgeStrokeType(): Read<M, StrokeStyle>;
  set topEdgeStrokeType(value: StrokeStyle | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. */
  get topEdgeStrokeColor(): Read<M, Swatch>;
  set topEdgeStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). */
  get topEdgeStrokeTint(): Read<M, number>;
  set topEdgeStrokeTint(value: number);

  /** If true, the top edge border stroke will overprint. */
  get topEdgeStrokeOverprint(): Read<M, boolean>;
  set topEdgeStrokeOverprint(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapColor(): Read<M, Swatch>;
  set topEdgeStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapTint(): Read<M, number>;
  set topEdgeStrokeGapTint(value: number);

  /** If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. */
  get topEdgeStrokeGapOverprint(): Read<M, boolean>;
  set topEdgeStrokeGapOverprint(value: boolean);

  /** The stroke weight of the right edge border stroke. */
  get rightEdgeStrokeWeight(): Read<M, number>;
  set rightEdgeStrokeWeight(value: MeasurementValue);

  /** The stroke type of the right edge. */
  get rightEdgeStrokeType(): Read<M, StrokeStyle>;
  set rightEdgeStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch, of the right edge border stroke. */
  get rightEdgeStrokeColor(): Read<M, Swatch>;
  set rightEdgeStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). */
  get rightEdgeStrokeTint(): Read<M, number>;
  set rightEdgeStrokeTint(value: number);

  /** If true, the right edge border stroke will overprint. */
  get rightEdgeStrokeOverprint(): Read<M, boolean>;
  set rightEdgeStrokeOverprint(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapColor(): Read<M, Swatch>;
  set rightEdgeStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapTint(): Read<M, number>;
  set rightEdgeStrokeGapTint(value: number);

  /** If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. */
  get rightEdgeStrokeGapOverprint(): Read<M, boolean>;
  set rightEdgeStrokeGapOverprint(value: boolean);

  /** The stroke weight of the bottom edge border stroke. */
  get bottomEdgeStrokeWeight(): Read<M, number>;
  set bottomEdgeStrokeWeight(value: MeasurementValue);

  /** The stroke type of the bottom edge. */
  get bottomEdgeStrokeType(): Read<M, StrokeStyle>;
  set bottomEdgeStrokeType(value: StrokeStyle | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. */
  get bottomEdgeStrokeColor(): Read<M, Swatch>;
  set bottomEdgeStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the bottom edge border stroke. */
  get bottomEdgeStrokeTint(): Read<M, number>;
  set bottomEdgeStrokeTint(value: number);

  /** If true, the bottom edge border stroke will overprint. */
  get bottomEdgeStrokeOverprint(): Read<M, boolean>;
  set bottomEdgeStrokeOverprint(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapColor(): Read<M, Swatch>;
  set bottomEdgeStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapTint(): Read<M, number>;
  set bottomEdgeStrokeGapTint(value: number);

  /** If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. */
  get bottomEdgeStrokeGapOverprint(): Read<M, boolean>;
  set bottomEdgeStrokeGapOverprint(value: boolean);

}

/**
 * Cell formatting stored as a named **style definition** ({@link CellStyle}).
 *
 * Same attributes as {@link TableCellAttributes}, but any attribute the style
 * leaves unset reads back and accepts {@link NothingEnum.NOTHING} instead of
 * a resolved value.
 */
export interface CellStyleAttributes<M extends Mode = 'single'>
  extends TableCellAttributesBase<M, NothingEnum.NOTHING, null, NothingEnum.NOTHING> {
  /**
   * The {@link ParagraphStyle} the cell style applies to text in the cell, or
   * {@link NothingEnum.NOTHING} when the style leaves it unset.
   *
   * A style-definition member only: a live {@link Cell} carries no paragraph
   * style of its own, its text ranges do.
   */
  get appliedParagraphStyle(): Read<M, ParagraphStyle | NothingEnum.NOTHING>;
  set appliedParagraphStyle(value: ParagraphStyle | string | NothingEnum.NOTHING);
}

/** Table-level formatting members shared by the live {@link TableFormatAttributes} and style-definition {@link TableStyleAttributes}. */
export interface TableAttributesBase<M extends Mode = 'single'> {
  /** Where the table's caption sits relative to the table. See {@link TableCaptionPositionOptions}. */
  get captionPosition(): Read<M, TableCaptionPositionOptions>;
  set captionPosition(value: TableCaptionPositionOptions);

  /** The left inset of the graphic cell. */
  get graphicLeftInset(): Read<M, number>;
  set graphicLeftInset(value: MeasurementValue);

  /** The top inset of the graphic cell. */
  get graphicTopInset(): Read<M, number>;
  set graphicTopInset(value: MeasurementValue);

  /** The right inset of the graphic cell. */
  get graphicRightInset(): Read<M, number>;
  set graphicRightInset(value: MeasurementValue);

  /** The bottom inset of the graphic cell. */
  get graphicBottomInset(): Read<M, number>;
  set graphicBottomInset(value: MeasurementValue);

  /** If true, clips the graphic cell's content to width and height of the cell. */
  get clipContentToGraphicCell(): Read<M, boolean>;
  set clipContentToGraphicCell(value: boolean);

  /** The top inset of the text cell. */
  get textTopInset(): Read<M, number>;
  set textTopInset(value: MeasurementValue);

  /** The left inset of the text cell. */
  get textLeftInset(): Read<M, number>;
  set textLeftInset(value: MeasurementValue);

  /** The bottom inset of the text cell. */
  get textBottomInset(): Read<M, number>;
  set textBottomInset(value: MeasurementValue);

  /** The right inset of the text cell. */
  get textRightInset(): Read<M, number>;
  set textRightInset(value: MeasurementValue);

  /** If true, clips the text cell's content to width and height of the cell. */
  get clipContentToTextCell(): Read<M, boolean>;
  set clipContentToTextCell(value: boolean);

  /** The order in which to display row and column strokes at corners. */
  get strokeOrder(): Read<M, StrokeOrderTypes>;
  set strokeOrder(value: StrokeOrderTypes);

  /** The stroke weight of the table's top border stroke. */
  get topBorderStrokeWeight(): Read<M, number>;
  set topBorderStrokeWeight(value: MeasurementValue);

  /** The stroke type of the top border. */
  get topBorderStrokeType(): Read<M, StrokeStyle>;
  set topBorderStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. */
  get topBorderStrokeColor(): Read<M, Swatch>;
  set topBorderStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the table's top border stroke. (Range: 0 to 100) */
  get topBorderStrokeTint(): Read<M, number>;
  set topBorderStrokeTint(value: number);

  /** If true, the top border strokes will overprint. */
  get topBorderStrokeOverprint(): Read<M, boolean>;
  set topBorderStrokeOverprint(value: boolean);

  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapColor(): Read<M, Swatch>;
  set topBorderStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the gap color of the table's top border stroke. (Range: 0 to 100) Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapTint(): Read<M, number>;
  set topBorderStrokeGapTint(value: number);

  /** If true, the gap of the top border stroke will overprint. Note: Valid only when top border stroke type is not solid. */
  get topBorderStrokeGapOverprint(): Read<M, boolean>;
  set topBorderStrokeGapOverprint(value: boolean);

  /** The stroke weight of the left border stroke. */
  get leftBorderStrokeWeight(): Read<M, number>;
  set leftBorderStrokeWeight(value: MeasurementValue);

  /** The stroke type of the left border. */
  get leftBorderStrokeType(): Read<M, StrokeStyle>;
  set leftBorderStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. */
  get leftBorderStrokeColor(): Read<M, Swatch>;
  set leftBorderStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the left border stroke. (Range: 0 to 100) */
  get leftBorderStrokeTint(): Read<M, number>;
  set leftBorderStrokeTint(value: number);

  /** If true, the left border stroke will overprint. */
  get leftBorderStrokeOverprint(): Read<M, boolean>;
  set leftBorderStrokeOverprint(value: boolean);

  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapColor(): Read<M, Swatch>;
  set leftBorderStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the gap color of the left border stroke. (Range: 0 to 100) Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapTint(): Read<M, number>;
  set leftBorderStrokeGapTint(value: number);

  /** If true, the gap of the left border stroke will overprint. Note: Valid only when left border stroke type is not solid. */
  get leftBorderStrokeGapOverprint(): Read<M, boolean>;
  set leftBorderStrokeGapOverprint(value: boolean);

  /** The stroke weight of the bottom border stroke. */
  get bottomBorderStrokeWeight(): Read<M, number>;
  set bottomBorderStrokeWeight(value: MeasurementValue);

  /** The stroke type of the bottom border. */
  get bottomBorderStrokeType(): Read<M, StrokeStyle>;
  set bottomBorderStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. */
  get bottomBorderStrokeColor(): Read<M, Swatch>;
  set bottomBorderStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the bottom border stroke. (Range: 0 to 100) */
  get bottomBorderStrokeTint(): Read<M, number>;
  set bottomBorderStrokeTint(value: number);

  /** If true, the bottom border stroke will overprint. */
  get bottomBorderStrokeOverprint(): Read<M, boolean>;
  set bottomBorderStrokeOverprint(value: boolean);

  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapColor(): Read<M, Swatch>;
  set bottomBorderStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the gap color of the bottom border stroke. (Range: 0 to 100) Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapTint(): Read<M, number>;
  set bottomBorderStrokeGapTint(value: number);

  /** If true, the gap of the bottom border stroke will overprint. Note: Valid only when bottom border stroke type is not solid. */
  get bottomBorderStrokeGapOverprint(): Read<M, boolean>;
  set bottomBorderStrokeGapOverprint(value: boolean);

  /** The stroke weight of the right border stroke. */
  get rightBorderStrokeWeight(): Read<M, number>;
  set rightBorderStrokeWeight(value: MeasurementValue);

  /** The stroke type of the right border. */
  get rightBorderStrokeType(): Read<M, StrokeStyle>;
  set rightBorderStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. */
  get rightBorderStrokeColor(): Read<M, Swatch>;
  set rightBorderStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the right border stroke. (Range: 0 to 100) */
  get rightBorderStrokeTint(): Read<M, number>;
  set rightBorderStrokeTint(value: number);

  /** If true, the right border stroke will overprint. */
  get rightBorderStrokeOverprint(): Read<M, boolean>;
  set rightBorderStrokeOverprint(value: boolean);

  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapColor(): Read<M, Swatch>;
  set rightBorderStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the gap color of the right border stroke. (Range: 0 to 100) Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapTint(): Read<M, number>;
  set rightBorderStrokeGapTint(value: number);

  /** If true, the gap color of the right border stroke will overprint. Note: Valid only when right border stroke type is not solid. */
  get rightBorderStrokeGapOverprint(): Read<M, boolean>;
  set rightBorderStrokeGapOverprint(value: boolean);

  /** The space above the table. */
  get spaceBefore(): Read<M, number>;
  set spaceBefore(value: MeasurementValue);

  /** The space below the table. */
  get spaceAfter(): Read<M, number>;
  set spaceAfter(value: MeasurementValue);

  /** The number of body rows at the beginning of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater. */
  get skipFirstAlternatingStrokeRows(): Read<M, number>;
  set skipFirstAlternatingStrokeRows(value: number);

  /** The number of body rows at the end of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater. */
  get skipLastAlternatingStrokeRows(): Read<M, number>;
  set skipLastAlternatingStrokeRows(value: number);

  /** The number of rows in the first alternating row strokes group. */
  get startRowStrokeCount(): Read<M, number>;
  set startRowStrokeCount(value: number);

  /** The color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeColor(): Read<M, Swatch>;
  set startRowStrokeColor(value: Swatch);

  /** The stroke weight of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeWeight(): Read<M, number>;
  set startRowStrokeWeight(value: MeasurementValue);

  /** The stroke type of rows in the first alternating strokes group. */
  get startRowStrokeType(): Read<M, StrokeStyle>;
  set startRowStrokeType(value: StrokeStyle | string);

  /** The tint (as a percentage) of the borders in the first alternating row strokes group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeTint(): Read<M, number>;
  set startRowStrokeTint(value: number);

  /** If true, the gap color of the row border stroke in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapOverprint(): Read<M, boolean>;
  set startRowStrokeGapOverprint(value: boolean);

  /** The stroke gap color of row borders in the first alternating row strokes group, specified as a swatch (color, gradient, tint, or mixed ink). Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapColor(): Read<M, Swatch>;
  set startRowStrokeGapColor(value: Swatch);

  /** The tint (as a percentage) of the gap color of row borders in the first alternating rows group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeGapTint(): Read<M, number>;
  set startRowStrokeGapTint(value: number);

  /** If true, the row borders in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater. */
  get startRowStrokeOverprint(): Read<M, boolean>;
  set startRowStrokeOverprint(value: boolean);

  /** The number of rows in the second alternating row strokes group. */
  get endRowStrokeCount(): Read<M, number>;
  set endRowStrokeCount(value: number);

  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeColor(): Read<M, Swatch>;
  set endRowStrokeColor(value: Swatch);

  /** The stroke weight of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeWeight(): Read<M, number>;
  set endRowStrokeWeight(value: MeasurementValue);

  /** The stroke type of rows in the second alternating strokes group. */
  get endRowStrokeType(): Read<M, StrokeStyle>;
  set endRowStrokeType(value: StrokeStyle | string);

  /** The tint (as a percentage) of the row borders in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeTint(): Read<M, number>;
  set endRowStrokeTint(value: number);

  /** If true, the rows in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeOverprint(): Read<M, boolean>;
  set endRowStrokeOverprint(value: boolean);

  /** The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating rows group. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeGapColor(): Read<M, Swatch>;
  set endRowStrokeGapColor(value: Swatch);

  /** The tint (as a percentage) of the gap color of rows in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater and end row stroke type is not solid. */
  get endRowStrokeGapTint(): Read<M, number>;
  set endRowStrokeGapTint(value: number);

  /** If true, the gap of the row borders in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater. */
  get endRowStrokeGapOverprint(): Read<M, boolean>;
  set endRowStrokeGapOverprint(value: boolean);

  /** The number of columns on the left of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater. */
  get skipFirstAlternatingStrokeColumns(): Read<M, number>;
  set skipFirstAlternatingStrokeColumns(value: number);

  /** The number of columns on the right side of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater. */
  get skipLastAlternatingStrokeColumns(): Read<M, number>;
  set skipLastAlternatingStrokeColumns(value: number);

  /** The number of columns in the first alternating column strokes group. */
  get startColumnStrokeCount(): Read<M, number>;
  set startColumnStrokeCount(value: number);

  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. */
  get startColumnStrokeColor(): Read<M, Swatch>;
  set startColumnStrokeColor(value: Swatch);

  /** The stroke weight of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeWeight(): Read<M, number>;
  set startColumnStrokeWeight(value: MeasurementValue);

  /** The stroke type of columns in the first alternating strokes group. */
  get startColumnStrokeType(): Read<M, StrokeStyle>;
  set startColumnStrokeType(value: StrokeStyle | string);

  /** The tint (as a percentage) of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeTint(): Read<M, number>;
  set startColumnStrokeTint(value: number);

  /** If true, the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeOverprint(): Read<M, boolean>;
  set startColumnStrokeOverprint(value: boolean);

  /** The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapColor(): Read<M, Swatch>;
  set startColumnStrokeGapColor(value: Swatch);

  /** The tint (as a percentage) of the gap color of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapTint(): Read<M, number>;
  set startColumnStrokeGapTint(value: number);

  /** If true, the gap of the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater. */
  get startColumnStrokeGapOverprint(): Read<M, boolean>;
  set startColumnStrokeGapOverprint(value: boolean);

  /** The number of columns in the second alternating column strokes group. */
  get endColumnStrokeCount(): Read<M, number>;
  set endColumnStrokeCount(value: number);

  /** The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeColor(): Read<M, Swatch>;
  set endColumnStrokeColor(value: Swatch);

  /** The stroke weight of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeWeight(): Read<M, number>;
  set endColumnStrokeWeight(value: MeasurementValue);

  /** The stroke type of columns in the second alternating strokes group. */
  get endColumnLineStyle(): Read<M, StrokeStyle>;
  set endColumnLineStyle(value: StrokeStyle | string);

  /** The tint (as a percentage) of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeTint(): Read<M, number>;
  set endColumnStrokeTint(value: number);

  /** If true, the column borders in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeOverprint(): Read<M, boolean>;
  set endColumnStrokeOverprint(value: boolean);

  /** The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapColor(): Read<M, Swatch>;
  set endColumnStrokeGapColor(value: Swatch);

  /** The tint (as a percentage) of the gap color of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapTint(): Read<M, number>;
  set endColumnStrokeGapTint(value: number);

  /** If true, the gap of the column border stroke in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater. */
  get endColumnStrokeGapOverprint(): Read<M, boolean>;
  set endColumnStrokeGapOverprint(value: boolean);

  /** If true, hides alternating row fills. If false, hides alternating column fills. */
  get columnFillsPriority(): Read<M, boolean>;
  set columnFillsPriority(value: boolean);

  /** The number of body rows at the beginning of the table to skip before applying the row fill color. Note: Valid when alternating fills are defined for table rows. */
  get skipFirstAlternatingFillRows(): Read<M, number>;
  set skipFirstAlternatingFillRows(value: number);

  /** The number of body rows at the end of the table in which to not apply the row fill color. Note: Valid when alternating fills are defined for table rows. */
  get skipLastAlternatingFillRows(): Read<M, number>;
  set skipLastAlternatingFillRows(value: number);

  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillColor(): Read<M, Swatch>;
  set startRowFillColor(value: Swatch);

  /** The number of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillCount(): Read<M, number>;
  set startRowFillCount(value: number);

  /** The tint (as a percentage) of the rows in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows. */
  get startRowFillTint(): Read<M, number>;
  set startRowFillTint(value: number);

  /** If true, the rows in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows. */
  get startRowFillOverprint(): Read<M, boolean>;
  set startRowFillOverprint(value: boolean);

  /** The number of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillCount(): Read<M, number>;
  set endRowFillCount(value: number);

  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillColor(): Read<M, Swatch>;
  set endRowFillColor(value: Swatch);

  /** The tint (as a percentage) of the rows in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows. */
  get endRowFillTint(): Read<M, number>;
  set endRowFillTint(value: number);

  /** If true, the rows in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows. */
  get endRowFillOverprint(): Read<M, boolean>;
  set endRowFillOverprint(value: boolean);

  /** The number of columns on the left side of the table to skip before applying the column fill color. Note: Valid when alternating fills are defined for table columns. */
  get skipFirstAlternatingFillColumns(): Read<M, number>;
  set skipFirstAlternatingFillColumns(value: number);

  /** The number columns on the right side of the table in which to not apply the column fill color. Note: Valid when alternating fills are defined for table columns. */
  get skipLastAlternatingFillColumns(): Read<M, number>;
  set skipLastAlternatingFillColumns(value: number);

  /** The number of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillCount(): Read<M, number>;
  set startColumnFillCount(value: number);

  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillColor(): Read<M, Swatch>;
  set startColumnFillColor(value: Swatch);

  /** The tint (as a percentage) of the columns in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillTint(): Read<M, number>;
  set startColumnFillTint(value: number);

  /** If true, the columns in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns. */
  get startColumnFillOverprint(): Read<M, boolean>;
  set startColumnFillOverprint(value: boolean);

  /** The number of columns in the second alternating fills group. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillCount(): Read<M, number>;
  set endColumnFillCount(value: number);

  /** The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the second alternating fill group. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillColor(): Read<M, Swatch>;
  set endColumnFillColor(value: Swatch);

  /** The tint (as a percentage) of the columns in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillTint(): Read<M, number>;
  set endColumnFillTint(value: number);

  /** If true, the columns in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns. */
  get endColumnFillOverprint(): Read<M, boolean>;
  set endColumnFillOverprint(value: boolean);

}

/**
 * Live table-level formatting: border strokes, alternating fill and stroke
 * patterns, table insets, and stroke order/direction.
 *
 * Available on {@link Table}. The style-definition twin is
 * {@link TableStyleAttributes}.
 */
export interface TableFormatAttributes<M extends Mode = 'single'> extends TableAttributesBase<M> {}

/**
 * Table formatting stored as a named **style definition** ({@link TableStyle}).
 */
export interface TableStyleAttributes<M extends Mode = 'single'> extends TableAttributesBase<M> {
  /** If true, use the cell style of the body region for the header region. */
  get headerRegionSameAsBodyRegion(): Read<M, boolean>;
  set headerRegionSameAsBodyRegion(value: boolean);

  /** If true, uses the cell style of the body region for the footer region. */
  get footerRegionSameAsBodyRegion(): Read<M, boolean>;
  set footerRegionSameAsBodyRegion(value: boolean);

  /** If true, uses the cell style of the body region for the left column region. */
  get leftColumnRegionSameAsBodyRegion(): Read<M, boolean>;
  set leftColumnRegionSameAsBodyRegion(value: boolean);

  /** If true, uses the cell style of the body region for the right column region. */
  get rightColumnRegionSameAsBodyRegion(): Read<M, boolean>;
  set rightColumnRegionSameAsBodyRegion(value: boolean);

  /** The {@link CellStyle} applied to cells in the header region. */
  get headerRegionCellStyle(): Read<M, CellStyle>;
  set headerRegionCellStyle(value: CellStyle | string);

  /** The {@link CellStyle} applied to cells in the footer region. */
  get footerRegionCellStyle(): Read<M, CellStyle>;
  set footerRegionCellStyle(value: CellStyle | string);

  /** The {@link CellStyle} applied to cells in the left column region. */
  get leftColumnRegionCellStyle(): Read<M, CellStyle>;
  set leftColumnRegionCellStyle(value: CellStyle | string);

  /** The {@link CellStyle} applied to cells in the right column region. */
  get rightColumnRegionCellStyle(): Read<M, CellStyle>;
  set rightColumnRegionCellStyle(value: CellStyle | string);

  /** The {@link CellStyle} applied to cells in the body region. */
  get bodyRegionCellStyle(): Read<M, CellStyle>;
  set bodyRegionCellStyle(value: CellStyle | string);
}
