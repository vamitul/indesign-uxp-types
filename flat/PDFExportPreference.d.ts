/**
 * PDFExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { FlattenerPreset } from './FlattenerPreset';
import type { AcrobatCompatibility } from './Enums/AcrobatCompatibility';
import type { BitmapCompression } from './Enums/BitmapCompression';
import type { CompressionQuality } from './Enums/CompressionQuality';
import type { ExportLayerOptions } from './Enums/ExportLayerOptions';
import type { ICCProfiles } from './Enums/ICCProfiles';
import type { InteractiveElementsOptions } from './Enums/InteractiveElementsOptions';
import type { MarkTypes } from './Enums/MarkTypes';
import type { MonoBitmapCompression } from './Enums/MonoBitmapCompression';
import type { PDFColorSpace } from './Enums/PDFColorSpace';
import type { PDFCompressionType } from './Enums/PDFCompressionType';
import type { PDFMarkWeight } from './Enums/PDFMarkWeight';
import type { PDFProfileSelector } from './Enums/PDFProfileSelector';
import type { PDFXStandards } from './Enums/PDFXStandards';
import type { PageLayoutOptions } from './Enums/PageLayoutOptions';
import type { PageRange } from './Enums/PageRange';
import type { PdfDisplayTitleOptions } from './Enums/PdfDisplayTitleOptions';
import type { PdfMagnificationOptions } from './Enums/PdfMagnificationOptions';
import type { Sampling } from './Enums/Sampling';
import type { Book } from './Book';
import type { Document } from './Document';
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
 * The application's default PDF export options, used by {@link Document.exportFile} and {@link Book.exportFile} when no explicit preset is supplied.
 */
