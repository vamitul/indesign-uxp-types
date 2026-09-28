/**
 * PrintPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath, File, MeasurementValue } from './_base/Types';
import type { Book } from './Book';
import type { Document } from './Document';
import type { PrinterPreset } from './PrinterPreset';
import type { ColorOutputModes } from './Enums/ColorOutputModes';
import type { ColorRenderingDictionary } from './Enums/ColorRenderingDictionary';
import type { DataFormat } from './Enums/DataFormat';
import type { Flip } from './Enums/Flip';
import type { FontDownloading } from './Enums/FontDownloading';
import type { ImageDataTypes } from './Enums/ImageDataTypes';
import type { MarkLineWeight } from './Enums/MarkLineWeight';
import type { MarkTypes } from './Enums/MarkTypes';
import type { PPDValues } from './Enums/PPDValues';
import type { PagePositions } from './Enums/PagePositions';
import type { PageRange } from './Enums/PageRange';
import type { PaperSize } from './Enums/PaperSize';
import type { PaperSizes } from './Enums/PaperSizes';
import type { PostScriptLevels } from './Enums/PostScriptLevels';
import type { PrintLayerOptions } from './Enums/PrintLayerOptions';
import type { PrintPageOrientation } from './Enums/PrintPageOrientation';
import type { Printer } from './Enums/Printer';
import type { PrinterPresetTypes } from './Enums/PrinterPresetTypes';
import type { Profile } from './Enums/Profile';
import type { RenderingIntent } from './Enums/RenderingIntent';
import type { ScaleModes } from './Enums/ScaleModes';
import type { Screeening } from './Enums/Screeening';
import type { Sequences } from './Enums/Sequences';
import type { SourceSpaces } from './Enums/SourceSpaces';
import type { ThumbsPerPage } from './Enums/ThumbsPerPage';
import type { TilingTypes } from './Enums/TilingTypes';
import type { Trapping } from './Enums/Trapping';

/**
 * A book's or document's print settings.
 */
