/**
 * DocumentPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { MeasurementValue } from './_base/Types';
import type { PageOrientation } from './Enums/PageOrientation';
import type { DocumentIntentOptions } from './Enums/DocumentIntentOptions';
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
 * A named set of new-document settings (page size, margins, bleed/slug,
 * intent…) applied by {@link Application.documentPresets} when creating a
 * new document.
 */
export interface DocumentPreset {
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
  get properties(): PropertiesGetter<DocumentPreset, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DocumentPreset, 'single'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): string;
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): string;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'DocumentPreset';
  /** Resolves the proxy into the individual {@link DocumentPreset} objects it stands for. */
  getElements(): DocumentPreset[];
  /** The unique ID of the document preset. */
  readonly id: number;
  /**
   * The number of pages in the document.
   * @param value Range: `1`–`9999`.
   */
  get pagesPerDocument(): number;
  set pagesPerDocument(value: number);
  /** If `true`, the document has facing pages. */
  get facingPages(): boolean;
  set facingPages(value: boolean);
  /** The height of the page. */
  get pageHeight(): number;
  set pageHeight(value: MeasurementValue);
  /** The width of the page. */
  get pageWidth(): number;
  set pageWidth(value: MeasurementValue);
  /** Whether the page is wider than it is tall, or taller than it is wide — see {@link PageOrientation}. */
  get pageOrientation(): PageOrientation;
  set pageOrientation(value: PageOrientation);
  /**
   * The number of columns to place on the page.
   * @param value Range: `1`–`216`.
   */
  get columnCount(): number;
  set columnCount(value: number);
  /**
   * The distance between columns.
   * @param value Range: `0`–`1440`.
   */
  get columnGutter(): number;
  set columnGutter(value: MeasurementValue);
  /** The top margin. */
  get top(): number;
  set top(value: MeasurementValue);
  /** The bottom margin. */
  get bottom(): number;
  set bottom(value: MeasurementValue);
  /** The left margin. */
  get left(): number;
  set left(value: MeasurementValue);
  /** The right margin. */
  get right(): number;
  set right(value: MeasurementValue);
  /**
   * The inside (or left) document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedInsideOrLeftOffset(): number;
  set documentBleedInsideOrLeftOffset(value: MeasurementValue);
  /** The top document bleed offset. */
  get documentBleedTopOffset(): number;
  set documentBleedTopOffset(value: MeasurementValue);
  /**
   * The outside (or right) document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedOutsideOrRightOffset(): number;
  set documentBleedOutsideOrRightOffset(value: MeasurementValue);
  /**
   * The bottom document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedBottomOffset(): number;
  set documentBleedBottomOffset(value: MeasurementValue);
  /**
   * The inside (or left) slug offset. Requires
   * {@link documentSlugUniformSize} to be `false`.
   */
  get slugInsideOrLeftOffset(): number;
  set slugInsideOrLeftOffset(value: MeasurementValue);
  /** The top slug offset. */
  get slugTopOffset(): number;
  set slugTopOffset(value: MeasurementValue);
  /**
   * The outside (or right) slug offset. Requires
   * {@link documentSlugUniformSize} to be `false`.
   */
  get slugRightOrOutsideOffset(): number;
  set slugRightOrOutsideOffset(value: MeasurementValue);
  /**
   * The bottom slug offset. Requires {@link documentSlugUniformSize} to be
   * `false`.
   */
  get slugBottomOffset(): number;
  set slugBottomOffset(value: MeasurementValue);
  /** If `true`, the document's A-Master has a primary text frame on new documents. */
  get createPrimaryTextFrame(): boolean;
  set createPrimaryTextFrame(value: boolean);
  /**
   * The starting page number of the document (equivalent to the starting
   * page number of its first section).
   * @param value Range: `1`–`999999`.
   * @default `1`
   */
  get startPageNumber(): number;
  set startPageNumber(value: number);
  /** What kind of output the document is intended for — print, web, or a mobile device; see {@link DocumentIntentOptions}. */
  get intent(): DocumentIntentOptions;
  set intent(value: DocumentIntentOptions);
  /**
   * If `true`, {@link documentBleedTopOffset} is applied to all sides of the
   * document's bleed.
   * @default `true`
   */
  get documentBleedUniformSize(): boolean;
  set documentBleedUniformSize(value: boolean);
  /**
   * If `true`, {@link slugTopOffset} is applied to all sides of the
   * document's slug.
   * @default `false`
   */
  get documentSlugUniformSize(): boolean;
  set documentSlugUniformSize(value: boolean);
  /** The name of the page size. */
  get pageSize(): string;
  set pageSize(value: string);
  /** Deletes the document preset. */
  remove(): void;
  /** Duplicates the document preset. */
  duplicate(): DocumentPreset;
}


