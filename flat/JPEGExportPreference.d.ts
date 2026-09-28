/**
 * JPEGExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ExportRangeOrAllPages } from './Enums/ExportRangeOrAllPages';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { JpegColorSpaceEnum } from './Enums/JpegColorSpaceEnum';
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
 * JPEG export preferences.
 */
export interface JPEGExportPreference {
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
  get properties(): PropertiesGetter<JPEGExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<JPEGExportPreference, 'single'>);
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
  readonly constructorName: 'JPEGExportPreference';
  /** Resolves the proxy into the individual {@link JPEGExportPreference} objects it stands for. */
  getElements(): JPEGExportPreference[];
  /** If true, exports each spread as a single JPEG file. If false, exports facing pages as separate files and appends sequential numbers to each file name. */
  get exportingSpread(): boolean;
  set exportingSpread(value: boolean);
  /** The compression quality. */
  get jpegQuality(): JPEGOptionsQuality;
  set jpegQuality(value: JPEGOptionsQuality);
  /** The page(s) to export, specified as a page number or an array of page numbers. Applies only when {@link jpegExportRange} is {@link ExportRangeOrAllPages.EXPORT_RANGE}. */
  get pageString(): string;
  set pageString(value: string);
  /** The rendering style. */
  get jpegRenderingStyle(): JPEGOptionsFormat;
  set jpegRenderingStyle(value: JPEGOptionsFormat);
  /** Whether {@link pageString} or every page is exported — see {@link ExportRangeOrAllPages}. */
  get jpegExportRange(): ExportRangeOrAllPages;
  set jpegExportRange(value: ExportRangeOrAllPages);
  /** Suffix to be used at the end of each exported file. */
  get jpegSuffix(): string;
  set jpegSuffix(value: string);
  /** If true, export hidden spreads. If false, skip export of hidden spreads. */
  get exportingHiddenSpread(): boolean;
  set exportingHiddenSpread(value: boolean);
  /** If true, embeds the color profile in the exported JPEG. */
  get embedColorProfile(): boolean;
  set embedColorProfile(value: boolean);
  /** The color space of the exported JPEG — see {@link JpegColorSpaceEnum}. */
  get jpegColorSpace(): JpegColorSpaceEnum;
  set jpegColorSpace(value: JpegColorSpaceEnum);
  /** If true, uses the document's bleed settings in the exported JPEG. */
  get useDocumentBleeds(): boolean;
  set useDocumentBleeds(value: boolean);
  /** If true, use anti-aliasing for text and vectors during export. */
  get antiAlias(): boolean;
  set antiAlias(value: boolean);
  /** If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing. */
  get simulateOverprint(): boolean;
  set simulateOverprint(value: boolean);
  /** The export resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0). */
  get exportResolution(): number;
  set exportResolution(value: number);
}


/**
 * The broadcast proxy for {@link JPEGExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link JPEGExportPreference} there.
 */
export interface JPEGExportPreferencePlural {
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
  get properties(): (PropertiesGetter<JPEGExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<JPEGExportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'JPEGExportPreference';
  /** Resolves the proxy into the individual {@link JPEGExportPreference} objects it stands for. */
  getElements(): JPEGExportPreference[];
  /** If true, exports each spread as a single JPEG file. If false, exports facing pages as separate files and appends sequential numbers to each file name. */
  get exportingSpread(): (boolean)[];
  set exportingSpread(value: boolean);
  /** The compression quality. */
  get jpegQuality(): (JPEGOptionsQuality)[];
  set jpegQuality(value: JPEGOptionsQuality);
  /** The page(s) to export, specified as a page number or an array of page numbers. Applies only when {@link jpegExportRange} is {@link ExportRangeOrAllPages.EXPORT_RANGE}. */
  get pageString(): (string)[];
  set pageString(value: string);
  /** The rendering style. */
  get jpegRenderingStyle(): (JPEGOptionsFormat)[];
  set jpegRenderingStyle(value: JPEGOptionsFormat);
  /** Whether {@link pageString} or every page is exported — see {@link ExportRangeOrAllPages}. */
  get jpegExportRange(): (ExportRangeOrAllPages)[];
  set jpegExportRange(value: ExportRangeOrAllPages);
  /** Suffix to be used at the end of each exported file. */
  get jpegSuffix(): (string)[];
  set jpegSuffix(value: string);
  /** If true, export hidden spreads. If false, skip export of hidden spreads. */
  get exportingHiddenSpread(): (boolean)[];
  set exportingHiddenSpread(value: boolean);
  /** If true, embeds the color profile in the exported JPEG. */
  get embedColorProfile(): (boolean)[];
  set embedColorProfile(value: boolean);
  /** The color space of the exported JPEG — see {@link JpegColorSpaceEnum}. */
  get jpegColorSpace(): (JpegColorSpaceEnum)[];
  set jpegColorSpace(value: JpegColorSpaceEnum);
  /** If true, uses the document's bleed settings in the exported JPEG. */
  get useDocumentBleeds(): (boolean)[];
  set useDocumentBleeds(value: boolean);
  /** If true, use anti-aliasing for text and vectors during export. */
  get antiAlias(): (boolean)[];
  set antiAlias(value: boolean);
  /** If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing. */
  get simulateOverprint(): (boolean)[];
  set simulateOverprint(value: boolean);
  /** The export resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0). */
  get exportResolution(): (number)[];
  set exportResolution(value: number);
}
