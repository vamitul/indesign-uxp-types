/**
 * Ink.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { InkTypes } from './Enums/InkTypes';
import type { MixedInk } from './MixedInk';
import type { MixedInkGroup } from './MixedInkGroup';
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
 * A separations ink — process or spot — available to build {@link MixedInk}
 * and {@link MixedInkGroup} swatches and to control trapping and printing.
 */
export interface Ink {
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
  get properties(): PropertiesGetter<Ink, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Ink, 'single'>);
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
  readonly constructorName: 'Ink';
  /** Resolves the proxy into the individual {@link Ink} objects it stands for. */
  getElements(): Ink[];
  /** The unique ID of the ink, stable across saves and reopens. */
  readonly id: number;
  /** The name of the ink, taken from the separations plate. */
  readonly name: string;
  /** Whether the ink is a process ink (as opposed to spot). */
  readonly isProcessInk: boolean;
  /** The solidity value of the ink. */
  readonly solidity: number;
  /** The name of another ink to map this ink onto for output. */
  get aliasInkName(): string;
  set aliasInkName(value: string);
  /** The screen angle of the ink, in degrees. */
  get angle(): number;
  set angle(value: number);
  /** Whether spot inks are converted to process inks on output. */
  get convertToProcess(): boolean;
  set convertToProcess(value: boolean);
  /** The halftone screen frequency of the ink, in lines per inch. */
  get frequency(): number;
  set frequency(value: number);
  /** The neutral density value used to calculate trapping for the ink. */
  get neutralDensity(): number;
  set neutralDensity(value: number);
  /** Whether the ink prints when printing separations. */
  get printInk(): boolean;
  set printInk(value: boolean);
  /** The ink's position in the trapping sequence, from darkest to lightest. */
  get trapOrder(): number;
  set trapOrder(value: number);
  /** How this ink traps against others during output — normal, opaque, transparent, or opaque while ignoring specific inks. See {@link InkTypes}. */
  get inkType(): InkTypes;
  set inkType(value: InkTypes);
}


/**
 * The broadcast proxy for {@link Ink} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Ink} there.
 */
export interface InkPlural {
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
  get properties(): (PropertiesGetter<InkPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<InkPlural, 'plural'>);
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
  readonly constructorName: 'Ink';
  /** Resolves the proxy into the individual {@link Ink} objects it stands for. */
  getElements(): Ink[];
  /** The unique ID of the ink, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the ink, taken from the separations plate. */
  readonly name: (string)[];
  /** Whether the ink is a process ink (as opposed to spot). */
  readonly isProcessInk: (boolean)[];
  /** The solidity value of the ink. */
  readonly solidity: (number)[];
  /** The name of another ink to map this ink onto for output. */
  get aliasInkName(): (string)[];
  set aliasInkName(value: string);
  /** The screen angle of the ink, in degrees. */
  get angle(): (number)[];
  set angle(value: number);
  /** Whether spot inks are converted to process inks on output. */
  get convertToProcess(): (boolean)[];
  set convertToProcess(value: boolean);
  /** The halftone screen frequency of the ink, in lines per inch. */
  get frequency(): (number)[];
  set frequency(value: number);
  /** The neutral density value used to calculate trapping for the ink. */
  get neutralDensity(): (number)[];
  set neutralDensity(value: number);
  /** Whether the ink prints when printing separations. */
  get printInk(): (boolean)[];
  set printInk(value: boolean);
  /** The ink's position in the trapping sequence, from darkest to lightest. */
  get trapOrder(): (number)[];
  set trapOrder(value: number);
  /** How this ink traps against others during output — normal, opaque, transparent, or opaque while ignoring specific inks. See {@link InkTypes}. */
  get inkType(): (InkTypes)[];
  set inkType(value: InkTypes);
}
