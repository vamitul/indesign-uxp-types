/**
 * ObjectExportOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { GraphicLine } from './GraphicLine';
import type { Group } from './Group';
import type { ObjectStyle } from './ObjectStyle';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { Rectangle } from './Rectangle';
import type { TextFrame } from './TextFrame';
import type { CustomLayoutTypeEnum } from './Enums/CustomLayoutTypeEnum';
import type { EpubAriaLabelSourceType } from './Enums/EpubAriaLabelSourceType';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageAlignmentType } from './Enums/ImageAlignmentType';
import type { ImageFormat } from './Enums/ImageFormat';
import type { ImagePageBreakType } from './Enums/ImagePageBreakType';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { PreserveAppearanceFromLayoutEnum } from './Enums/PreserveAppearanceFromLayoutEnum';
import type { SizeTypeEnum } from './Enums/SizeTypeEnum';
import type { SourceType } from './Enums/SourceType';
import type { TagType } from './Enums/TagType';
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
 * Per-object export settings for reflowable EPUB and HTML output.
 *
 * Controls how the object is tagged and described for accessibility (ARIA
 * role, alt text, actual text), and how it converts to an image (format,
 * resolution, quality) when it can't export as native markup.
 */
export interface ObjectExportOption {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: ObjectStyle | Polygon | GraphicLine | Rectangle | Oval | Group | TextFrame | EndnoteTextFrame;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<ObjectExportOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ObjectExportOption, 'single'>);
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
  readonly constructorName: 'ObjectExportOption';
  /** Resolves the proxy into the individual {@link ObjectExportOption} objects it stands for. */
  getElements(): ObjectExportOption[];
  /** The epub type as recommended by IDPF. */
  get epubType(): string;
  set epubType(value: string);
  /** Whether the exported image uses no explicit size, a default size, or a fixed size; see {@link SizeTypeEnum}. */
  get sizeType(): SizeTypeEnum;
  set sizeType(value: SizeTypeEnum);
  /** Custom size applied to the object. */
  get customSize(): string;
  set customSize(value: string);
  /** Whether export uses the layout's own appearance or an existing image; see {@link PreserveAppearanceFromLayoutEnum}. */
  get preserveAppearanceFromLayout(): PreserveAppearanceFromLayoutEnum;
  set preserveAppearanceFromLayout(value: PreserveAppearanceFromLayoutEnum);
  /** The epub aria role as recommended by IDPF. */
  get epubAriaRole(): string;
  set epubAriaRole(value: string);
  /** The epub aria label as recommended by IDPF. */
  get epubAriaLabel(): string;
  set epubAriaLabel(value: string);
  /** The source to use when generating the aria-label during EPUB export. */
  get epubAriaLabelSourceType(): EpubAriaLabelSourceType;
  set epubAriaLabelSourceType(value: EpubAriaLabelSourceType);
  /** The source type of alternate text. */
  get altTextSourceType(): SourceType;
  set altTextSourceType(value: SourceType);
  /** The source type of actual text. */
  get actualTextSourceType(): SourceType;
  set actualTextSourceType(value: SourceType);
  /** The custom alternate text entered by the user. */
  get customAltText(): string;
  set customAltText(value: string);
  /** The custom actual text entered by the user. */
  get customActualText(): string;
  set customActualText(value: string);
  /** The metadata property to use as source of alternate text. */
  get altMetadataProperty(): [namespacePrefix: string, propertyPath: string];
  set altMetadataProperty(value: [namespacePrefix: string, propertyPath: string]);
  /** The metadata property to use as source of actual text. */
  get actualMetadataProperty(): [namespacePrefix: string, propertyPath: string];
  set actualMetadataProperty(value: [namespacePrefix: string, propertyPath: string]);
  /** Whether the tag is taken from the XML structure (falling back to the standard tag) or the object is tagged as an artifact; see {@link TagType}. */
  get applyTagType(): TagType;
  set applyTagType(value: TagType);
  /** The image format used when the object is converted to an image; see {@link ImageFormat}. */
  get imageConversionType(): ImageFormat;
  set imageConversionType(value: ImageFormat);
  /** The pixel density used when converting the object to an image; see {@link ImageResolution}. */
  get imageExportResolution(): ImageResolution;
  set imageExportResolution(value: ImageResolution);
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
  /** Alignment applied to images. */
  get imageAlignment(): ImageAlignmentType;
  set imageAlignment(value: ImageAlignmentType);
  /** The vertical space added before the image. */
  get imageSpaceBefore(): number;
  set imageSpaceBefore(value: number);
  /** The vertical space added after the image. */
  get imageSpaceAfter(): number;
  set imageSpaceAfter(value: number);
  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): boolean;
  set useImagePageBreak(value: boolean);
  /** Whether a page break is inserted before or after the image; see {@link ImagePageBreakType}. */
  get imagePageBreak(): ImagePageBreakType;
  set imagePageBreak(value: ImagePageBreakType);
  /** If true, custom layout is enabled for object. */
  get customLayout(): boolean;
  set customLayout(value: boolean);
  /** How the object floats in a custom EPUB/HTML layout; see {@link CustomLayoutTypeEnum}. */
  get customLayoutType(): CustomLayoutTypeEnum;
  set customLayoutType(value: CustomLayoutTypeEnum);
  /** Provides the alternate text for the object. */
  altText(): string;
  /** Provides the actual text for the object. */
  actualText(): string;
  /**
   * The crop rectangle the generated alt text was described from, as a string.
   * Lets InDesign tell whether the image has been re-cropped since.
   */
  get altTextCropSyncRect(): string;
  set altTextCropSyncRect(value: string);
  /** If `true`, generating alt text for this object failed, and InDesign may offer to generate it again. */
  get altTextGenerationError(): boolean;
  set altTextGenerationError(value: boolean);
}


