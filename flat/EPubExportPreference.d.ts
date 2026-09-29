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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * EPUB export settings, reached from a {@link Document} or {@link Book}:
 * metadata written into the package (title, creator, rights, accessibility),
 * and the image, list, and layout conversion options for EPUB output.
 */
export interface EPubExportPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Book | Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<EPubExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPubExportPreference, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'EPubExportPreference';
  /** Resolves the proxy into the individual {@link EPubExportPreference} objects it stands for. */
  getElements(): EPubExportPreference[];
  /** The unique ID of the object. */
  get id(): string;
  set id(value: string);
  /** The PNG compression level. */
  readonly level: number;
  /** Becomes the EPUB package's `dc:title`. Defaults to the document name when empty. */
  get epubTitle(): string;
  set epubTitle(value: string);
  /** Becomes `dc:creator` — the author shown by reading systems. */
  get epubCreator(): string;
  set epubCreator(value: string);
  /** Becomes `dc:subject`. Comma-separated values are written as separate subjects. */
  get epubSubject(): string;
  set epubSubject(value: string);
  /** Becomes `dc:description`. */
  get epubDescription(): string;
  set epubDescription(value: string);
  /** Becomes `dc:date`. Written verbatim, so an ISO 8601 date is the safe form. */
  get epubDate(): string;
  set epubDate(value: string);
  /** Becomes `dc:rights` — the copyright statement. */
  get epubRights(): string;
  set epubRights(value: string);
  /** If true, InDesign will use existing image for graphic objects on export. */
  get useExistingImageOnExport(): boolean;
  set useExistingImageOnExport(value: boolean);
  /** If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes. */
  get includeClassesInHTML(): boolean;
  set includeClassesInHTML(value: boolean);
  /** How placed SVG files are represented in the exported markup: rasterized to an image or embedded as {@link UseSVGAsEnum} specifies. */
  get useSVGAs(): UseSVGAsEnum;
  set useSVGAs(value: UseSVGAsEnum);
  /** Becomes `schema:accessibilityFeature`, listing what aids the book provides (`alternativeText`, `structuralNavigation`, …). */
  get epubAccessibilityFeature(): string;
  set epubAccessibilityFeature(value: string);
  /** Becomes `schema:accessibilityHazard` — content that could harm a susceptible reader, such as `flashing` or `motionSimulation`. `none` is a meaningful value. */
  get epubAccessibilityHazard(): string;
  set epubAccessibilityHazard(value: string);
  /** Becomes `schema:accessMode`: the senses a reader needs to use the book at all (`textual`, `visual`, …). */
  get epubAccessibilityMode(): string;
  set epubAccessibilityMode(value: string);
  /** Becomes `schema:accessModeSufficient`: a combination of senses that is enough on its own, which is not the same as listing every mode present. */
  get epubAccessibilityModeSufficient(): string;
  set epubAccessibilityModeSufficient(value: string);
  /** Becomes `schema:accessibilitySummary` — prose for a human deciding whether the book is usable. */
  get epubAccessibilitySummary(): string;
  set epubAccessibilitySummary(value: string);
  /** Becomes `dcterms:conformsTo` — the accessibility specification claimed, given as its URL. */
  get epubAccessibilityConformsTo(): string;
  set epubAccessibilityConformsTo(value: string);
  /** Becomes `a11y:certifiedBy` — who vouched for the accessibility claim. */
  get epubAccessibilityCertifiedBy(): string;
  set epubAccessibilityCertifiedBy(value: string);
  /** Becomes `a11y:certifierCredential` — the certifier's qualification. */
  get epubAccessibilityCredentials(): string;
  set epubAccessibilityCredentials(value: string);
  /** Becomes `a11y:certifierReport` — a URL for the full accessibility report. */
  get epubAccessibilityReportLink(): string;
  set epubAccessibilityReportLink(value: string);
  /** If true, generates EPUB page navigation. */
  get epubCreatePageNavigation(): boolean;
  set epubCreatePageNavigation(value: boolean);
  /** Becomes `dc:publisher`. */
  get epubPublisher(): string;
  set epubPublisher(value: string);
  /** The order content is exported in: document layout, Articles panel order, or XML structure — see {@link ExportOrder}. */
  get exportOrder(): ExportOrder;
  set exportOrder(value: ExportOrder);
  /** Where the EPUB's cover image comes from: none, the rasterized first page, or an external image file — see {@link EpubCover}. */
  get epubCover(): EpubCover;
  set epubCover(value: EpubCover);
  /** The epub cover image file path. */
  get coverImageFile(): string;
  set coverImageFile(value: string);
  /** How bulleted lists are exported: as an HTML unordered list, or converted to plain text — see {@link BulletListExportOption}. */
  get bulletExportOption(): BulletListExportOption;
  set bulletExportOption(value: BulletListExportOption);
  /** How numbered lists are exported: as an HTML ordered list, or converted to plain text — see {@link NumberedListExportOption}. */
  get numberedListExportOption(): NumberedListExportOption;
  set numberedListExportOption(value: NumberedListExportOption);
  /** Left margin of the epub. */
  get leftMargin(): number;
  set leftMargin(value: number);
  /** Right margin of the epub. */
  get rightMargin(): number;
  set rightMargin(value: number);
  /** Top margin of the epub. */
  get topMargin(): number;
  set topMargin(value: number);
  /** Bottom margin of the epub. */
  get bottomMargin(): number;
  set bottomMargin(value: number);
  /** Pixel density of converted images: `72`, `96`, `150`, or `300` ppi — see {@link ImageResolution}. */
  get imageExportResolution(): ImageResolution;
  set imageExportResolution(value: ImageResolution);
  /** How a converted image is sized in the exported markup: no CSS size, a fixed size, or a size relative to the text flow — see {@link ImageSizeOption}. */
  get customImageSizeOption(): ImageSizeOption;
  set customImageSizeOption(value: ImageSizeOption);
  /** If true, format image based on layout appearance. */
  get preserveLayoutAppearence(): boolean;
  set preserveLayoutAppearence(value: boolean);
  /** Horizontal alignment of images within their container: left, center, or right — see {@link ImageAlignmentType}. */
  get imageAlignment(): ImageAlignmentType;
  set imageAlignment(value: ImageAlignmentType);
  /** Space Before applied to images. */
  get imageSpaceBefore(): number;
  set imageSpaceBefore(value: number);
  /** Space After applied to images. */
  get imageSpaceAfter(): number;
  set imageSpaceAfter(value: number);
  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): boolean;
  set useImagePageBreak(value: boolean);
  /** Image page break settings to be used with objects. */
  get imagePageBreak(): ImagePageBreakType;
  set imagePageBreak(value: ImagePageBreakType);
  /** The file format used for converted images — automatic (best format per image), JPEG, GIF, or PNG, see {@link ImageConversion}. Valid only when copy optimized images and/or copy formatted images is on. */
  get imageConversion(): ImageConversion;
  set imageConversion(value: ImageConversion);
  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): GIFOptionsPalette;
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): boolean;
  set gifOptionsInterlaced(value: boolean);
  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): JPEGOptionsQuality;
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): JPEGOptionsFormat;
  set jpegOptionsFormat(value: JPEGOptionsFormat);
  /** Ignore object level image conversion settings. */
  get ignoreObjectConversionSettings(): boolean;
  set ignoreObjectConversionSettings(value: boolean);
  /** The name of the TOC style used to generate the EPUB's table of contents. */
  get tocStyleName(): string;
  set tocStyleName(value: string);
  /** If true, breaks the document into smaller files when generating the EPUB. */
  get breakDocument(): boolean;
  set breakDocument(value: boolean);
  /** The paragraph style used to determine where {@link breakDocument} splits the document. */
  get paragraphStyleName(): string;
  set paragraphStyleName(value: string);
  /** If true, strip soft return. */
  get stripSoftReturn(): boolean;
  set stripSoftReturn(value: boolean);
  /** If true, output local style override. */
  get preserveLocalOverride(): boolean;
  set preserveLocalOverride(value: boolean);
  /** If true, embed font in epub. */
  get embedFont(): boolean;
  set embedFont(value: boolean);
  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): string[];
  set externalStyleSheets(value: string[]);
  /** The file path of external javascripts. */
  get javascripts(): string[];
  set javascripts(value: string[]);
  /** The EPUB spec version to export against: EPUB 2.0.1 or EPUB 3.0 — see {@link EpubVersion}. */
  get version(): EpubVersion;
  set version(value: EpubVersion);
  /** If true, InDesign will generate cascade style sheet. */
  get generateCascadeStyleSheet(): boolean;
  set generateCascadeStyleSheet(value: boolean);
  /** Where footnote text is placed in the exported EPUB: after the story, after the paragraph, or inside a popup — see {@link EPubFootnotePlacement}. */
  get footnotePlacement(): EPubFootnotePlacement;
  set footnotePlacement(value: EPubFootnotePlacement);
}


