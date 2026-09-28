/**
 * HyperlinkExternalPageDestination.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { FilePath, File, BoundsArray } from './_base/Types';
import type { HyperlinkDestinationPageSetting } from './Enums/HyperlinkDestinationPageSetting';
import type { Hyperlink } from './Hyperlink';
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
 * A {@link Hyperlink} destination that is a page in a document other than
 * the one containing the hyperlink's source.
 */
export interface HyperlinkExternalPageDestination {
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
  get properties(): PropertiesGetter<HyperlinkExternalPageDestination, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<HyperlinkExternalPageDestination, 'single'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkExternalPageDestination';
  /** Resolves the proxy into the individual {@link HyperlinkExternalPageDestination} objects it stands for. */
  getElements(): HyperlinkExternalPageDestination[];
  /** The name of the destination. */
  readonly name: string;
  /** The unique ID of the destination, stable across saves and reopens. */
  readonly id: number;
  /** Whether the hyperlink is hidden. */
  readonly hidden: boolean;
  /** The path to the document that the hyperlink destination points to. */
  get documentPath(): Promise<File>;
  set documentPath(value: FilePath);
  /**
   * The 1-based index of the page that the hyperlink destination points to.
   * Range `1` to `9999`.
   */
  get destinationPageIndex(): number;
  set destinationPageIndex(value: number);
  /** The page size used when this destination is reached by clicking the hyperlink. */
  get viewSetting(): HyperlinkDestinationPageSetting;
  set viewSetting(value: HyperlinkDestinationPageSetting);
  /**
   * The view rectangle, ordered `[y1, x1, y2, x2]` (top, left, bottom,
   * right). Only meaningful when {@link viewSetting} is fixed.
   */
  get viewBounds(): number[];
  set viewBounds(value: BoundsArray);
  /**
   * The zoom percentage used when this destination is reached. Range `5` to
   * `4000`. Only meaningful when {@link viewSetting} is fixed.
   */
  get viewPercentage(): number;
  set viewPercentage(value: number);
  /** Deletes the destination. */
  remove(): void;
  /** Jumps to the hyperlink destination. */
  showDestination(): void;
}


/**
 * The broadcast proxy for {@link HyperlinkExternalPageDestination} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link HyperlinkExternalPageDestination} there.
 */
export interface HyperlinkExternalPageDestinationPlural {
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
  get properties(): (PropertiesGetter<HyperlinkExternalPageDestinationPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<HyperlinkExternalPageDestinationPlural, 'plural'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkExternalPageDestination';
  /** Resolves the proxy into the individual {@link HyperlinkExternalPageDestination} objects it stands for. */
  getElements(): HyperlinkExternalPageDestination[];
  /** The name of the destination. */
  readonly name: (string)[];
  /** The unique ID of the destination, stable across saves and reopens. */
  readonly id: (number)[];
  /** Whether the hyperlink is hidden. */
  readonly hidden: (boolean)[];
  /** The path to the document that the hyperlink destination points to. */
  get documentPath(): (Promise<File>)[];
  set documentPath(value: FilePath);
  /**
   * The 1-based index of the page that the hyperlink destination points to.
   * Range `1` to `9999`.
   */
  get destinationPageIndex(): (number)[];
  set destinationPageIndex(value: number);
  /** The page size used when this destination is reached by clicking the hyperlink. */
  get viewSetting(): (HyperlinkDestinationPageSetting)[];
  set viewSetting(value: HyperlinkDestinationPageSetting);
  /**
   * The view rectangle, ordered `[y1, x1, y2, x2]` (top, left, bottom,
   * right). Only meaningful when {@link viewSetting} is fixed.
   */
  get viewBounds(): (number[])[];
  set viewBounds(value: BoundsArray);
  /**
   * The zoom percentage used when this destination is reached. Range `5` to
   * `4000`. Only meaningful when {@link viewSetting} is fixed.
   */
  get viewPercentage(): (number)[];
  set viewPercentage(value: number);
  /** Deletes the destination. */
  remove(): (void)[];
  /** Jumps to the hyperlink destination. */
  showDestination(): (void)[];
}