export interface PDFExportPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<PDFExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PDFExportPreference, 'single'>);
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
  readonly constructorName: 'PDFExportPreference';
  /** Resolves the proxy into the individual {@link PDFExportPreference} objects it stands for. */
  getElements(): PDFExportPreference[];
  /** The effective destination color profile actually used on export. */
  readonly effectivePDFDestinationProfile: PDFProfileSelector | string;
  /** The effective PDF/X OC registry URL actually used on export. */
  readonly effectiveOCRegistry: string;
  /** The effective PDF/X output condition actually used on export. */
  readonly effectiveOutputCondition: string;
  /** The effective PDF/X color profile actually used on export. */
  readonly effectivePDFXProfile: PDFProfileSelector | string;
  /** The magnification the exported PDF opens at. */
  get pdfMagnification(): PdfMagnificationOptions;
  set pdfMagnification(value: PdfMagnificationOptions);
  /** The page layout the exported PDF opens with. */
  get pdfPageLayout(): PageLayoutOptions;
  set pdfPageLayout(value: PageLayoutOptions);
  /** If `true`, the exported PDF opens in full-screen mode. */
  get openInFullScreen(): boolean;
  set openInFullScreen(value: boolean);
  /** What the exported PDF's window title bar displays. */
  get pdfDisplayTitle(): PdfDisplayTitleOptions;
  set pdfDisplayTitle(value: PdfDisplayTitleOptions);
  /** Sets the default document language in the exported PDF. The correct ISO code of the language must be provided. */
  get defaultDocumentLanguage(): string;
  set defaultDocumentLanguage(value: string);
  /** Export each page or spread as a separate PDF file. */
  get exportAsSinglePages(): boolean;
  set exportAsSinglePages(value: boolean);
  /** Suffix to be used at the end of each file when pages are exported as separate PDF files. */
  get singlePagesPDFSuffix(): string;
  set singlePagesPDFSuffix(value: string);
  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): PageRange | string;
  set pageRange(value: PageRange | string);
  /** If true, activates security controls for the PDF document. */
  get useSecurity(): boolean;
  set useSecurity(value: boolean);
  /** The password to enter when opening the PDF document. Valid only when use security is true. Note: A script can set but not get this value. */
  get openDocumentPassword(): string;
  set openDocumentPassword(value: string);
  /** Changes the open document password to the specified string. Valid only when use security is true. Note: A script can set but not get this value. */
  get changeSecurityPassword(): string;
  set changeSecurityPassword(value: string);
  /** If true, users cannot print the PDF document. Valid only when use security is true. */
  get disallowPrinting(): boolean;
  set disallowPrinting(value: boolean);
  /** If true, users cannot fill in forms, sign, extract pages, or add comments in the PDF document. Valid only when use security is true. */
  get disallowChanging(): boolean;
  set disallowChanging(value: boolean);
  /** If true, users cannot copy and paste text, images, or other content from the PDF document. Valid only when use security is true. */
  get disallowCopying(): boolean;
  set disallowCopying(value: boolean);
  /** If true, users cannot add or change notes, edit text, or fill in form fields in the PDF document. Valid only when use security is true. */
  get disallowNotes(): boolean;
  set disallowNotes(value: boolean);
  /** If true, users cannot change form fields in the PDF document. Valid only when use security is true. */
  get disallowFormFillIn(): boolean;
  set disallowFormFillIn(value: boolean);
  /** If true, users cannot extract content from the PDF document using software tools for the visually impaired. Valid only when use security is true. */
  get disallowExtractionForAccessibility(): boolean;
  set disallowExtractionForAccessibility(value: boolean);
  /** If true, users cannot insert, delete, or rotate pages in the PDF document. Valid only when use security is true. */
  get disallowDocumentAssembly(): boolean;
  set disallowDocumentAssembly(value: boolean);
  /** If true, users cannot print high-resolution copies of the PDF document. Valid only when use security is true. */
  get disallowHiResPrinting(): boolean;
  set disallowHiResPrinting(value: boolean);
  /**
   * If true and acrobat compatibility is Acrobat 6 or higher, storage systems and search
   * engines cannot access metadata stored in the PDF document.
   *
   * If true and acrobat compatibility is acrobat 5 or higher, users cannot copy and extract
   * content from the document. Valid only when use security is true.
   */
  get disallowPlaintextMetadata(): boolean;
  set disallowPlaintextMetadata(value: boolean);
  /** If true, automatically opens the PDF file after exporting. */
  get viewPDF(): boolean;
  set viewPDF(value: boolean);
  /**
   * Sets the threshold for embedding complete fonts based on how many of the fonts'
   * characters are used in the document.
   *
   * If the percentage of characters used in the document for any given font exceeds the
   * specified value, the font is completely embedded; otherwise, the font is subsetted.
   * (Range: 0 to 100) Notes: Embedding complete fonts increases file size. To completely
   * embed all fonts, use 0 (zero).
   */
  get subsetFontsBelow(): number;
  set subsetFontsBelow(value: number);
  /** The color space to use to represent color information in the exported PDF document. */
  get pdfColorSpace(): PDFColorSpace;
  set pdfColorSpace(value: PDFColorSpace);
  /** The ICC Profiles to include in the exported PDF document. */
  get includeICCProfiles(): ICCProfiles;
  set includeICCProfiles(value: ICCProfiles);
  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): boolean;
  set omitEPS(value: boolean);
  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): boolean;
  set omitPDF(value: boolean);
  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): boolean;
  set omitBitmaps(value: boolean);
  /** If true, image data that falls outside the visible portion of an image's frame is not exported to the PDF document. */
  get cropImagesToFrames(): boolean;
  set cropImagesToFrames(value: boolean);
  /** If true, generates thumbnail images for each page or spread. */
  get generateThumbnails(): boolean;
  set generateThumbnails(value: boolean);
  /** If true, optimizes the exported PDF document for faster viewing in a web browser. Note: Compresses text and line art, regardless of specified compression settings. */
  get optimizePDF(): boolean;
  set optimizePDF(value: boolean);
  /** If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher. */
  get includeStructure(): boolean;
  set includeStructure(value: boolean);
  /** The exported PDF document's Acrobat compatibility. */
  get acrobatCompatibility(): AcrobatCompatibility;
  set acrobatCompatibility(value: AcrobatCompatibility);
  /**
   * If true, simulates the effects of overprinting spot inks with different neutral density
   * values by converting spot colors to process colors for printing.
   *
   * Note: Not valid when the color output mode is defined to leave color profiles unchanged.
   */
  get simulateOverprint(): boolean;
  set simulateOverprint(value: boolean);
  /** The gamut of the final RGB or CMYK device. */
  get pdfDestinationProfile(): PDFProfileSelector | string;
  set pdfDestinationProfile(value: PDFProfileSelector | string);
  /** The PDF X color profile to use for the PDF document. */
  get pdfXProfile(): PDFProfileSelector | string;
  set pdfXProfile(value: PDFProfileSelector | string);
  /** If true, includes hyperlinks when exporting the document. */
  get includeHyperlinks(): boolean;
  set includeHyperlinks(value: boolean);
  /** If true, displays bookmarks and table of contents entries as links in the bookmarks pane in the PDF document. If false, no bookmarks are exported. */
  get includeBookmarks(): boolean;
  set includeBookmarks(value: boolean);
  /** If true, makes non-printing objects visible in the PDF document. */
  get exportNonprintingObjects(): boolean;
  set exportNonprintingObjects(value: boolean);
  /** If true, includes visible guides and baseline grids in the PDF document. */
  get exportGuidesAndGrids(): boolean;
  set exportGuidesAndGrids(value: boolean);
  /** If true, saves each layer as an Acrobat layer within the PDF document. */
  get exportLayers(): boolean;
  set exportLayers(value: boolean);
  /** The PDF/X standards compliance to test against. */
  get standardsCompliance(): PDFXStandards;
  set standardsCompliance(value: PDFXStandards);
  /**
   * The name of the intended printing condition.
   *
   * Valid only when a PDF/X compliance standard has been defined for the document. Not valid
   * when PDF/X-3 is the compliance standard or PDF export preset. For information on
   * compliance standards, see standards compliance and PDF X standards.
   */
  get outputCondition(): string;
  set outputCondition(value: string);
  /** The sampling option to apply to color bitmap images in the PDF document. */
  get colorBitmapSampling(): Sampling;
  set colorBitmapSampling(value: Sampling);
  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get colorBitmapSamplingDPI(): number;
  set colorBitmapSamplingDPI(value: number);
  /** The amount of bitmap compression to use. */
  get colorBitmapCompression(): BitmapCompression;
  set colorBitmapCompression(value: BitmapCompression);
  /** The compression option to apply to color images. */
  get colorBitmapQuality(): CompressionQuality;
  set colorBitmapQuality(value: CompressionQuality);
  /** The sampling option to apply to grayscale bitmap images. */
  get grayscaleBitmapSampling(): Sampling;
  set grayscaleBitmapSampling(value: Sampling);
  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get grayscaleBitmapSamplingDPI(): number;
  set grayscaleBitmapSamplingDPI(value: number);
  /** The bitmap compression option to apply to grayscale bitmap images. */
  get grayscaleBitmapCompression(): BitmapCompression;
  set grayscaleBitmapCompression(value: BitmapCompression);
  /** The compression option to apply to grayscale bitmap images. */
  get grayscaleBitmapQuality(): CompressionQuality;
  set grayscaleBitmapQuality(value: CompressionQuality);
  /** The sampling option to apply to monochrome bitmap images. */
  get monochromeBitmapSampling(): Sampling;
  set monochromeBitmapSampling(value: Sampling);
  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get monochromeBitmapSamplingDPI(): number;
  set monochromeBitmapSamplingDPI(value: number);
  /** The bitmap compression option to apply to monochrome bitmap images. */
  get monochromeBitmapCompression(): MonoBitmapCompression;
  set monochromeBitmapCompression(value: MonoBitmapCompression);
  /** If true, compresses text and line art using ZIP compression. */
  get compressTextAndLineArt(): boolean;
  set compressTextAndLineArt(value: boolean);
  /** The minimum dpi at which color compression is applied. (Range: 1 to 10 times the value specified for color bitmap sampling DPI.) */
  get thresholdToCompressColor(): number;
  set thresholdToCompressColor(value: number);
  /** The minimum dpi at which grayscale compression is applied. (Range: 1 to 10 times the value specified for grayscale bitmap sampling DPI.) */
  get thresholdToCompressGray(): number;
  set thresholdToCompressGray(value: number);
  /** The minimum dpi at which monochrome compression is applied. (Range: 1 to 10 times the value specified for monochrome bitmap sampling DPI.) */
  get thresholdToCompressMonochrome(): number;
  set thresholdToCompressMonochrome(value: number);
  /** The tile size for color images. Valid only when color bitmap compression is JPEG 2000. (Range: 128 to 2048) */
  get colorTileSize(): number;
  set colorTileSize(value: number);
  /** The tile size for grayscale images. Valid only when grayscale bitmap compression is JPEG 2000. (Range: 128 to 2048) */
  get grayTileSize(): number;
  set grayTileSize(value: number);
  /** The objects to compress in the PDF document. */
  get compressionType(): PDFCompressionType;
  set compressionType(value: PDFCompressionType);
  /** If true, each spread in the exported document is combined into a single page that has spread's original width. */
  get exportReaderSpreads(): boolean;
  set exportReaderSpreads(value: boolean);
  /** The offset from the edge of the page for page marks. */
  get pageMarksOffset(): number;
  set pageMarksOffset(value: MeasurementValue);
  /** Prints crop marks that define where the page should be trimmed. */
  get cropMarks(): boolean;
  set cropMarks(value: boolean);
  /** If true, prints the filename, page number, current date and time, and color separation name. */
  get pageInformationMarks(): boolean;
  set pageInformationMarks(value: boolean);
  /** If true, print bleed marks. */
  get bleedMarks(): boolean;
  set bleedMarks(value: boolean);
  /** If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments. */
  get colorBars(): boolean;
  set colorBars(value: boolean);
  /** If true, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): boolean;
  set registrationMarks(value: boolean);
  /** The stroke weight for printer's marks. */
  get printerMarkWeight(): PDFMarkWeight;
  set printerMarkWeight(value: PDFMarkWeight);
  /** The height of the bleed area at the top of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedTop(): number;
  set bleedTop(value: MeasurementValue);
  /** The width of the bleed area at the inside of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedInside(): number;
  set bleedInside(value: MeasurementValue);
  /** The height of the bleed area at the bottom of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedBottom(): number;
  set bleedBottom(value: MeasurementValue);
  /** The width of the bleed area at the outside of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedOutside(): number;
  set bleedOutside(value: MeasurementValue);
  /** The type of printer marks, either an enum value or the name of a custom marks file. */
  get pdfMarkType(): MarkTypes | string;
  set pdfMarkType(value: MarkTypes | string);
  /** If true, uses the document's bleed settings in the PDF document. */
  get useDocumentBleedWithPDF(): boolean;
  set useDocumentBleedWithPDF(value: boolean);
  /** If true, includes the document's slug area in the PDF document. */
  get includeSlugWithPDF(): boolean;
  set includeSlugWithPDF(value: boolean);
  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): boolean;
  set ignoreSpreadOverrides(value: boolean);
  /** The transparency flattener preset to use. */
  get appliedFlattenerPreset(): FlattenerPreset;
  set appliedFlattenerPreset(value: FlattenerPreset);
  /** If true, retains editing information in the exported PDF, allowing the document to be re-imported and edited in InDesign. If false, editing information is not preserved. */
  get preserveInDesignEditingCapabilities(): boolean;
  set preserveInDesignEditingCapabilities(value: boolean);
  /** The name of the output condition. Valid only when a PDF/X standard has been defined for the document. */
  get outputConditionName(): string;
  set outputConditionName(value: string);
  /** The web address for the output condition registry. Not valid when PDF/X-3 is the compliance standard or PDF export preset. */
  get ocRegistry(): string;
  set ocRegistry(value: string);
  /** How to draw interactive elements. */
  get interactiveElementsOption(): InteractiveElementsOptions;
  set interactiveElementsOption(value: InteractiveElementsOptions);
  /** Which layers to export. */
  get exportWhichLayers(): ExportLayerOptions;
  set exportWhichLayers(value: ExportLayerOptions);
  /** If true, export hidden spreads in PDF. If false, skip export of hidden spreads. */
  get exportHiddenSpread(): boolean;
  set exportHiddenSpread(value: boolean);
}