/**
 * The broadcast proxy for {@link EPubExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link EPubExportPreference} there.
 */
export interface EPubExportPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Book | Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<EPubExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPubExportPreferencePlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'EPubExportPreference';
  /** Resolves the proxy into the individual {@link EPubExportPreference} objects it stands for. */
  getElements(): EPubExportPreference[];
  /** The unique ID of the object. */
  get id(): (string)[];
  set id(value: string);
  /** The PNG compression level. */
  readonly level: (number)[];
  /** Becomes the EPUB package's `dc:title`. Defaults to the document name when empty. */
  get epubTitle(): (string)[];
  set epubTitle(value: string);
  /** Becomes `dc:creator` — the author shown by reading systems. */
  get epubCreator(): (string)[];
  set epubCreator(value: string);
  /** Becomes `dc:subject`. Comma-separated values are written as separate subjects. */
  get epubSubject(): (string)[];
  set epubSubject(value: string);
  /** Becomes `dc:description`. */
  get epubDescription(): (string)[];
  set epubDescription(value: string);
  /** Becomes `dc:date`. Written verbatim, so an ISO 8601 date is the safe form. */
  get epubDate(): (string)[];
  set epubDate(value: string);
  /** Becomes `dc:rights` — the copyright statement. */
  get epubRights(): (string)[];
  set epubRights(value: string);
  /** If true, InDesign will use existing image for graphic objects on export. */
  get useExistingImageOnExport(): (boolean)[];
  set useExistingImageOnExport(value: boolean);
  /** If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes. */
  get includeClassesInHTML(): (boolean)[];
  set includeClassesInHTML(value: boolean);
  /** How placed SVG files are represented in the exported markup: rasterized to an image or embedded as {@link UseSVGAsEnum} specifies. */
  get useSVGAs(): (UseSVGAsEnum)[];
  set useSVGAs(value: UseSVGAsEnum);
  /** Becomes `schema:accessibilityFeature`, listing what aids the book provides (`alternativeText`, `structuralNavigation`, …). */
  get epubAccessibilityFeature(): (string)[];
  set epubAccessibilityFeature(value: string);
  /** Becomes `schema:accessibilityHazard` — content that could harm a susceptible reader, such as `flashing` or `motionSimulation`. `none` is a meaningful value. */
  get epubAccessibilityHazard(): (string)[];
  set epubAccessibilityHazard(value: string);
  /** Becomes `schema:accessMode`: the senses a reader needs to use the book at all (`textual`, `visual`, …). */
  get epubAccessibilityMode(): (string)[];
  set epubAccessibilityMode(value: string);
  /** Becomes `schema:accessModeSufficient`: a combination of senses that is enough on its own, which is not the same as listing every mode present. */
  get epubAccessibilityModeSufficient(): (string)[];
  set epubAccessibilityModeSufficient(value: string);
  /** Becomes `schema:accessibilitySummary` — prose for a human deciding whether the book is usable. */
  get epubAccessibilitySummary(): (string)[];
  set epubAccessibilitySummary(value: string);
  /** Becomes `dcterms:conformsTo` — the accessibility specification claimed, given as its URL. */
  get epubAccessibilityConformsTo(): (string)[];
  set epubAccessibilityConformsTo(value: string);
  /** Becomes `a11y:certifiedBy` — who vouched for the accessibility claim. */
  get epubAccessibilityCertifiedBy(): (string)[];
  set epubAccessibilityCertifiedBy(value: string);
  /** Becomes `a11y:certifierCredential` — the certifier's qualification. */
  get epubAccessibilityCredentials(): (string)[];
  set epubAccessibilityCredentials(value: string);
  /** Becomes `a11y:certifierReport` — a URL for the full accessibility report. */
  get epubAccessibilityReportLink(): (string)[];
  set epubAccessibilityReportLink(value: string);
  /** If true, generates EPUB page navigation. */
  get epubCreatePageNavigation(): (boolean)[];
  set epubCreatePageNavigation(value: boolean);
  /** Becomes `dc:publisher`. */
  get epubPublisher(): (string)[];
  set epubPublisher(value: string);
  /** The order content is exported in: document layout, Articles panel order, or XML structure — see {@link ExportOrder}. */
  get exportOrder(): (ExportOrder)[];
  set exportOrder(value: ExportOrder);
  /** Where the EPUB's cover image comes from: none, the rasterized first page, or an external image file — see {@link EpubCover}. */
  get epubCover(): (EpubCover)[];
  set epubCover(value: EpubCover);
  /** The epub cover image file path. */
  get coverImageFile(): (string)[];
  set coverImageFile(value: string);
  /** How bulleted lists are exported: as an HTML unordered list, or converted to plain text — see {@link BulletListExportOption}. */
  get bulletExportOption(): (BulletListExportOption)[];
  set bulletExportOption(value: BulletListExportOption);
  /** How numbered lists are exported: as an HTML ordered list, or converted to plain text — see {@link NumberedListExportOption}. */
  get numberedListExportOption(): (NumberedListExportOption)[];
  set numberedListExportOption(value: NumberedListExportOption);
  /** Left margin of the epub. */
  get leftMargin(): (number)[];
  set leftMargin(value: number);
  /** Right margin of the epub. */
  get rightMargin(): (number)[];
  set rightMargin(value: number);
  /** Top margin of the epub. */
  get topMargin(): (number)[];
  set topMargin(value: number);
  /** Bottom margin of the epub. */
  get bottomMargin(): (number)[];
  set bottomMargin(value: number);
  /** Pixel density of converted images: `72`, `96`, `150`, or `300` ppi — see {@link ImageResolution}. */
  get imageExportResolution(): (ImageResolution)[];
  set imageExportResolution(value: ImageResolution);
  /** How a converted image is sized in the exported markup: no CSS size, a fixed size, or a size relative to the text flow — see {@link ImageSizeOption}. */
  get customImageSizeOption(): (ImageSizeOption)[];
  set customImageSizeOption(value: ImageSizeOption);
  /** If true, format image based on layout appearance. */
  get preserveLayoutAppearence(): (boolean)[];
  set preserveLayoutAppearence(value: boolean);
  /** Horizontal alignment of images within their container: left, center, or right — see {@link ImageAlignmentType}. */
  get imageAlignment(): (ImageAlignmentType)[];
  set imageAlignment(value: ImageAlignmentType);
  /** Space Before applied to images. */
  get imageSpaceBefore(): (number)[];
  set imageSpaceBefore(value: number);
  /** Space After applied to images. */
  get imageSpaceAfter(): (number)[];
  set imageSpaceAfter(value: number);
  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): (boolean)[];
  set useImagePageBreak(value: boolean);
  /** Image page break settings to be used with objects. */
  get imagePageBreak(): (ImagePageBreakType)[];
  set imagePageBreak(value: ImagePageBreakType);
  /** The file format used for converted images — automatic (best format per image), JPEG, GIF, or PNG, see {@link ImageConversion}. Valid only when copy optimized images and/or copy formatted images is on. */
  get imageConversion(): (ImageConversion)[];
  set imageConversion(value: ImageConversion);
  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): (GIFOptionsPalette)[];
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): (boolean)[];
  set gifOptionsInterlaced(value: boolean);
  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): (JPEGOptionsQuality)[];
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): (JPEGOptionsFormat)[];
  set jpegOptionsFormat(value: JPEGOptionsFormat);
  /** Ignore object level image conversion settings. */
  get ignoreObjectConversionSettings(): (boolean)[];
  set ignoreObjectConversionSettings(value: boolean);
  /** The name of the TOC style used to generate the EPUB's table of contents. */
  get tocStyleName(): (string)[];
  set tocStyleName(value: string);
  /** If true, breaks the document into smaller files when generating the EPUB. */
  get breakDocument(): (boolean)[];
  set breakDocument(value: boolean);
  /** The paragraph style used to determine where {@link breakDocument} splits the document. */
  get paragraphStyleName(): (string)[];
  set paragraphStyleName(value: string);
  /** If true, strip soft return. */
  get stripSoftReturn(): (boolean)[];
  set stripSoftReturn(value: boolean);
  /** If true, output local style override. */
  get preserveLocalOverride(): (boolean)[];
  set preserveLocalOverride(value: boolean);
  /** If true, embed font in epub. */
  get embedFont(): (boolean)[];
  set embedFont(value: boolean);
  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): (string[])[];
  set externalStyleSheets(value: string[]);
  /** The file path of external javascripts. */
  get javascripts(): (string[])[];
  set javascripts(value: string[]);
  /** The EPUB spec version to export against: EPUB 2.0.1 or EPUB 3.0 — see {@link EpubVersion}. */
  get version(): (EpubVersion)[];
  set version(value: EpubVersion);
  /** If true, InDesign will generate cascade style sheet. */
  get generateCascadeStyleSheet(): (boolean)[];
  set generateCascadeStyleSheet(value: boolean);
  /** Where footnote text is placed in the exported EPUB: after the story, after the paragraph, or inside a popup — see {@link EPubFootnotePlacement}. */
  get footnotePlacement(): (EPubFootnotePlacement)[];
  set footnotePlacement(value: EPubFootnotePlacement);
}