/**
 * The broadcast proxy for {@link DocumentPreset} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link DocumentPreset} there.
 */
export interface DocumentPresetPlural {
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
  get properties(): (PropertiesGetter<DocumentPresetPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DocumentPresetPlural, 'plural'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): (string)[];
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): (string)[];
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'DocumentPreset';
  /** Resolves the proxy into the individual {@link DocumentPreset} objects it stands for. */
  getElements(): DocumentPreset[];
  /** The unique ID of the document preset. */
  readonly id: (number)[];
  /**
   * The number of pages in the document.
   * @param value Range: `1`–`9999`.
   */
  get pagesPerDocument(): (number)[];
  set pagesPerDocument(value: number);
  /** If `true`, the document has facing pages. */
  get facingPages(): (boolean)[];
  set facingPages(value: boolean);
  /** The height of the page. */
  get pageHeight(): (number)[];
  set pageHeight(value: MeasurementValue);
  /** The width of the page. */
  get pageWidth(): (number)[];
  set pageWidth(value: MeasurementValue);
  /** Whether the page is wider than it is tall, or taller than it is wide — see {@link PageOrientation}. */
  get pageOrientation(): (PageOrientation)[];
  set pageOrientation(value: PageOrientation);
  /**
   * The number of columns to place on the page.
   * @param value Range: `1`–`216`.
   */
  get columnCount(): (number)[];
  set columnCount(value: number);
  /**
   * The distance between columns.
   * @param value Range: `0`–`1440`.
   */
  get columnGutter(): (number)[];
  set columnGutter(value: MeasurementValue);
  /** The top margin. */
  get top(): (number)[];
  set top(value: MeasurementValue);
  /** The bottom margin. */
  get bottom(): (number)[];
  set bottom(value: MeasurementValue);
  /** The left margin. */
  get left(): (number)[];
  set left(value: MeasurementValue);
  /** The right margin. */
  get right(): (number)[];
  set right(value: MeasurementValue);
  /**
   * The inside (or left) document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedInsideOrLeftOffset(): (number)[];
  set documentBleedInsideOrLeftOffset(value: MeasurementValue);
  /** The top document bleed offset. */
  get documentBleedTopOffset(): (number)[];
  set documentBleedTopOffset(value: MeasurementValue);
  /**
   * The outside (or right) document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedOutsideOrRightOffset(): (number)[];
  set documentBleedOutsideOrRightOffset(value: MeasurementValue);
  /**
   * The bottom document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedBottomOffset(): (number)[];
  set documentBleedBottomOffset(value: MeasurementValue);
  /**
   * The inside (or left) slug offset. Requires
   * {@link documentSlugUniformSize} to be `false`.
   */
  get slugInsideOrLeftOffset(): (number)[];
  set slugInsideOrLeftOffset(value: MeasurementValue);
  /** The top slug offset. */
  get slugTopOffset(): (number)[];
  set slugTopOffset(value: MeasurementValue);
  /**
   * The outside (or right) slug offset. Requires
   * {@link documentSlugUniformSize} to be `false`.
   */
  get slugRightOrOutsideOffset(): (number)[];
  set slugRightOrOutsideOffset(value: MeasurementValue);
  /**
   * The bottom slug offset. Requires {@link documentSlugUniformSize} to be
   * `false`.
   */
  get slugBottomOffset(): (number)[];
  set slugBottomOffset(value: MeasurementValue);
  /** If `true`, the document's A-Master has a primary text frame on new documents. */
  get createPrimaryTextFrame(): (boolean)[];
  set createPrimaryTextFrame(value: boolean);
  /**
   * The starting page number of the document (equivalent to the starting
   * page number of its first section).
   * @param value Range: `1`–`999999`.
   * @default `1`
   */
  get startPageNumber(): (number)[];
  set startPageNumber(value: number);
  /** What kind of output the document is intended for — print, web, or a mobile device; see {@link DocumentIntentOptions}. */
  get intent(): (DocumentIntentOptions)[];
  set intent(value: DocumentIntentOptions);
  /**
   * If `true`, {@link documentBleedTopOffset} is applied to all sides of the
   * document's bleed.
   * @default `true`
   */
  get documentBleedUniformSize(): (boolean)[];
  set documentBleedUniformSize(value: boolean);
  /**
   * If `true`, {@link slugTopOffset} is applied to all sides of the
   * document's slug.
   * @default `false`
   */
  get documentSlugUniformSize(): (boolean)[];
  set documentSlugUniformSize(value: boolean);
  /** The name of the page size. */
  get pageSize(): (string)[];
  set pageSize(value: string);
  /** Deletes the document preset. */
  remove(): (void)[];
  /** Duplicates the document preset. */
  duplicate(): (DocumentPreset)[];
}
