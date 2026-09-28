/**
 * PDFExportPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { File, MeasurementValue } from './_base/Types';
import type { FlattenerPreset } from './FlattenerPreset';
import type { PDFProfileSelector } from './Enums/PDFProfileSelector';
import type { PdfMagnificationOptions } from './Enums/PdfMagnificationOptions';
import type { PageLayoutOptions } from './Enums/PageLayoutOptions';
import type { PdfDisplayTitleOptions } from './Enums/PdfDisplayTitleOptions';
import type { PDFColorSpace } from './Enums/PDFColorSpace';
import type { ICCProfiles } from './Enums/ICCProfiles';
import type { AcrobatCompatibility } from './Enums/AcrobatCompatibility';
import type { PDFXStandards } from './Enums/PDFXStandards';
import type { Sampling } from './Enums/Sampling';
import type { BitmapCompression } from './Enums/BitmapCompression';
import type { CompressionQuality } from './Enums/CompressionQuality';
import type { MonoBitmapCompression } from './Enums/MonoBitmapCompression';
import type { PDFCompressionType } from './Enums/PDFCompressionType';
import type { PDFMarkWeight } from './Enums/PDFMarkWeight';
import type { MarkTypes } from './Enums/MarkTypes';
import type { InteractiveElementsOptions } from './Enums/InteractiveElementsOptions';
import type { ExportLayerOptions } from './Enums/ExportLayerOptions';
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
 * A named set of PDF export settings, applied by {@link Application.pdfExportPresets}
 * when exporting a document to PDF.
 */
