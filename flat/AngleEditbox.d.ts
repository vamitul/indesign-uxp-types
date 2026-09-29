/**
 * AngleEditbox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { NumericEditboxSurface } from './_base/WidgetMixins';
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
import type { WidgetParent } from './_base/Parents';
/**
 * A numeric entry field for angle values.
 */
export interface AngleEditbox {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: WidgetParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<AngleEditbox, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AngleEditbox, 'single'>);
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
  /** The unique ID of the Widget. */
  readonly id: number;
  /**
   * The width of the control. For an editbox or combobox, the minimum width
   * of the box.
   */
  get minWidth(): number;
  set minWidth(value: number);
  /**
   * The minimum value a user may type into the control.
   */
  get minimumValue(): number;
  set minimumValue(value: number);
  /**
   * The maximum value a user may type into the control.
   */
  get maximumValue(): number;
  set maximumValue(value: number);
  /**
   * The amount to increment/decrement the value when the control is selected
   * and an arrow key is pressed.
   */
  get smallNudge(): number;
  set smallNudge(value: number);
  /**
   * The amount to increment/decrement the value when the control is selected
   * and Shift+arrow key is pressed.
   */
  get largeNudge(): number;
  set largeNudge(value: number);
  /**
   * The default text shown in the control. Do not set both `editContents`
   * and {@link editValue} — whichever is assigned later wins.
   */
  get editContents(): string;
  set editContents(value: string);
  /**
   * The default numeric value of the control. Do not set both `editValue`
   * and {@link editContents} — whichever is assigned later wins.
   */
  get editValue(): number;
  set editValue(value: number);
  /** The object's DOM class name. */
  readonly constructorName: 'AngleEditbox';
  /** Resolves the proxy into the individual {@link AngleEditbox} objects it stands for. */
  getElements(): AngleEditbox[];
}


/**
 * The broadcast proxy for {@link AngleEditbox} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link AngleEditbox} there.
 */
export interface AngleEditboxPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (WidgetParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<AngleEditboxPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AngleEditboxPlural, 'plural'>);
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
  /** The unique ID of the Widget. */
  readonly id: (number)[];
  /**
   * The width of the control. For an editbox or combobox, the minimum width
   * of the box.
   */
  get minWidth(): (number)[];
  set minWidth(value: number);
  /**
   * The minimum value a user may type into the control.
   */
  get minimumValue(): (number)[];
  set minimumValue(value: number);
  /**
   * The maximum value a user may type into the control.
   */
  get maximumValue(): (number)[];
  set maximumValue(value: number);
  /**
   * The amount to increment/decrement the value when the control is selected
   * and an arrow key is pressed.
   */
  get smallNudge(): (number)[];
  set smallNudge(value: number);
  /**
   * The amount to increment/decrement the value when the control is selected
   * and Shift+arrow key is pressed.
   */
  get largeNudge(): (number)[];
  set largeNudge(value: number);
  /**
   * The default text shown in the control. Do not set both `editContents`
   * and {@link editValue} — whichever is assigned later wins.
   */
  get editContents(): (string)[];
  set editContents(value: string);
  /**
   * The default numeric value of the control. Do not set both `editValue`
   * and {@link editContents} — whichever is assigned later wins.
   */
  get editValue(): (number)[];
  set editValue(value: number);
  /** The object's DOM class name. */
  readonly constructorName: 'AngleEditbox';
  /** Resolves the proxy into the individual {@link AngleEditbox} objects it stands for. */
  getElements(): AngleEditbox[];
}
