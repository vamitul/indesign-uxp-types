/**
 * PDFExportPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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

/**
 * A named set of PDF export settings, applied by {@link Application.pdfExportPresets}
 * when exporting a document to PDF.
 */
export interface PDFExportPreset<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    NamableDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFExportPreset';

  /** Resolves the proxy into the individual {@link PDFExportPreset} objects it stands for. */
  getElements(): PDFExportPreset<'single'>[];

  /** The full path to the PDF export preset file, including its name. */
  readonly fullName: Read<M, Promise<File>>;

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

  /** The default document language embedded in the exported PDF, as an ISO language code. */
  get defaultDocumentLanguage(): Read<M, string>;
  set defaultDocumentLanguage(value: string);

  /** If `true`, exports each page or spread as a separate PDF file. */
  get exportAsSinglePages(): Read<M, boolean>;
  set exportAsSinglePages(value: boolean);

  /** The suffix appended to each file name when {@link exportAsSinglePages} is `true`. */
  get singlePagesPDFSuffix(): Read<M, string>;
  set singlePagesPDFSuffix(value: string);

  /** The name of the PDF export preset. */
  get name(): Read<M, string>;
  set name(value: string);

  /**
   * The character-usage threshold, as a percentage, above which a font is
   * fully embedded instead of subsetted. `0` fully embeds every font.
   * Embedding complete fonts increases file size.
   * @param value Range: `0`–`100`.
   */
  get subsetFontsBelow(): Read<M, number>;
  set subsetFontsBelow(value: number);

  /** The color space used to represent color in the exported PDF. */
  get pdfColorSpace(): Read<M, PDFColorSpace>;
  set pdfColorSpace(value: PDFColorSpace);

  /** The ICC profiles to include in the exported PDF. */
  get includeICCProfiles(): Read<M, ICCProfiles>;
  set includeICCProfiles(value: ICCProfiles | boolean);

  /** If `true`, replaces EPS images with OPI links instead of embedding them. */
  get omitEPS(): Read<M, boolean>;
  set omitEPS(value: boolean);

  /** If `true`, replaces PDF images with OPI links instead of embedding them. */
  get omitPDF(): Read<M, boolean>;
  set omitPDF(value: boolean);

  /** If `true`, replaces bitmap images with OPI links instead of embedding them. */
  get omitBitmaps(): Read<M, boolean>;
  set omitBitmaps(value: boolean);

  /** If `true`, excludes image data that falls outside the visible portion of an image's frame. */
  get cropImagesToFrames(): Read<M, boolean>;
  set cropImagesToFrames(value: boolean);

  /** If `true`, generates a thumbnail image for each page or spread. */
  get generateThumbnails(): Read<M, boolean>;
  set generateThumbnails(value: boolean);

  /**
   * If `true`, optimizes the exported PDF for faster web viewing. Compresses
   * text and line art regardless of the configured compression settings.
   */
  get optimizePDF(): Read<M, boolean>;
  set optimizePDF(value: boolean);

  /**
   * If `true`, creates a tagged PDF. Tags are visible only when
   * {@link acrobatCompatibility} is Acrobat 6 or higher and the PDF is opened
   * in a matching Acrobat version.
   */
  get includeStructure(): Read<M, boolean>;
  set includeStructure(value: boolean);

  /** The Acrobat version the exported PDF is compatible with. */
  get acrobatCompatibility(): Read<M, AcrobatCompatibility>;
  set acrobatCompatibility(value: AcrobatCompatibility);

  /**
   * If `true`, simulates overprinting spot inks by converting spot colors to
   * process colors for printing. Not valid when the color output mode leaves
   * color profiles unchanged.
   */
  get simulateOverprint(): Read<M, boolean>;
  set simulateOverprint(value: boolean);

  /** The gamut of the final RGB or CMYK output device. */
  get pdfDestinationProfile(): Read<M, PDFProfileSelector | string>;
  set pdfDestinationProfile(value: PDFProfileSelector | string);

  /** The PDF/X color profile used for the exported document. */
  get pdfXProfile(): Read<M, PDFProfileSelector | string>;
  set pdfXProfile(value: PDFProfileSelector | string);

  /** If `true`, includes hyperlinks in the exported PDF. */
  get includeHyperlinks(): Read<M, boolean>;
  set includeHyperlinks(value: boolean);

  /**
   * If `true`, exports bookmarks and table of contents entries as links in
   * the PDF's Bookmarks pane.
   */
  get includeBookmarks(): Read<M, boolean>;
  set includeBookmarks(value: boolean);

  /** If `true`, makes non-printing objects visible in the exported PDF. */
  get exportNonprintingObjects(): Read<M, boolean>;
  set exportNonprintingObjects(value: boolean);

  /** If `true`, includes visible guides and baseline grids in the exported PDF. */
  get exportGuidesAndGrids(): Read<M, boolean>;
  set exportGuidesAndGrids(value: boolean);

  /** If `true`, saves each layer as an Acrobat layer within the exported PDF. */
  get exportLayers(): Read<M, boolean>;
  set exportLayers(value: boolean);

  /** The PDF/X standard to test compliance against. */
  get standardsCompliance(): Read<M, PDFXStandards>;
  set standardsCompliance(value: PDFXStandards);

  /**
   * The name of the intended printing condition. Valid only when a PDF/X
   * standard is set via {@link standardsCompliance}, and not valid for PDF/X-3.
   */
  get outputCondition(): Read<M, string>;
  set outputCondition(value: string);

  /** The sampling option applied to color bitmap images. */
  get colorBitmapSampling(): Read<M, Sampling>;
  set colorBitmapSampling(value: Sampling);

  /**
   * The resampled resolution, in ppi, for color bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get colorBitmapSamplingDPI(): Read<M, number>;
  set colorBitmapSamplingDPI(value: number);

  /** The compression method applied to color bitmap images. */
  get colorBitmapCompression(): Read<M, BitmapCompression>;
  set colorBitmapCompression(value: BitmapCompression);

  /** The compression quality applied to color images. */
  get colorBitmapQuality(): Read<M, CompressionQuality>;
  set colorBitmapQuality(value: CompressionQuality);

  /** The sampling option applied to grayscale bitmap images. */
  get grayscaleBitmapSampling(): Read<M, Sampling>;
  set grayscaleBitmapSampling(value: Sampling);

  /**
   * The resampled resolution, in ppi, for grayscale bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get grayscaleBitmapSamplingDPI(): Read<M, number>;
  set grayscaleBitmapSamplingDPI(value: number);

  /** The compression method applied to grayscale bitmap images. */
  get grayscaleBitmapCompression(): Read<M, BitmapCompression>;
  set grayscaleBitmapCompression(value: BitmapCompression);

  /** The compression quality applied to grayscale bitmap images. */
  get grayscaleBitmapQuality(): Read<M, CompressionQuality>;
  set grayscaleBitmapQuality(value: CompressionQuality);

  /** The sampling option applied to monochrome bitmap images. */
  get monochromeBitmapSampling(): Read<M, Sampling>;
  set monochromeBitmapSampling(value: Sampling);

  /**
   * The resampled resolution, in ppi, for monochrome bitmap images.
   * @param value Range: `9`–`2400`.
   */
  get monochromeBitmapSamplingDPI(): Read<M, number>;
  set monochromeBitmapSamplingDPI(value: number);

  /** The compression method applied to monochrome bitmap images. */
  get monochromeBitmapCompression(): Read<M, MonoBitmapCompression>;
  set monochromeBitmapCompression(value: MonoBitmapCompression);

  /** If `true`, compresses text and line art with ZIP compression. */
  get compressTextAndLineArt(): Read<M, boolean>;
  set compressTextAndLineArt(value: boolean);

  /**
   * The minimum resolution, in ppi, above which color image compression is
   * applied.
   * @param value Range: `1`–`10` times {@link colorBitmapSamplingDPI}.
   */
  get thresholdToCompressColor(): Read<M, number>;
  set thresholdToCompressColor(value: number);

  /**
   * The minimum resolution, in ppi, above which grayscale image compression
   * is applied.
   * @param value Range: `1`–`10` times {@link grayscaleBitmapSamplingDPI}.
   */
  get thresholdToCompressGray(): Read<M, number>;
  set thresholdToCompressGray(value: number);

  /**
   * The minimum resolution, in ppi, above which monochrome image compression
   * is applied.
   * @param value Range: `1`–`10` times {@link monochromeBitmapSamplingDPI}.
   */
  get thresholdToCompressMonochrome(): Read<M, number>;
  set thresholdToCompressMonochrome(value: number);

  /**
   * The tile size for color images. Valid only when
   * {@link colorBitmapCompression} is JPEG 2000.
   * @param value Range: `128`–`2048`.
   */
  get colorTileSize(): Read<M, number>;
  set colorTileSize(value: number);

  /**
   * The tile size for grayscale images. Valid only when
   * {@link grayscaleBitmapCompression} is JPEG 2000.
   * @param value Range: `128`–`2048`.
   */
  get grayTileSize(): Read<M, number>;
  set grayTileSize(value: number);

  /** Which objects in the exported PDF get compressed. */
  get compressionType(): Read<M, PDFCompressionType>;
  set compressionType(value: PDFCompressionType);

  /**
   * If `true`, combines each spread in the exported document into a single
   * page at the spread's full width.
   */
  get exportReaderSpreads(): Read<M, boolean>;
  set exportReaderSpreads(value: boolean);

  /**
   * The offset from the edge of the page for printer's marks.
   * @param value Range: `0`–`72`.
   */
  get pageMarksOffset(): Read<M, number>;
  set pageMarksOffset(value: MeasurementValue);

  /** If `true`, prints crop marks showing where the page should be trimmed. */
  get cropMarks(): Read<M, boolean>;
  set cropMarks(value: boolean);

  /** If `true`, prints the file name, page number, date/time, and color separation name. */
  get pageInformationMarks(): Read<M, boolean>;
  set pageInformationMarks(value: boolean);

  /** If `true`, prints bleed marks. */
  get bleedMarks(): Read<M, boolean>;
  set bleedMarks(value: boolean);

  /** If `true`, prints small squares of the CMYK inks and gray tints in 10% increments. */
  get colorBars(): Read<M, boolean>;
  set colorBars(value: boolean);

  /** If `true`, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): Read<M, boolean>;
  set registrationMarks(value: boolean);

  /** The stroke weight used for printer's marks. */
  get printerMarkWeight(): Read<M, PDFMarkWeight>;
  set printerMarkWeight(value: PDFMarkWeight);

  /**
   * The bleed area at the top of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedTop(): Read<M, number>;
  set bleedTop(value: MeasurementValue);

  /**
   * The bleed area at the inside of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedInside(): Read<M, number>;
  set bleedInside(value: MeasurementValue);

  /**
   * The bleed area at the bottom of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedBottom(): Read<M, number>;
  set bleedBottom(value: MeasurementValue);

  /**
   * The bleed area at the outside of the page. Valid only when
   * {@link useDocumentBleedWithPDF} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedOutside(): Read<M, number>;
  set bleedOutside(value: MeasurementValue);

  /** The type of printer's marks, or the name of a custom marks file. */
  get pdfMarkType(): Read<M, MarkTypes | string>;
  set pdfMarkType(value: MarkTypes | string);

  /** If `true`, uses the document's own bleed settings in the exported PDF. */
  get useDocumentBleedWithPDF(): Read<M, boolean>;
  set useDocumentBleedWithPDF(value: boolean);

  /** If `true`, includes the document's slug area in the exported PDF. */
  get includeSlugWithPDF(): Read<M, boolean>;
  set includeSlugWithPDF(value: boolean);

  /** If `true`, ignores per-spread transparency flattener overrides. */
  get ignoreSpreadOverrides(): Read<M, boolean>;
  set ignoreSpreadOverrides(value: boolean);

  /** The transparency flattener preset used for this export. */
  get appliedFlattenerPreset(): Read<M, FlattenerPreset>;
  set appliedFlattenerPreset(value: FlattenerPreset);

  /**
   * The name of the output condition. Valid only when a PDF/X standard is
   * set via {@link standardsCompliance}.
   */
  get outputConditionName(): Read<M, string>;
  set outputConditionName(value: string);

  /**
   * The web address of the output condition registry. Not valid for PDF/X-3.
   */
  get ocRegistry(): Read<M, string>;
  set ocRegistry(value: string);

  /** How interactive elements are drawn in the exported PDF. */
  get interactiveElementsOption(): Read<M, InteractiveElementsOptions>;
  set interactiveElementsOption(value: InteractiveElementsOptions);

  /** Which layers are exported to the PDF. */
  get exportWhichLayers(): Read<M, ExportLayerOptions>;
  set exportWhichLayers(value: ExportLayerOptions);

  /** Deletes the PDF export preset. */
  remove(): Read<M, void>;

  /** Duplicates the PDF export preset. */
  duplicate(): Read<M, PDFExportPreset>;
}
