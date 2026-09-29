/**
 * Change.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ChangeParent } from './_base/Parents';
import type { ChangeTypes } from './Enums/ChangeTypes';
import type { InsertionPoint } from './InsertionPoint';
import type { Texts } from './Texts';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { TextVariableInstances } from './TextVariableInstances';
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
 * A single tracked change recorded in a story with Track Changes enabled.
 */
export interface Change {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: ChangeParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Change, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Change, 'single'>);
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
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name. */
  readonly constructorName: 'Change';
  /** Resolves the proxy into the individual {@link Change} objects it stands for. */
  getElements(): Change[];
  /** {@link TextVariableInstances} resolved within the changed text. */
  readonly textVariableInstances: TextVariableInstances;
  /** The date the tracked change was made. Valid only when track changes is enabled. */
  readonly date: Date;
  /** The kind of tracked change (insertion, deletion, format change, and so on). Valid only when track changes is enabled. */
  readonly changeType: ChangeTypes;
  /** The user who made the change. Valid only when track changes is enabled. */
  readonly userName: string;
  /** The location of the first insertion point of the change, relative to the beginning of the story. */
  readonly storyOffset: InsertionPoint;
  /** A collection of text objects covered by the change. */
  readonly texts: Texts<Change>;
  /** A collection of characters covered by the change. */
  readonly characters: Characters<Change>;
  /** A collection of words covered by the change. */
  readonly words: Words<Change>;
  /** A collection of lines covered by the change. */
  readonly lines: Lines<Change>;
  /** A collection of text columns covered by the change. */
  readonly textColumns: TextColumns<Change>;
  /** A collection of paragraphs covered by the change. */
  readonly paragraphs: Paragraphs<Change>;
  /** A collection of insertion points covered by the change. */
  readonly insertionPoints: InsertionPoints<Change>;
  /** A collection of text style ranges covered by the change. */
  readonly textStyleRanges: TextStyleRanges<Change>;
  /** Accepts the tracked change. Valid only when track changes is enabled. */
  accept(): void;
  /** Rejects the tracked change. Valid only when track changes is enabled. */
  reject(): void;
}


/**
 * The broadcast proxy for {@link Change} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Change} there.
 */
export interface ChangePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (ChangeParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ChangePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ChangePlural, 'plural'>);
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
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name. */
  readonly constructorName: 'Change';
  /** Resolves the proxy into the individual {@link Change} objects it stands for. */
  getElements(): Change[];
  /** {@link TextVariableInstances} resolved within the changed text. */
  readonly textVariableInstances: TextVariableInstances;
  /** The date the tracked change was made. Valid only when track changes is enabled. */
  readonly date: (Date)[];
  /** The kind of tracked change (insertion, deletion, format change, and so on). Valid only when track changes is enabled. */
  readonly changeType: (ChangeTypes)[];
  /** The user who made the change. Valid only when track changes is enabled. */
  readonly userName: (string)[];
  /** The location of the first insertion point of the change, relative to the beginning of the story. */
  readonly storyOffset: (InsertionPoint)[];
  /** A collection of text objects covered by the change. */
  readonly texts: Texts<Change>;
  /** A collection of characters covered by the change. */
  readonly characters: Characters<Change>;
  /** A collection of words covered by the change. */
  readonly words: Words<Change>;
  /** A collection of lines covered by the change. */
  readonly lines: Lines<Change>;
  /** A collection of text columns covered by the change. */
  readonly textColumns: TextColumns<Change>;
  /** A collection of paragraphs covered by the change. */
  readonly paragraphs: Paragraphs<Change>;
  /** A collection of insertion points covered by the change. */
  readonly insertionPoints: InsertionPoints<Change>;
  /** A collection of text style ranges covered by the change. */
  readonly textStyleRanges: TextStyleRanges<Change>;
  /** Accepts the tracked change. Valid only when track changes is enabled. */
  accept(): (void)[];
  /** Rejects the tracked change. Valid only when track changes is enabled. */
  reject(): (void)[];
}
