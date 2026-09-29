/**
 * DataMergePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath, MeasurementValue } from './_base/Types';
import type { DataMerge } from './DataMerge';
import type { ArrangeBy } from './Enums/ArrangeBy';
import type { RecordSelection } from './Enums/RecordSelection';
import type { RecordsPerPage } from './Enums/RecordsPerPage';

/**
 * Settings controlling how merged records are placed on pages during a
 * {@link DataMerge} — which records to include, their arrangement and spacing,
 * and the page margins.
 */
export interface DataMergePreference<M extends Mode = 'single'> extends EventTargetDOMObject<DataMerge, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergePreference';

  /** Resolves the proxy into the individual {@link DataMergePreference} objects it stands for. */
  getElements(): DataMergePreference<'single'>[];

  /** Which records to include in the merge — all of them, one specific record, or a range. See {@link RecordSelection}. */
  get recordSelection(): Read<M, RecordSelection>;
  set recordSelection(value: RecordSelection);

  /** The offset value of the left margin in the target document. */
  get leftMargin(): Read<M, number>;
  set leftMargin(value: MeasurementValue);

  /** The offset value of the top margin in the target document. */
  get topMargin(): Read<M, number>;
  set topMargin(value: MeasurementValue);

  /** The offset value of the right margin in the target document. */
  get rightMargin(): Read<M, number>;
  set rightMargin(value: MeasurementValue);

  /** The offset value of the bottom margin in the target document. */
  get bottomMargin(): Read<M, number>;
  set bottomMargin(value: MeasurementValue);

  /** Whether to arrange multiple records by row or by column. See {@link ArrangeBy}. */
  get arrangeBy(): Read<M, ArrangeBy>;
  set arrangeBy(value: ArrangeBy);

  /** The amount of space between rows of records in the target document. */
  get rowSpacing(): Read<M, number>;
  set rowSpacing(value: MeasurementValue);

  /** The amount of space between columns of records in the target document. */
  get columnSpacing(): Read<M, number>;
  set columnSpacing(value: MeasurementValue);

  /** The number of the record to merge. Valid only when {@link recordSelection} is {@link RecordSelection.ONE_RECORD}. */
  get recordNumber(): Read<M, number>;
  set recordNumber(value: number);

  /** The range of records to merge. Valid only when {@link recordSelection} is {@link RecordSelection.RANGE}. */
  get recordRange(): Read<M, string>;
  set recordRange(value: string);

  /** Whether to place one record per page or as many as fit. See {@link RecordsPerPage}. */
  get recordsPerPage(): Read<M, RecordsPerPage>;
  set recordsPerPage(value: RecordsPerPage);

  /**
   * If true, lists missing images in the specified output file.
   * @param outputMissingImagesReportFile The path to the output file.
   */
  alertMissingImages(outputMissingImagesReportFile: FilePath): Read<M, boolean>;
}
