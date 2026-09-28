/**
 * InteractivePDFExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
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

/**
 * Interactive PDF export settings for the application object.
 */
export interface InteractivePDFExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'InteractivePDFExportPreference';

  /** Resolves the proxy into the individual {@link InteractivePDFExportPreference} objects it stands for. */
  getElements(): InteractivePDFExportPreference<'single'>[];

  /** Whether the PDF viewer's window title shows the file name or the document title; see {@link PdfDisplayTitleOptions}. */
  get pdfDisplayTitle(): Read<M, PdfDisplayTitleOptions>;
  set pdfDisplayTitle(value: PdfDisplayTitleOptions);

  /** Sets the default document language in the exported PDF. The correct ISO code of the language must be provided. */
  get defaultDocumentLanguage(): Read<M, string>;
  set defaultDocumentLanguage(value: string);

  /** Export each page or spread as a separate PDF file. */
  get exportAsSinglePages(): Read<M, boolean>;
  set exportAsSinglePages(value: boolean);

  /** Suffix to be used at the end of each file when pages are exported as separate PDF files. */
  get singlePagesPDFSuffix(): Read<M, string>;
  set singlePagesPDFSuffix(value: string);

  /** If true, retains editing information in the exported PDF, allowing the document to be re-imported and edited in InDesign. If false, editing information is not preserved. */
  get preserveInDesignEditingCapabilities(): Read<M, boolean>;
  set preserveInDesignEditingCapabilities(value: boolean);

  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): Read<M, PageRange | string>;
  set pageRange(value: PageRange | string);

  /** If true, each spread in the exported document is combined into a single page that has spread's original width. */
  get exportReaderSpreads(): Read<M, boolean>;
  set exportReaderSpreads(value: boolean);

  /** If true, automatically opens the PDF file after exporting. */
  get viewPDF(): Read<M, boolean>;
  set viewPDF(value: boolean);

  /** If true, generates thumbnail images for each page or spread. */
  get generateThumbnails(): Read<M, boolean>;
  set generateThumbnails(value: boolean);

  /** If true, saves each layer as an Acrobat layer within the PDF document. */
  get exportLayers(): Read<M, boolean>;
  set exportLayers(value: boolean);

  /** If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher. */
  get includeStructure(): Read<M, boolean>;
  set includeStructure(value: boolean);

  /** The initial zoom level when the PDF opens; see {@link PdfMagnificationOptions}. */
  get pdfMagnification(): Read<M, PdfMagnificationOptions>;
  set pdfMagnification(value: PdfMagnificationOptions);

  /** Single page, continuous scrolling, or facing-page layout used when the PDF opens; see {@link PageLayoutOptions}. */
  get pdfPageLayout(): Read<M, PageLayoutOptions>;
  set pdfPageLayout(value: PageLayoutOptions);

  /** Open PDF in full screen mode. */
  get openInFullScreen(): Read<M, boolean>;
  set openInFullScreen(value: boolean);

  /** Automatically flip pages in the exported PDF. */
  get flipPages(): Read<M, boolean>;
  set flipPages(value: boolean);

  /** The speed that the pages flip. */
  get flipPagesSpeed(): Read<M, number>;
  set flipPagesSpeed(value: number);

  /** The name of the page transition to use for all pages. */
  get pageTransitionOverride(): Read<M, PageTransitionOverrideOptions>;
  set pageTransitionOverride(value: PageTransitionOverrideOptions);

  /** Whether interactive media exports fully functional or as static, appearance-only artwork; see {@link InteractivePDFInteractiveElementsOptions}. */
  get interactivePDFInteractiveElementsOption(): Read<M, InteractivePDFInteractiveElementsOptions>;
  set interactivePDFInteractiveElementsOption(value: InteractivePDFInteractiveElementsOptions);

  /** Whether raster images are compressed with JPEG or losslessly; see {@link PDFRasterCompressionOptions}. */
  get pdfRasterCompression(): Read<M, PDFRasterCompressionOptions>;
  set pdfRasterCompression(value: PDFRasterCompressionOptions);

  /** The JPEG compression quality applied to raster images, from minimum to maximum; see {@link PDFJPEGQualityOptions}. */
  get pdfJPEGQuality(): Read<M, PDFJPEGQualityOptions>;
  set pdfJPEGQuality(value: PDFJPEGQualityOptions);

  /** The pixel density used for rasterized content, in pixels per inch; see {@link RasterResolutionOptions}. */
  get rasterResolution(): Read<M, RasterResolutionOptions | number>;
  set rasterResolution(value: RasterResolutionOptions | number);

  /** If true, export hidden spreads in PDF. If false, skip export of hidden spreads. */
  get exportHiddenSpread(): Read<M, boolean>;
  set exportHiddenSpread(value: boolean);

  /** Use tagged PDF structure for interactive elements tab order. */
  get usePDFStructureForTabOrder(): Read<M, boolean>;
  set usePDFStructureForTabOrder(value: boolean);
}
