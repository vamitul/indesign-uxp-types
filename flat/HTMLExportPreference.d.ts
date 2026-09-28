/**
 * HTMLExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { BulletListExportOption } from './Enums/BulletListExportOption';
import type { ExportOrder } from './Enums/ExportOrder';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageAlignmentType } from './Enums/ImageAlignmentType';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImageExportOption } from './Enums/ImageExportOption';
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
 * Export settings for InDesign's HTML output: element class attributes, content
 * order, image conversion, and the external CSS/JavaScript to reference.
 */
export interface HTMLExportPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<HTMLExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<HTMLExportPreference, 'single'>);
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
  readonly constructorName: 'HTMLExportPreference';
  /** Resolves the proxy into the individual {@link HTMLExportPreference} objects it stands for. */
  getElements(): HTMLExportPreference[];
  /** If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes. */
  get includeClassesInHTML(): boolean;
  set includeClassesInHTML(value: boolean);
  /** How placed SVG files are represented in the exported markup: rasterized to an image or embedded as {@link UseSVGAsEnum} specifies. */
  get useSVGAs(): UseSVGAsEnum;
  set useSVGAs(value: UseSVGAsEnum);
  /** If true and have selection, export selected content to HTML. */
  get exportSelection(): boolean;
  set exportSelection(value: boolean);
  /** Whether content exports in document layout order or the order set in the Articles panel; see {@link ExportOrder}. */
  get exportOrder(): ExportOrder;
  set exportOrder(value: ExportOrder);
  /** Whether bulleted lists export as an HTML list or as plain text; see {@link BulletListExportOption}. */
  get bulletExportOption(): BulletListExportOption;
  set bulletExportOption(value: BulletListExportOption);
  /** Whether numbered lists export as an HTML ordered list or as plain text; see {@link NumberedListExportOption}. */
  get numberedListExportOption(): NumberedListExportOption;
  set numberedListExportOption(value: NumberedListExportOption);
  /** If true, open docuemnt in viewer after export. */
  get viewDocumentAfterExport(): boolean;
  set viewDocumentAfterExport(value: boolean);
  /** Whether images export as the original file or as an optimized copy; see {@link ImageExportOption}. */
  get imageExportOption(): ImageExportOption;
  set imageExportOption(value: ImageExportOption);
  /** The pixel density used when converting images; see {@link ImageResolution}. */
  get imageExportResolution(): ImageResolution;
  set imageExportResolution(value: ImageResolution);
  /** Whether the exported image uses no explicit CSS size or a fixed size; see {@link ImageSizeOption}. */
  get customImageSizeOption(): ImageSizeOption;
  set customImageSizeOption(value: ImageSizeOption);
  /** If true, format image based on layout appearence. */
  get preserveLayoutAppearence(): boolean;
  set preserveLayoutAppearence(value: boolean);
  /** Alignment applied to images. */
  get imageAlignment(): ImageAlignmentType;
  set imageAlignment(value: ImageAlignmentType);
  /** The vertical space added before the image. */
  get imageSpaceBefore(): number;
  set imageSpaceBefore(value: number);
  /** The vertical space added after the image. */
  get imageSpaceAfter(): number;
  set imageSpaceAfter(value: number);
  /** The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true. */
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
  /** The PNG compression level. */
  get level(): number;
  set level(value: number);
  /** Ignore object level image conversion settings. */
  get ignoreObjectConversionSettings(): boolean;
  set ignoreObjectConversionSettings(value: boolean);
  /** The server path for image. */
  get serverPath(): string;
  set serverPath(value: string);
  /** The image extension on server. */
  get imageExtension(): string;
  set imageExtension(value: string);
  /** If true, output local style override. */
  get preserveLocalOverride(): boolean;
  set preserveLocalOverride(value: boolean);
  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): string[];
  set externalStyleSheets(value: string[]);
  /** The file path of external javascripts. */
  get javascripts(): string[];
  set javascripts(value: string[]);
  /** If true, InDesign will generate cascade style sheet. */
  get generateCascadeStyleSheet(): boolean;
  set generateCascadeStyleSheet(value: boolean);
}


