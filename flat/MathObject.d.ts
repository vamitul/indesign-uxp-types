/**
 * MathObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Rectangle } from './Rectangle';
import type { Swatch } from './Swatch';
import type { NothingEnum } from './Enums/NothingEnum';
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
 * A MathML equation converted to InDesign objects, hosted inside the
 * auto-generated {@link Rectangle} that carries it.
 *
 * **Not a page item**, despite appearing on a page. It has no geometry, stroke,
 * fill, transparency or animation, and it is not reached through `pageItems` —
 * only through `Rectangle.mathObjects` or `Document.mathObjects`. Its parent is
 * always the `Rectangle` that hosts it.
 */
export interface MathObject {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Rectangle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<MathObject, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<MathObject, 'single'>);
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
  readonly constructorName: 'MathObject';
  /** Resolves the proxy into the individual {@link MathObject} objects it stands for. */
  getElements(): MathObject[];
  /** The unique numeric ID of the math object within its document. */
  readonly id: number;
  /** The object's name — an alias for {@link label}, with no uniqueness constraint. */
  get name(): string;
  set name(value: string);
  /** Whether this SVG object is a MathML equation rather than ordinary vector art. */
  readonly isMathMLObject: boolean;
  /** The font size, in points, used to render the equation. */
  get appliedMathMLFontSize(): number;
  set appliedMathMLFontSize(value: number);
  /** The swatch used to color the equation. Assign a {@link Swatch}, its name, or {@link NothingEnum.NOTHING}. RGB, CMYK, LAB, and HSB swatches are supported. */
  get appliedMathMLSwatch(): Swatch | NothingEnum.NOTHING;
  set appliedMathMLSwatch(value: Swatch | string | NothingEnum.NOTHING);
  /** The equation's color as `[r, g, b]`, each in the range `0`–`255`. */
  get appliedMathMLRgbColor(): number[];
  set appliedMathMLRgbColor(value: number[]);
  /** The tint of the applied color, as a percentage. Range `0`–`100`. */
  get tintValue(): number;
  set tintValue(value: number);
  /** The equation's MathML source description. Empty string if this is not a MathML object. */
  get mathmlDescription(): string;
  set mathmlDescription(value: string);
}


/**
 * The broadcast proxy for {@link MathObject} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link MathObject} there.
 */
export interface MathObjectPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Rectangle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<MathObjectPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<MathObjectPlural, 'plural'>);
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
  readonly constructorName: 'MathObject';
  /** Resolves the proxy into the individual {@link MathObject} objects it stands for. */
  getElements(): MathObject[];
  /** The unique numeric ID of the math object within its document. */
  readonly id: (number)[];
  /** The object's name — an alias for {@link label}, with no uniqueness constraint. */
  get name(): (string)[];
  set name(value: string);
  /** Whether this SVG object is a MathML equation rather than ordinary vector art. */
  readonly isMathMLObject: (boolean)[];
  /** The font size, in points, used to render the equation. */
  get appliedMathMLFontSize(): (number)[];
  set appliedMathMLFontSize(value: number);
  /** The swatch used to color the equation. Assign a {@link Swatch}, its name, or {@link NothingEnum.NOTHING}. RGB, CMYK, LAB, and HSB swatches are supported. */
  get appliedMathMLSwatch(): (Swatch | NothingEnum.NOTHING)[];
  set appliedMathMLSwatch(value: Swatch | string | NothingEnum.NOTHING);
  /** The equation's color as `[r, g, b]`, each in the range `0`–`255`. */
  get appliedMathMLRgbColor(): (number[])[];
  set appliedMathMLRgbColor(value: number[]);
  /** The tint of the applied color, as a percentage. Range `0`–`100`. */
  get tintValue(): (number)[];
  set tintValue(value: number);
  /** The equation's MathML source description. Empty string if this is not a MathML object. */
  get mathmlDescription(): (string)[];
  set mathmlDescription(value: string);
}