export interface PDFExportPreset {
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
  get properties(): PropertiesGetter<PDFExportPreset, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PDFExportPreset, 'single'>);
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
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name. */
  readonly constructorName: 'PDFExportPreset';
  /** Resolves the proxy into the individual {@link PDFExportPreset} objects it stands for. */
  getElements(): PDFExportPreset[];
  /** The full path to the PDF export preset file, including its name. */
  readonly fullName: Promise<File>;
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
  /** The default document language embedded in the exported PDF, as an ISO language code. */
  get defaultDocumentLanguage(): string;
  set defaultDocumentLanguage(value: string);
  /** If `true`, exports each page or spread as a separate PDF file. */
  get exportAsSinglePages(): boolean;
  set exportAsSinglePages(value: boolean);
  /** The suffix appended to each file name when {@link exportAsSinglePages} is `true`. */
  get singlePagesPDFSuffix(): string;
  set singlePagesPDFSuffix(value: string);
  /** The name of the PDF export preset. */
  get name(): string;
  set name(value: string);
  /**
   * The character-usage threshold, as a percentage, above which a font is
   * fully embedded instead of subsetted. `0` fully embeds every font.
   * Embedding complete fonts increases file size.
   * @param value Range: `0`–`100`.
   */
  get subsetFontsBelow(): number;
  set subsetFontsBelow(value: number);
  /** The color space used to represent color in the exported PDF. */
  get pdfColorSpace(): PDFColorSpace;
  set pdfColorSpace(value: PDFColorSpace);
  /** The ICC profiles to include in the exported PDF. */
  get includeICCProfiles(): ICCProfiles;
  set includeICCProfiles(value: ICCProfiles | boolean);
  /** If `true`, replaces EPS images with OPI links instead of embedding them. */
  get omitEPS(): boolean;
  set omitEPS(value: boolean);
  /** If `true`, replaces PDF images with OPI links instead of embedding them. */
  get omitPDF(): boolean;
  set omitPDF(value: boolean);
  /** If `true`, replaces bitmap images with OPI links instead of embedding them. */
  get omitBitmaps(): boolean;
  set omitBitmaps(value: boolean);
  /** If `true`, excludes image data that falls outside the visible portion of an image's frame. */
  get cropImagesToFrames(): boolean;
  set cropImagesToFrames(value: boolean);
  /** If `true`, generates a thumbnail image for each page or spread. */
  get generateThumbnails(): boolean;
  set generateThumbnails(value: boolean);
  /**
   * If `true`, optimizes the exported PDF for faster web viewing. Compresses
   * text and line art regardless of the configured compression settings.
   */
  get optimizePDF(): boolean;
  set optimizePDF(value: boolean);
  /**
   * If `true`, creates a tagged PDF. Tags are visible only when
   * {@link acrobatCompatibility} is Acrobat 6 or higher and the PDF is opened
   * in a matching Acrobat version.
   */
  get includeStructure(): boolean;
  set includeStructure(value: boolean);
  /** The Acrobat version the exported PDF is compatible with. */
  get acrobatCompatibility(): AcrobatCompatibility;
  set acrobatCompatibility(value: AcrobatCompatibility);
  /**
   * If `true`, simulates overprinting spot inks by converting spot colors to
   * process colors for printing. Not valid when the color output mode leaves
   * color profiles unchanged.
   */
  get simulateOverprint(): boolean;
  set simulateOverprint(value: boolean);
  /** The gamut of the final RGB or CMYK output device. */
  get pdfDestinationProfile(): PDFProfileSelector | string;
  set pdfDestinationProfile(value: PDFProfileSelector | string);
  /** The PDF/X color profile used for the exported document. */
  get pdfXProfile(): PDFProfileSelector | string;
  set pdfXProfile(value: PDFProfileSelector | string);
  /** If `true`, includes hyperlinks in the exported PDF. */
  get includeHyperlinks(): boolean;
  set includeHyperlinks(value: boolean);
  /**
   * If `true`, exports bookmarks and table of contents entries as links in
   * the PDF's Bookmarks pane.
   */
  get includeBookmarks(): boolean;
  set includeBookmarks(value: boolean);
  /** If `true`, makes non-printing objects visible in the exported PDF. */
  get exportNonprintingObjects(): boolean;
  set exportNonprintingObjects(value: boolean);
  /** If `true`, includes visible guides and baseline grids in the exported PDF. */
  get exportGuidesAndGrids(): boolean;
  set exportGuidesAndGrids(value: boolean);
  /** If `true`, saves each layer as an Acrobat layer within the exported PDF. */
  get exportLayers(): boolean;
  set exportLayers(value: boolean);
  /** The PDF/X standard to test compliance against. */
  get standardsCompliance(): PDFXStandards;
  set standardsCompliance(value: PDFXStandards);
  /**
   * The name of the intended printing condition. Valid only when a PDF/X
   * standard is set via {@link standardsCompliance}, and not valid for PDF/X-3.
   */
  get outputCondition(): string;
  set outputCondition(value: string);
  /** The sampling option applied to color bitmap images. */
  get colorBitmapSampling(): Sampling;
  set colorBitmapSampling(value: Sampling);
  /**
   * The resampled resolution, in ppi, for color bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get colorBitmapSamplingDPI(): number;
  set colorBitmapSamplingDPI(value: number);
  /** The compression method applied to color bitmap images. */
  get colorBitmapCompression(): BitmapCompression;
  set colorBitmapCompression(value: BitmapCompression);
  /** The compression quality applied to color images. */
  get colorBitmapQuality(): CompressionQuality;
  set colorBitmapQuality(value: CompressionQuality);
  /** The sampling option applied to grayscale bitmap images. */
  get grayscaleBitmapSampling(): Sampling;
  set grayscaleBitmapSampling(value: Sampling);
  /**
   * The resampled resolution, in ppi, for grayscale bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get grayscaleBitmapSamplingDPI(): number;
  set grayscaleBitmapSamplingDPI(value: number);
  /** The compression method applied to grayscale bitmap images. */
  get grayscaleBitmapCompression(): BitmapCompression;
  set grayscaleBitmapCompression(value: BitmapCompression);
  /** The compression quality applied to grayscale bitmap images. */
  get grayscaleBitmapQuality(): CompressionQuality;
  set grayscaleBitmapQuality(value: CompressionQuality);
  /** The sampling option applied to monochrome bitmap images. */
  get monochromeBitmapSampling(): Sampling;
  set monochromeBitmapSampling(value: Sampling);
  /**
   * The resampled resolution, in ppi, for monochrome bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get monochromeBitmapSamplingDPI(): number;
  set monochromeBitmapSamplingDPI(value: number);
  /** The compression method applied to monochrome bitmap images. */
  get monochromeBitmapCompression(): MonoBitmapCompression;
  set monochromeBitmapCompression(value: MonoBitmapCompression);
  /** If `true`, compresses text and line art with ZIP compression. */
  get compressTextAndLineArt(): boolean;
  set compressTextAndLineArt(value: boolean);
  /**
   * The minimum resolution, in ppi, above which color image compression is
   * applied.
   * @param value Range: `1`–`10` times {@link colorBitmapSamplingDPI}.
   */
  get thresholdToCompressColor(): number;
  set thresholdToCompressColor(value: number);
  /**
   * The minimum resolution, in ppi, above which grayscale image compression
   * is applied.
   * @param value Range: `1`–`10` times {@link grayscaleBitmapSamplingDPI}.
   */
  get thresholdToCompressGray(): number;
  set thresholdToCompressGray(value: number);
  /**
   * The minimum resolution, in ppi, above which monochrome image compression
   * is applied.
   * @param value Range: `1`–`10` times {@link monochromeBitmapSamplingDPI}.
   */
  get thresholdToCompressMonochrome(): number;
  set thresholdToCompressMonochrome(value: number);
  /**
   * The tile size for color images. Valid only when
   * {@link colorBitmapCompression} is JPEG 2000.
   * @param value Range: `128`–`2048`.
   */
  get colorTileSize(): number;
  set colorTileSize(value: number);
  /**
   * The tile size for grayscale images. Valid only when
   * {@link grayscaleBitmapCompression} is JPEG 2000.
   * @param value Range: `128`–`2048`.
   */
  get grayTileSize(): number;
  set grayTileSize(value: number);
  /** Which objects in the exported PDF get compressed. */
  get compressionType(): PDFCompressionType;
  set compressionType(value: PDFCompressionType);
  /**
   * If `true`, combines each spread in the exported document into a single
   * page at the spread's full width.
   */
  get exportReaderSpreads(): boolean;
  set exportReaderSpreads(value: boolean);
  /**
   * The offset from the edge of the page for printer's marks.
   * @param value Range: `0`–`72`.
   */
  get pageMarksOffset(): number;
  set pageMarksOffset(value: MeasurementValue);
  /** If `true`, prints crop marks showing where the page should be trimmed. */
  get cropMarks(): boolean;
  set cropMarks(value: boolean);
  /** If `true`, prints the file name, page number, date/time, and color separation name. */
  get pageInformationMarks(): boolean;
  set pageInformationMarks(value: boolean);
  /** If `true`, prints bleed marks. */
  get bleedMarks(): boolean;
  set bleedMarks(value: boolean);
  /** If `true`, prints small squares of the CMYK inks and gray tints in 10% increments. */
  get colorBars(): boolean;
  set colorBars(value: boolean);
  /** If `true`, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): boolean;
  set registrationMarks(value: boolean);
  /** The stroke weight used for printer's marks. */
  get printerMarkWeight(): PDFMarkWeight;
  set printerMarkWeight(value: PDFMarkWeight);
  /**
   * The bleed area at the top of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedTop(): number;
  set bleedTop(value: MeasurementValue);
  /**
   * The bleed area at the inside of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedInside(): number;
  set bleedInside(value: MeasurementValue);
  /**
   * The bleed area at the bottom of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedBottom(): number;
  set bleedBottom(value: MeasurementValue);
  /**
   * The bleed area at the outside of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedOutside(): number;
  set bleedOutside(value: MeasurementValue);
  /** The type of printer's marks, or the name of a custom marks file. */
  get pdfMarkType(): MarkTypes | string;
  set pdfMarkType(value: MarkTypes | string);
  /** If `true`, uses the document's own bleed settings in the exported PDF. */
  get useDocumentBleedWithPDF(): boolean;
  set useDocumentBleedWithPDF(value: boolean);
  /** If `true`, includes the document's slug area in the exported PDF. */
  get includeSlugWithPDF(): boolean;
  set includeSlugWithPDF(value: boolean);
  /** If `true`, ignores per-spread transparency flattener overrides. */
  get ignoreSpreadOverrides(): boolean;
  set ignoreSpreadOverrides(value: boolean);
  /** The transparency flattener preset used for this export. */
  get appliedFlattenerPreset(): FlattenerPreset;
  set appliedFlattenerPreset(value: FlattenerPreset);
  /**
   * The name of the output condition. Valid only when a PDF/X standard is
   * set via {@link standardsCompliance}.
   */
  get outputConditionName(): string;
  set outputConditionName(value: string);
  /**
   * The web address of the output condition registry. Not valid for PDF/X-3.
   */
  get ocRegistry(): string;
  set ocRegistry(value: string);
  /** How interactive elements are drawn in the exported PDF. */
  get interactiveElementsOption(): InteractiveElementsOptions;
  set interactiveElementsOption(value: InteractiveElementsOptions);
  /** Which layers are exported to the PDF. */
  get exportWhichLayers(): ExportLayerOptions;
  set exportWhichLayers(value: ExportLayerOptions);
  /** Deletes the PDF export preset. */
  remove(): void;
  /** Duplicates the PDF export preset. */
  duplicate(): PDFExportPreset;
}


