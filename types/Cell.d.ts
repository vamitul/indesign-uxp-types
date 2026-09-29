/**
 * Cell.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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
export interface Cell<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Table, M>,
    IndexedDOMObject<Table, M>,
    TableGeometry<M>,
    TableCellAttributes<M>,
    TextContainerContent<Cell, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Cell';

  /** Resolves the proxy into the individual {@link Cell} objects it stands for. */
  getElements(): Cell<'single'>[];

  /** The unique ID of the cell, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the cell, in the form `"Row n : Column m"`. */
  readonly name: Read<M, string>;

  /** Whether the column is a body column or a repeating header column. */
  get columnType(): Read<M, ColumnTypes>;
  set columnType(value: ColumnTypes);

  /** Forces the text to recompose, applying any pending composition changes. */
  recompose(): Read<M, void>;

  /** Converts bullets and numbering in the cell's text to literal characters. */
  convertBulletsAndNumberingToText(): Read<M, void>;

  /** The {@link XMLItem} this cell is associated with, if the table is tagged. */
  readonly associatedXMLElement: Read<M, XMLItem>;

  /** If `true`, keeps the row with the next row when the table is split across text frames or pages. */
  get keepWithNextRow(): Read<M, boolean>;
  set keepWithNextRow(value: boolean);

  /**
   * If `true`, the cell grows or shrinks automatically to fit its content.
   *
   * Bounded by {@link TableGeometry.maximumHeight} and {@link TableGeometry.minimumHeight}.
   * This is the Row Height control in the Table panel: `At least` sets it `true`,
   * `Exactly` sets it `false`.
   */
  get autoGrow(): Read<M, boolean>;
  set autoGrow(value: boolean);

  /** Whether the cell holds text or a graphic/page item. */
  get cellType(): Read<M, CellTypeEnum>;
  set cellType(value: CellTypeEnum);

  /** The {@link CellStyle} applied to the cell. Accepts a style or its name. */
  get appliedCellStyle(): Read<M, CellStyle>;
  set appliedCellStyle(value: CellStyle | string);

  /** The direction of the text in the cell. */
  get writingDirection(): Read<M, HorizontalOrVertical>;
  set writingDirection(value: HorizontalOrVertical);

  /** The stroke weight of the inner row (horizontal gridline) border strokes. */
  get innerRowStrokeWeight(): Read<M, number>;
  set innerRowStrokeWeight(value: MeasurementValue);

  /** The stroke type of the inner row gridlines. Accepts a {@link StrokeStyle} or its name. */
  get innerRowStrokeType(): Read<M, StrokeStyle>;
  set innerRowStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch, of the inner row gridline stroke. */
  get innerRowStrokeColor(): Read<M, Swatch>;
  set innerRowStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the inner row gridline stroke. Range `0`–`100`. */
  get innerRowStrokeTint(): Read<M, number>;
  set innerRowStrokeTint(value: number);

  /** If `true`, the inner row gridline stroke will overprint. */
  get innerRowStrokeOverprint(): Read<M, boolean>;
  set innerRowStrokeOverprint(value: boolean);

  /** The swatch applied to the gap of the inner row gridline stroke. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapColor(): Read<M, Swatch>;
  set innerRowStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the inner row gridline stroke gap color. Range `0`–`100`. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapTint(): Read<M, number>;
  set innerRowStrokeGapTint(value: number);

  /** If `true`, the gap color of the inner row gridline stroke will overprint. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapOverprint(): Read<M, boolean>;
  set innerRowStrokeGapOverprint(value: boolean);

  /** The stroke weight of the inner column (vertical gridline) border strokes. */
  get innerColumnStrokeWeight(): Read<M, number>;
  set innerColumnStrokeWeight(value: MeasurementValue);

  /** The stroke type of the inner column gridlines. Accepts a {@link StrokeStyle} or its name. */
  get innerColumnStrokeType(): Read<M, StrokeStyle>;
  set innerColumnStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch, of the inner column gridline stroke. */
  get innerColumnStrokeColor(): Read<M, Swatch>;
  set innerColumnStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the inner column gridline stroke. Range `0`–`100`. */
  get innerColumnStrokeTint(): Read<M, number>;
  set innerColumnStrokeTint(value: number);

  /** If `true`, the inner column gridline stroke will overprint. */
  get innerColumnStrokeOverprint(): Read<M, boolean>;
  set innerColumnStrokeOverprint(value: boolean);

  /** The swatch applied to the gap of the inner column gridline stroke. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapColor(): Read<M, Swatch>;
  set innerColumnStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the inner column gridline stroke gap color. Range `0`–`100`. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapTint(): Read<M, number>;
  set innerColumnStrokeGapTint(value: number);

  /** If `true`, the gap color of the inner column gridline stroke will overprint. Not valid when {@link innerColumnStrokeType} is solid. */
  get innerColumnStrokeGapOverprint(): Read<M, boolean>;
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
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Every {@link PageItem} anywhere in this cell, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /**
   * Converts text to outlines, one polygon per line. A single letter with no
   * internal spaces or detached parts yields a single-path polygon.
   * @param deleteOriginal If `true`, deletes the original text; if `false`, adds the outlines as separate object(s) on top of it. Defaults to `true`.
   */
  createOutlines(deleteOriginal?: boolean): Read<M, PageItem[]>;

  /** Tags the cell (or its parent story) using the default tags defined in the XML import preferences. */
  autoTag(): Read<M, void>;

  /**
   * Finds text matching the transliterate (character-type) find query.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text matching the transliterate find query and applies the change settings.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /** Deletes the cell. */
  remove(): Read<M, void>;

  /**
   * Merges this cell with another cell, row, or column into a single cell.
   * @param withItems The cell, row, or column to merge with.
   */
  merge(withItems?: Cell | Row | Column): Read<M, Cell>;

  /** Unmerges every merged cell that overlaps this cell, restoring the original grid. */
  unmerge(): Read<M, Cell[]>;

  /**
   * Splits the cell along the given axis.
   * @param using The direction in which to split the cell.
   */
  split(using: HorizontalOrVertical): Read<M, void>;

  /**
   * Converts the cell to a different {@link CellTypeEnum}.
   * @param finalCellType The cell type to convert to.
   * @param flagToPreserveData If `true`, preserves the cell's existing content; converting a graphic cell to a text cell makes the page item inline. Defaults to `false`.
   */
  convertCellType(finalCellType: CellTypeEnum, flagToPreserveData?: boolean): Read<M, void>;

  /**
   * Clears the cell's style overrides.
   * @param clearingOverridesThroughRootCellStyle If `true`, clears every override regardless of whether it is also defined in the underlying cell style. Defaults to `false`.
   */
  clearCellStyleOverrides(clearingOverridesThroughRootCellStyle?: boolean): Read<M, void>;

  /**
   * Selects the cell in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
