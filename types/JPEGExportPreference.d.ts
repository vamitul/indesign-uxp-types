/**
 * JPEGExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ExportRangeOrAllPages } from './Enums/ExportRangeOrAllPages';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { JpegColorSpaceEnum } from './Enums/JpegColorSpaceEnum';

/**
 * JPEG export preferences.
 */
export interface JPEGExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'JPEGExportPreference';

  /** Resolves the proxy into the individual {@link JPEGExportPreference} objects it stands for. */
  getElements(): JPEGExportPreference<'single'>[];

  /** If true, exports each spread as a single JPEG file. If false, exports facing pages as separate files and appends sequential numbers to each file name. */
  get exportingSpread(): Read<M, boolean>;
  set exportingSpread(value: boolean);

  /** The compression quality. */
  get jpegQuality(): Read<M, JPEGOptionsQuality>;
  set jpegQuality(value: JPEGOptionsQuality);

  /** The page(s) to export, specified as a page number or an array of page numbers. Applies only when {@link jpegExportRange} is {@link ExportRangeOrAllPages.EXPORT_RANGE}. */
  get pageString(): Read<M, string>;
  set pageString(value: string);

  /** The rendering style. */
  get jpegRenderingStyle(): Read<M, JPEGOptionsFormat>;
  set jpegRenderingStyle(value: JPEGOptionsFormat);

  /** Whether {@link pageString} or every page is exported — see {@link ExportRangeOrAllPages}. */
  get jpegExportRange(): Read<M, ExportRangeOrAllPages>;
  set jpegExportRange(value: ExportRangeOrAllPages);

  /** Suffix to be used at the end of each exported file. */
  get jpegSuffix(): Read<M, string>;
  set jpegSuffix(value: string);

  /** If true, export hidden spreads. If false, skip export of hidden spreads. */
  get exportingHiddenSpread(): Read<M, boolean>;
  set exportingHiddenSpread(value: boolean);

  /** If true, embeds the color profile in the exported JPEG. */
  get embedColorProfile(): Read<M, boolean>;
  set embedColorProfile(value: boolean);

  /** The color space of the exported JPEG — see {@link JpegColorSpaceEnum}. */
  get jpegColorSpace(): Read<M, JpegColorSpaceEnum>;
  set jpegColorSpace(value: JpegColorSpaceEnum);

  /** If true, uses the document's bleed settings in the exported JPEG. */
  get useDocumentBleeds(): Read<M, boolean>;
  set useDocumentBleeds(value: boolean);

  /** If true, use anti-aliasing for text and vectors during export. */
  get antiAlias(): Read<M, boolean>;
  set antiAlias(value: boolean);

  /** If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing. */
  get simulateOverprint(): Read<M, boolean>;
  set simulateOverprint(value: boolean);

  /** The export resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0). */
  get exportResolution(): Read<M, number>;
  set exportResolution(value: number);
}