/**
 * The broadcast proxy for {@link PDFExportPreset} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PDFExportPreset} there.
 */
export interface PDFExportPresetPlural {
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
  get properties(): (PropertiesGetter<PDFExportPresetPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PDFExportPresetPlural, 'plural'>);
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
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name. */
  readonly constructorName: 'PDFExportPreset';
  /** Resolves the proxy into the individual {@link PDFExportPreset} objects it stands for. */
  getElements(): PDFExportPreset[];
  /** The full path to the PDF export preset file, including its name. */
  readonly fullName: (Promise<File>)[];
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
  /** The default document language embedded in the exported PDF, as an ISO language code. */
  get defaultDocumentLanguage(): (string)[];
  set defaultDocumentLanguage(value: string);
  /** If `true`, exports each page or spread as a separate PDF file. */
  get exportAsSinglePages(): (boolean)[];
  set exportAsSinglePages(value: boolean);
  /** The suffix appended to each file name when {@link exportAsSinglePages} is `true`. */
  get singlePagesPDFSuffix(): (string)[];
  set singlePagesPDFSuffix(value: string);
  /** The name of the PDF export preset. */
  get name(): (string)[];
  set name(value: string);
  /**
   * The character-usage threshold, as a percentage, above which a font is
   * fully embedded instead of subsetted. `0` fully embeds every font.
   * Embedding complete fonts increases file size.
   * @param value Range: `0`–`100`.
   */
  get subsetFontsBelow(): (number)[];
  set subsetFontsBelow(value: number);
  /** The color space used to represent color in the exported PDF. */
  get pdfColorSpace(): (PDFColorSpace)[];
  set pdfColorSpace(value: PDFColorSpace);
  /** The ICC profiles to include in the exported PDF. */
  get includeICCProfiles(): (ICCProfiles)[];
  set includeICCProfiles(value: ICCProfiles | boolean);
  /** If `true`, replaces EPS images with OPI links instead of embedding them. */
  get omitEPS(): (boolean)[];
  set omitEPS(value: boolean);
  /** If `true`, replaces PDF images with OPI links instead of embedding them. */
  get omitPDF(): (boolean)[];
  set omitPDF(value: boolean);
  /** If `true`, replaces bitmap images with OPI links instead of embedding them. */
  get omitBitmaps(): (boolean)[];
  set omitBitmaps(value: boolean);
  /** If `true`, excludes image data that falls outside the visible portion of an image's frame. */
  get cropImagesToFrames(): (boolean)[];
  set cropImagesToFrames(value: boolean);
  /** If `true`, generates a thumbnail image for each page or spread. */
  get generateThumbnails(): (boolean)[];
  set generateThumbnails(value: boolean);
  /**
   * If `true`, optimizes the exported PDF for faster web viewing. Compresses
   * text and line art regardless of the configured compression settings.
   */
  get optimizePDF(): (boolean)[];
  set optimizePDF(value: boolean);
  /**
   * If `true`, creates a tagged PDF. Tags are visible only when
   * {@link acrobatCompatibility} is Acrobat 6 or higher and the PDF is opened
   * in a matching Acrobat version.
   */
  get includeStructure(): (boolean)[];
  set includeStructure(value: boolean);
  /** The Acrobat version the exported PDF is compatible with. */
  get acrobatCompatibility(): (AcrobatCompatibility)[];
  set acrobatCompatibility(value: AcrobatCompatibility);
  /**
   * If `true`, simulates overprinting spot inks by converting spot colors to
   * process colors for printing. Not valid when the color output mode leaves
   * color profiles unchanged.
   */
  get simulateOverprint(): (boolean)[];
  set simulateOverprint(value: boolean);
  /** The gamut of the final RGB or CMYK output device. */
  get pdfDestinationProfile(): (PDFProfileSelector | string)[];
  set pdfDestinationProfile(value: PDFProfileSelector | string);
  /** The PDF/X color profile used for the exported document. */
  get pdfXProfile(): (PDFProfileSelector | string)[];
  set pdfXProfile(value: PDFProfileSelector | string);
  /** If `true`, includes hyperlinks in the exported PDF. */
  get includeHyperlinks(): (boolean)[];
  set includeHyperlinks(value: boolean);
  /**
   * If `true`, exports bookmarks and table of contents entries as links in
   * the PDF's Bookmarks pane.
   */
  get includeBookmarks(): (boolean)[];
  set includeBookmarks(value: boolean);
  /** If `true`, makes non-printing objects visible in the exported PDF. */
  get exportNonprintingObjects(): (boolean)[];
  set exportNonprintingObjects(value: boolean);
  /** If `true`, includes visible guides and baseline grids in the exported PDF. */
  get exportGuidesAndGrids(): (boolean)[];
  set exportGuidesAndGrids(value: boolean);
  /** If `true`, saves each layer as an Acrobat layer within the exported PDF. */
  get exportLayers(): (boolean)[];
  set exportLayers(value: boolean);
  /** The PDF/X standard to test compliance against. */
  get standardsCompliance(): (PDFXStandards)[];
  set standardsCompliance(value: PDFXStandards);
  /**
   * The name of the intended printing condition. Valid only when a PDF/X
   * standard is set via {@link standardsCompliance}, and not valid for PDF/X-3.
   */
  get outputCondition(): (string)[];
  set outputCondition(value: string);
  /** The sampling option applied to color bitmap images. */
  get colorBitmapSampling(): (Sampling)[];
  set colorBitmapSampling(value: Sampling);
  /**
   * The resampled resolution, in ppi, for color bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get colorBitmapSamplingDPI(): (number)[];
  set colorBitmapSamplingDPI(value: number);
  /** The compression method applied to color bitmap images. */
  get colorBitmapCompression(): (BitmapCompression)[];
  set colorBitmapCompression(value: BitmapCompression);
  /** The compression quality applied to color images. */
  get colorBitmapQuality(): (CompressionQuality)[];
  set colorBitmapQuality(value: CompressionQuality);
  /** The sampling option applied to grayscale bitmap images. */
  get grayscaleBitmapSampling(): (Sampling)[];
  set grayscaleBitmapSampling(value: Sampling);
  /**
   * The resampled resolution, in ppi, for grayscale bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get grayscaleBitmapSamplingDPI(): (number)[];
  set grayscaleBitmapSamplingDPI(value: number);
  /** The compression method applied to grayscale bitmap images. */
  get grayscaleBitmapCompression(): (BitmapCompression)[];
  set grayscaleBitmapCompression(value: BitmapCompression);
  /** The compression quality applied to grayscale bitmap images. */
  get grayscaleBitmapQuality(): (CompressionQuality)[];
  set grayscaleBitmapQuality(value: CompressionQuality);
  /** The sampling option applied to monochrome bitmap images. */
  get monochromeBitmapSampling(): (Sampling)[];
  set monochromeBitmapSampling(value: Sampling);
  /**
   * The resampled resolution, in ppi, for monochrome bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get monochromeBitmapSamplingDPI(): (number)[];
  set monochromeBitmapSamplingDPI(value: number);
  /** The compression method applied to monochrome bitmap images. */
  get monochromeBitmapCompression(): (MonoBitmapCompression)[];
  set monochromeBitmapCompression(value: MonoBitmapCompression);
  /** If `true`, compresses text and line art with ZIP compression. */
  get compressTextAndLineArt(): (boolean)[];
  set compressTextAndLineArt(value: boolean);
  /**
   * The minimum resolution, in ppi, above which color image compression is
   * applied.
   * @param value Range: `1`–`10` times {@link colorBitmapSamplingDPI}.
   */
  get thresholdToCompressColor(): (number)[];
  set thresholdToCompressColor(value: number);
  /**
   * The minimum resolution, in ppi, above which grayscale image compression
   * is applied.
   * @param value Range: `1`–`10` times {@link grayscaleBitmapSamplingDPI}.
   */
  get thresholdToCompressGray(): (number)[];
  set thresholdToCompressGray(value: number);
  /**
   * The minimum resolution, in ppi, above which monochrome image compression
   * is applied.
   * @param value Range: `1`–`10` times {@link monochromeBitmapSamplingDPI}.
   */
  get thresholdToCompressMonochrome(): (number)[];
  set thresholdToCompressMonochrome(value: number);
  /**
   * The tile size for color images. Valid only when
   * {@link colorBitmapCompression} is JPEG 2000.
   * @param value Range: `128`–`2048`.
   */
  get colorTileSize(): (number)[];
  set colorTileSize(value: number);
  /**
   * The tile size for grayscale images. Valid only when
   * {@link grayscaleBitmapCompression} is JPEG 2000.
   * @param value Range: `128`–`2048`.
   */
  get grayTileSize(): (number)[];
  set grayTileSize(value: number);
  /** Which objects in the exported PDF get compressed. */
  get compressionType(): (PDFCompressionType)[];
  set compressionType(value: PDFCompressionType);
  /**
   * If `true`, combines each spread in the exported document into a single
   * page at the spread's full width.
   */
  get exportReaderSpreads(): (boolean)[];
  set exportReaderSpreads(value: boolean);
  /**
   * The offset from the edge of the page for printer's marks.
   * @param value Range: `0`–`72`.
   */
  get pageMarksOffset(): (number)[];
  set pageMarksOffset(value: MeasurementValue);
  /** If `true`, prints crop marks showing where the page should be trimmed. */
  get cropMarks(): (boolean)[];
  set cropMarks(value: boolean);
  /** If `true`, prints the file name, page number, date/time, and color separation name. */
  get pageInformationMarks(): (boolean)[];
  set pageInformationMarks(value: boolean);
  /** If `true`, prints bleed marks. */
  get bleedMarks(): (boolean)[];
  set bleedMarks(value: boolean);
  /** If `true`, prints small squares of the CMYK inks and gray tints in 10% increments. */
  get colorBars(): (boolean)[];
  set colorBars(value: boolean);
  /** If `true`, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): (boolean)[];
  set registrationMarks(value: boolean);
  /** The stroke weight used for printer's marks. */
  get printerMarkWeight(): (PDFMarkWeight)[];
  set printerMarkWeight(value: PDFMarkWeight);
  /**
   * The bleed area at the top of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedTop(): (number)[];
  set bleedTop(value: MeasurementValue);
  /**
   * The bleed area at the inside of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedInside(): (number)[];
  set bleedInside(value: MeasurementValue);
  /**
   * The bleed area at the bottom of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedBottom(): (number)[];
  set bleedBottom(value: MeasurementValue);
  /**
   * The bleed area at the outside of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedOutside(): (number)[];
  set bleedOutside(value: MeasurementValue);
  /** The type of printer's marks, or the name of a custom marks file. */
  get pdfMarkType(): (MarkTypes | string)[];
  set pdfMarkType(value: MarkTypes | string);
  /** If `true`, uses the document's own bleed settings in the exported PDF. */
  get useDocumentBleedWithPDF(): (boolean)[];
  set useDocumentBleedWithPDF(value: boolean);
  /** If `true`, includes the document's slug area in the exported PDF. */
  get includeSlugWithPDF(): (boolean)[];
  set includeSlugWithPDF(value: boolean);
  /** If `true`, ignores per-spread transparency flattener overrides. */
  get ignoreSpreadOverrides(): (boolean)[];
  set ignoreSpreadOverrides(value: boolean);
  /** The transparency flattener preset used for this export. */
  get appliedFlattenerPreset(): (FlattenerPreset)[];
  set appliedFlattenerPreset(value: FlattenerPreset);
  /**
   * The name of the output condition. Valid only when a PDF/X standard is
   * set via {@link standardsCompliance}.
   */
  get outputConditionName(): (string)[];
  set outputConditionName(value: string);
  /**
   * The web address of the output condition registry. Not valid for PDF/X-3.
   */
  get ocRegistry(): (string)[];
  set ocRegistry(value: string);
  /** How interactive elements are drawn in the exported PDF. */
  get interactiveElementsOption(): (InteractiveElementsOptions)[];
  set interactiveElementsOption(value: InteractiveElementsOptions);
  /** Which layers are exported to the PDF. */
  get exportWhichLayers(): (ExportLayerOptions)[];
  set exportWhichLayers(value: ExportLayerOptions);
  /** Deletes the PDF export preset. */
  remove(): (void)[];
  /** Duplicates the PDF export preset. */
  duplicate(): (PDFExportPreset)[];
}
