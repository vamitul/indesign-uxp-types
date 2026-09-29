/**
 * PrinterPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { File, FilePath, MeasurementValue } from './_base/Types';
import type { Printer } from './Enums/Printer';
import type { PPDValues } from './Enums/PPDValues';
import type { Sequences } from './Enums/Sequences';
import type { PaperSizes } from './Enums/PaperSizes';
import type { PaperSize } from './Enums/PaperSize';
import type { PrintPageOrientation } from './Enums/PrintPageOrientation';
import type { PagePositions } from './Enums/PagePositions';
import type { ScaleModes } from './Enums/ScaleModes';
import type { ThumbsPerPage } from './Enums/ThumbsPerPage';
import type { TilingTypes } from './Enums/TilingTypes';
import type { MarkTypes } from './Enums/MarkTypes';
import type { MarkLineWeight } from './Enums/MarkLineWeight';
import type { ColorOutputModes } from './Enums/ColorOutputModes';
import type { Trapping } from './Enums/Trapping';
import type { Flip } from './Enums/Flip';
import type { Screeening } from './Enums/Screeening';
import type { ImageDataTypes } from './Enums/ImageDataTypes';
import type { FontDownloading } from './Enums/FontDownloading';
import type { PostScriptLevels } from './Enums/PostScriptLevels';
import type { DataFormat } from './Enums/DataFormat';
import type { SourceSpaces } from './Enums/SourceSpaces';
import type { Profile } from './Enums/Profile';
import type { ColorRenderingDictionary } from './Enums/ColorRenderingDictionary';
import type { RenderingIntent } from './Enums/RenderingIntent';
import type { PrintLayerOptions } from './Enums/PrintLayerOptions';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * A named set of print settings, applied by {@link Application.printerPresets}
 * when printing a document.
 */
