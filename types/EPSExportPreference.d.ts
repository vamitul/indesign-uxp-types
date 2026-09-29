/**
 * EPSExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { FlattenerPreset } from './FlattenerPreset';
import type { DataFormat } from './Enums/DataFormat';
import type { EPSColorSpace } from './Enums/EPSColorSpace';
import type { EPSImageData } from './Enums/EPSImageData';
import type { FontEmbedding } from './Enums/FontEmbedding';
import type { PageRange } from './Enums/PageRange';
import type { PostScriptLevels } from './Enums/PostScriptLevels';
import type { PreviewTypes } from './Enums/PreviewTypes';

/**
 * EPS export preferences.
 */
export interface EPSExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPSExportPreference';

  /** Resolves the proxy into the individual {@link EPSExportPreference} objects it stands for. */
  getElements(): EPSExportPreference<'single'>[];

  /** The height of the bleed area at the bottom of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedBottom(): Read<M, number>;
  set bleedBottom(value: MeasurementValue);

  /** The width of the bleed area at the inside of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedInside(): Read<M, number>;
  set bleedInside(value: MeasurementValue);

  /** The width of the bleed area at the outside of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedOutside(): Read<M, number>;
  set bleedOutside(value: MeasurementValue);

  /** The height of the bleed area at the top of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedTop(): Read<M, number>;
  set bleedTop(value: MeasurementValue);

  /** The color space for representing color in the exported EPS. */
  get epsColor(): Read<M, EPSColorSpace>;
  set epsColor(value: EPSColorSpace);

  /** The format in which to send image data to the printer. */
  get dataFormat(): Read<M, DataFormat>;
  set dataFormat(value: DataFormat);

  /** The transparency flattener preset to use. */
  get appliedFlattenerPreset(): Read<M, FlattenerPreset>;
  set appliedFlattenerPreset(value: FlattenerPreset);

  /** Controls how fonts are embedded in the exported EPS. */
  get fontEmbedding(): Read<M, FontEmbedding>;
  set fontEmbedding(value: FontEmbedding);

  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): Read<M, boolean>;
  set ignoreSpreadOverrides(value: boolean);

  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): Read<M, boolean>;
  set omitBitmaps(value: boolean);

  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): Read<M, boolean>;
  set omitEPS(value: boolean);

  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): Read<M, boolean>;
  set omitPDF(value: boolean);

  /** If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments — see {@link omitEPS}, {@link omitPDF}, and {@link omitBitmaps}. */
  get opiImageReplacement(): Read<M, boolean>;
  set opiImageReplacement(value: boolean);

  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): Read<M, PageRange | string>;
  set pageRange(value: PageRange | string);

  /** The file format of the preview image saved with the exported EPS file. */
  get preview(): Read<M, PreviewTypes>;
  set preview(value: PreviewTypes);

  /** The PostScript level of the printer. */
  get postscriptLevel(): Read<M, PostScriptLevels>;
  set postscriptLevel(value: PostScriptLevels);

  /** If true, exports facing pages as a single page that has the width of the spread. If false, exports spread pages as separate pages. */
  get epsSpreads(): Read<M, boolean>;
  set epsSpreads(value: boolean);

  /** The image data to export to the EPS document. */
  get imageData(): Read<M, EPSImageData>;
  set imageData(value: EPSImageData);
}
