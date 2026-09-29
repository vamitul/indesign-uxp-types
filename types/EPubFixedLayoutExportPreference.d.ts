/**
 * EPubFixedLayoutExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Book } from './Book';
import type { Document } from './Document';
import type { EpubCover } from './Enums/EpubCover';
import type { EpubFixedLayoutSpreadControl } from './Enums/EpubFixedLayoutSpreadControl';
import type { EpubNavigationStyle } from './Enums/EpubNavigationStyle';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { PageRangeFormat } from './Enums/PageRangeFormat';

/**
 * Export settings for a fixed-layout (page-for-page, non-reflowable) EPUB: package
 * metadata (title, creator, publisher, rights…), accessibility metadata, image
 * conversion, and spread/navigation options specific to fixed layout.
 */
export interface EPubFixedLayoutExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Book | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPubFixedLayoutExportPreference';

  /** Resolves the proxy into the individual {@link EPubFixedLayoutExportPreference} objects it stands for. */
  getElements(): EPubFixedLayoutExportPreference<'single'>[];

  /** The unique ID of the object. */
  get id(): Read<M, string>;
  set id(value: string);

  /** The PNG compression level. */
  readonly level: Read<M, number>;

  /** Becomes `dc:publisher`. */
  get epubPublisher(): Read<M, string>;
  set epubPublisher(value: string);

  /** Whether the EPUB has no cover image or uses the first page rasterized as one; see {@link EpubCover}. */
  get epubCover(): Read<M, EpubCover>;
  set epubCover(value: EpubCover);

  /** The epub cover image file path. */
  get coverImageFile(): Read<M, string>;
  set coverImageFile(value: string);

  /** The export resolution. */
  get imageExportResolution(): Read<M, ImageResolution>;
  set imageExportResolution(value: ImageResolution);

  /** The file format for converted images, or `Automatic` to pick the best format per image; see {@link ImageConversion}. Note: Valid only when copy optimized images and/or copy formatted images is true. */
  get imageConversion(): Read<M, ImageConversion>;
  set imageConversion(value: ImageConversion);

  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): Read<M, GIFOptionsPalette>;
  set gifOptionsPalette(value: GIFOptionsPalette);

  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): Read<M, boolean>;
  set gifOptionsInterlaced(value: boolean);

  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): Read<M, JPEGOptionsQuality>;
  set jpegOptionsQuality(value: JPEGOptionsQuality);

  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): Read<M, JPEGOptionsFormat>;
  set jpegOptionsFormat(value: JPEGOptionsFormat);

  /** The name of TOC style to generate epub TOC. */
  get tocStyleName(): Read<M, string>;
  set tocStyleName(value: string);

  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): Read<M, string[]>;
  set externalStyleSheets(value: string[]);

  /** The file path of external javascripts. */
  get javascripts(): Read<M, string[]>;
  set javascripts(value: string[]);

  /** Becomes the EPUB package's `dc:title`. Defaults to the document name when empty. */
  get epubTitle(): Read<M, string>;
  set epubTitle(value: string);

  /** Becomes `dc:creator` — the author shown by reading systems. */
  get epubCreator(): Read<M, string>;
  set epubCreator(value: string);

  /** Becomes `dc:subject`. Comma-separated values are written as separate subjects. */
  get epubSubject(): Read<M, string>;
  set epubSubject(value: string);

  /** Becomes `dc:description`. */
  get epubDescription(): Read<M, string>;
  set epubDescription(value: string);

  /** Becomes `dc:date`. Written verbatim, so an ISO 8601 date is the safe form. */
  get epubDate(): Read<M, string>;
  set epubDate(value: string);

  /** Becomes `dc:rights` — the copyright statement. */
  get epubRights(): Read<M, string>;
  set epubRights(value: string);

  /** The pages to export when {@link epubPageRangeFormat} is set to export a page range. */
  get epubPageRange(): Read<M, string>;
  set epubPageRange(value: string);

  /** Whether all pages are exported or only those in {@link epubPageRange}; see {@link PageRangeFormat}. */
  get epubPageRangeFormat(): Read<M, PageRangeFormat>;
  set epubPageRangeFormat(value: PageRangeFormat);

  /** Whether spreads follow the document's own layout or are forced to physical (single-page) spreads; see {@link EpubFixedLayoutSpreadControl}. */
  get epubSpreadControlOptions(): Read<M, EpubFixedLayoutSpreadControl>;
  set epubSpreadControlOptions(value: EpubFixedLayoutSpreadControl);

  /** Whether the EPUB has no navigation or uses filename-based navigation; see {@link EpubNavigationStyle}. */
  get epubNavigationStyles(): Read<M, EpubNavigationStyle>;
  set epubNavigationStyles(value: EpubNavigationStyle);

  /** Becomes `schema:accessibilityFeature`, listing what aids the book provides (`alternativeText`, `structuralNavigation`, …). */
  get epubAccessibilityFeature(): Read<M, string>;
  set epubAccessibilityFeature(value: string);

  /** Becomes `schema:accessibilityHazard` — content that could harm a susceptible reader, such as `flashing` or `motionSimulation`. `none` is a meaningful value. */
  get epubAccessibilityHazard(): Read<M, string>;
  set epubAccessibilityHazard(value: string);

  /** Becomes `schema:accessMode`: the senses a reader needs to use the book at all (`textual`, `visual`, …). */
  get epubAccessibilityMode(): Read<M, string>;
  set epubAccessibilityMode(value: string);

  /** Becomes `schema:accessModeSufficient`: a combination of senses that is enough on its own, which is not the same as listing every mode present. */
  get epubAccessibilityModeSufficient(): Read<M, string>;
  set epubAccessibilityModeSufficient(value: string);

  /** Becomes `schema:accessibilitySummary` — prose for a human deciding whether the book is usable. */
  get epubAccessibilitySummary(): Read<M, string>;
  set epubAccessibilitySummary(value: string);

  /** Becomes `dcterms:conformsTo` — the accessibility specification claimed, given as its URL. */
  get epubAccessibilityConformsTo(): Read<M, string>;
  set epubAccessibilityConformsTo(value: string);

  /** Becomes `a11y:certifiedBy` — who vouched for the accessibility claim. */
  get epubAccessibilityCertifiedBy(): Read<M, string>;
  set epubAccessibilityCertifiedBy(value: string);

  /** Becomes `a11y:certifierCredential` — the certifier's qualification. */
  get epubAccessibilityCredentials(): Read<M, string>;
  set epubAccessibilityCredentials(value: string);

  /** Becomes `a11y:certifierReport` — a URL for the full accessibility report. */
  get epubAccessibilityReportLink(): Read<M, string>;
  set epubAccessibilityReportLink(value: string);
}