export interface PrinterPreset {
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
  get properties(): PropertiesGetter<PrinterPreset, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PrinterPreset, 'single'>);
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
  readonly constructorName: 'PrinterPreset';
  /** Resolves the proxy into the individual {@link PrinterPreset} objects it stands for. */
  getElements(): PrinterPreset[];
  /** The printers available on this system. */
  readonly printerList: string[];
  /** The PPDs available on this system. */
  readonly ppdList: string[];
  /** The paper sizes available for the current {@link ppd}. */
  readonly paperSizeList: string[];
  /**
   * The ink screenings available in the current {@link ppd}. Valid only when
   * {@link colorOutput} is separations or in-RIP separations.
   */
  readonly screeningList: string[];
  /** The name of the printer preset. */
  get name(): string;
  set name(value: string);
  /** The printer to print to, by name from {@link printerList}, or {@link Printer.POSTSCRIPT_FILE} to print to a PostScript file instead. */
  get printer(): Printer | string;
  set printer(value: Printer | string);
  /** The PPD (PostScript Printer Description) to use, by name from {@link ppdList}, or {@link PPDValues.DEVICE_INDEPENDENT} for a device-independent PPD. */
  get ppd(): PPDValues | string;
  set ppd(value: PPDValues | string);
  /** The PostScript file to print to. Valid only when {@link printer} is set to print to a PostScript file. */
  get printFile(): Promise<File>;
  set printFile(value: FilePath);
  /** The number of copies to print. Not valid when {@link printer} is a PostScript file. */
  get copies(): number;
  set copies(value: number);
  /** If `true`, collates printed copies. */
  get collating(): boolean;
  set collating(value: boolean);
  /** If `true`, prints pages in reverse order. */
  get reverseOrder(): boolean;
  set reverseOrder(value: boolean);
  /** The sequence of pages to print. */
  get sequence(): Sequences;
  set sequence(value: Sequences);
  /**
   * If `true`, prints each spread's pages together on a single sheet. If
   * `false`, prints spread pages as separate pages.
   */
  get printSpreads(): boolean;
  set printSpreads(value: boolean);
  /** If `true`, prints master pages. */
  get printMasterPages(): boolean;
  set printMasterPages(value: boolean);
  /** If `true`, prints non-printing objects. Valid only when {@link trapping} is off. */
  get printNonprinting(): boolean;
  set printNonprinting(value: boolean);
  /** If `true`, prints blank pages. Valid only when {@link trapping} is off. */
  get printBlankPages(): boolean;
  set printBlankPages(value: boolean);
  /** If `true`, prints visible guides and baseline grids. Valid only when {@link trapping} is off. */
  get printGuidesGrids(): boolean;
  set printGuidesGrids(value: boolean);
  /** The paper size. See {@link paperSizeList} for the names valid on this system. */
  get paperSize(): PaperSizes | string;
  set paperSize(value: PaperSizes | string);
  /**
   * The paper height. Valid only when {@link paperSize} is custom or
   * {@link scaleMode} is scale-width-height.
   */
  get paperHeight(): PaperSize | number;
  set paperHeight(value: PaperSize | MeasurementValue);
  /**
   * The paper width. Valid only when {@link paperSize} is custom or
   * {@link scaleMode} is scale-width-height.
   */
  get paperWidth(): PaperSize | number;
  set paperWidth(value: PaperSize | MeasurementValue);
  /** The amount of space to offset the page from the left edge of the imageable area. */
  get paperOffset(): number;
  set paperOffset(value: MeasurementValue);
  /** The space between document pages on the printing medium. */
  get paperGap(): number;
  set paperGap(value: MeasurementValue);
  /** If `true`, uses transverse (rotated) orientation for the paper. */
  get paperTransverse(): boolean;
  set paperTransverse(value: boolean);
  /** The orientation of the printed page. */
  get printPageOrientation(): PrintPageOrientation;
  set printPageOrientation(value: PrintPageOrientation);
  /** The position of the page on the printing medium. Valid only when {@link tile} is `false`. */
  get pagePosition(): PagePositions;
  set pagePosition(value: PagePositions);
  /** The policy for scaling the page. Valid only when printing from Layout view. */
  get scaleMode(): ScaleModes;
  set scaleMode(value: ScaleModes);
  /**
   * The page width scaling percentage. Valid only when {@link scaleMode} is
   * scale-width-height.
   * @param value Range: `0`–`1000`.
   */
  get scaleWidth(): number;
  set scaleWidth(value: number);
  /**
   * The page height scaling percentage. Valid only when {@link scaleMode} is
   * scale-width-height.
   * @param value Range: `0`–`1000`.
   */
  get scaleHeight(): number;
  set scaleHeight(value: number);
  /**
   * If `true`, constrains scaling proportions, using the most recent
   * {@link scaleWidth}/{@link scaleHeight} value for both. Valid only when
   * {@link scaleMode} is scale-width-height.
   */
  get scaleProportional(): boolean;
  set scaleProportional(value: boolean);
  /** If `true`, prints thumbnails. Valid only when {@link trapping} is off and {@link tile} is `false`. */
  get thumbnails(): boolean;
  set thumbnails(value: boolean);
  /** The number of thumbnails per page. */
  get thumbnailsPerPage(): ThumbsPerPage;
  set thumbnailsPerPage(value: ThumbsPerPage);
  /** If `true`, tiles pages across multiple sheets. */
  get tile(): boolean;
  set tile(value: boolean);
  /** The tiling type. Valid only when {@link tile} is `true`. */
  get tilingType(): TilingTypes;
  set tilingType(value: TilingTypes);
  /** The amount of tiling overlap. Valid only when {@link tile} is `true` and {@link tilingType} is not manual. */
  get tilingOverlap(): number;
  set tilingOverlap(value: number);
  /** If `true`, prints all printer's marks. If `false`, prints only the individually enabled marks. */
  get allPrinterMarks(): boolean;
  set allPrinterMarks(value: boolean);
  /** If `true`, prints crop marks showing where the page should be trimmed. */
  get cropMarks(): boolean;
  set cropMarks(value: boolean);
  /** If `true`, prints bleed marks. */
  get bleedMarks(): boolean;
  set bleedMarks(value: boolean);
  /** If `true`, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): boolean;
  set registrationMarks(value: boolean);
  /** If `true`, prints small squares of the CMYK inks and gray tints in 10% increments. */
  get colorBars(): boolean;
  set colorBars(value: boolean);
  /** If `true`, prints the file name, page number, date/time, and color separation name. */
  get pageInformationMarks(): boolean;
  set pageInformationMarks(value: boolean);
  /** The type of printer's marks, or the name of a custom marks file. */
  get markType(): MarkTypes | string;
  set markType(value: MarkTypes | string);
  /** The stroke weight, in points, for printer's marks. */
  get markLineWeight(): MarkLineWeight;
  set markLineWeight(value: MarkLineWeight);
  /** The distance to offset printer's marks from the edge of the page. */
  get markOffset(): number;
  set markOffset(value: MeasurementValue);
  /** If `true`, uses the document's own bleed settings. */
  get useDocumentBleedToPrint(): boolean;
  set useDocumentBleedToPrint(value: boolean);
  /**
   * The bleed area at the top of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedTop(): number;
  set bleedTop(value: MeasurementValue);
  /**
   * The bleed area at the bottom of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedBottom(): number;
  set bleedBottom(value: MeasurementValue);
  /**
   * The bleed area at the inside of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedInside(): number;
  set bleedInside(value: MeasurementValue);
  /**
   * The bleed area at the outside of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedOutside(): number;
  set bleedOutside(value: MeasurementValue);
  /** If `true`, includes the slug area when printing. */
  get includeSlugToPrint(): boolean;
  set includeSlugToPrint(value: boolean);
  /** The color output mode for composites. Not valid with a device-independent PPD. */
  get colorOutput(): ColorOutputModes;
  set colorOutput(value: ColorOutputModes);
  /**
   * If `true`, prints all text as black (unless the text color is None,
   * Paper, or resolves to white); if `false`, prints colored text (such as
   * blue hyperlinks) in halftone patterns. Valid only when {@link trapping} is off.
   */
  get textAsBlack(): boolean;
  set textAsBlack(value: boolean);
  /** How trapping is generated, if at all — see {@link Trapping}. */
  get trapping(): Trapping;
  set trapping(value: Trapping);
  /** The direction to flip the printed image. */
  get flip(): Flip;
  set flip(value: Flip);
  /** If `true`, prints the document as a negative. */
  get negative(): boolean;
  set negative(value: boolean);
  /**
   * The ink screening settings for composite gray output in PostScript or
   * PDF. See {@link screeningList} for the names valid on this system.
   */
  get screening(): Screeening | string;
  set screening(value: Screeening | string);
  /**
   * The screen angle for composites. Valid only for PostScript or PDF files
   * using custom screening.
   * @param value Range: `0`–`360`.
   */
  get compositeAngle(): number;
  set compositeAngle(value: number);
  /**
   * The screen frequency for composites. Valid only for PostScript or PDF
   * files using custom screening.
   * @param value Range: `1`–`500`.
   */
  get compositeFrequency(): number;
  set compositeFrequency(value: number);
  /**
   * If `true`, simulates overprinting spot inks by converting spot colors to
   * process colors. Not valid when {@link colorOutput} leaves color profiles
   * unchanged.
   */
  get simulateOverprint(): boolean;
  set simulateOverprint(value: boolean);
  /** If `true`, prints the cyan ink. Valid only when {@link trapping} is off. */
  get printCyan(): boolean;
  set printCyan(value: boolean);
  /**
   * The screen angle override for cyan ink.
   * @param value Range: `0`–`360`.
   */
  get cyanAngle(): number;
  set cyanAngle(value: number);
  /**
   * The screen frequency override for cyan ink.
   * @param value Range: `1`–`500`.
   */
  get cyanFrequency(): number;
  set cyanFrequency(value: number);
  /** If `true`, prints the magenta ink. Valid only when {@link trapping} is off. */
  get printMagenta(): boolean;
  set printMagenta(value: boolean);
  /**
   * The screen angle override for magenta ink.
   * @param value Range: `0`–`360`.
   */
  get magentaAngle(): number;
  set magentaAngle(value: number);
  /**
   * The screen frequency override for magenta ink.
   * @param value Range: `1`–`500`.
   */
  get magentaFrequency(): number;
  set magentaFrequency(value: number);
  /** If `true`, prints the yellow ink. Valid only when {@link trapping} is off. */
  get printYellow(): boolean;
  set printYellow(value: boolean);
  /**
   * The screen angle override for yellow ink.
   * @param value Range: `0`–`360`.
   */
  get yellowAngle(): number;
  set yellowAngle(value: number);
  /**
   * The screen frequency override for yellow ink.
   * @param value Range: `1`–`500`.
   */
  get yellowFrequency(): number;
  set yellowFrequency(value: number);
  /** If `true`, prints the black ink. Valid only when {@link trapping} is off. */
  get printBlack(): boolean;
  set printBlack(value: boolean);
  /**
   * The screen angle override for black ink.
   * @param value Range: `0`–`360`.
   */
  get blackAngle(): number;
  set blackAngle(value: number);
  /**
   * The screen frequency override for black ink.
   * @param value Range: `1`–`500`.
   */
  get blackFrequency(): number;
  set blackFrequency(value: number);
  /** How much of each placed image's data is sent to the printer or file — full resolution, optimized, a low-resolution proxy, or omitted entirely. */
  get sendImageData(): ImageDataTypes;
  set sendImageData(value: ImageDataTypes);
  /** How fonts are downloaded to the printer. */
  get fontDownloading(): FontDownloading;
  set fontDownloading(value: FontDownloading);
  /** If `true`, downloads every font listed in the selected PPD. Valid only when {@link fontDownloading} is complete or subset. */
  get downloadPPDFonts(): boolean;
  set downloadPPDFonts(value: boolean);
  /** The PostScript level the target printer supports — Level 2 or Level 3. */
  get postscriptLevel(): PostScriptLevels;
  set postscriptLevel(value: PostScriptLevels);
  /** The format used to send image data to the printer. */
  get dataFormat(): DataFormat;
  set dataFormat(value: DataFormat);
  /** The source color space for the color management system. Valid only when color management is in use. */
  get sourceSpace(): SourceSpaces;
  set sourceSpace(value: SourceSpaces);
  /** The color profile. Valid only when color management is in use. */
  get profile(): Profile | string;
  set profile(value: Profile | string);
  /** The color-rendering dictionary. Valid only when color management is in use. */
  get crd(): ColorRenderingDictionary | string;
  set crd(value: ColorRenderingDictionary | string);
  /** How out-of-gamut colors are mapped to the destination color space — see {@link RenderingIntent}. Valid only when color management is in use. */
  get intent(): RenderingIntent;
  set intent(value: RenderingIntent);
  /**
   * If `true`, prints OPI-linked graphics (EPS files with OPI comments, or
   * files linked via OPI comments — see {@link omitEPS}/{@link omitPDF}/
   * {@link omitBitmaps}) at full resolution.
   */
  get opiImageReplacement(): boolean;
  set opiImageReplacement(value: boolean);
  /** If `true`, replaces EPS images with OPI links. */
  get omitEPS(): boolean;
  set omitEPS(value: boolean);
  /** If `true`, replaces PDF images with OPI links. */
  get omitPDF(): boolean;
  set omitPDF(value: boolean);
  /** If `true`, replaces bitmap images with OPI links. */
  get omitBitmaps(): boolean;
  set omitBitmaps(value: boolean);
  /** The name of the transparency flattener preset used for this print job. */
  get flattenerPresetName(): string;
  set flattenerPresetName(value: string);
  /** If `true`, ignores per-spread transparency flattener overrides. */
  get ignoreSpreadOverrides(): boolean;
  set ignoreSpreadOverrides(value: boolean);
  /**
   * If `true`, forces every bleed setting to the most recently set bleed
   * value. If `false`, {@link bleedTop}/{@link bleedBottom}/{@link bleedInside}/
   * {@link bleedOutside} can differ independently.
   */
  get bleedChain(): boolean;
  set bleedChain(value: boolean);
  /** If `true`, uses bitmap printing. */
  get bitmapPrinting(): boolean;
  set bitmapPrinting(value: boolean);
  /**
   * The resolution for bitmap printing. Valid only when {@link bitmapPrinting}
   * is `true`.
   * @param value Range: `72`–`1200`.
   */
  get bitmapResolution(): number;
  set bitmapResolution(value: number);
  /** Which layers are printed. */
  get printLayers(): PrintLayerOptions;
  set printLayers(value: PrintLayerOptions);
  /** Deletes the printer preset. */
  remove(): void;
  /** Duplicates the printer preset. */
  duplicate(): PrinterPreset;
}