/**
 * The broadcast proxy for {@link ObjectExportOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ObjectExportOption} there.
 */
export interface ObjectExportOptionPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (ObjectStyle | Polygon | GraphicLine | Rectangle | Oval | Group | TextFrame | EndnoteTextFrame)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ObjectExportOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ObjectExportOptionPlural, 'plural'>);
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
  readonly constructorName: 'ObjectExportOption';
  /** Resolves the proxy into the individual {@link ObjectExportOption} objects it stands for. */
  getElements(): ObjectExportOption[];
  /** The epub type as recommended by IDPF. */
  get epubType(): (string)[];
  set epubType(value: string);
  /** Whether the exported image uses no explicit size, a default size, or a fixed size; see {@link SizeTypeEnum}. */
  get sizeType(): (SizeTypeEnum)[];
  set sizeType(value: SizeTypeEnum);
  /** Custom size applied to the object. */
  get customSize(): (string)[];
  set customSize(value: string);
  /** Whether export uses the layout's own appearance or an existing image; see {@link PreserveAppearanceFromLayoutEnum}. */
  get preserveAppearanceFromLayout(): (PreserveAppearanceFromLayoutEnum)[];
  set preserveAppearanceFromLayout(value: PreserveAppearanceFromLayoutEnum);
  /** The epub aria role as recommended by IDPF. */
  get epubAriaRole(): (string)[];
  set epubAriaRole(value: string);
  /** The epub aria label as recommended by IDPF. */
  get epubAriaLabel(): (string)[];
  set epubAriaLabel(value: string);
  /** The source to use when generating the aria-label during EPUB export. */
  get epubAriaLabelSourceType(): (EpubAriaLabelSourceType)[];
  set epubAriaLabelSourceType(value: EpubAriaLabelSourceType);
  /** The source type of alternate text. */
  get altTextSourceType(): (SourceType)[];
  set altTextSourceType(value: SourceType);
  /** The source type of actual text. */
  get actualTextSourceType(): (SourceType)[];
  set actualTextSourceType(value: SourceType);
  /** The custom alternate text entered by the user. */
  get customAltText(): (string)[];
  set customAltText(value: string);
  /** The custom actual text entered by the user. */
  get customActualText(): (string)[];
  set customActualText(value: string);
  /** The metadata property to use as source of alternate text. */
  get altMetadataProperty(): ([namespacePrefix: string, propertyPath: string])[];
  set altMetadataProperty(value: [namespacePrefix: string, propertyPath: string]);
  /** The metadata property to use as source of actual text. */
  get actualMetadataProperty(): ([namespacePrefix: string, propertyPath: string])[];
  set actualMetadataProperty(value: [namespacePrefix: string, propertyPath: string]);
  /** Whether the tag is taken from the XML structure (falling back to the standard tag) or the object is tagged as an artifact; see {@link TagType}. */
  get applyTagType(): (TagType)[];
  set applyTagType(value: TagType);
  /** The image format used when the object is converted to an image; see {@link ImageFormat}. */
  get imageConversionType(): (ImageFormat)[];
  set imageConversionType(value: ImageFormat);
  /** The pixel density used when converting the object to an image; see {@link ImageResolution}. */
  get imageExportResolution(): (ImageResolution)[];
  set imageExportResolution(value: ImageResolution);
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
  /** Alignment applied to images. */
  get imageAlignment(): (ImageAlignmentType)[];
  set imageAlignment(value: ImageAlignmentType);
  /** The vertical space added before the image. */
  get imageSpaceBefore(): (number)[];
  set imageSpaceBefore(value: number);
  /** The vertical space added after the image. */
  get imageSpaceAfter(): (number)[];
  set imageSpaceAfter(value: number);
  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): (boolean)[];
  set useImagePageBreak(value: boolean);
  /** Whether a page break is inserted before or after the image; see {@link ImagePageBreakType}. */
  get imagePageBreak(): (ImagePageBreakType)[];
  set imagePageBreak(value: ImagePageBreakType);
  /** If true, custom layout is enabled for object. */
  get customLayout(): (boolean)[];
  set customLayout(value: boolean);
  /** How the object floats in a custom EPUB/HTML layout; see {@link CustomLayoutTypeEnum}. */
  get customLayoutType(): (CustomLayoutTypeEnum)[];
  set customLayoutType(value: CustomLayoutTypeEnum);
  /** Provides the alternate text for the object. */
  altText(): (string)[];
  /** Provides the actual text for the object. */
  actualText(): (string)[];
  /**
   * The crop rectangle the generated alt text was described from, as a string.
   * Lets InDesign tell whether the image has been re-cropped since.
   */
  get altTextCropSyncRect(): (string)[];
  set altTextCropSyncRect(value: string);
  /** If `true`, generating alt text for this object failed, and InDesign may offer to generate it again. */
  get altTextGenerationError(): (boolean)[];
  set altTextGenerationError(value: boolean);
}
