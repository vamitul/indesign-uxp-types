/**
 * Column.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Table } from './Table';
import type { TableGeometry, TableCellAttributes } from './_base/TableAttributes';
import type { Cell } from './Cell';
import type { Row } from './Row';
import type { PageItem } from './PageItem';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { MeasurementValue } from './_base/Types';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { Text } from './Text';
import type { ColumnTypes } from './Enums/ColumnTypes';
import type { FirstBaseline } from './Enums/FirstBaseline';
import type { RowTypes } from './Enums/RowTypes';

/**
 * A single column of a {@link Table}, spanning every row.
 *
 * A range-like view over the column's {@link Cell}s. Size, span, position,
 * edge strokes, insets, and fill follow the same member names as {@link Cell}
 * and {@link Row}; the inner-gridline stroke properties are unique to a
 * multi-cell range like this one.
 */
export interface Column<M extends Mode = 'single'>
  extends EventTargetDOMObject<Table, M>,
    IndexedDOMObject<Table, M>,
    TableGeometry<M>,
    TableCellAttributes<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'Column';

  /** Resolves the proxy into the individual {@link Column} objects it stands for. */
  getElements(): Column<'single'>[];

  /** The name of the column, in the form `"Column n"`. */
  readonly name: Read<M, string>;

  /** Whether the column is a body column or a repeating header column. */
  get columnType(): Read<M, ColumnTypes>;
  set columnType(value: ColumnTypes);

  /** If `true`, keeps the row with the next row when the table is split across text frames or pages. */
  get keepWithNextRow(): Read<M, boolean>;
  set keepWithNextRow(value: boolean);

  /**
   * If `true`, the column's cells grow or shrink automatically to fit their content.
   *
   * Bounded by {@link TableGeometry.maximumHeight} and {@link TableGeometry.minimumHeight}.
   * This is the Row Height control in the Table panel: `At least` sets it `true`,
   * `Exactly` sets it `false`.
   */
  get autoGrow(): Read<M, boolean>;
  set autoGrow(value: boolean);

  /** The stroke weight of the inner row (horizontal gridline) border strokes within this column. */
  get innerRowStrokeWeight(): Read<M, number>;
  set innerRowStrokeWeight(value: MeasurementValue);

  /** The stroke type of the inner row gridlines within this column. Accepts a {@link StrokeStyle} or its name. */
  get innerRowStrokeType(): Read<M, StrokeStyle>;
  set innerRowStrokeType(value: StrokeStyle | string);

  /** The color, specified as a swatch, of the inner row gridline stroke within this column. */
  get innerRowStrokeColor(): Read<M, Swatch>;
  set innerRowStrokeColor(value: Swatch | string);

  /** The tint (as a percentage) of the inner row gridline stroke within this column. Range `0`–`100`. */
  get innerRowStrokeTint(): Read<M, number>;
  set innerRowStrokeTint(value: number);

  /** If `true`, the inner row gridline stroke within this column will overprint. */
  get innerRowStrokeOverprint(): Read<M, boolean>;
  set innerRowStrokeOverprint(value: boolean);

  /** The swatch applied to the gap of the inner row gridline stroke within this column. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapColor(): Read<M, Swatch>;
  set innerRowStrokeGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the inner row gridline stroke gap color within this column. Range `0`–`100`. Not valid when {@link innerRowStrokeType} is solid. */
  get innerRowStrokeGapTint(): Read<M, number>;
  set innerRowStrokeGapTint(value: number);

  /** If `true`, the gap color of the inner row gridline stroke within this column will overprint. Not valid when {@link innerRowStrokeType} is solid. */
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

  /**
   * Converts text to outlines, one polygon per line. A single letter with no
   * internal spaces or detached parts yields a single-path polygon.
   * @param deleteOriginal If `true`, deletes the original text; if `false`, adds the outlines as separate object(s) on top of it. Defaults to `true`.
   */
  createOutlines(deleteOriginal?: boolean): Read<M, PageItem[]>;

  /** Recomposes the text in the column. */
  recompose(): Read<M, void>;

  /**
   * Finds text that matches the find-what value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the GREP find-what value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the GREP find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs that match the find-what value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs that match the find-what value and replaces them with the change-to value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Read<M, Text[]>;

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

  /** Deletes the column. */
  remove(): Read<M, void>;

  /**
   * Merges this column's cells with those of another row or column into a single cell.
   * @param withItems The cell, row, or column to merge with.
   */
  merge(withItems?: Cell | Row | Column): Read<M, Cell>;

  /** Unmerges every merged cell in the column, restoring the original grid. */
  unmerge(): Read<M, Cell[]>;

  /**
   * Splits each cell in the column along the given axis.
   * @param using The direction in which to split the cells.
   */
  split(using: HorizontalOrVertical): Read<M, void>;

  /**
   * Redistributes a range of columns so they share a uniform size. A minimum
   * or maximum width set on any cell in the range may prevent an exactly even result.
   * @param using The direction in which to redistribute.
   * @param thru The last column in the range, given as a {@link Cell}, {@link Row}, or {@link Column}.
   */
  redistribute(using: HorizontalOrVertical, thru?: Cell | Row | Column): Read<M, void>;

  /**
   * Selects the column in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
