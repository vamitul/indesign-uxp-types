/**
 * TrapPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { EndJoin } from './Enums/EndJoin';
import type { TrapEndTypes } from './Enums/TrapEndTypes';
import type { TrapImagePlacementTypes } from './Enums/TrapImagePlacementTypes';
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
 * A named set of trapping settings, applied when trapping a document for
 * separations-based printing.
 */
export interface TrapPreset {
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
  get properties(): PropertiesGetter<TrapPreset, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TrapPreset, 'single'>);
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
  readonly constructorName: 'TrapPreset';
  /** Resolves the proxy into the individual {@link TrapPreset} objects it stands for. */
  getElements(): TrapPreset[];
  /** The unique ID of the trap preset. */
  readonly id: number;
  /** The default trap width, used for all colors except those involving solid black. */
  get defaultTrapWidth(): number;
  set defaultTrapWidth(value: MeasurementValue);
  /** The trap width used when trapping against solid black. */
  get blackWidth(): number;
  set blackWidth(value: MeasurementValue);
  /** The join style used at trap corners. */
  get trapJoin(): EndJoin;
  set trapJoin(value: EndJoin);
  /** The shape used at the intersection of three-way traps. */
  get trapEnd(): TrapEndTypes;
  set trapEnd(value: TrapEndTypes);
  /** If `true`, keeps vector objects overlapping (rather than knocking out) bitmap images. */
  get objectsToImages(): boolean;
  set objectsToImages(value: boolean);
  /** If `true`, traps along the boundary of overlapping or abutting bitmap images. */
  get imagesToImages(): boolean;
  set imagesToImages(value: boolean);
  /** If `true`, traps among colors within individual bitmap images. */
  get internalImages(): boolean;
  set internalImages(value: boolean);
  /** If `true`, traps one-bit images to abutting objects. */
  get oneBitImages(): boolean;
  set oneBitImages(value: boolean);
  /** The trap placement between vector objects and bitmap images. */
  get imagePlacement(): TrapImagePlacementTypes;
  set imagePlacement(value: TrapImagePlacementTypes);
  /**
   * The amount, as a percentage, that components of abutting colors must
   * vary before a trap is created.
   * @param value Range: `1`–`100`.
   */
  get stepThreshold(): number;
  set stepThreshold(value: number);
  /**
   * The minimum amount of black ink, as a percentage, required before
   * {@link blackWidth} is applied instead of {@link defaultTrapWidth}.
   * @param value Range: `0`–`100`.
   */
  get blackColorThreshold(): number;
  set blackColorThreshold(value: number);
  /**
   * The neutral density value at or above which an ink is considered black.
   * @param value Range: `.001`–`10`.
   */
  get blackDensity(): number;
  set blackDensity(value: number);
  /**
   * The difference, as a percentage, between the neutral densities of
   * abutting colors at which the trap moves from the darker color's edge
   * toward the centerline.
   * @param value Range: `0`–`100`.
   */
  get slidingTrapThreshold(): number;
  set slidingTrapThreshold(value: number);
  /**
   * The degree, as a percentage, to which components from abutting colors
   * reduce the trap color. `0` makes a trap whose neutral density equals
   * that of the darker color.
   * @param value Range: `0`–`100`.
   */
  get colorReduction(): number;
  set colorReduction(value: number);
  /**
   * Deletes the trap preset.
   * @param replacingWith The trap preset to apply in place of the deleted one.
   */
  remove(replacingWith: TrapPreset | string): void;
  /** Duplicates the trap preset. */
  duplicate(): TrapPreset;
}


/**
 * The broadcast proxy for {@link TrapPreset} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TrapPreset} there.
 */
export interface TrapPresetPlural {
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
  get properties(): (PropertiesGetter<TrapPresetPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TrapPresetPlural, 'plural'>);
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
  readonly constructorName: 'TrapPreset';
  /** Resolves the proxy into the individual {@link TrapPreset} objects it stands for. */
  getElements(): TrapPreset[];
  /** The unique ID of the trap preset. */
  readonly id: (number)[];
  /** The default trap width, used for all colors except those involving solid black. */
  get defaultTrapWidth(): (number)[];
  set defaultTrapWidth(value: MeasurementValue);
  /** The trap width used when trapping against solid black. */
  get blackWidth(): (number)[];
  set blackWidth(value: MeasurementValue);
  /** The join style used at trap corners. */
  get trapJoin(): (EndJoin)[];
  set trapJoin(value: EndJoin);
  /** The shape used at the intersection of three-way traps. */
  get trapEnd(): (TrapEndTypes)[];
  set trapEnd(value: TrapEndTypes);
  /** If `true`, keeps vector objects overlapping (rather than knocking out) bitmap images. */
  get objectsToImages(): (boolean)[];
  set objectsToImages(value: boolean);
  /** If `true`, traps along the boundary of overlapping or abutting bitmap images. */
  get imagesToImages(): (boolean)[];
  set imagesToImages(value: boolean);
  /** If `true`, traps among colors within individual bitmap images. */
  get internalImages(): (boolean)[];
  set internalImages(value: boolean);
  /** If `true`, traps one-bit images to abutting objects. */
  get oneBitImages(): (boolean)[];
  set oneBitImages(value: boolean);
  /** The trap placement between vector objects and bitmap images. */
  get imagePlacement(): (TrapImagePlacementTypes)[];
  set imagePlacement(value: TrapImagePlacementTypes);
  /**
   * The amount, as a percentage, that components of abutting colors must
   * vary before a trap is created.
   * @param value Range: `1`–`100`.
   */
  get stepThreshold(): (number)[];
  set stepThreshold(value: number);
  /**
   * The minimum amount of black ink, as a percentage, required before
   * {@link blackWidth} is applied instead of {@link defaultTrapWidth}.
   * @param value Range: `0`–`100`.
   */
  get blackColorThreshold(): (number)[];
  set blackColorThreshold(value: number);
  /**
   * The neutral density value at or above which an ink is considered black.
   * @param value Range: `.001`–`10`.
   */
  get blackDensity(): (number)[];
  set blackDensity(value: number);
  /**
   * The difference, as a percentage, between the neutral densities of
   * abutting colors at which the trap moves from the darker color's edge
   * toward the centerline.
   * @param value Range: `0`–`100`.
   */
  get slidingTrapThreshold(): (number)[];
  set slidingTrapThreshold(value: number);
  /**
   * The degree, as a percentage, to which components from abutting colors
   * reduce the trap color. `0` makes a trap whose neutral density equals
   * that of the darker color.
   * @param value Range: `0`–`100`.
   */
  get colorReduction(): (number)[];
  set colorReduction(value: number);
  /**
   * Deletes the trap preset.
   * @param replacingWith The trap preset to apply in place of the deleted one.
   */
  remove(replacingWith: TrapPreset | string): (void)[];
  /** Duplicates the trap preset. */
  duplicate(): (TrapPreset)[];
}