export interface PrintPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Book | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PrintPreference';

  /** Resolves the proxy into the individual {@link PrintPreference} objects it stands for. */
  getElements(): PrintPreference<'single'>[];

  /** If `true`, the print job uses PDF passthrough. */
  readonly pdfPassthrough: Read<M, boolean>;

  /** The printers available on this system. */
  readonly printerList: Read<M, string[]>;

  /** The PPDs available on this system. */
  readonly ppdList: Read<M, string[]>;

  /** The paper sizes available for the current {@link ppd}. */
  readonly paperSizeList: Read<M, string[]>;

  /** Lists the ink screenings available in the PPD. Note: Valid only when color output is separations or in rip separations. */
  readonly screeningList: Read<M, string[]>;

  /** The current printer preset type. */
  get activePrinterPreset(): Read<M, PrinterPresetTypes | PrinterPreset>;
  set activePrinterPreset(value: PrinterPresetTypes | PrinterPreset);

  /** The printer to print to, by name from {@link printerList}, or {@link Printer.POSTSCRIPT_FILE} to print to a PostScript file instead. */
  get printer(): Read<M, Printer | string>;
  set printer(value: Printer | string);

  /** The PPD (PostScript Printer Description) to use, by name from {@link ppdList}, or {@link PPDValues.DEVICE_INDEPENDENT} for a device-independent PPD. */
  get ppd(): Read<M, PPDValues | string>;
  set ppd(value: PPDValues | string);

  /** The PostScript file to print to. Note: Valid only when the current printer is defined as postscript file. */
  get printFile(): Read<M, Promise<File>>;
  set printFile(value: FilePath);

  /** The number of copies to print. Note: Not valid when printer is PostScript File. */
  get copies(): Read<M, number>;
  set copies(value: number);

  /** If true, collate printed copies. */
  get collating(): Read<M, boolean>;
  set collating(value: boolean);

  /** If true, prints pages in reverse order. */
  get reverseOrder(): Read<M, boolean>;
  set reverseOrder(value: boolean);

  /** The sequence of pages to print. */
  get sequence(): Read<M, Sequences>;
  set sequence(value: Sequences);

  /** If true, prints each spread with all spread pages on a single sheet. If false, prints spread pages as separate pages. */
  get printSpreads(): Read<M, boolean>;
  set printSpreads(value: boolean);

  /** If true, prints master pages. */
  get printMasterPages(): Read<M, boolean>;
  set printMasterPages(value: boolean);

  /** If true, prints non-printing objects. Note: Valid only when trapping is off. */
  get printNonprinting(): Read<M, boolean>;
  set printNonprinting(value: boolean);

  /** If true, prints blank pages. Note: Valid only when trapping is off. */
  get printBlankPages(): Read<M, boolean>;
  set printBlankPages(value: boolean);

  /** If true, prints visible guides and baseline grids. Note: Valid only when trapping is off. */
  get printGuidesGrids(): Read<M, boolean>;
  set printGuidesGrids(value: boolean);

  /** The paper size, specified as either a string or an enumeration. For information on paper size names, see paper size list. */
  get paperSize(): Read<M, PaperSizes | string>;
  set paperSize(value: PaperSizes | string);

  /** The paper height. Note: Valid only when paper size is custom or scale mode is scale width height. */
  get paperHeight(): Read<M, number | PaperSize>;
  set paperHeight(value: MeasurementValue | PaperSize);

  /** The paper width. Note: Valid only when paper size is custom or scale mode is scale width height. */
  get paperWidth(): Read<M, number | PaperSize>;
  set paperWidth(value: MeasurementValue | PaperSize);

  /** The amount of space to offset the page from the left edge of the imageable area. */
  get paperOffset(): Read<M, number>;
  set paperOffset(value: MeasurementValue);

  /** The space between document pages on the printing medium. */
  get paperGap(): Read<M, number>;
  set paperGap(value: MeasurementValue);

  /** If true, uses transverse orientation. */
  get paperTransverse(): Read<M, boolean>;
  set paperTransverse(value: boolean);

  /** The orientation of the printed page. */
  get printPageOrientation(): Read<M, PrintPageOrientation>;
  set printPageOrientation(value: PrintPageOrientation);

  /** The position of the page on the printing medium. Note: Valid only when tile is false. */
  get pagePosition(): Read<M, PagePositions>;
  set pagePosition(value: PagePositions);

  /** The policy for scaling the page. Note: Valid only when printing from Layout view. */
  get scaleMode(): Read<M, ScaleModes>;
  set scaleMode(value: ScaleModes);

  /** The amount (as a percentage) that the page width is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height. */
  get scaleWidth(): Read<M, number>;
  set scaleWidth(value: number);

  /** The amount (as a percentage) that the page height is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height. */
  get scaleHeight(): Read<M, number>;
  set scaleHeight(value: number);

  /** If true, constrains the proportions of the scaling; uses the most recent value for either scale width or scale height to define both values. Note: Valid only when scale mode is scale width height. */
  get scaleProportional(): Read<M, boolean>;
  set scaleProportional(value: boolean);

  /** If true, prints thumbnails. Note: Valid only when trapping is off and tile is false. */
  get thumbnails(): Read<M, boolean>;
  set thumbnails(value: boolean);

  /** The number of thumbnails per page. */
  get thumbnailsPerPage(): Read<M, ThumbsPerPage>;
  set thumbnailsPerPage(value: ThumbsPerPage);

  /** If true, tiles pages. */
  get tile(): Read<M, boolean>;
  set tile(value: boolean);

  /** The tiling type. Note: Valid only when tiling is true. */
  get tilingType(): Read<M, TilingTypes>;
  set tilingType(value: TilingTypes);

  /** The amount of tiling overlap. Note: Valid only when tiling is true and tiling type is not manual. */
  get tilingOverlap(): Read<M, number>;
  set tilingOverlap(value: number);

  /** If true, prints all printer marks. If false, prints specified printer marks. */
  get allPrinterMarks(): Read<M, boolean>;
  set allPrinterMarks(value: boolean);

  /** Prints crop marks that define where the page should be trimmed. */
  get cropMarks(): Read<M, boolean>;
  set cropMarks(value: boolean);

  /** If true, print bleed marks. */
  get bleedMarks(): Read<M, boolean>;
  set bleedMarks(value: boolean);

  /** If true, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): Read<M, boolean>;
  set registrationMarks(value: boolean);

  /** If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments. */
  get colorBars(): Read<M, boolean>;
  set colorBars(value: boolean);

  /** If true, prints the filename, page number, current date and time, and color separation name. */
  get pageInformationMarks(): Read<M, boolean>;
  set pageInformationMarks(value: boolean);

  /** The type of printer marks, either an enum value or the name of a custom marks file. */
  get markType(): Read<M, MarkTypes | string>;
  set markType(value: MarkTypes | string);

  /** The stroke weight (in points) for printer marks. */
  get markLineWeight(): Read<M, MarkLineWeight>;
  set markLineWeight(value: MarkLineWeight);

  /** The distance to offset the page marks from the edge of the page. */
  get markOffset(): Read<M, number>;
  set markOffset(value: MeasurementValue);

  /** If true, uses the bleed area set for the document. */
  get useDocumentBleedToPrint(): Read<M, boolean>;
  set useDocumentBleedToPrint(value: boolean);

  /** The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true. */
  get bleedTop(): Read<M, number>;
  set bleedTop(value: MeasurementValue);

  /** The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true. */
  get bleedBottom(): Read<M, number>;
  set bleedBottom(value: MeasurementValue);

  /** The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true. */
  get bleedInside(): Read<M, number>;
  set bleedInside(value: MeasurementValue);

  /** The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true. */
  get bleedOutside(): Read<M, number>;
  set bleedOutside(value: MeasurementValue);

  /** If true, includes the slug area in the printed document. */
  get includeSlugToPrint(): Read<M, boolean>;
  set includeSlugToPrint(value: boolean);

  /** The color output mode for composites. Note: Not valid when a device-independent PPD is specified. */
  get colorOutput(): Read<M, ColorOutputModes>;
  set colorOutput(value: ColorOutputModes);

  /** If true, prints all text as black unless text has the color None or Paper or a color value that equals white. If false, prints colored text, such as blue hyperlinks, in halftone patterns. Note: Valid only when trapping is off. */
  get textAsBlack(): Read<M, boolean>;
  set textAsBlack(value: boolean);

  /** How trapping is generated, if at all — see {@link Trapping}. */
  get trapping(): Read<M, Trapping>;
  set trapping(value: Trapping);

  /** The direction in which to flip the printed image. */
  get flip(): Read<M, Flip>;
  set flip(value: Flip);

  /** If true, prints the document as a negative. */
  get negative(): Read<M, boolean>;
  set negative(value: boolean);

  /** The ink screening settings for composite gray output in PostScript or PDF format. */
  get screening(): Read<M, Screeening | string>;
  set screening(value: Screeening | string);

  /** The screen angle to use when printing composites. (Range: 0 to 360) Note: Valid only for PostScript or PDF files that use custom screening. */
  get compositeAngle(): Read<M, number>;
  set compositeAngle(value: number);

  /** The screen frequency to use when printing composites. (Range: 1 to 500) Note: Valid only for PostScript or PDF files that use custom screening. */
  get compositeFrequency(): Read<M, number>;
  set compositeFrequency(value: number);

  /**
   * If true, simulates the effects of overprinting spot inks with different neutral density
   * values by converting spot colors to process colors for printing.
   *
   * Note: Not valid when the color output mode is defined to leave color profiles unchanged.
   */
  get simulateOverprint(): Read<M, boolean>;
  set simulateOverprint(value: boolean);

  /** If true, prints the cyan ink. Note: Valid only when trapping is off. */
  get printCyan(): Read<M, boolean>;
  set printCyan(value: boolean);

  /** The angle override for cyan ink. (Range: 0 to 360) */
  get cyanAngle(): Read<M, number>;
  set cyanAngle(value: number);

  /** The frequency override for cyan ink. (Range: 1 to 500) */
  get cyanFrequency(): Read<M, number>;
  set cyanFrequency(value: number);

  /** If true, prints the magenta ink. Note: Valid only when trapping is off. */
  get printMagenta(): Read<M, boolean>;
  set printMagenta(value: boolean);

  /** The angle override for magenta ink. (Range: 0 to 360) */
  get magentaAngle(): Read<M, number>;
  set magentaAngle(value: number);

  /** The frequency override for magenta ink. (Range: 1 to 500) */
  get magentaFrequency(): Read<M, number>;
  set magentaFrequency(value: number);

  /** If true, prints the yellow ink. Note: Valid only when trapping is off. */
  get printYellow(): Read<M, boolean>;
  set printYellow(value: boolean);

  /** The angle override for yellow ink. (Range: 0 to 360) */
  get yellowAngle(): Read<M, number>;
  set yellowAngle(value: number);

  /** The frequency override for yellow ink. (Range: 1 to 500) */
  get yellowFrequency(): Read<M, number>;
  set yellowFrequency(value: number);

  /** If true, prints the black ink. Note: Valid only when trapping is off. */
  get printBlack(): Read<M, boolean>;
  set printBlack(value: boolean);

  /** The angle override for black ink. (Range: 0 to 360) */
  get blackAngle(): Read<M, number>;
  set blackAngle(value: number);

  /** The frequency override for black ink. (Range: 1 to 500) */
  get blackFrequency(): Read<M, number>;
  set blackFrequency(value: number);

  /** How much of each placed image's data is sent to the printer or file — full resolution, optimized, a low-resolution proxy, or omitted entirely. */
  get sendImageData(): Read<M, ImageDataTypes>;
  set sendImageData(value: ImageDataTypes);

  /** Controls how fonts are downloaded to the printer. */
  get fontDownloading(): Read<M, FontDownloading>;
  set fontDownloading(value: FontDownloading);

  /** If true, downloads all fonts listed in the selected PPD. Valid only when font downloading is complete or subset. */
  get downloadPPDFonts(): Read<M, boolean>;
  set downloadPPDFonts(value: boolean);

  /** The PostScript level the target printer supports — Level 2 or Level 3. */
  get postscriptLevel(): Read<M, PostScriptLevels>;
  set postscriptLevel(value: PostScriptLevels);

  /** The format in which to send image data to the printer. */
  get dataFormat(): Read<M, DataFormat>;
  set dataFormat(value: DataFormat);

  /** The source color space for the color management system. Note: Valid only when use color management is true. */
  get sourceSpace(): Read<M, SourceSpaces>;
  set sourceSpace(value: SourceSpaces);

  /** The color profile. */
  get profile(): Read<M, Profile | string>;
  set profile(value: Profile | string);

  /** The color-rendering dictionary (CRD), specified as a CRD name or an enumeration value. Note: Valid only when use color management is true. */
  get crd(): Read<M, ColorRenderingDictionary | string>;
  set crd(value: ColorRenderingDictionary | string);

  /** How out-of-gamut colors are mapped to the destination color space — see {@link RenderingIntent}. Note: Valid only when use color management is true. */
  get intent(): Read<M, RenderingIntent>;
  set intent(value: RenderingIntent);

  /** If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps. */
  get opiImageReplacement(): Read<M, boolean>;
  set opiImageReplacement(value: boolean);

  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): Read<M, boolean>;
  set omitEPS(value: boolean);

  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): Read<M, boolean>;
  set omitPDF(value: boolean);

  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): Read<M, boolean>;
  set omitBitmaps(value: boolean);

  /** The name of the transparency flattener preset. */
  get flattenerPresetName(): Read<M, string>;
  set flattenerPresetName(value: string);

  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): Read<M, boolean>;
  set ignoreSpreadOverrides(value: boolean);

  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): Read<M, PageRange | string>;
  set pageRange(value: PageRange | string);

  /** If true, forces all bleed area settings to be the same, using the most recent bleed measurement setting. If false, allows bleed top, bleed bottom, bleed inside, and bleed outside to have different measurements. */
  get bleedChain(): Read<M, boolean>;
  set bleedChain(value: boolean);

  /** If true, preserves uncalibrated color numbers. */
  get preserveColorNumbers(): Read<M, boolean>;
  set preserveColorNumbers(value: boolean);

  /** If true, uses bitmap printing. */
  get bitmapPrinting(): Read<M, boolean>;
  set bitmapPrinting(value: boolean);

  /** The resolution for bitmap printing. (Range: 72 to 1200) Note: Valid when bitmap printing is true. */
  get bitmapResolution(): Read<M, number>;
  set bitmapResolution(value: number);

  /** The layers to print. */
  get printLayers(): Read<M, PrintLayerOptions>;
  set printLayers(value: PrintLayerOptions);
}
