/**
 * IndexOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { IndexFormat } from './Enums/IndexFormat';
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
 * How a generated index is laid out — its title and title style, the section headings,
 * the separators between entries and page numbers, and whether empty sections are kept.
 */
export interface IndexOptions {
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
  get properties(): PropertiesGetter<IndexOptions, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<IndexOptions, 'single'>);
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
  readonly constructorName: 'IndexOptions';
  /** Resolves the proxy into the individual {@link IndexOptions} objects it stands for. */
  getElements(): IndexOptions[];
  /** The title of the generated index. */
  get title(): string;
  set title(value: string);
  /** The paragraph style applied to the title of the generated index. */
  get titleStyle(): ParagraphStyle;
  set titleStyle(value: ParagraphStyle | string);
  /** If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed. */
  get replaceExistingIndex(): boolean;
  set replaceExistingIndex(value: boolean);
  /** If true, includes topics and page references from all the documents in a book. */
  get includeBookDocuments(): boolean;
  set includeBookDocuments(value: boolean);
  /** If true, includes topics and page references on hidden layers. */
  get includeHiddenEntries(): boolean;
  set includeHiddenEntries(value: boolean);
  /** The format for level 2 and lower index topics. */
  get indexFormat(): IndexFormat;
  set indexFormat(value: IndexFormat);
  /** If true, displays the letters of the alphabet as index section headings. */
  get includeSectionHeadings(): boolean;
  set includeSectionHeadings(value: boolean);
  /** If true, displays headings for sections with no index topics. Applies only when {@link includeSectionHeadings} is `true`. */
  get includeEmptyIndexSections(): boolean;
  set includeEmptyIndexSections(value: boolean);
  /** The paragraph style applied to level 1 index topics. */
  get level1Style(): ParagraphStyle;
  set level1Style(value: ParagraphStyle);
  /** The paragraph style applied to level 2 index topics. */
  get level2Style(): ParagraphStyle;
  set level2Style(value: ParagraphStyle);
  /** The paragraph style applied to level 3 index topics. */
  get level3Style(): ParagraphStyle;
  set level3Style(value: ParagraphStyle);
  /** The paragraph style applied to level 4 index topics. */
  get level4Style(): ParagraphStyle;
  set level4Style(value: ParagraphStyle);
  /** The paragraph style applied to index section headings. Applies only when {@link includeSectionHeadings} is `true`. */
  get sectionHeadingStyle(): ParagraphStyle;
  set sectionHeadingStyle(value: ParagraphStyle);
  /** The character style applied to page numbers in the index. */
  get pageNumberStyle(): CharacterStyle;
  set pageNumberStyle(value: CharacterStyle);
  /** The character style applied to cross references. */
  get crossReferenceStyle(): CharacterStyle;
  set crossReferenceStyle(value: CharacterStyle);
  /** The character style applied to cross reference topics. */
  get crossReferenceTopicStyle(): CharacterStyle;
  set crossReferenceTopicStyle(value: CharacterStyle);
  /** The character(s) inserted after each index topic. */
  get followingTopicSeparator(): string;
  set followingTopicSeparator(value: string);
  /** The character(s) inserted between index entries when runin-style index format is used for nested topics. */
  get betweenEntriesSeparator(): string;
  set betweenEntriesSeparator(value: string);
  /** The character(s) inserted between page numbers to indicate a page range. */
  get pageRangeSeparator(): string;
  set pageRangeSeparator(value: string);
  /** The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges. */
  get betweenPageNumbersSeparator(): string;
  set betweenPageNumbersSeparator(value: string);
  /** The character(s) inserted at the start of cross references. */
  get beforeCrossReferenceSeparator(): string;
  set beforeCrossReferenceSeparator(value: string);
  /** The character(s) inserted at the end of each index entry. */
  get entryEndSeparator(): string;
  set entryEndSeparator(value: string);
}


