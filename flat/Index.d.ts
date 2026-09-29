/**
 * Index.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { IndexSections } from './IndexSections';
import type { Topics } from './Topics';
import type { Topic } from './Topic';
import type { Story } from './Story';
import type { Page } from './Page';
import type { Spread } from './Spread';
import type { MasterSpread } from './MasterSpread';
import type { Layer } from './Layer';
import type { IndexCapitalizationOptions } from './Enums/IndexCapitalizationOptions';
import type { MeasurementValue, FilePath } from './_base/Types';
import type { IndexSection } from './IndexSection';
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
 * An index for the document, containing {@link IndexSection}s and
 * {@link Topic}s that define its entries and generate an index {@link Story}.
 */
export interface Index {
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
  get properties(): PropertiesGetter<Index, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Index, 'single'>);
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
  readonly constructorName: 'Index';
  /** Resolves the proxy into the individual {@link Index} objects it stands for. */
  getElements(): Index[];
  /** The unique ID of the index. */
  readonly id: number;
  /** All topics in the index, across every {@link IndexSection}. */
  readonly allTopics: Topic[];
  /** The index's sections, used to group topics (e.g. alphabetically). */
  readonly indexSections: IndexSections;
  /** The index's top-level topics. */
  readonly topics: Topics;
  /** Imports a list of index topics from a file. */
  importTopics(from: FilePath): void;
  /** Removes all index topics that do not have any index entries. */
  removeUnusedTopics(): void;
  /**
   * Makes the initial letter for the specified index topic or group of index
   * topics upper case.
   * @param capitalizationOption Which entries are affected. Defaults to
   * {@link IndexCapitalizationOptions.ALL_ENTRIES}.
   */
  capitalize(capitalizationOption?: IndexCapitalizationOptions): void;
  /** Updates the index preview pane. Does not update the index itself. */
  update(): void;
  /**
   * Generates a new index story.
   * @param on The spread or page on which to place the story. Defaults to the current page.
   * @param placePoint The `[x, y]` coordinates of the story's upper-left corner.
   * @param autoflowing If `true`, flows the story onto subsequent pages (creating
   * them if needed) rather than leaving it overset. Defaults to `false`.
   * @param includeOverset If `true`, includes topics located in overset text. Defaults to `false`.
   */
  generate(
    on?: Page | Spread | MasterSpread,
    placePoint?: [MeasurementValue, MeasurementValue],
    destinationLayer?: Layer,
    autoflowing?: boolean,
    includeOverset?: boolean,
  ): Story[];
}


/**
 * The broadcast proxy for {@link Index} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Index} there.
 */
export interface IndexPlural {
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
  get properties(): (PropertiesGetter<IndexPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<IndexPlural, 'plural'>);
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
  readonly constructorName: 'Index';
  /** Resolves the proxy into the individual {@link Index} objects it stands for. */
  getElements(): Index[];
  /** The unique ID of the index. */
  readonly id: (number)[];
  /** All topics in the index, across every {@link IndexSection}. */
  readonly allTopics: (Topic[])[];
  /** The index's sections, used to group topics (e.g. alphabetically). */
  readonly indexSections: IndexSections;
  /** The index's top-level topics. */
  readonly topics: Topics;
  /** Imports a list of index topics from a file. */
  importTopics(from: FilePath): (void)[];
  /** Removes all index topics that do not have any index entries. */
  removeUnusedTopics(): (void)[];
  /**
   * Makes the initial letter for the specified index topic or group of index
   * topics upper case.
   * @param capitalizationOption Which entries are affected. Defaults to
   * {@link IndexCapitalizationOptions.ALL_ENTRIES}.
   */
  capitalize(capitalizationOption?: IndexCapitalizationOptions): (void)[];
  /** Updates the index preview pane. Does not update the index itself. */
  update(): (void)[];
  /**
   * Generates a new index story.
   * @param on The spread or page on which to place the story. Defaults to the current page.
   * @param placePoint The `[x, y]` coordinates of the story's upper-left corner.
   * @param autoflowing If `true`, flows the story onto subsequent pages (creating
   * them if needed) rather than leaving it overset. Defaults to `false`.
   * @param includeOverset If `true`, includes topics located in overset text. Defaults to `false`.
   */
  generate(
    on?: Page | Spread | MasterSpread,
    placePoint?: [MeasurementValue, MeasurementValue],
    destinationLayer?: Layer,
    autoflowing?: boolean,
    includeOverset?: boolean,
  ): Story[];
}
