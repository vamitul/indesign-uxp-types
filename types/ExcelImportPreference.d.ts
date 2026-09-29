/**
 * ExcelImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { AlignmentStyleOptions } from './Enums/AlignmentStyleOptions';
import type { TableFormattingOptions } from './Enums/TableFormattingOptions';

/**
 * Settings controlling how an Excel worksheet is imported — which sheet and cell
 * range, cell alignment and decimal formatting, and whether inline graphics and
 * hidden cells are included.
 */
export interface ExcelImportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ExcelImportPreference';

  /** Resolves the proxy into the individual {@link ExcelImportPreference} objects it stands for. */
  getElements(): ExcelImportPreference<'single'>[];

  /** If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes. */
  get useTypographersQuotes(): Read<M, boolean>;
  set useTypographersQuotes(value: boolean);

  /** If true, preserves inline graphics. */
  get preserveGraphics(): Read<M, boolean>;
  set preserveGraphics(value: boolean);

  /** The stored custom or personal view(s) to import with the file. */
  get viewName(): Read<M, string>;
  set viewName(value: string);

  /** The worksheet to import. */
  get sheetName(): Read<M, string>;
  set sheetName(value: string);

  /** The worksheet's index, as an alternative to naming it via {@link sheetName}. */
  get sheetIndex(): Read<M, number>;
  set sheetIndex(value: number);

  /** The range of cells to import. Use a colon (:) to separate the start and end cell names in the range. */
  get rangeName(): Read<M, string>;
  set rangeName(value: string);

  /** How imported cell content is horizontally aligned — the spreadsheet's own alignment, or forced left/right/center. See {@link AlignmentStyleOptions}. */
  get alignmentStyle(): Read<M, AlignmentStyleOptions>;
  set alignmentStyle(value: AlignmentStyleOptions);

  /** The number of decimal places to include. Valid only when {@link alignmentStyle} is decimal. */
  get decimalPlaces(): Read<M, number>;
  set decimalPlaces(value: number);

  /** If true, shows hidden cells. */
  get showHiddenCells(): Read<M, boolean>;
  set showHiddenCells(value: boolean);

  /** The import error code. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error). */
  get errorCode(): Read<M, number>;
  set errorCode(value: number);

  /** Whether the imported spreadsheet keeps its original Excel formatting, is converted to an unformatted table or tabbed text, or is formatted only on the initial import. See {@link TableFormattingOptions}. */
  get tableFormatting(): Read<M, TableFormattingOptions>;
  set tableFormatting(value: TableFormattingOptions);
}
