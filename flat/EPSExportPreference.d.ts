/**
 * EPSExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { FlattenerPreset } from './FlattenerPreset';
import type { DataFormat } from './Enums/DataFormat';
import type { EPSColorSpace } from './Enums/EPSColorSpace';
import type { EPSImageData } from './Enums/EPSImageData';
import type { FontEmbedding } from './Enums/FontEmbedding';
import type { PageRange } from './Enums/PageRange';
import type { PostScriptLevels } from './Enums/PostScriptLevels';
import type { PreviewTypes } from './Enums/PreviewTypes';
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
 * EPS export preferences.
 */
export interface EPSExportPreference {
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
  get properties(): PropertiesGetter<EPSExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPSExportPreference, 'single'>);
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
  readonly constructorName: 'EPSExportPreference';
  /** Resolves the proxy into the individual {@link EPSExportPreference} objects it stands for. */
  getElements(): EPSExportPreference[];
  /** The height of the bleed area at the bottom of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedBottom(): number;
  set bleedBottom(value: MeasurementValue);
  /** The width of the bleed area at the inside of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedInside(): number;
  set bleedInside(value: MeasurementValue);
  /** The width of the bleed area at the outside of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedOutside(): number;
  set bleedOutside(value: MeasurementValue);
  /** The height of the bleed area at the top of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedTop(): number;
  set bleedTop(value: MeasurementValue);
  /** The color space for representing color in the exported EPS. */
  get epsColor(): EPSColorSpace;
  set epsColor(value: EPSColorSpace);
  /** The format in which to send image data to the printer. */
  get dataFormat(): DataFormat;
  set dataFormat(value: DataFormat);
  /** The transparency flattener preset to use. */
  get appliedFlattenerPreset(): FlattenerPreset;
  set appliedFlattenerPreset(value: FlattenerPreset);
  /** Controls how fonts are embedded in the exported EPS. */
  get fontEmbedding(): FontEmbedding;
  set fontEmbedding(value: FontEmbedding);
  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): boolean;
  set ignoreSpreadOverrides(value: boolean);
  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): boolean;
  set omitBitmaps(value: boolean);
  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): boolean;
  set omitEPS(value: boolean);
  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): boolean;
  set omitPDF(value: boolean);
  /** If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments — see {@link omitEPS}, {@link omitPDF}, and {@link omitBitmaps}. */
  get opiImageReplacement(): boolean;
  set opiImageReplacement(value: boolean);
  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): PageRange | string;
  set pageRange(value: PageRange | string);
  /** The file format of the preview image saved with the exported EPS file. */
  get preview(): PreviewTypes;
  set preview(value: PreviewTypes);
  /** The PostScript level of the printer. */
  get postscriptLevel(): PostScriptLevels;
  set postscriptLevel(value: PostScriptLevels);
  /** If true, exports facing pages as a single page that has the width of the spread. If false, exports spread pages as separate pages. */
  get epsSpreads(): boolean;
  set epsSpreads(value: boolean);
  /** The image data to export to the EPS document. */
  get imageData(): EPSImageData;
  set imageData(value: EPSImageData);
}


/**
 * The broadcast proxy for {@link EPSExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link EPSExportPreference} there.
 */
export interface EPSExportPreferencePlural {
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
  get properties(): (PropertiesGetter<EPSExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPSExportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'EPSExportPreference';
  /** Resolves the proxy into the individual {@link EPSExportPreference} objects it stands for. */
  getElements(): EPSExportPreference[];
  /** The height of the bleed area at the bottom of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedBottom(): (number)[];
  set bleedBottom(value: MeasurementValue);
  /** The width of the bleed area at the inside of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedInside(): (number)[];
  set bleedInside(value: MeasurementValue);
  /** The width of the bleed area at the outside of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedOutside(): (number)[];
  set bleedOutside(value: MeasurementValue);
  /** The height of the bleed area at the top of the page. Applies only when the export uses the document's own bleed settings. */
  get bleedTop(): (number)[];
  set bleedTop(value: MeasurementValue);
  /** The color space for representing color in the exported EPS. */
  get epsColor(): (EPSColorSpace)[];
  set epsColor(value: EPSColorSpace);
  /** The format in which to send image data to the printer. */
  get dataFormat(): (DataFormat)[];
  set dataFormat(value: DataFormat);
  /** The transparency flattener preset to use. */
  get appliedFlattenerPreset(): (FlattenerPreset)[];
  set appliedFlattenerPreset(value: FlattenerPreset);
  /** Controls how fonts are embedded in the exported EPS. */
  get fontEmbedding(): (FontEmbedding)[];
  set fontEmbedding(value: FontEmbedding);
  /** If true, ignores flattener spread overrides. */
  get ignoreSpreadOverrides(): (boolean)[];
  set ignoreSpreadOverrides(value: boolean);
  /** If true, replaces bitmap images with OPI links. */
  get omitBitmaps(): (boolean)[];
  set omitBitmaps(value: boolean);
  /** If true, replaces EPS images with OPI links. */
  get omitEPS(): (boolean)[];
  set omitEPS(value: boolean);
  /** If true, replaces PDF images with OPI links. */
  get omitPDF(): (boolean)[];
  set omitPDF(value: boolean);
  /** If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments — see {@link omitEPS}, {@link omitPDF}, and {@link omitBitmaps}. */
  get opiImageReplacement(): (boolean)[];
  set opiImageReplacement(value: boolean);
  /** The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get pageRange(): (PageRange | string)[];
  set pageRange(value: PageRange | string);
  /** The file format of the preview image saved with the exported EPS file. */
  get preview(): (PreviewTypes)[];
  set preview(value: PreviewTypes);
  /** The PostScript level of the printer. */
  get postscriptLevel(): (PostScriptLevels)[];
  set postscriptLevel(value: PostScriptLevels);
  /** If true, exports facing pages as a single page that has the width of the spread. If false, exports spread pages as separate pages. */
  get epsSpreads(): (boolean)[];
  set epsSpreads(value: boolean);
  /** The image data to export to the EPS document. */
  get imageData(): (EPSImageData)[];
  set imageData(value: EPSImageData);
}
