/**
 * FlexLayoutAttributeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ObjectStyle } from './ObjectStyle';
import type { FlexDirection } from './Enums/FlexDirection';
import type { FlexEnum } from './Enums/FlexEnum';
import type { FlexPosition } from './Enums/FlexPosition';
import type { FlexSpacing } from './Enums/FlexSpacing';
import type { FlexWidthHeightMode } from './Enums/FlexWidthHeightMode';
import type { FlexWrap } from './Enums/FlexWrap';
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
 * Options for applying flex layout attributes to a flex object.
 */
export interface FlexLayoutAttributeOption {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: ObjectStyle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<FlexLayoutAttributeOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FlexLayoutAttributeOption, 'single'>);
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
  readonly constructorName: 'FlexLayoutAttributeOption';
  /** Resolves the proxy into the individual {@link FlexLayoutAttributeOption} objects it stands for. */
  getElements(): FlexLayoutAttributeOption[];
  /** The width behavior of the flex container. */
  get flexWidthMode(): FlexWidthHeightMode | FlexEnum;
  set flexWidthMode(value: FlexWidthHeightMode | FlexEnum);
  /** The height behavior of the flex container. */
  get flexHeightMode(): FlexWidthHeightMode | FlexEnum;
  set flexHeightMode(value: FlexWidthHeightMode | FlexEnum);
  /** The direction of the flex container. */
  get flexDirection(): FlexDirection;
  set flexDirection(value: FlexDirection);
  /** Whether flex items are forced onto one line or can wrap onto multiple lines. */
  get flexWrap(): FlexWrap;
  set flexWrap(value: FlexWrap);
  /** Defines how the browser distributes space between and around content items along the main-axis. */
  get justifyContent(): FlexPosition | FlexSpacing;
  set justifyContent(value: FlexPosition | FlexSpacing);
  /** Defines the default behavior for how flex items are laid out along the cross axis. */
  get alignItems(): FlexPosition | FlexEnum;
  set alignItems(value: FlexPosition | FlexEnum);
  /** The top padding of the flex container. */
  get flexPaddingTop(): number;
  set flexPaddingTop(value: MeasurementValue);
  /** The right padding of the flex container. */
  get flexPaddingRight(): number;
  set flexPaddingRight(value: MeasurementValue);
  /** The bottom padding of the flex container. */
  get flexPaddingBottom(): number;
  set flexPaddingBottom(value: MeasurementValue);
  /** The left padding of the flex container. */
  get flexPaddingLeft(): number;
  set flexPaddingLeft(value: MeasurementValue);
  /** The row gap between flex items. */
  get flexGapRow(): number;
  set flexGapRow(value: MeasurementValue);
  /** Aligns a flex container's lines within when there is extra space in the cross-axis. */
  get alignContent(): FlexPosition | FlexEnum;
  set alignContent(value: FlexPosition | FlexEnum);
  /** The column gap between flex items. */
  get flexGapColumn(): number;
  set flexGapColumn(value: MeasurementValue);
}


/**
 * The broadcast proxy for {@link FlexLayoutAttributeOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FlexLayoutAttributeOption} there.
 */
export interface FlexLayoutAttributeOptionPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (ObjectStyle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FlexLayoutAttributeOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FlexLayoutAttributeOptionPlural, 'plural'>);
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
  readonly constructorName: 'FlexLayoutAttributeOption';
  /** Resolves the proxy into the individual {@link FlexLayoutAttributeOption} objects it stands for. */
  getElements(): FlexLayoutAttributeOption[];
  /** The width behavior of the flex container. */
  get flexWidthMode(): (FlexWidthHeightMode | FlexEnum)[];
  set flexWidthMode(value: FlexWidthHeightMode | FlexEnum);
  /** The height behavior of the flex container. */
  get flexHeightMode(): (FlexWidthHeightMode | FlexEnum)[];
  set flexHeightMode(value: FlexWidthHeightMode | FlexEnum);
  /** The direction of the flex container. */
  get flexDirection(): (FlexDirection)[];
  set flexDirection(value: FlexDirection);
  /** Whether flex items are forced onto one line or can wrap onto multiple lines. */
  get flexWrap(): (FlexWrap)[];
  set flexWrap(value: FlexWrap);
  /** Defines how the browser distributes space between and around content items along the main-axis. */
  get justifyContent(): (FlexPosition | FlexSpacing)[];
  set justifyContent(value: FlexPosition | FlexSpacing);
  /** Defines the default behavior for how flex items are laid out along the cross axis. */
  get alignItems(): (FlexPosition | FlexEnum)[];
  set alignItems(value: FlexPosition | FlexEnum);
  /** The top padding of the flex container. */
  get flexPaddingTop(): (number)[];
  set flexPaddingTop(value: MeasurementValue);
  /** The right padding of the flex container. */
  get flexPaddingRight(): (number)[];
  set flexPaddingRight(value: MeasurementValue);
  /** The bottom padding of the flex container. */
  get flexPaddingBottom(): (number)[];
  set flexPaddingBottom(value: MeasurementValue);
  /** The left padding of the flex container. */
  get flexPaddingLeft(): (number)[];
  set flexPaddingLeft(value: MeasurementValue);
  /** The row gap between flex items. */
  get flexGapRow(): (number)[];
  set flexGapRow(value: MeasurementValue);
  /** Aligns a flex container's lines within when there is extra space in the cross-axis. */
  get alignContent(): (FlexPosition | FlexEnum)[];
  set alignContent(value: FlexPosition | FlexEnum);
  /** The column gap between flex items. */
  get flexGapColumn(): (number)[];
  set flexGapColumn(value: MeasurementValue);
}
