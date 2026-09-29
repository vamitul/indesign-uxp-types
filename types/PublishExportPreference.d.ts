/**
 * PublishExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { PageRangeFormat } from './Enums/PageRangeFormat';
import type { PublishCoverEnum } from './Enums/PublishCoverEnum';
import type { PublishFormatEnum } from './Enums/PublishFormatEnum';

/**
 * Publish export preferences.
 */
export interface PublishExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PublishExportPreference';

  /** Resolves the proxy into the individual {@link PublishExportPreference} objects it stands for. */
  getElements(): PublishExportPreference<'single'>[];

  /** Where the publish cover comes from — the document's first page, a chosen page, or an external image — see {@link PublishCoverEnum}. */
  get publishCover(): Read<M, PublishCoverEnum>;
  set publishCover(value: PublishCoverEnum);

  /** The epub cover image file path. */
  get coverImageFile(): Read<M, string>;
  set coverImageFile(value: string);

  /** The pages to publish, as a page range string; used when the export is not set to publish all pages. */
  get publishPageRange(): Read<M, string>;
  set publishPageRange(value: string);

  /** Whether all pages are published or only {@link publishPageRange} — see {@link PageRangeFormat}. */
  get publishPageRangeFormat(): Read<M, PageRangeFormat>;
  set publishPageRangeFormat(value: PageRangeFormat);

  /** The file format to use for converted images. */
  get imageConversion(): Read<M, ImageConversion>;
  set imageConversion(value: ImageConversion);

  /** The resolution, in pixels per inch, at which images are exported — see {@link ImageResolution}. */
  get imageExportResolution(): Read<M, ImageResolution>;
  set imageExportResolution(value: ImageResolution);

  /** The description shown alongside the published document. */
  get publishDescription(): Read<M, string>;
  set publishDescription(value: string);

  /** The file name. */
  get publishFileName(): Read<M, string>;
  set publishFileName(value: string);

  /** Whether the document is published page by page or spread by spread — see {@link PublishFormatEnum}. */
  get publishFormat(): Read<M, PublishFormatEnum>;
  set publishFormat(value: PublishFormatEnum);

  /** The page rasterised as the cover image, used when the cover option is a chosen page. */
  get coverPage(): Read<M, string>;
  set coverPage(value: string);

  /** The color palette for GIF conversion. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsPalette(): Read<M, GIFOptionsPalette>;
  set gifOptionsPalette(value: GIFOptionsPalette);

  /** The quality of converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsQuality(): Read<M, JPEGOptionsQuality>;
  set jpegOptionsQuality(value: JPEGOptionsQuality);

  /** If PDF should be uploaded while publishing. */
  get publishPdf(): Read<M, boolean>;
  set publishPdf(value: boolean);
}
