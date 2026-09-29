/**
 * InteractivePDFExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { InteractivePDFInteractiveElementsOptions } from './Enums/InteractivePDFInteractiveElementsOptions';
import type { PDFJPEGQualityOptions } from './Enums/PDFJPEGQualityOptions';
import type { PDFRasterCompressionOptions } from './Enums/PDFRasterCompressionOptions';
import type { PageLayoutOptions } from './Enums/PageLayoutOptions';
import type { PageRange } from './Enums/PageRange';
import type { PageTransitionOverrideOptions } from './Enums/PageTransitionOverrideOptions';
import type { PdfDisplayTitleOptions } from './Enums/PdfDisplayTitleOptions';
import type { PdfMagnificationOptions } from './Enums/PdfMagnificationOptions';
import type { RasterResolutionOptions } from './Enums/RasterResolutionOptions';
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
 * Interactive PDF export settings for the application object.
 */
export interface InteractivePDFExportPreference {
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
  get properties(): PropertiesGetter<InteractivePDFExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<InteractivePDFExportPreference, 'single'>);
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
  readonly constructorName: 'InteractivePDFExportPreference';
  /** Resolves the proxy into the individual {@link InteractivePDFExportPreference} objects it stands for. */
  getElements(): InteractivePDFExportPreference[];
  /** Whether the PDF viewer's window title shows the file name or the document title; see {@link PdfDisplayTitleOptions}. */
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
  /** If true, retains editing information in the exported PDF, allowing the document to be re-imported and edited in InDesign. If false, editing information is not preserved. */
  get preserveInDesignEditingCapabilities(): boolean;
  set preserveInDesignEditingCapabilities(value: boolean);
  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): PageRange | string;
  set pageRange(value: PageRange | string);
  /** If true, each spread in the exported document is combined into a single page that has spread's original width. */
  get exportReaderSpreads(): boolean;
  set exportReaderSpreads(value: boolean);
  /** If true, automatically opens the PDF file after exporting. */
  get viewPDF(): boolean;
  set viewPDF(value: boolean);
  /** If true, generates thumbnail images for each page or spread. */
  get generateThumbnails(): boolean;
  set generateThumbnails(value: boolean);
  /** If true, saves each layer as an Acrobat layer within the PDF document. */
  get exportLayers(): boolean;
  set exportLayers(value: boolean);
  /** If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher. */
  get includeStructure(): boolean;
  set includeStructure(value: boolean);
  /** The initial zoom level when the PDF opens; see {@link PdfMagnificationOptions}. */
  get pdfMagnification(): PdfMagnificationOptions;
  set pdfMagnification(value: PdfMagnificationOptions);
  /** Single page, continuous scrolling, or facing-page layout used when the PDF opens; see {@link PageLayoutOptions}. */
  get pdfPageLayout(): PageLayoutOptions;
  set pdfPageLayout(value: PageLayoutOptions);
  /** Open PDF in full screen mode. */
  get openInFullScreen(): boolean;
  set openInFullScreen(value: boolean);
  /** Automatically flip pages in the exported PDF. */
  get flipPages(): boolean;
  set flipPages(value: boolean);
  /** The speed that the pages flip. */
  get flipPagesSpeed(): number;
  set flipPagesSpeed(value: number);
  /** The name of the page transition to use for all pages. */
  get pageTransitionOverride(): PageTransitionOverrideOptions;
  set pageTransitionOverride(value: PageTransitionOverrideOptions);
  /** Whether interactive media exports fully functional or as static, appearance-only artwork; see {@link InteractivePDFInteractiveElementsOptions}. */
  get interactivePDFInteractiveElementsOption(): InteractivePDFInteractiveElementsOptions;
  set interactivePDFInteractiveElementsOption(value: InteractivePDFInteractiveElementsOptions);
  /** Whether raster images are compressed with JPEG or losslessly; see {@link PDFRasterCompressionOptions}. */
  get pdfRasterCompression(): PDFRasterCompressionOptions;
  set pdfRasterCompression(value: PDFRasterCompressionOptions);
  /** The JPEG compression quality applied to raster images, from minimum to maximum; see {@link PDFJPEGQualityOptions}. */
  get pdfJPEGQuality(): PDFJPEGQualityOptions;
  set pdfJPEGQuality(value: PDFJPEGQualityOptions);
  /** The pixel density used for rasterized content, in pixels per inch; see {@link RasterResolutionOptions}. */
  get rasterResolution(): RasterResolutionOptions | number;
  set rasterResolution(value: RasterResolutionOptions | number);
  /** If true, export hidden spreads in PDF. If false, skip export of hidden spreads. */
  get exportHiddenSpread(): boolean;
  set exportHiddenSpread(value: boolean);
  /** Use tagged PDF structure for interactive elements tab order. */
  get usePDFStructureForTabOrder(): boolean;
  set usePDFStructureForTabOrder(value: boolean);
}