/**
 * The broadcast proxy for {@link HTMLExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link HTMLExportPreference} there.
 */
export interface HTMLExportPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<HTMLExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<HTMLExportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'HTMLExportPreference';
  /** Resolves the proxy into the individual {@link HTMLExportPreference} objects it stands for. */
  getElements(): HTMLExportPreference[];
  /** If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes. */
  get includeClassesInHTML(): (boolean)[];
  set includeClassesInHTML(value: boolean);
  /** How placed SVG files are represented in the exported markup: rasterized to an image or embedded as {@link UseSVGAsEnum} specifies. */
  get useSVGAs(): (UseSVGAsEnum)[];
  set useSVGAs(value: UseSVGAsEnum);
  /** If true and have selection, export selected content to HTML. */
  get exportSelection(): (boolean)[];
  set exportSelection(value: boolean);
  /** Whether content exports in document layout order or the order set in the Articles panel; see {@link ExportOrder}. */
  get exportOrder(): (ExportOrder)[];
  set exportOrder(value: ExportOrder);
  /** Whether bulleted lists export as an HTML list or as plain text; see {@link BulletListExportOption}. */
  get bulletExportOption(): (BulletListExportOption)[];
  set bulletExportOption(value: BulletListExportOption);
  /** Whether numbered lists export as an HTML ordered list or as plain text; see {@link NumberedListExportOption}. */
  get numberedListExportOption(): (NumberedListExportOption)[];
  set numberedListExportOption(value: NumberedListExportOption);
  /** If true, open docuemnt in viewer after export. */
  get viewDocumentAfterExport(): (boolean)[];
  set viewDocumentAfterExport(value: boolean);
  /** Whether images export as the original file or as an optimized copy; see {@link ImageExportOption}. */
  get imageExportOption(): (ImageExportOption)[];
  set imageExportOption(value: ImageExportOption);
  /** The pixel density used when converting images; see {@link ImageResolution}. */
  get imageExportResolution(): (ImageResolution)[];
  set imageExportResolution(value: ImageResolution);
  /** Whether the exported image uses no explicit CSS size or a fixed size; see {@link ImageSizeOption}. */
  get customImageSizeOption(): (ImageSizeOption)[];
  set customImageSizeOption(value: ImageSizeOption);
  /** If true, format image based on layout appearence. */
  get preserveLayoutAppearence(): (boolean)[];
  set preserveLayoutAppearence(value: boolean);
  /** Alignment applied to images. */
  get imageAlignment(): (ImageAlignmentType)[];
  set imageAlignment(value: ImageAlignmentType);
  /** The vertical space added before the image. */
  get imageSpaceBefore(): (number)[];
  set imageSpaceBefore(value: number);
  /** The vertical space added after the image. */
  get imageSpaceAfter(): (number)[];
  set imageSpaceAfter(value: number);
  /** The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true. */
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
  /** The PNG compression level. */
  get level(): (number)[];
  set level(value: number);
  /** Ignore object level image conversion settings. */
  get ignoreObjectConversionSettings(): (boolean)[];
  set ignoreObjectConversionSettings(value: boolean);
  /** The server path for image. */
  get serverPath(): (string)[];
  set serverPath(value: string);
  /** The image extension on server. */
  get imageExtension(): (string)[];
  set imageExtension(value: string);
  /** If true, output local style override. */
  get preserveLocalOverride(): (boolean)[];
  set preserveLocalOverride(value: boolean);
  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): (string[])[];
  set externalStyleSheets(value: string[]);
  /** The file path of external javascripts. */
  get javascripts(): (string[])[];
  set javascripts(value: string[]);
  /** If true, InDesign will generate cascade style sheet. */
  get generateCascadeStyleSheet(): (boolean)[];
  set generateCascadeStyleSheet(value: boolean);
}
