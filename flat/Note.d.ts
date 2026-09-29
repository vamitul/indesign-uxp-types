/**
 * Note.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { XmlStory } from './XmlStory';
import type { Story } from './Story';
import type { TextFrame } from './TextFrame';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { InsertionPoint } from './InsertionPoint';
import type { Cell } from './Cell';
import type { Text } from './Text';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { HiddenTexts } from './HiddenTexts';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Endnote } from './Endnote';
import type { Footnote } from './Footnote';
import type { Character } from './Character';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';
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
 * An inline note in a story — a small annotation attached at an insertion
 * point, shown collapsed or expanded in galley/story view. Distinct from
 * {@link Footnote}/{@link Endnote}, which render as document-level references.
 */
export interface Note {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: XmlStory | Story | TextFrame | EndnoteTextFrame | InsertionPoint | Cell;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Note, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Note, 'single'>);
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
  readonly constructorName: 'Note';
  /** Resolves the proxy into the individual {@link Note} objects it stands for. */
  getElements(): Note[];
  /** The unique ID of the note, stable across saves and reopens. */
  readonly id: number;
  /** When the note was created. */
  readonly creationDate: Date;
  /** When the note was last modified. */
  readonly modificationDate: Date;
  /** The name of the user who authored the note. */
  readonly userName: string;
  /** The {@link InsertionPoint} in the parent story where the note is anchored. */
  readonly storyOffset: InsertionPoint;
  /** {@link TextVariableInstances} resolved within the note's text. */
  readonly textVariableInstances: TextVariableInstances;
  /** A collection of {@link Text} objects spanning the note's content. */
  readonly texts: Texts<Note>;
  /** A collection of {@link Character}s in the note's content. */
  readonly characters: Characters<Note>;
  /** A collection of {@link Word}s in the note's content. */
  readonly words: Words<Note>;
  /** A collection of {@link Line}s in the note's content. */
  readonly lines: Lines<Note>;
  /** A collection of {@link TextColumn}s in the note's content. */
  readonly textColumns: TextColumns<Note>;
  /** A collection of {@link Paragraph}s in the note's content. */
  readonly paragraphs: Paragraphs<Note>;
  /** A collection of {@link InsertionPoint}s in the note's content. */
  readonly insertionPoints: InsertionPoints<Note>;
  /** A collection of {@link TextStyleRange}s in the note's content. */
  readonly textStyleRanges: TextStyleRanges<Note>;
  /** {@link HiddenTexts} (conditional/hidden runs) in the note's content. */
  readonly hiddenTexts: HiddenTexts;
  /** Whether the note is shown collapsed in galley/story view. */
  get collapsed(): boolean;
  set collapsed(value: boolean);
  /** Deletes the note. */
  remove(): void;
  /** Converts the note's content into regular story text at its anchor point, removing the note. */
  convertToText(): void;
  /**
   * Moves the note to a new anchor location.
   * @param to Where to insert the note relative to `reference`, or within the containing object.
   * @param reference The insertion point or story to insert relative to. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: Text | Story): Note;
}


/**
 * The broadcast proxy for {@link Note} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Note} there.
 */
export interface NotePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (XmlStory | Story | TextFrame | EndnoteTextFrame | InsertionPoint | Cell)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<NotePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<NotePlural, 'plural'>);
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
  readonly constructorName: 'Note';
  /** Resolves the proxy into the individual {@link Note} objects it stands for. */
  getElements(): Note[];
  /** The unique ID of the note, stable across saves and reopens. */
  readonly id: (number)[];
  /** When the note was created. */
  readonly creationDate: (Date)[];
  /** When the note was last modified. */
  readonly modificationDate: (Date)[];
  /** The name of the user who authored the note. */
  readonly userName: (string)[];
  /** The {@link InsertionPoint} in the parent story where the note is anchored. */
  readonly storyOffset: (InsertionPoint)[];
  /** {@link TextVariableInstances} resolved within the note's text. */
  readonly textVariableInstances: TextVariableInstances;
  /** A collection of {@link Text} objects spanning the note's content. */
  readonly texts: Texts<Note>;
  /** A collection of {@link Character}s in the note's content. */
  readonly characters: Characters<Note>;
  /** A collection of {@link Word}s in the note's content. */
  readonly words: Words<Note>;
  /** A collection of {@link Line}s in the note's content. */
  readonly lines: Lines<Note>;
  /** A collection of {@link TextColumn}s in the note's content. */
  readonly textColumns: TextColumns<Note>;
  /** A collection of {@link Paragraph}s in the note's content. */
  readonly paragraphs: Paragraphs<Note>;
  /** A collection of {@link InsertionPoint}s in the note's content. */
  readonly insertionPoints: InsertionPoints<Note>;
  /** A collection of {@link TextStyleRange}s in the note's content. */
  readonly textStyleRanges: TextStyleRanges<Note>;
  /** {@link HiddenTexts} (conditional/hidden runs) in the note's content. */
  readonly hiddenTexts: HiddenTexts;
  /** Whether the note is shown collapsed in galley/story view. */
  get collapsed(): (boolean)[];
  set collapsed(value: boolean);
  /** Deletes the note. */
  remove(): (void)[];
  /** Converts the note's content into regular story text at its anchor point, removing the note. */
  convertToText(): (void)[];
  /**
   * Moves the note to a new anchor location.
   * @param to Where to insert the note relative to `reference`, or within the containing object.
   * @param reference The insertion point or story to insert relative to. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: Text | Story): (Note)[];
}
