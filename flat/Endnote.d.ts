/**
 * Endnote.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { InsertionPoint } from './InsertionPoint';
import type { Story } from './Story';
import type { XmlStory } from './XmlStory';
import type { Cell } from './Cell';
import type { Table } from './Table';
import type { EndnoteRange } from './EndnoteRange';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { Footnote } from './Footnote';
import type { Character } from './Character';
import type { Line } from './Line';
import type { Text } from './Text';
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
 * A reference marker for an endnote — the anchor point in the main text.
 *
 * The endnote's own text content lives in the associated {@link EndnoteRange}, collected
 * together with other endnotes at the end of the story (via an {@link EndnoteTextFrame})
 * rather than inline like a {@link Footnote}.
 */
export interface Endnote {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: InsertionPoint | Story | XmlStory | Cell | Table;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Endnote, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Endnote, 'single'>);
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
  readonly constructorName: 'Endnote';
  /** Resolves the proxy into the individual {@link Endnote} objects it stands for. */
  getElements(): Endnote[];
  /** The unique ID of the endnote, stable across saves and reopens. */
  readonly id: number;
  /** The {@link InsertionPoint} in the parent story where the endnote marker sits. */
  readonly storyOffset: InsertionPoint;
  /** A collection of {@link TextColumn}s in the endnote marker's local text context. */
  readonly textColumns: TextColumns<Endnote>;
  /** A collection of {@link Text} objects spanning the endnote marker's local text context. */
  readonly texts: Texts<Endnote>;
  /** A collection of {@link TextStyleRange}s in the endnote marker's local text context. */
  readonly textStyleRanges: TextStyleRanges<Endnote>;
  /** A collection of {@link Line}s in the endnote marker's local text context. */
  readonly lines: Lines<Endnote>;
  /** A collection of {@link Word}s in the endnote marker's local text context. */
  readonly words: Words<Endnote>;
  /** A collection of {@link Character}s in the endnote marker's local text context. */
  readonly characters: Characters<Endnote>;
  /** A collection of {@link InsertionPoint}s in the endnote marker's local text context. */
  readonly insertionPoints: InsertionPoints<Endnote>;
  /** The {@link EndnoteRange} holding this endnote's text content. */
  get endnoteTextRange(): EndnoteRange;
  set endnoteTextRange(value: EndnoteRange);
  /** Deletes the endnote reference and its associated {@link EndnoteRange} text. */
  deleteEndnote(): void;
  /**
   * Inserts text into this endnote's range at a specific position.
   * @param storyOffset The insertion point within the endnote range to insert at. Must lie between the range's start and end, excluding the markers.
   * @param contents The text to insert.
   */
  insertTextInEndnote(storyOffset: InsertionPoint, contents: string): void;
}


/**
 * The broadcast proxy for {@link Endnote} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Endnote} there.
 */
export interface EndnotePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (InsertionPoint | Story | XmlStory | Cell | Table)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<EndnotePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EndnotePlural, 'plural'>);
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
  readonly constructorName: 'Endnote';
  /** Resolves the proxy into the individual {@link Endnote} objects it stands for. */
  getElements(): Endnote[];
  /** The unique ID of the endnote, stable across saves and reopens. */
  readonly id: (number)[];
  /** The {@link InsertionPoint} in the parent story where the endnote marker sits. */
  readonly storyOffset: (InsertionPoint)[];
  /** A collection of {@link TextColumn}s in the endnote marker's local text context. */
  readonly textColumns: TextColumns<Endnote>;
  /** A collection of {@link Text} objects spanning the endnote marker's local text context. */
  readonly texts: Texts<Endnote>;
  /** A collection of {@link TextStyleRange}s in the endnote marker's local text context. */
  readonly textStyleRanges: TextStyleRanges<Endnote>;
  /** A collection of {@link Line}s in the endnote marker's local text context. */
  readonly lines: Lines<Endnote>;
  /** A collection of {@link Word}s in the endnote marker's local text context. */
  readonly words: Words<Endnote>;
  /** A collection of {@link Character}s in the endnote marker's local text context. */
  readonly characters: Characters<Endnote>;
  /** A collection of {@link InsertionPoint}s in the endnote marker's local text context. */
  readonly insertionPoints: InsertionPoints<Endnote>;
  /** The {@link EndnoteRange} holding this endnote's text content. */
  get endnoteTextRange(): (EndnoteRange)[];
  set endnoteTextRange(value: EndnoteRange);
  /** Deletes the endnote reference and its associated {@link EndnoteRange} text. */
  deleteEndnote(): (void)[];
  /**
   * Inserts text into this endnote's range at a specific position.
   * @param storyOffset The insertion point within the endnote range to insert at. Must lie between the range's start and end, excluding the markers.
   * @param contents The text to insert.
   */
  insertTextInEndnote(storyOffset: InsertionPoint, contents: string): (void)[];
}