/**
 * The broadcast proxy for {@link PrinterPreset} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PrinterPreset} there.
 */
export interface PrinterPresetPlural {
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
  get properties(): (PropertiesGetter<PrinterPresetPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PrinterPresetPlural, 'plural'>);
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
  readonly constructorName: 'PrinterPreset';
  /** Resolves the proxy into the individual {@link PrinterPreset} objects it stands for. */
  getElements(): PrinterPreset[];
  /** The printers available on this system. */
  readonly printerList: (string[])[];
  /** The PPDs available on this system. */
  readonly ppdList: (string[])[];
  /** The paper sizes available for the current {@link ppd}. */
  readonly paperSizeList: (string[])[];
  /**
   * The ink screenings available in the current {@link ppd}. Valid only when
   * {@link colorOutput} is separations or in-RIP separations.
   */
  readonly screeningList: (string[])[];
  /** The name of the printer preset. */
  get name(): (string)[];
  set name(value: string);
  /** The printer to print to, by name from {@link printerList}, or {@link Printer.POSTSCRIPT_FILE} to print to a PostScript file instead. */
  get printer(): (Printer | string)[];
  set printer(value: Printer | string);
  /** The PPD (PostScript Printer Description) to use, by name from {@link ppdList}, or {@link PPDValues.DEVICE_INDEPENDENT} for a device-independent PPD. */
  get ppd(): (PPDValues | string)[];
  set ppd(value: PPDValues | string);
  /** The PostScript file to print to. Valid only when {@link printer} is set to print to a PostScript file. */
  get printFile(): (Promise<File>)[];
  set printFile(value: FilePath);
  /** The number of copies to print. Not valid when {@link printer} is a PostScript file. */
  get copies(): (number)[];
  set copies(value: number);
  /** If `true`, collates printed copies. */
  get collating(): (boolean)[];
  set collating(value: boolean);
  /** If `true`, prints pages in reverse order. */
  get reverseOrder(): (boolean)[];
  set reverseOrder(value: boolean);
  /** The sequence of pages to print. */
  get sequence(): (Sequences)[];
  set sequence(value: Sequences);
  /**
   * If `true`, prints each spread's pages together on a single sheet. If
   * `false`, prints spread pages as separate pages.
   */
  get printSpreads(): (boolean)[];
  set printSpreads(value: boolean);
  /** If `true`, prints master pages. */
  get printMasterPages(): (boolean)[];
  set printMasterPages(value: boolean);
  /** If `true`, prints non-printing objects. Valid only when {@link trapping} is off. */
  get printNonprinting(): (boolean)[];
  set printNonprinting(value: boolean);
  /** If `true`, prints blank pages. Valid only when {@link trapping} is off. */
  get printBlankPages(): (boolean)[];
  set printBlankPages(value: boolean);
  /** If `true`, prints visible guides and baseline grids. Valid only when {@link trapping} is off. */
  get printGuidesGrids(): (boolean)[];
  set printGuidesGrids(value: boolean);
  /** The paper size. See {@link paperSizeList} for the names valid on this system. */
  get paperSize(): (PaperSizes | string)[];
  set paperSize(value: PaperSizes | string);
  /**
   * The paper height. Valid only when {@link paperSize} is custom or
   * {@link scaleMode} is scale-width-height.
   */
  get paperHeight(): (PaperSize | number)[];
  set paperHeight(value: PaperSize | MeasurementValue);
  /**
   * The paper width. Valid only when {@link paperSize} is custom or
   * {@link scaleMode} is scale-width-height.
   */
  get paperWidth(): (PaperSize | number)[];
  set paperWidth(value: PaperSize | MeasurementValue);
  /** The amount of space to offset the page from the left edge of the imageable area. */
  get paperOffset(): (number)[];
  set paperOffset(value: MeasurementValue);
  /** The space between document pages on the printing medium. */
  get paperGap(): (number)[];
  set paperGap(value: MeasurementValue);
  /** If `true`, uses transverse (rotated) orientation for the paper. */
  get paperTransverse(): (boolean)[];
  set paperTransverse(value: boolean);
  /** The orientation of the printed page. */
  get printPageOrientation(): (PrintPageOrientation)[];
  set printPageOrientation(value: PrintPageOrientation);
  /** The position of the page on the printing medium. Valid only when {@link tile} is `false`. */
  get pagePosition(): (PagePositions)[];
  set pagePosition(value: PagePositions);
  /** The policy for scaling the page. Valid only when printing from Layout view. */
  get scaleMode(): (ScaleModes)[];
  set scaleMode(value: ScaleModes);
  /**
   * The page width scaling percentage. Valid only when {@link scaleMode} is
   * scale-width-height.
   * @param value Range: `0`–`1000`.
   */
  get scaleWidth(): (number)[];
  set scaleWidth(value: number);
  /**
   * The page height scaling percentage. Valid only when {@link scaleMode} is
   * scale-width-height.
   * @param value Range: `0`–`1000`.
   */
  get scaleHeight(): (number)[];
  set scaleHeight(value: number);
  /**
   * If `true`, constrains scaling proportions, using the most recent
   * {@link scaleWidth}/{@link scaleHeight} value for both. Valid only when
   * {@link scaleMode} is scale-width-height.
   */
  get scaleProportional(): (boolean)[];
  set scaleProportional(value: boolean);
  /** If `true`, prints thumbnails. Valid only when {@link trapping} is off and {@link tile} is `false`. */
  get thumbnails(): (boolean)[];
  set thumbnails(value: boolean);
  /** The number of thumbnails per page. */
  get thumbnailsPerPage(): (ThumbsPerPage)[];
  set thumbnailsPerPage(value: ThumbsPerPage);
  /** If `true`, tiles pages across multiple sheets. */
  get tile(): (boolean)[];
  set tile(value: boolean);
  /** The tiling type. Valid only when {@link tile} is `true`. */
  get tilingType(): (TilingTypes)[];
  set tilingType(value: TilingTypes);
  /** The amount of tiling overlap. Valid only when {@link tile} is `true` and {@link tilingType} is not manual. */
  get tilingOverlap(): (number)[];
  set tilingOverlap(value: number);
  /** If `true`, prints all printer's marks. If `false`, prints only the individually enabled marks. */
  get allPrinterMarks(): (boolean)[];
  set allPrinterMarks(value: boolean);
  /** If `true`, prints crop marks showing where the page should be trimmed. */
  get cropMarks(): (boolean)[];
  set cropMarks(value: boolean);
  /** If `true`, prints bleed marks. */
  get bleedMarks(): (boolean)[];
  set bleedMarks(value: boolean);
  /** If `true`, prints small targets outside the page area for aligning color separations. */
  get registrationMarks(): (boolean)[];
  set registrationMarks(value: boolean);
  /** If `true`, prints small squares of the CMYK inks and gray tints in 10% increments. */
  get colorBars(): (boolean)[];
  set colorBars(value: boolean);
  /** If `true`, prints the file name, page number, date/time, and color separation name. */
  get pageInformationMarks(): (boolean)[];
  set pageInformationMarks(value: boolean);
  /** The type of printer's marks, or the name of a custom marks file. */
  get markType(): (MarkTypes | string)[];
  set markType(value: MarkTypes | string);
  /** The stroke weight, in points, for printer's marks. */
  get markLineWeight(): (MarkLineWeight)[];
  set markLineWeight(value: MarkLineWeight);
  /** The distance to offset printer's marks from the edge of the page. */
  get markOffset(): (number)[];
  set markOffset(value: MeasurementValue);
  /** If `true`, uses the document's own bleed settings. */
  get useDocumentBleedToPrint(): (boolean)[];
  set useDocumentBleedToPrint(value: boolean);
  /**
   * The bleed area at the top of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedTop(): (number)[];
  set bleedTop(value: MeasurementValue);
  /**
   * The bleed area at the bottom of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedBottom(): (number)[];
  set bleedBottom(value: MeasurementValue);
  /**
   * The bleed area at the inside of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedInside(): (number)[];
  set bleedInside(value: MeasurementValue);
  /**
   * The bleed area at the outside of the page. Valid only when
   * {@link useDocumentBleedToPrint} is `true`.
   * @param value Range: `0`–`432`.
   */
  get bleedOutside(): (number)[];
  set bleedOutside(value: MeasurementValue);
  /** If `true`, includes the slug area when printing. */
  get includeSlugToPrint(): (boolean)[];
  set includeSlugToPrint(value: boolean);
  /** The color output mode for composites. Not valid with a device-independent PPD. */
  get colorOutput(): (ColorOutputModes)[];
  set colorOutput(value: ColorOutputModes);
  /**
   * If `true`, prints all text as black (unless the text color is None,
   * Paper, or resolves to white); if `false`, prints colored text (such as
   * blue hyperlinks) in halftone patterns. Valid only when {@link trapping} is off.
   */
  get textAsBlack(): (boolean)[];
  set textAsBlack(value: boolean);
  /** How trapping is generated, if at all — see {@link Trapping}. */
  get trapping(): (Trapping)[];
  set trapping(value: Trapping);
  /** The direction to flip the printed image. */
  get flip(): (Flip)[];
  set flip(value: Flip);
  /** If `true`, prints the document as a negative. */
  get negative(): (boolean)[];
  set negative(value: boolean);
  /**
   * The ink screening settings for composite gray output in PostScript or
   * PDF. See {@link screeningList} for the names valid on this system.
   */
  get screening(): (Screeening | string)[];
  set screening(value: Screeening | string);
  /**
   * The screen angle for composites. Valid only for PostScript or PDF files
   * using custom screening.
   * @param value Range: `0`–`360`.
   */
  get compositeAngle(): (number)[];
  set compositeAngle(value: number);
  /**
   * The screen frequency for composites. Valid only for PostScript or PDF
   * files using custom screening.
   * @param value Range: `1`–`500`.
   */
  get compositeFrequency(): (number)[];
  set compositeFrequency(value: number);
  /**
   * If `true`, simulates overprinting spot inks by converting spot colors to
   * process colors. Not valid when {@link colorOutput} leaves color profiles
   * unchanged.
   */
  get simulateOverprint(): (boolean)[];
  set simulateOverprint(value: boolean);
  /** If `true`, prints the cyan ink. Valid only when {@link trapping} is off. */
  get printCyan(): (boolean)[];
  set printCyan(value: boolean);
  /**
   * The screen angle override for cyan ink.
   * @param value Range: `0`–`360`.
   */
  get cyanAngle(): (number)[];
  set cyanAngle(value: number);
  /**
   * The screen frequency override for cyan ink.
   * @param value Range: `1`–`500`.
   */
  get cyanFrequency(): (number)[];
  set cyanFrequency(value: number);
  /** If `true`, prints the magenta ink. Valid only when {@link trapping} is off. */
  get printMagenta(): (boolean)[];
  set printMagenta(value: boolean);
  /**
   * The screen angle override for magenta ink.
   * @param value Range: `0`–`360`.
   */
  get magentaAngle(): (number)[];
  set magentaAngle(value: number);
  /**
   * The screen frequency override for magenta ink.
   * @param value Range: `1`–`500`.
   */
  get magentaFrequency(): (number)[];
  set magentaFrequency(value: number);
  /** If `true`, prints the yellow ink. Valid only when {@link trapping} is off. */
  get printYellow(): (boolean)[];
  set printYellow(value: boolean);
  /**
   * The screen angle override for yellow ink.
   * @param value Range: `0`–`360`.
   */
  get yellowAngle(): (number)[];
  set yellowAngle(value: number);
  /**
   * The screen frequency override for yellow ink.
   * @param value Range: `1`–`500`.
   */
  get yellowFrequency(): (number)[];
  set yellowFrequency(value: number);
  /** If `true`, prints the black ink. Valid only when {@link trapping} is off. */
  get printBlack(): (boolean)[];
  set printBlack(value: boolean);
  /**
   * The screen angle override for black ink.
   * @param value Range: `0`–`360`.
   */
  get blackAngle(): (number)[];
  set blackAngle(value: number);
  /**
   * The screen frequency override for black ink.
   * @param value Range: `1`–`500`.
   */
  get blackFrequency(): (number)[];
  set blackFrequency(value: number);
  /** How much of each placed image's data is sent to the printer or file — full resolution, optimized, a low-resolution proxy, or omitted entirely. */
  get sendImageData(): (ImageDataTypes)[];
  set sendImageData(value: ImageDataTypes);
  /** How fonts are downloaded to the printer. */
  get fontDownloading(): (FontDownloading)[];
  set fontDownloading(value: FontDownloading);
  /** If `true`, downloads every font listed in the selected PPD. Valid only when {@link fontDownloading} is complete or subset. */
  get downloadPPDFonts(): (boolean)[];
  set downloadPPDFonts(value: boolean);
  /** The PostScript level the target printer supports — Level 2 or Level 3. */
  get postscriptLevel(): (PostScriptLevels)[];
  set postscriptLevel(value: PostScriptLevels);
  /** The format used to send image data to the printer. */
  get dataFormat(): (DataFormat)[];
  set dataFormat(value: DataFormat);
  /** The source color space for the color management system. Valid only when color management is in use. */
  get sourceSpace(): (SourceSpaces)[];
  set sourceSpace(value: SourceSpaces);
  /** The color profile. Valid only when color management is in use. */
  get profile(): (Profile | string)[];
  set profile(value: Profile | string);
  /** The color-rendering dictionary. Valid only when color management is in use. */
  get crd(): (ColorRenderingDictionary | string)[];
  set crd(value: ColorRenderingDictionary | string);
  /** How out-of-gamut colors are mapped to the destination color space — see {@link RenderingIntent}. Valid only when color management is in use. */
  get intent(): (RenderingIntent)[];
  set intent(value: RenderingIntent);
  /**
   * If `true`, prints OPI-linked graphics (EPS files with OPI comments, or
   * files linked via OPI comments — see {@link omitEPS}/{@link omitPDF}/
   * {@link omitBitmaps}) at full resolution.
   */
  get opiImageReplacement(): (boolean)[];
  set opiImageReplacement(value: boolean);
  /** If `true`, replaces EPS images with OPI links. */
  get omitEPS(): (boolean)[];
  set omitEPS(value: boolean);
  /** If `true`, replaces PDF images with OPI links. */
  get omitPDF(): (boolean)[];
  set omitPDF(value: boolean);
  /** If `true`, replaces bitmap images with OPI links. */
  get omitBitmaps(): (boolean)[];
  set omitBitmaps(value: boolean);
  /** The name of the transparency flattener preset used for this print job. */
  get flattenerPresetName(): (string)[];
  set flattenerPresetName(value: string);
  /** If `true`, ignores per-spread transparency flattener overrides. */
  get ignoreSpreadOverrides(): (boolean)[];
  set ignoreSpreadOverrides(value: boolean);
  /**
   * If `true`, forces every bleed setting to the most recently set bleed
   * value. If `false`, {@link bleedTop}/{@link bleedBottom}/{@link bleedInside}/
   * {@link bleedOutside} can differ independently.
   */
  get bleedChain(): (boolean)[];
  set bleedChain(value: boolean);
  /** If `true`, uses bitmap printing. */
  get bitmapPrinting(): (boolean)[];
  set bitmapPrinting(value: boolean);
  /**
   * The resolution for bitmap printing. Valid only when {@link bitmapPrinting}
   * is `true`.
   * @param value Range: `72`–`1200`.
   */
  get bitmapResolution(): (number)[];
  set bitmapResolution(value: number);
  /** Which layers are printed. */
  get printLayers(): (PrintLayerOptions)[];
  set printLayers(value: PrintLayerOptions);
  /** Deletes the printer preset. */
  remove(): (void)[];
  /** Duplicates the printer preset. */
  duplicate(): (PrinterPreset)[];
}
