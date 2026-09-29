/**
 * BookContent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Book } from './Book';
import type { BookContentStatus } from './Enums/BookContentStatus';
import type { LocationOptions } from './Enums/LocationOptions';
import type { File, Folder, FilePath } from './_base/Types';
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
 * A single document entry inside a {@link Book}.
 */
export interface BookContent {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Book;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<BookContent, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BookContent, 'single'>);
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
  readonly constructorName: 'BookContent';
  /** Resolves the proxy into the individual {@link BookContent} objects it stands for. */
  getElements(): BookContent[];
  /** The name of the BookContent. */
  readonly name: string;
  /** The unique ID of the BookContent. */
  readonly id: number;
  /** The full path to the BookContent, including its name. */
  readonly fullName: Promise<File>;
  /** The status of the book content file (up to date, modified, missing, and so on). */
  readonly status: BookContentStatus;
  /** The size of the BookContent file, in bytes. */
  readonly size: number;
  /** The date and time the BookContent was created. */
  readonly date: Date;
  /** The page range of the book content within the book. */
  readonly documentPageRange: string;
  /** The folder that contains the book content's file. */
  readonly filePath: Promise<Folder>;
  /**
   * Preflights this book content and optionally saves the resulting report.
   * @param autoOpen If `true`, automatically opens the report after creation. Defaults to `false`.
   */
  preflight(to?: FilePath, autoOpen?: boolean): void;
  /**
   * Moves this book content relative to another reference object within the book.
   * @param reference The reference object. Required when `to` specifies `BEFORE` or `AFTER`.
   */
  move(to?: LocationOptions, reference?: BookContent): BookContent;
  /** Removes this book content from the book. */
  remove(): void;
  /**
   * Replaces this book content with a new file. If the new file replaces the
   * current {@link Book.styleSourceDocument}, it becomes the new style source.
   */
  replace(using: FilePath): BookContent;
  /** Matches the formatting of this book content to {@link Book.styleSourceDocument}. */
  synchronize(): void;
}


/**
 * The broadcast proxy for {@link BookContent} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link BookContent} there.
 */
export interface BookContentPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Book)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<BookContentPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BookContentPlural, 'plural'>);
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
  readonly constructorName: 'BookContent';
  /** Resolves the proxy into the individual {@link BookContent} objects it stands for. */
  getElements(): BookContent[];
  /** The name of the BookContent. */
  readonly name: (string)[];
  /** The unique ID of the BookContent. */
  readonly id: (number)[];
  /** The full path to the BookContent, including its name. */
  readonly fullName: (Promise<File>)[];
  /** The status of the book content file (up to date, modified, missing, and so on). */
  readonly status: (BookContentStatus)[];
  /** The size of the BookContent file, in bytes. */
  readonly size: (number)[];
  /** The date and time the BookContent was created. */
  readonly date: (Date)[];
  /** The page range of the book content within the book. */
  readonly documentPageRange: (string)[];
  /** The folder that contains the book content's file. */
  readonly filePath: (Promise<Folder>)[];
  /**
   * Preflights this book content and optionally saves the resulting report.
   * @param autoOpen If `true`, automatically opens the report after creation. Defaults to `false`.
   */
  preflight(to?: FilePath, autoOpen?: boolean): (void)[];
  /**
   * Moves this book content relative to another reference object within the book.
   * @param reference The reference object. Required when `to` specifies `BEFORE` or `AFTER`.
   */
  move(to?: LocationOptions, reference?: BookContent): (BookContent)[];
  /** Removes this book content from the book. */
  remove(): (void)[];
  /**
   * Replaces this book content with a new file. If the new file replaces the
   * current {@link Book.styleSourceDocument}, it becomes the new style source.
   */
  replace(using: FilePath): (BookContent)[];
  /** Matches the formatting of this book content to {@link Book.styleSourceDocument}. */
  synchronize(): (void)[];
}
