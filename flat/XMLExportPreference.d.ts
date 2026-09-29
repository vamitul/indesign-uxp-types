/**
 * XMLExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { FilePath, File } from './_base/Types';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { NothingEnum } from './Enums/NothingEnum';
import type { XMLExportUntaggedTablesFormat } from './Enums/XMLExportUntaggedTablesFormat';
import type { XMLFileEncoding } from './Enums/XMLFileEncoding';
import type { XMLTransformFile } from './Enums/XMLTransformFile';
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
 * XML export preferences.
 */
export interface XMLExportPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: DocumentOrApplication;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<XMLExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLExportPreference, 'single'>);
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
  readonly constructorName: 'XMLExportPreference';
  /** Resolves the proxy into the individual {@link XMLExportPreference} objects it stands for. */
  getElements(): XMLExportPreference[];
  /** If true, displays exported XML content in a specified viewer. */
  get viewAfterExport(): boolean;
  set viewAfterExport(value: boolean);
  /** The preferred browser for viewing XML. */
  get preferredBrowser(): Promise<File> | NothingEnum.NOTHING;
  set preferredBrowser(value: FilePath | NothingEnum.NOTHING);
  /** If true, exports XML content from the selected XML element. If false, exports the entire document. */
  get exportFromSelected(): boolean;
  set exportFromSelected(value: boolean);
  /** The file encoding type for exporting XML content. */
  get fileEncoding(): XMLFileEncoding;
  set fileEncoding(value: XMLFileEncoding);
  /** If true, includes Ruby text in the exported XML content. */
  get ruby(): boolean;
  set ruby(value: boolean);
  /** If true, excludes the DTD from the exported XML content. */
  get excludeDtd(): boolean;
  set excludeDtd(value: boolean);
  /** If true, copies original images to the images subfolder. */
  get copyOriginalImages(): boolean;
  set copyOriginalImages(value: boolean);
  /** If true, copies optimized images to the images subfolder. */
  get copyOptimizedImages(): boolean;
  set copyOptimizedImages(value: boolean);
  /** If true, copies formatted images to the images subfolder. */
  get copyFormattedImages(): boolean;
  set copyFormattedImages(value: boolean);
  /** The file format to use for converted images. Applies only when {@link copyOptimizedImages} and/or {@link copyFormattedImages} is `true`. */
  get imageConversion(): ImageConversion;
  set imageConversion(value: ImageConversion);
  /** The color palette for GIF conversion. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsPalette(): GIFOptionsPalette;
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** If true, generates interlaced GIFs. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsInterlaced(): boolean;
  set gifOptionsInterlaced(value: boolean);
  /** The quality of converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsQuality(): JPEGOptionsQuality;
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** The formatting method for converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsFormat(): JPEGOptionsFormat;
  set jpegOptionsFormat(value: JPEGOptionsFormat);
  /** If true, transforms the XML using an XSLT file. */
  get allowTransform(): boolean;
  set allowTransform(value: boolean);
  /** The name of the XSLT file. Applies only when {@link allowTransform} is `true`. */
  get transformFilename(): Promise<File> | XMLTransformFile;
  set transformFilename(value: FilePath | XMLTransformFile);
  /** If true, replaces special characters with character references. */
  get characterReferences(): boolean;
  set characterReferences(value: boolean);
  /** The export format for untagged tables in tagged stories. */
  get exportUntaggedTablesFormat(): XMLExportUntaggedTablesFormat;
  set exportUntaggedTablesFormat(value: XMLExportUntaggedTablesFormat);
}


/**
 * The broadcast proxy for {@link XMLExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link XMLExportPreference} there.
 */
export interface XMLExportPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (DocumentOrApplication)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<XMLExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLExportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'XMLExportPreference';
  /** Resolves the proxy into the individual {@link XMLExportPreference} objects it stands for. */
  getElements(): XMLExportPreference[];
  /** If true, displays exported XML content in a specified viewer. */
  get viewAfterExport(): (boolean)[];
  set viewAfterExport(value: boolean);
  /** The preferred browser for viewing XML. */
  get preferredBrowser(): (Promise<File> | NothingEnum.NOTHING)[];
  set preferredBrowser(value: FilePath | NothingEnum.NOTHING);
  /** If true, exports XML content from the selected XML element. If false, exports the entire document. */
  get exportFromSelected(): (boolean)[];
  set exportFromSelected(value: boolean);
  /** The file encoding type for exporting XML content. */
  get fileEncoding(): (XMLFileEncoding)[];
  set fileEncoding(value: XMLFileEncoding);
  /** If true, includes Ruby text in the exported XML content. */
  get ruby(): (boolean)[];
  set ruby(value: boolean);
  /** If true, excludes the DTD from the exported XML content. */
  get excludeDtd(): (boolean)[];
  set excludeDtd(value: boolean);
  /** If true, copies original images to the images subfolder. */
  get copyOriginalImages(): (boolean)[];
  set copyOriginalImages(value: boolean);
  /** If true, copies optimized images to the images subfolder. */
  get copyOptimizedImages(): (boolean)[];
  set copyOptimizedImages(value: boolean);
  /** If true, copies formatted images to the images subfolder. */
  get copyFormattedImages(): (boolean)[];
  set copyFormattedImages(value: boolean);
  /** The file format to use for converted images. Applies only when {@link copyOptimizedImages} and/or {@link copyFormattedImages} is `true`. */
  get imageConversion(): (ImageConversion)[];
  set imageConversion(value: ImageConversion);
  /** The color palette for GIF conversion. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsPalette(): (GIFOptionsPalette)[];
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** If true, generates interlaced GIFs. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsInterlaced(): (boolean)[];
  set gifOptionsInterlaced(value: boolean);
  /** The quality of converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsQuality(): (JPEGOptionsQuality)[];
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** The formatting method for converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsFormat(): (JPEGOptionsFormat)[];
  set jpegOptionsFormat(value: JPEGOptionsFormat);
  /** If true, transforms the XML using an XSLT file. */
  get allowTransform(): (boolean)[];
  set allowTransform(value: boolean);
  /** The name of the XSLT file. Applies only when {@link allowTransform} is `true`. */
  get transformFilename(): (Promise<File> | XMLTransformFile)[];
  set transformFilename(value: FilePath | XMLTransformFile);
  /** If true, replaces special characters with character references. */
  get characterReferences(): (boolean)[];
  set characterReferences(value: boolean);
  /** The export format for untagged tables in tagged stories. */
  get exportUntaggedTablesFormat(): (XMLExportUntaggedTablesFormat)[];
  set exportUntaggedTablesFormat(value: XMLExportUntaggedTablesFormat);
}