/**
 * The broadcast proxy for {@link InteractivePDFExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link InteractivePDFExportPreference} there.
 */
export interface InteractivePDFExportPreferencePlural {
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
  get properties(): (PropertiesGetter<InteractivePDFExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<InteractivePDFExportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'InteractivePDFExportPreference';
  /** Resolves the proxy into the individual {@link InteractivePDFExportPreference} objects it stands for. */
  getElements(): InteractivePDFExportPreference[];
  /** Whether the PDF viewer's window title shows the file name or the document title; see {@link PdfDisplayTitleOptions}. */
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
  /** If true, retains editing information in the exported PDF, allowing the document to be re-imported and edited in InDesign. If false, editing information is not preserved. */
  get preserveInDesignEditingCapabilities(): (boolean)[];
  set preserveInDesignEditingCapabilities(value: boolean);
  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): (PageRange | string)[];
  set pageRange(value: PageRange | string);
  /** If true, each spread in the exported document is combined into a single page that has spread's original width. */
  get exportReaderSpreads(): (boolean)[];
  set exportReaderSpreads(value: boolean);
  /** If true, automatically opens the PDF file after exporting. */
  get viewPDF(): (boolean)[];
  set viewPDF(value: boolean);
  /** If true, generates thumbnail images for each page or spread. */
  get generateThumbnails(): (boolean)[];
  set generateThumbnails(value: boolean);
  /** If true, saves each layer as an Acrobat layer within the PDF document. */
  get exportLayers(): (boolean)[];
  set exportLayers(value: boolean);
  /** If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher. */
  get includeStructure(): (boolean)[];
  set includeStructure(value: boolean);
  /** The initial zoom level when the PDF opens; see {@link PdfMagnificationOptions}. */
  get pdfMagnification(): (PdfMagnificationOptions)[];
  set pdfMagnification(value: PdfMagnificationOptions);
  /** Single page, continuous scrolling, or facing-page layout used when the PDF opens; see {@link PageLayoutOptions}. */
  get pdfPageLayout(): (PageLayoutOptions)[];
  set pdfPageLayout(value: PageLayoutOptions);
  /** Open PDF in full screen mode. */
  get openInFullScreen(): (boolean)[];
  set openInFullScreen(value: boolean);
  /** Automatically flip pages in the exported PDF. */
  get flipPages(): (boolean)[];
  set flipPages(value: boolean);
  /** The speed that the pages flip. */
  get flipPagesSpeed(): (number)[];
  set flipPagesSpeed(value: number);
  /** The name of the page transition to use for all pages. */
  get pageTransitionOverride(): (PageTransitionOverrideOptions)[];
  set pageTransitionOverride(value: PageTransitionOverrideOptions);
  /** Whether interactive media exports fully functional or as static, appearance-only artwork; see {@link InteractivePDFInteractiveElementsOptions}. */
  get interactivePDFInteractiveElementsOption(): (InteractivePDFInteractiveElementsOptions)[];
  set interactivePDFInteractiveElementsOption(value: InteractivePDFInteractiveElementsOptions);
  /** Whether raster images are compressed with JPEG or losslessly; see {@link PDFRasterCompressionOptions}. */
  get pdfRasterCompression(): (PDFRasterCompressionOptions)[];
  set pdfRasterCompression(value: PDFRasterCompressionOptions);
  /** The JPEG compression quality applied to raster images, from minimum to maximum; see {@link PDFJPEGQualityOptions}. */
  get pdfJPEGQuality(): (PDFJPEGQualityOptions)[];
  set pdfJPEGQuality(value: PDFJPEGQualityOptions);
  /** The pixel density used for rasterized content, in pixels per inch; see {@link RasterResolutionOptions}. */
  get rasterResolution(): (RasterResolutionOptions | number)[];
  set rasterResolution(value: RasterResolutionOptions | number);
  /** If true, export hidden spreads in PDF. If false, skip export of hidden spreads. */
  get exportHiddenSpread(): (boolean)[];
  set exportHiddenSpread(value: boolean);
  /** Use tagged PDF structure for interactive elements tab order. */
  get usePDFStructureForTabOrder(): (boolean)[];
  set usePDFStructureForTabOrder(value: boolean);
}