/**
 * The broadcast proxy for {@link PDFExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PDFExportPreference} there.
 */
export interface PDFExportPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<PDFExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PDFExportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'PDFExportPreference';
  /** Resolves the proxy into the individual {@link PDFExportPreference} objects it stands for. */
  getElements(): PDFExportPreference[];
  /** The effective destination color profile actually used on export. */
  readonly effectivePDFDestinationProfile: (PDFProfileSelector | string)[];
  /** The effective PDF/X OC registry URL actually used on export. */
  readonly effectiveOCRegistry: (string)[];
  /** The effective PDF/X output condition actually used on export. */
  readonly effectiveOutputCondition: (string)[];
  /** The effective PDF/X color profile actually used on export. */
  readonly effectivePDFXProfile: (PDFProfileSelector | string)[];
  /** The magnification the exported PDF opens at. */
  get pdfMagnification(): (PdfMagnificationOptions)[];
  set pdfMagnification(value: PdfMagnificationOptions);
  /** The page layout the exported PDF opens with. */
  get pdfPageLayout(): (PageLayoutOptions)[];
  set pdfPageLayout(value: PageLayoutOptions);
  /** If `true`, the exported PDF opens in full-screen mode. */
  get openInFullScreen(): (boolean)[];
  set openInFullScreen(value: boolean);
  /** What the exported PDF's window title bar displays. */
  get pdfDisplayTitle(): (PdfDisplayTitleOptions)[];
  set pdfDisplayTitle(value: PdfDisplayTitleOptions);
  /** Sets the default document language in the exported PDF. The correct ISO code of the language must be provided. */
  get defaultDocumentLanguage(): (string)[];
  set defaultDocumentLanguage(value: string);
  /** Export each page or spread as a separate PDF file. */
  get exportAsSinglePages(): (boolean)[];
  set exportAsSinglePages(value: boolean);
  /** Suffix to be used at the end of each file when pages are exported as separate PDF files. */
  get singlePagesPDFSuffix(): (string)[];
  set singlePagesPDFSuffix(value: string);
  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): (PageRange | string)[];
  set pageRange(value: PageRange | string);
  /** If true, activates security controls for the PDF document. */
  get useSecurity(): (boolean)[];
  set useSecurity(value: boolean);
  /** The password to enter when opening the PDF document. Valid only when use security is true. Note: A script can set but not get this value. */
  get openDocumentPassword(): (string)[];
  set openDocumentPassword(value: string);
  /** Changes the open document password to the specified string. Valid only when use security is true. Note: A script can set but not get this value. */
  get changeSecurityPassword(): (string)[];
  set changeSecurityPassword(value: string);
  /** If true, users cannot print the PDF document. Valid only when use security is true. */
  get disallowPrinting(): (boolean)[];
  set disallowPrinting(value: boolean);
  /** If true, users cannot fill in forms, sign, extract pages, or add comments in the PDF document. Valid only when use security is true. */
  get disallowChanging(): (boolean)[];
  set disallowChanging(value: boolean);
  /** If true, users cannot copy and paste text, images, or other content from the PDF document. Valid only when use security is true. */
  get disallowCopying(): (boolean)[];
  set disallowCopying(value: boolean);
  /** If true, users cannot add or change notes, edit text, or fill in form fields in the PDF document. Valid only when use security is true. */
  get disallowNotes(): (boolean)[];
  set disallowNotes(value: boolean);
  /** If true, users cannot change form fields in the PDF document. Valid only when use security is true. */
  get disallowFormFillIn(): (boolean)[];
  set disallowFormFillIn(value: boolean);
  /** If true, users cannot extract content from the PDF document using software tools for the visually impaired. Valid only when use security is true. */
  get disallowExtractionForAccessibility(): (boolean)[];
  set disallowExtractionForAccessibility(value: boolean);
  /** If true, users cannot insert, delete, or rotate pages in the PDF document. Valid only when use security is true. */
  get disallowDocumentAssembly(): (boolean)[];
  set disallowDocumentAssembly(value: boolean);
  /** If true, users cannot print high-resolution copies of the PDF document. Valid only when use security is true. */
  get disallowHiResPrinting(): (boolean)[];
  set disallowHiResPrinting(value: boolean);
  /**
   * If true and acrobat compatibility is Acrobat 6 or higher, storage systems and search
   * engines cannot access metadata stored in the PDF document.
   *
   * If true and acrobat compatibility is acrobat 5 or higher, users cannot copy and extract
   * content from the document. Valid only when use security is true.
   */
  get disallowPlaintextMetadata(): (boolean)[];
  set disallowPlaintextMetadata(value: boolean);
  /** If true, automatically opens the PDF file after exporting. */
  get viewPDF(): (boolean)[];
  set viewPDF(value: boolean);
  /**
   * Sets the threshold for embedding complete fonts based on how many of the fonts'
   * characters are used in the document.
   *
   * If the percentage of characters used in the document for any given font exceeds the
   * specified value, the font is completely embedded; otherwise, the font is subsetted.
   * (Range: 0 to 100) Notes: Embedding complete fonts increases file size. To completely
   * embed all fonts, use 0 (zero).
   */
  get subsetFontsBelow(): (number)[];
  set subsetFontsBelow(value: number);
  /** The color space to use to represent color information in the exported PDF document. */
  get pdfColorSpace(): (PDFColorSpace)[];
  set pdfColorSpace(value: PDFColorSpace);
  /** The ICC Profiles to include in the exported PDF document. */
  get includeICCProfiles(): (ICCProfiles)[];
  set includeICCProfiles(value: ICCProfiles);
  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): (boolean)[];
  set omitEPS(value: boolean);
  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): (boolean)[];
  set omitPDF(value: boolean);
  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): (boolean)[];
  set omitBitmaps(value: boolean);
  /** If true, image data that falls outside the visible portion of an image's frame is not exported to the PDF document. */
  get cropImagesToFrames(): (boolean)[];
  set cropImagesToFrames(value: boolean);
  /** If true, generates thumbnail images for each page or spread. */
  get generateThumbnails(): (boolean)[];
  set generateThumbnails(value: boolean);
  /** If true, optimizes the exported PDF document for faster viewing in a web browser. Note: Compresses text and line art, regardless of specified compression settings. */
  get optimizePDF(): (boolean)[];
  set optimizePDF(value: boolean);
  /** If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher. */
  get includeStructure(): (boolean)[];
  set includeStructure(value: boolean);
  /** The exported PDF document's Acrobat compatibility. */
  get acrobatCompatibility(): (AcrobatCompatibility)[];
  set acrobatCompatibility(value: AcrobatCompatibility);
  /**
   * If true, simulates the effects of overprinting spot inks with different neutral density
   * values by converting spot colors to process colors for printing.
   *
   * Note: Not valid when the color output mode is defined to leave color profiles unchanged.
   */
  get simulateOverprint(): (boolean)[];
  set simulateOverprint(value: boolean);
  /** The gamut of the final RGB or CMYK device. */
  get pdfDestinationProfile(): (PDFProfileSelector | string)[];
  set pdfDestinationProfile(value: PDFProfileSelector | string);
  /** The PDF X color profile to use for the PDF document. */
  get pdfXProfile(): (PDFProfileSelector | string)[];
  set pdfXProfile(value: PDFProfileSelector | string);
  /** If true, includes hyperlinks when exporting the document. */
  get includeHyperlinks(): (boolean)[];
  set includeHyperlinks(value: boolean);
  /** If true, displays bookmarks and table of contents entries as links in the bookmarks pane in the PDF document. If false, no bookmarks are exported. */
  get includeBookmarks(): (boolean)[];
  set includeBookmarks(value: boolean);
  /** If true, makes non-printing objects visible in the PDF document. */
  get exportNonprintingObjects(): (boolean)[];
  set exportNonprintingObjects(value: boolean);
  /** If true, includes visible guides and baseline grids in the PDF document. */
  get exportGuidesAndGrids(): (boolean)[];
  set exportGuidesAndGrids(value: boolean);
  /** If true, saves each layer as an Acrobat layer within the PDF document. */
  get exportLayers(): (boolean)[];
  set exportLayers(value: boolean);
  /** The PDF/X standards compliance to test against. */
  get standardsCompliance(): (PDFXStandards)[];
  set standardsCompliance(value: PDFXStandards);
  /**
   * The name of the intended printing condition.
   *
   * Valid only when a PDF/X compliance standard has been defined for the document. Not valid
   * when PDF/X-3 is the compliance standard or PDF export preset. For information on
   * compliance standards, see standards compliance and PDF X standards.
   */
  get outputCondition(): (string)[];
  set outputCondition(value: string);
  /** The sampling option to apply to color bitmap images in the PDF document. */
  get colorBitmapSampling(): (Sampling)[];
  set colorBitmapSampling(value: Sampling);
  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get colorBitmapSamplingDPI(): (number)[];
  set colorBitmapSamplingDPI(value: number);
  /** The amount of bitmap compression to use. */
  get colorBitmapCompression(): (BitmapCompression)[];
  set colorBitmapCompression(value: BitmapCompression);
  /** The compression option to apply to color images. */
  get colorBitmapQuality(): (CompressionQuality)[];
  set colorBitmapQuality(value: CompressionQuality);
  /** The sampling option to apply to grayscale bitmap images. */
  get grayscaleBitmapSampling(): (Sampling)[];
  set grayscaleBitmapSampling(value: Sampling);
  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get grayscaleBitmapSamplingDPI(): (number)[];
  set grayscaleBitmapSamplingDPI(value: number);
  /** The bitmap compression option to apply to grayscale bitmap images. */
  get grayscaleBitmapCompression(): (BitmapCompression)[];
  set grayscaleBitmapCompression(value: BitmapCompression);
  /** The compression option to apply to grayscale bitmap images. */
  get grayscaleBitmapQuality(): (CompressionQuality)[];
  set grayscaleBitmapQuality(value: CompressionQuality);
  /** The sampling option to apply to monochrome bitmap images. */
  get monochromeBitmapSampling(): (Sampling)[];
  set monochromeBitmapSampling(value: Sampling);
  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get monochromeBitmapSamplingDPI(): (number)[];
  set monochromeBitmapSamplingDPI(value: number);
  /** The bitmap compression option to apply to monochrome bitmap images. */
  get monochromeBitmapCompression(): (MonoBitmapCompression)[];
  set monochromeBitmapCompression(value: MonoBitmapCompression);
  /** If true, compresses text and line art using ZIP compression. */
  get compressTextAndLineArt(): (boolean)[];
  set compressTextAndLineArt(value: boolean);
  /** The minimum dpi at which color compression is applied. (Range: 1 to 10 times the value specified for color bitmap sampling DPI.) */
  get thresholdToCompressColor(): (number)[];
  set thresholdToCompressColor(value: number);
  /** The minimum dpi at which grayscale compression is applied. (Range: 1 to 10 times the value specified for grayscale bitmap sampling DPI.) */
  get thresholdToCompressGray(): (number)[];
  set thresholdToCompressGray(value: number);
  /** The minimum dpi at which monochrome compression is applied. (Range: 1 to 10 times the value specified for monochrome bitmap sampling DPI.) */
  get thresholdToCompressMonochrome(): (number)[];
  set thresholdToCompressMonochrome(value: number);
  /** The tile size for color images. Valid only when color bitmap compression is JPEG 2000. (Range: 128 to 2048) */
  get colorTileSize(): (number)[];
  set colorTileSize(value: number);
  /** The tile size for grayscale images. Valid only when grayscale bitmap compression is JPEG 2000. (Range: 128 to 2048) */
  get grayTileSize(): (number)[];
  set grayTileSize(value: number);
  /** The objects to compress in the PDF document. */
  get compressionType(): (PDFCompressionType)[];
  set compressionType(value: PDFCompressionType);
  /** If true, each spread in the exported document is combined into a single page that has spread's original width. */
  get exportReaderSpreads(): (boolean)[];
  set exportReaderSpreads(value: boolean);
  /** The offset from the edge of the page for page marks. */
  get pageMarksOffset(): (number)[];
  set pageMarksOffset(value: MeasurementValue);
  /** Prints crop marks that define where the page should be trimmed. */
  get cropMarks(): (boolean)[];
  set cropMarks(value: boolean);
  /** If true, prints the filename, page number, current date and time, and color separation name. */
  get pageInformationMarks(): (boolean)[];
  set pageInformationMarks(value: boolean);
  /** If true, print bleed marks. */
  get bleedMarks(): (boolean)[];
  set bleedMarks(value: boolean);
  /** If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments. */
  get colorBars(): (boolean)[];
  set colorBars(value: boolean);
  /** If true, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): (boolean)[];
  set registrationMarks(value: boolean);
  /** The stroke weight for printer's marks. */
  get printerMarkWeight(): (PDFMarkWeight)[];
  set printerMarkWeight(value: PDFMarkWeight);
  /** The height of the bleed area at the top of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedTop(): (number)[];
  set bleedTop(value: MeasurementValue);
  /** The width of the bleed area at the inside of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedInside(): (number)[];
  set bleedInside(value: MeasurementValue);
  /** The height of the bleed area at the bottom of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedBottom(): (number)[];
  set bleedBottom(value: MeasurementValue);
  /** The width of the bleed area at the outside of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedOutside(): (number)[];
  set bleedOutside(value: MeasurementValue);
  /** The type of printer marks, either an enum value or the name of a custom marks file. */
  get pdfMarkType(): (MarkTypes | string)[];
  set pdfMarkType(value: MarkTypes | string);
  /** If true, uses the document's bleed settings in the PDF document. */
  get useDocumentBleedWithPDF(): (boolean)[];
  set useDocumentBleedWithPDF(value: boolean);
  /** If true, includes the document's slug area in the PDF document. */
  get includeSlugWithPDF(): (boolean)[];
  set includeSlugWithPDF(value: boolean);
  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): (boolean)[];
  set ignoreSpreadOverrides(value: boolean);
  /** The transparency flattener preset to use. */
  get appliedFlattenerPreset(): (FlattenerPreset)[];
  set appliedFlattenerPreset(value: FlattenerPreset);
  /** If true, retains editing information in the exported PDF, allowing the document to be re-imported and edited in InDesign. If false, editing information is not preserved. */
  get preserveInDesignEditingCapabilities(): (boolean)[];
  set preserveInDesignEditingCapabilities(value: boolean);
  /** The name of the output condition. Valid only when a PDF/X standard has been defined for the document. */
  get outputConditionName(): (string)[];
  set outputConditionName(value: string);
  /** The web address for the output condition registry. Not valid when PDF/X-3 is the compliance standard or PDF export preset. */
  get ocRegistry(): (string)[];
  set ocRegistry(value: string);
  /** How to draw interactive elements. */
  get interactiveElementsOption(): (InteractiveElementsOptions)[];
  set interactiveElementsOption(value: InteractiveElementsOptions);
  /** Which layers to export. */
  get exportWhichLayers(): (ExportLayerOptions)[];
  set exportWhichLayers(value: ExportLayerOptions);
  /** If true, export hidden spreads in PDF. If false, skip export of hidden spreads. */
  get exportHiddenSpread(): (boolean)[];
  set exportHiddenSpread(value: boolean);
}
