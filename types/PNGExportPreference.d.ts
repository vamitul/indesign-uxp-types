/**
 * PNGExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { PNGColorSpaceEnum } from './Enums/PNGColorSpaceEnum';
import type { PNGExportRangeEnum } from './Enums/PNGExportRangeEnum';
import type { PNGQualityEnum } from './Enums/PNGQualityEnum';

/**
 * Settings for exporting pages or spreads as PNG images — resolution, color
 * space, quality, transparency, and which pages to include.
 */
export interface PNGExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PNGExportPreference';

  /** Resolves the proxy into the individual {@link PNGExportPreference} objects it stands for. */
  getElements(): PNGExportPreference<'single'>[];

  /** Suffix to be used at the end of each exported file. */
  get pngSuffix(): Read<M, string>;
  set pngSuffix(value: string);

  /** If true, export hidden spreads. If false, skip export of hidden spreads. */
  get exportingHiddenSpread(): Read<M, boolean>;
  set exportingHiddenSpread(value: boolean);

  /** Whether to export all pages or just the range given in {@link pageString}. See {@link PNGExportRangeEnum}. */
  get pngExportRange(): Read<M, PNGExportRangeEnum>;
  set pngExportRange(value: PNGExportRangeEnum);

  /** The page(s) to export, specified as a page number or an array of page numbers. Note: Valid when PNG export range is not all. */
  get pageString(): Read<M, string>;
  set pageString(value: string);

  /** If true, exports each spread as a single PNG file. If false, exports facing pages as separate files and appends sequential numbers to each file name. */
  get exportingSpread(): Read<M, boolean>;
  set exportingSpread(value: boolean);

  /** The compression quality of the exported PNG — low, medium, high, or maximum. See {@link PNGQualityEnum}. */
  get pngQuality(): Read<M, PNGQualityEnum>;
  set pngQuality(value: PNGQualityEnum);

  /** The export resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0). */
  get exportResolution(): Read<M, number>;
  set exportResolution(value: number);

  /** RGB or Gray. */
  get pngColorSpace(): Read<M, PNGColorSpaceEnum>;
  set pngColorSpace(value: PNGColorSpaceEnum);

  /** If true, use a transparent background for the exported PNG. */
  get transparentBackground(): Read<M, boolean>;
  set transparentBackground(value: boolean);

  /** If true, use anti-aliasing for text and vectors during export. */
  get antiAlias(): Read<M, boolean>;
  set antiAlias(value: boolean);

  /** If true, uses the document's bleed settings in the exported PNG. */
  get useDocumentBleeds(): Read<M, boolean>;
  set useDocumentBleeds(value: boolean);

  /** If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing. */
  get simulateOverprint(): Read<M, boolean>;
  set simulateOverprint(value: boolean);
}
