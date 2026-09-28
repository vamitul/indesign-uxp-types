/**
 * DataMerge.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { DataMergePreference } from './DataMergePreference';
import type { Preferences } from './Preferences';
import type { DataMergeFields } from './DataMergeFields';
import type { PDFExportPreset } from './PDFExportPreset';
import type { FilePath } from './_base/Types';

/**
 * The document's data merge engine: tracks the selected data source, the
 * fields read from it, and drives merging records into the layout or
 * exporting the merged result directly to PDF.
 */
export interface DataMerge<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMerge';

  /** Resolves the proxy into the individual {@link DataMerge} objects it stands for. */
  getElements(): DataMerge<'single'>[];

  /** The layout and content preferences applied to each merged target page. */
  readonly dataMergePreferences: Read<M, DataMergePreference>;

  /** The document's preferences objects. */
  readonly preferences: Preferences;

  /** The fields read from the current data source. */
  readonly dataMergeFields: DataMergeFields;

  /** Sets the file used as the data source. */
  selectDataSource(dataSourceFile: FilePath): Read<M, void>;

  /** Re-reads the data source file, refreshing {@link dataMergeFields} with its current content. */
  updateDataSource(): Read<M, void>;

  /** Clears the selected data source. */
  removeDataSource(): Read<M, void>;

  /**
   * Merges every record from the data source into the document, generating
   * one target page (or page range) per record.
   * @param outputOversetReportFile The file to write an overset-text report to.
   */
  mergeRecords(outputOversetReportFile?: FilePath): Read<M, void>;

  /**
   * Merges every record and exports the result directly to a PDF file,
   * without generating merged pages in the document.
   * @param to The destination PDF file.
   * @param using The PDF export preset to use.
   * @param outputOversetReportFile The file to write an overset-text report to.
   */
  exportFile(to: FilePath, using?: PDFExportPreset, outputOversetReportFile?: FilePath): Read<M, void>;
}
