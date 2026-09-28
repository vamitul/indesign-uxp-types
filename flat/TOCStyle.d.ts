/**
 * TOCStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { TOCStyleEntries } from './TOCStyleEntries';
import type { ParagraphStyle } from './ParagraphStyle';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { NumberedParagraphsOptions } from './Enums/NumberedParagraphsOptions';
import type { TOCStyleEntry } from './TOCStyleEntry';
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
 * A table-of-contents style definition, controlling which paragraph styles
 * are collected into a TOC and how the resulting {@link TOCStyleEntry}s are
 * formatted when the TOC is generated.
 */
export interface TOCStyle {
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
  get properties(): PropertiesGetter<TOCStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TOCStyle, 'single'>);
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
  readonly constructorName: 'TOCStyle';
  /** Resolves the proxy into the individual {@link TOCStyle} objects it stands for. */
  getElements(): TOCStyle[];
  /** The unique ID of the TOC style. */
  readonly id: number;
  /** The style's entry definitions, one per paragraph style included in the TOC. */
  readonly tocStyleEntries: TOCStyleEntries;
  /** The paragraph style applied to the TOC title. */
  get titleStyle(): ParagraphStyle;
  set titleStyle(value: ParagraphStyle);
  /** The TOC title text. */
  get title(): string;
  set title(value: string);
  /** If `true`, the lowest-level TOC entries run in on the same line as the previous entry. */
  get runIn(): boolean;
  set runIn(value: boolean);
  /** If `true`, the TOC includes entries from text on hidden layers. */
  get includeHidden(): boolean;
  set includeHidden(value: boolean);
  /**
   * If `true`, includes the entire book in the TOC; if `false`, includes
   * only the current document's entries. Valid only when the document is
   * part of a book.
   */
  get includeBookDocuments(): boolean;
  set includeBookDocuments(value: boolean);
  /** If `true`, creates PDF bookmarks for the TOC entries. */
  get createBookmarks(): boolean;
  set createBookmarks(value: boolean);
  /** The table-of-contents story's writing direction. */
  get setStoryDirection(): HorizontalOrVertical;
  set setStoryDirection(value: HorizontalOrVertical);
  /** The format used when importing numbered paragraphs into the TOC. */
  get numberedParagraphs(): NumberedParagraphsOptions;
  set numberedParagraphs(value: NumberedParagraphsOptions);
  /** If `true`, removes forced line breaks from TOC entry text. */
  get removeForcedLineBreak(): boolean;
  set removeForcedLineBreak(value: boolean);
  /** If `true`, creates a text anchor in the source paragraph for each entry. */
  get makeAnchor(): boolean;
  set makeAnchor(value: boolean);
  /** Duplicates the TOC style. */
  duplicate(): TOCStyle;
  /** Deletes the TOC style. */
  remove(): void;
}


/**
 * The broadcast proxy for {@link TOCStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TOCStyle} there.
 */
export interface TOCStylePlural {
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
  get properties(): (PropertiesGetter<TOCStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TOCStylePlural, 'plural'>);
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
  readonly constructorName: 'TOCStyle';
  /** Resolves the proxy into the individual {@link TOCStyle} objects it stands for. */
  getElements(): TOCStyle[];
  /** The unique ID of the TOC style. */
  readonly id: (number)[];
  /** The style's entry definitions, one per paragraph style included in the TOC. */
  readonly tocStyleEntries: TOCStyleEntries;
  /** The paragraph style applied to the TOC title. */
  get titleStyle(): (ParagraphStyle)[];
  set titleStyle(value: ParagraphStyle);
  /** The TOC title text. */
  get title(): (string)[];
  set title(value: string);
  /** If `true`, the lowest-level TOC entries run in on the same line as the previous entry. */
  get runIn(): (boolean)[];
  set runIn(value: boolean);
  /** If `true`, the TOC includes entries from text on hidden layers. */
  get includeHidden(): (boolean)[];
  set includeHidden(value: boolean);
  /**
   * If `true`, includes the entire book in the TOC; if `false`, includes
   * only the current document's entries. Valid only when the document is
   * part of a book.
   */
  get includeBookDocuments(): (boolean)[];
  set includeBookDocuments(value: boolean);
  /** If `true`, creates PDF bookmarks for the TOC entries. */
  get createBookmarks(): (boolean)[];
  set createBookmarks(value: boolean);
  /** The table-of-contents story's writing direction. */
  get setStoryDirection(): (HorizontalOrVertical)[];
  set setStoryDirection(value: HorizontalOrVertical);
  /** The format used when importing numbered paragraphs into the TOC. */
  get numberedParagraphs(): (NumberedParagraphsOptions)[];
  set numberedParagraphs(value: NumberedParagraphsOptions);
  /** If `true`, removes forced line breaks from TOC entry text. */
  get removeForcedLineBreak(): (boolean)[];
  set removeForcedLineBreak(value: boolean);
  /** If `true`, creates a text anchor in the source paragraph for each entry. */
  get makeAnchor(): (boolean)[];
  set makeAnchor(value: boolean);
  /** Duplicates the TOC style. */
  duplicate(): (TOCStyle)[];
  /** Deletes the TOC style. */
  remove(): (void)[];
}