/**
 * The broadcast proxy for {@link IndexOptions} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link IndexOptions} there.
 */
export interface IndexOptionsPlural {
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
  get properties(): (PropertiesGetter<IndexOptionsPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<IndexOptionsPlural, 'plural'>);
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
  readonly constructorName: 'IndexOptions';
  /** Resolves the proxy into the individual {@link IndexOptions} objects it stands for. */
  getElements(): IndexOptions[];
  /** The title of the generated index. */
  get title(): (string)[];
  set title(value: string);
  /** The paragraph style applied to the title of the generated index. */
  get titleStyle(): (ParagraphStyle)[];
  set titleStyle(value: ParagraphStyle | string);
  /** If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed. */
  get replaceExistingIndex(): (boolean)[];
  set replaceExistingIndex(value: boolean);
  /** If true, includes topics and page references from all the documents in a book. */
  get includeBookDocuments(): (boolean)[];
  set includeBookDocuments(value: boolean);
  /** If true, includes topics and page references on hidden layers. */
  get includeHiddenEntries(): (boolean)[];
  set includeHiddenEntries(value: boolean);
  /** The format for level 2 and lower index topics. */
  get indexFormat(): (IndexFormat)[];
  set indexFormat(value: IndexFormat);
  /** If true, displays the letters of the alphabet as index section headings. */
  get includeSectionHeadings(): (boolean)[];
  set includeSectionHeadings(value: boolean);
  /** If true, displays headings for sections with no index topics. Applies only when {@link includeSectionHeadings} is `true`. */
  get includeEmptyIndexSections(): (boolean)[];
  set includeEmptyIndexSections(value: boolean);
  /** The paragraph style applied to level 1 index topics. */
  get level1Style(): (ParagraphStyle)[];
  set level1Style(value: ParagraphStyle);
  /** The paragraph style applied to level 2 index topics. */
  get level2Style(): (ParagraphStyle)[];
  set level2Style(value: ParagraphStyle);
  /** The paragraph style applied to level 3 index topics. */
  get level3Style(): (ParagraphStyle)[];
  set level3Style(value: ParagraphStyle);
  /** The paragraph style applied to level 4 index topics. */
  get level4Style(): (ParagraphStyle)[];
  set level4Style(value: ParagraphStyle);
  /** The paragraph style applied to index section headings. Applies only when {@link includeSectionHeadings} is `true`. */
  get sectionHeadingStyle(): (ParagraphStyle)[];
  set sectionHeadingStyle(value: ParagraphStyle);
  /** The character style applied to page numbers in the index. */
  get pageNumberStyle(): (CharacterStyle)[];
  set pageNumberStyle(value: CharacterStyle);
  /** The character style applied to cross references. */
  get crossReferenceStyle(): (CharacterStyle)[];
  set crossReferenceStyle(value: CharacterStyle);
  /** The character style applied to cross reference topics. */
  get crossReferenceTopicStyle(): (CharacterStyle)[];
  set crossReferenceTopicStyle(value: CharacterStyle);
  /** The character(s) inserted after each index topic. */
  get followingTopicSeparator(): (string)[];
  set followingTopicSeparator(value: string);
  /** The character(s) inserted between index entries when runin-style index format is used for nested topics. */
  get betweenEntriesSeparator(): (string)[];
  set betweenEntriesSeparator(value: string);
  /** The character(s) inserted between page numbers to indicate a page range. */
  get pageRangeSeparator(): (string)[];
  set pageRangeSeparator(value: string);
  /** The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges. */
  get betweenPageNumbersSeparator(): (string)[];
  set betweenPageNumbersSeparator(value: string);
  /** The character(s) inserted at the start of cross references. */
  get beforeCrossReferenceSeparator(): (string)[];
  set beforeCrossReferenceSeparator(value: string);
  /** The character(s) inserted at the end of each index entry. */
  get entryEndSeparator(): (string)[];
  set entryEndSeparator(value: string);
}
