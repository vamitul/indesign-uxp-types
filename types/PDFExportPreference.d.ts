/**
 * PDFExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
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

/**
 * The application's default PDF export options, used by {@link Document.exportFile} and {@link Book.exportFile} when no explicit preset is supplied.
 */
export interface PDFExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFExportPreference';

  /** Resolves the proxy into the individual {@link PDFExportPreference} objects it stands for. */
  getElements(): PDFExportPreference<'single'>[];

  /** The effective destination color profile actually used on export. */
  readonly effectivePDFDestinationProfile: Read<M, PDFProfileSelector | string>;

  /** The effective PDF/X OC registry URL actually used on export. */
  readonly effectiveOCRegistry: Read<M, string>;

  /** The effective PDF/X output condition actually used on export. */
  readonly effectiveOutputCondition: Read<M, string>;

  /** The effective PDF/X color profile actually used on export. */
  readonly effectivePDFXProfile: Read<M, PDFProfileSelector | string>;

  /** The magnification the exported PDF opens at. */
  get pdfMagnification(): Read<M, PdfMagnificationOptions>;
  set pdfMagnification(value: PdfMagnificationOptions);

  /** The page layout the exported PDF opens with. */
  get pdfPageLayout(): Read<M, PageLayoutOptions>;
  set pdfPageLayout(value: PageLayoutOptions);

  /** If `true`, the exported PDF opens in full-screen mode. */
  get openInFullScreen(): Read<M, boolean>;
  set openInFullScreen(value: boolean);

  /** What the exported PDF's window title bar displays. */
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

  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): Read<M, PageRange | string>;
  set pageRange(value: PageRange | string);

  /** If true, activates security controls for the PDF document. */
  get useSecurity(): Read<M, boolean>;
  set useSecurity(value: boolean);

  /** The password to enter when opening the PDF document. Valid only when use security is true. Note: A script can set but not get this value. */
  get openDocumentPassword(): Read<M, string>;
  set openDocumentPassword(value: string);

  /** Changes the open document password to the specified string. Valid only when use security is true. Note: A script can set but not get this value. */
  get changeSecurityPassword(): Read<M, string>;
  set changeSecurityPassword(value: string);

  /** If true, users cannot print the PDF document. Valid only when use security is true. */
  get disallowPrinting(): Read<M, boolean>;
  set disallowPrinting(value: boolean);

  /** If true, users cannot fill in forms, sign, extract pages, or add comments in the PDF document. Valid only when use security is true. */
  get disallowChanging(): Read<M, boolean>;
  set disallowChanging(value: boolean);

  /** If true, users cannot copy and paste text, images, or other content from the PDF document. Valid only when use security is true. */
  get disallowCopying(): Read<M, boolean>;
  set disallowCopying(value: boolean);

  /** If true, users cannot add or change notes, edit text, or fill in form fields in the PDF document. Valid only when use security is true. */
  get disallowNotes(): Read<M, boolean>;
  set disallowNotes(value: boolean);

  /** If true, users cannot change form fields in the PDF document. Valid only when use security is true. */
  get disallowFormFillIn(): Read<M, boolean>;
  set disallowFormFillIn(value: boolean);

  /** If true, users cannot extract content from the PDF document using software tools for the visually impaired. Valid only when use security is true. */
  get disallowExtractionForAccessibility(): Read<M, boolean>;
  set disallowExtractionForAccessibility(value: boolean);

  /** If true, users cannot insert, delete, or rotate pages in the PDF document. Valid only when use security is true. */
  get disallowDocumentAssembly(): Read<M, boolean>;
  set disallowDocumentAssembly(value: boolean);

  /** If true, users cannot print high-resolution copies of the PDF document. Valid only when use security is true. */
  get disallowHiResPrinting(): Read<M, boolean>;
  set disallowHiResPrinting(value: boolean);

  /**
   * If true and acrobat compatibility is Acrobat 6 or higher, storage systems and search
   * engines cannot access metadata stored in the PDF document.
   *
   * If true and acrobat compatibility is acrobat 5 or higher, users cannot copy and extract
   * content from the document. Valid only when use security is true.
   */
  get disallowPlaintextMetadata(): Read<M, boolean>;
  set disallowPlaintextMetadata(value: boolean);

  /** If true, automatically opens the PDF file after exporting. */
  get viewPDF(): Read<M, boolean>;
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
  get subsetFontsBelow(): Read<M, number>;
  set subsetFontsBelow(value: number);

  /** The color space to use to represent color information in the exported PDF document. */
  get pdfColorSpace(): Read<M, PDFColorSpace>;
  set pdfColorSpace(value: PDFColorSpace);

  /** The ICC Profiles to include in the exported PDF document. */
  get includeICCProfiles(): Read<M, ICCProfiles>;
  set includeICCProfiles(value: ICCProfiles);

  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): Read<M, boolean>;
  set omitEPS(value: boolean);

  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): Read<M, boolean>;
  set omitPDF(value: boolean);

  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): Read<M, boolean>;
  set omitBitmaps(value: boolean);

  /** If true, image data that falls outside the visible portion of an image's frame is not exported to the PDF document. */
  get cropImagesToFrames(): Read<M, boolean>;
  set cropImagesToFrames(value: boolean);

  /** If true, generates thumbnail images for each page or spread. */
  get generateThumbnails(): Read<M, boolean>;
  set generateThumbnails(value: boolean);

  /** If true, optimizes the exported PDF document for faster viewing in a web browser. Note: Compresses text and line art, regardless of specified compression settings. */
  get optimizePDF(): Read<M, boolean>;
  set optimizePDF(value: boolean);

  /** If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher. */
  get includeStructure(): Read<M, boolean>;
  set includeStructure(value: boolean);

  /** The exported PDF document's Acrobat compatibility. */
  get acrobatCompatibility(): Read<M, AcrobatCompatibility>;
  set acrobatCompatibility(value: AcrobatCompatibility);

  /**
   * If true, simulates the effects of overprinting spot inks with different neutral density
   * values by converting spot colors to process colors for printing.
   *
   * Note: Not valid when the color output mode is defined to leave color profiles unchanged.
   */
  get simulateOverprint(): Read<M, boolean>;
  set simulateOverprint(value: boolean);

  /** The gamut of the final RGB or CMYK device. */
  get pdfDestinationProfile(): Read<M, PDFProfileSelector | string>;
  set pdfDestinationProfile(value: PDFProfileSelector | string);

  /** The PDF X color profile to use for the PDF document. */
  get pdfXProfile(): Read<M, PDFProfileSelector | string>;
  set pdfXProfile(value: PDFProfileSelector | string);

  /** If true, includes hyperlinks when exporting the document. */
  get includeHyperlinks(): Read<M, boolean>;
  set includeHyperlinks(value: boolean);

  /** If true, displays bookmarks and table of contents entries as links in the bookmarks pane in the PDF document. If false, no bookmarks are exported. */
  get includeBookmarks(): Read<M, boolean>;
  set includeBookmarks(value: boolean);

  /** If true, makes non-printing objects visible in the PDF document. */
  get exportNonprintingObjects(): Read<M, boolean>;
  set exportNonprintingObjects(value: boolean);

  /** If true, includes visible guides and baseline grids in the PDF document. */
  get exportGuidesAndGrids(): Read<M, boolean>;
  set exportGuidesAndGrids(value: boolean);

  /** If true, saves each layer as an Acrobat layer within the PDF document. */
  get exportLayers(): Read<M, boolean>;
  set exportLayers(value: boolean);

  /** The PDF/X standards compliance to test against. */
  get standardsCompliance(): Read<M, PDFXStandards>;
  set standardsCompliance(value: PDFXStandards);

  /**
   * The name of the intended printing condition.
   *
   * Valid only when a PDF/X compliance standard has been defined for the document. Not valid
   * when PDF/X-3 is the compliance standard or PDF export preset. For information on
   * compliance standards, see standards compliance and PDF X standards.
   */
  get outputCondition(): Read<M, string>;
  set outputCondition(value: string);

  /** The sampling option to apply to color bitmap images in the PDF document. */
  get colorBitmapSampling(): Read<M, Sampling>;
  set colorBitmapSampling(value: Sampling);

  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get colorBitmapSamplingDPI(): Read<M, number>;
  set colorBitmapSamplingDPI(value: number);

  /** The amount of bitmap compression to use. */
  get colorBitmapCompression(): Read<M, BitmapCompression>;
  set colorBitmapCompression(value: BitmapCompression);

  /** The compression option to apply to color images. */
  get colorBitmapQuality(): Read<M, CompressionQuality>;
  set colorBitmapQuality(value: CompressionQuality);

  /** The sampling option to apply to grayscale bitmap images. */
  get grayscaleBitmapSampling(): Read<M, Sampling>;
  set grayscaleBitmapSampling(value: Sampling);

  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get grayscaleBitmapSamplingDPI(): Read<M, number>;
  set grayscaleBitmapSamplingDPI(value: number);

  /** The bitmap compression option to apply to grayscale bitmap images. */
  get grayscaleBitmapCompression(): Read<M, BitmapCompression>;
  set grayscaleBitmapCompression(value: BitmapCompression);

  /** The compression option to apply to grayscale bitmap images. */
  get grayscaleBitmapQuality(): Read<M, CompressionQuality>;
  set grayscaleBitmapQuality(value: CompressionQuality);

  /** The sampling option to apply to monochrome bitmap images. */
  get monochromeBitmapSampling(): Read<M, Sampling>;
  set monochromeBitmapSampling(value: Sampling);

  /** The ppi of the resampled image. (Range: 9 to 2400) */
  get monochromeBitmapSamplingDPI(): Read<M, number>;
  set monochromeBitmapSamplingDPI(value: number);

  /** The bitmap compression option to apply to monochrome bitmap images. */
  get monochromeBitmapCompression(): Read<M, MonoBitmapCompression>;
  set monochromeBitmapCompression(value: MonoBitmapCompression);

  /** If true, compresses text and line art using ZIP compression. */
  get compressTextAndLineArt(): Read<M, boolean>;
  set compressTextAndLineArt(value: boolean);

  /** The minimum dpi at which color compression is applied. (Range: 1 to 10 times the value specified for color bitmap sampling DPI.) */
  get thresholdToCompressColor(): Read<M, number>;
  set thresholdToCompressColor(value: number);

  /** The minimum dpi at which grayscale compression is applied. (Range: 1 to 10 times the value specified for grayscale bitmap sampling DPI.) */
  get thresholdToCompressGray(): Read<M, number>;
  set thresholdToCompressGray(value: number);

  /** The minimum dpi at which monochrome compression is applied. (Range: 1 to 10 times the value specified for monochrome bitmap sampling DPI.) */
  get thresholdToCompressMonochrome(): Read<M, number>;
  set thresholdToCompressMonochrome(value: number);

  /** The tile size for color images. Valid only when color bitmap compression is JPEG 2000. (Range: 128 to 2048) */
  get colorTileSize(): Read<M, number>;
  set colorTileSize(value: number);

  /** The tile size for grayscale images. Valid only when grayscale bitmap compression is JPEG 2000. (Range: 128 to 2048) */
  get grayTileSize(): Read<M, number>;
  set grayTileSize(value: number);

  /** The objects to compress in the PDF document. */
  get compressionType(): Read<M, PDFCompressionType>;
  set compressionType(value: PDFCompressionType);

  /** If true, each spread in the exported document is combined into a single page that has spread's original width. */
  get exportReaderSpreads(): Read<M, boolean>;
  set exportReaderSpreads(value: boolean);

  /** The offset from the edge of the page for page marks. */
  get pageMarksOffset(): Read<M, number>;
  set pageMarksOffset(value: MeasurementValue);

  /** Prints crop marks that define where the page should be trimmed. */
  get cropMarks(): Read<M, boolean>;
  set cropMarks(value: boolean);

  /** If true, prints the filename, page number, current date and time, and color separation name. */
  get pageInformationMarks(): Read<M, boolean>;
  set pageInformationMarks(value: boolean);

  /** If true, print bleed marks. */
  get bleedMarks(): Read<M, boolean>;
  set bleedMarks(value: boolean);

  /** If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments. */
  get colorBars(): Read<M, boolean>;
  set colorBars(value: boolean);

  /** If true, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): Read<M, boolean>;
  set registrationMarks(value: boolean);

  /** The stroke weight for printer's marks. */
  get printerMarkWeight(): Read<M, PDFMarkWeight>;
  set printerMarkWeight(value: PDFMarkWeight);

  /** The height of the bleed area at the top of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedTop(): Read<M, number>;
  set bleedTop(value: MeasurementValue);

  /** The width of the bleed area at the inside of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedInside(): Read<M, number>;
  set bleedInside(value: MeasurementValue);

  /** The height of the bleed area at the bottom of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedBottom(): Read<M, number>;
  set bleedBottom(value: MeasurementValue);

  /** The width of the bleed area at the outside of the page. Valid only when {@link useDocumentBleedWithPDF} is `true`. */
  get bleedOutside(): Read<M, number>;
  set bleedOutside(value: MeasurementValue);

  /** The type of printer marks, either an enum value or the name of a custom marks file. */
  get pdfMarkType(): Read<M, MarkTypes | string>;
  set pdfMarkType(value: MarkTypes | string);

  /** If true, uses the document's bleed settings in the PDF document. */
  get useDocumentBleedWithPDF(): Read<M, boolean>;
  set useDocumentBleedWithPDF(value: boolean);

  /** If true, includes the document's slug area in the PDF document. */
  get includeSlugWithPDF(): Read<M, boolean>;
  set includeSlugWithPDF(value: boolean);

  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): Read<M, boolean>;
  set ignoreSpreadOverrides(value: boolean);

  /** The transparency flattener preset to use. */
  get appliedFlattenerPreset(): Read<M, FlattenerPreset>;
  set appliedFlattenerPreset(value: FlattenerPreset);

  /** If true, retains editing information in the exported PDF, allowing the document to be re-imported and edited in InDesign. If false, editing information is not preserved. */
  get preserveInDesignEditingCapabilities(): Read<M, boolean>;
  set preserveInDesignEditingCapabilities(value: boolean);

  /** The name of the output condition. Valid only when a PDF/X standard has been defined for the document. */
  get outputConditionName(): Read<M, string>;
  set outputConditionName(value: string);

  /** The web address for the output condition registry. Not valid when PDF/X-3 is the compliance standard or PDF export preset. */
  get ocRegistry(): Read<M, string>;
  set ocRegistry(value: string);

  /** How to draw interactive elements. */
  get interactiveElementsOption(): Read<M, InteractiveElementsOptions>;
  set interactiveElementsOption(value: InteractiveElementsOptions);

  /** Which layers to export. */
  get exportWhichLayers(): Read<M, ExportLayerOptions>;
  set exportWhichLayers(value: ExportLayerOptions);

  /** If true, export hidden spreads in PDF. If false, skip export of hidden spreads. */
  get exportHiddenSpread(): Read<M, boolean>;
  set exportHiddenSpread(value: boolean);
}
