/**
 * EPubExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Book } from './Book';
import type { Document } from './Document';
import type { BulletListExportOption } from './Enums/BulletListExportOption';
import type { EPubFootnotePlacement } from './Enums/EPubFootnotePlacement';
import type { EpubCover } from './Enums/EpubCover';
import type { EpubVersion } from './Enums/EpubVersion';
import type { ExportOrder } from './Enums/ExportOrder';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageAlignmentType } from './Enums/ImageAlignmentType';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImagePageBreakType } from './Enums/ImagePageBreakType';
import type { ImageResolution } from './Enums/ImageResolution';
import type { ImageSizeOption } from './Enums/ImageSizeOption';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { NumberedListExportOption } from './Enums/NumberedListExportOption';
import type { UseSVGAsEnum } from './Enums/UseSVGAsEnum';

/**
 * EPUB export settings, reached from a {@link Document} or {@link Book}:
 * metadata written into the package (title, creator, rights, accessibility),
 * and the image, list, and layout conversion options for EPUB output.
 */
export interface EPubExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Book | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPubExportPreference';

  /** Resolves the proxy into the individual {@link EPubExportPreference} objects it stands for. */
  getElements(): EPubExportPreference<'single'>[];

  /** The unique ID of the object. */
  get id(): Read<M, string>;
  set id(value: string);

  /** The PNG compression level. */
  readonly level: Read<M, number>;

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

  /** If true, InDesign will use existing image for graphic objects on export. */
  get useExistingImageOnExport(): Read<M, boolean>;
  set useExistingImageOnExport(value: boolean);

  /** If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes. */
  get includeClassesInHTML(): Read<M, boolean>;
  set includeClassesInHTML(value: boolean);

  /** How placed SVG files are represented in the exported markup: rasterized to an image or embedded as {@link UseSVGAsEnum} specifies. */
  get useSVGAs(): Read<M, UseSVGAsEnum>;
  set useSVGAs(value: UseSVGAsEnum);

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

  /** If true, generates EPUB page navigation. */
  get epubCreatePageNavigation(): Read<M, boolean>;
  set epubCreatePageNavigation(value: boolean);

  /** Becomes `dc:publisher`. */
  get epubPublisher(): Read<M, string>;
  set epubPublisher(value: string);

  /** The order content is exported in: document layout, Articles panel order, or XML structure — see {@link ExportOrder}. */
  get exportOrder(): Read<M, ExportOrder>;
  set exportOrder(value: ExportOrder);

  /** Where the EPUB's cover image comes from: none, the rasterized first page, or an external image file — see {@link EpubCover}. */
  get epubCover(): Read<M, EpubCover>;
  set epubCover(value: EpubCover);

  /** The epub cover image file path. */
  get coverImageFile(): Read<M, string>;
  set coverImageFile(value: string);

  /** How bulleted lists are exported: as an HTML unordered list, or converted to plain text — see {@link BulletListExportOption}. */
  get bulletExportOption(): Read<M, BulletListExportOption>;
  set bulletExportOption(value: BulletListExportOption);

  /** How numbered lists are exported: as an HTML ordered list, or converted to plain text — see {@link NumberedListExportOption}. */
  get numberedListExportOption(): Read<M, NumberedListExportOption>;
  set numberedListExportOption(value: NumberedListExportOption);

  /** Left margin of the epub. */
  get leftMargin(): Read<M, number>;
  set leftMargin(value: number);

  /** Right margin of the epub. */
  get rightMargin(): Read<M, number>;
  set rightMargin(value: number);

  /** Top margin of the epub. */
  get topMargin(): Read<M, number>;
  set topMargin(value: number);

  /** Bottom margin of the epub. */
  get bottomMargin(): Read<M, number>;
  set bottomMargin(value: number);

  /** Pixel density of converted images: `72`, `96`, `150`, or `300` ppi — see {@link ImageResolution}. */
  get imageExportResolution(): Read<M, ImageResolution>;
  set imageExportResolution(value: ImageResolution);

  /** How a converted image is sized in the exported markup: no CSS size, a fixed size, or a size relative to the text flow — see {@link ImageSizeOption}. */
  get customImageSizeOption(): Read<M, ImageSizeOption>;
  set customImageSizeOption(value: ImageSizeOption);

  /** If true, format image based on layout appearance. */
  get preserveLayoutAppearence(): Read<M, boolean>;
  set preserveLayoutAppearence(value: boolean);

  /** Horizontal alignment of images within their container: left, center, or right — see {@link ImageAlignmentType}. */
  get imageAlignment(): Read<M, ImageAlignmentType>;
  set imageAlignment(value: ImageAlignmentType);

  /** Space Before applied to images. */
  get imageSpaceBefore(): Read<M, number>;
  set imageSpaceBefore(value: number);

  /** Space After applied to images. */
  get imageSpaceAfter(): Read<M, number>;
  set imageSpaceAfter(value: number);

  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): Read<M, boolean>;
  set useImagePageBreak(value: boolean);

  /** Image page break settings to be used with objects. */
  get imagePageBreak(): Read<M, ImagePageBreakType>;
  set imagePageBreak(value: ImagePageBreakType);

  /** The file format used for converted images — automatic (best format per image), JPEG, GIF, or PNG, see {@link ImageConversion}. Valid only when copy optimized images and/or copy formatted images is on. */
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

  /** Ignore object level image conversion settings. */
  get ignoreObjectConversionSettings(): Read<M, boolean>;
  set ignoreObjectConversionSettings(value: boolean);

  /** The name of the TOC style used to generate the EPUB's table of contents. */
  get tocStyleName(): Read<M, string>;
  set tocStyleName(value: string);

  /** If true, breaks the document into smaller files when generating the EPUB. */
  get breakDocument(): Read<M, boolean>;
  set breakDocument(value: boolean);

  /** The paragraph style used to determine where {@link breakDocument} splits the document. */
  get paragraphStyleName(): Read<M, string>;
  set paragraphStyleName(value: string);

  /** If true, strip soft return. */
  get stripSoftReturn(): Read<M, boolean>;
  set stripSoftReturn(value: boolean);

  /** If true, output local style override. */
  get preserveLocalOverride(): Read<M, boolean>;
  set preserveLocalOverride(value: boolean);

  /** If true, embed font in epub. */
  get embedFont(): Read<M, boolean>;
  set embedFont(value: boolean);

  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): Read<M, string[]>;
  set externalStyleSheets(value: string[]);

  /** The file path of external javascripts. */
  get javascripts(): Read<M, string[]>;
  set javascripts(value: string[]);

  /** The EPUB spec version to export against: EPUB 2.0.1 or EPUB 3.0 — see {@link EpubVersion}. */
  get version(): Read<M, EpubVersion>;
  set version(value: EpubVersion);

  /** If true, InDesign will generate cascade style sheet. */
  get generateCascadeStyleSheet(): Read<M, boolean>;
  set generateCascadeStyleSheet(value: boolean);

  /** Where footnote text is placed in the exported EPUB: after the story, after the paragraph, or inside a popup — see {@link EPubFootnotePlacement}. */
  get footnotePlacement(): Read<M, EPubFootnotePlacement>;
  set footnotePlacement(value: EPubFootnotePlacement);
}
