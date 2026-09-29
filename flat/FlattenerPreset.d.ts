/**
 * FlattenerPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { FlattenerLevel } from './Enums/FlattenerLevel';
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
 * A named set of transparency-flattening settings, applied when flattening
 * transparent artwork for printing, export, or per-spread overrides.
 */
export interface FlattenerPreset {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<FlattenerPreset, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FlattenerPreset, 'single'>);
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
  readonly constructorName: 'FlattenerPreset';
  /** Resolves the proxy into the individual {@link FlattenerPreset} objects it stands for. */
  getElements(): FlattenerPreset[];
  /** The unique ID of the flattener preset. */
  readonly id: number;
  /**
   * The amount of vector artwork to rasterize during flattening, as a level
   * or as a percentage.
   */
  get rasterVectorBalance(): FlattenerLevel | number;
  set rasterVectorBalance(value: FlattenerLevel | number);
  /**
   * The resolution (in ppi) for vector objects rasterized during flattening.
   * Governed by {@link rasterVectorBalance}.
   */
  get lineArtAndTextResolution(): number;
  set lineArtAndTextResolution(value: number);
  /**
   * The resolution (in ppi) for gradients rasterized during flattening, and
   * for drop shadows and feathers when printed or exported. Resolutions
   * above 300 increase file size and processing time without a visible
   * quality gain.
   */
  get gradientAndMeshResolution(): number;
  set gradientAndMeshResolution(value: number);
  /** If `true`, keeps the boundaries between vector and rasterized artwork aligned to object paths. */
  get clipComplexRegions(): boolean;
  set clipComplexRegions(value: boolean);
  /**
   * If `true`, converts all strokes to outlines so their width stays
   * constant during flattening. Affects every stroke in the document, not
   * only strokes involved in transparency, and can make thin strokes look
   * slightly heavier.
   */
  get convertAllStrokesToOutlines(): boolean;
  set convertAllStrokesToOutlines(value: boolean);
  /**
   * If `true`, converts all text on transparent spreads to outlines and discards glyph
   * information, keeping stroke widths constant during flattening.
   *
   * Can make small fonts look slightly heavier in Acrobat or on low-resolution printers, but
   * has no effect on high-resolution output.
   */
  get convertAllTextToOutlines(): boolean;
  set convertAllTextToOutlines(value: boolean);
  /** Deletes the flattener preset. */
  remove(): void;
  /** Duplicates the flattener preset. */
  duplicate(): FlattenerPreset;
}


/**
 * The broadcast proxy for {@link FlattenerPreset} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FlattenerPreset} there.
 */
export interface FlattenerPresetPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FlattenerPresetPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FlattenerPresetPlural, 'plural'>);
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
  readonly constructorName: 'FlattenerPreset';
  /** Resolves the proxy into the individual {@link FlattenerPreset} objects it stands for. */
  getElements(): FlattenerPreset[];
  /** The unique ID of the flattener preset. */
  readonly id: (number)[];
  /**
   * The amount of vector artwork to rasterize during flattening, as a level
   * or as a percentage.
   */
  get rasterVectorBalance(): (FlattenerLevel | number)[];
  set rasterVectorBalance(value: FlattenerLevel | number);
  /**
   * The resolution (in ppi) for vector objects rasterized during flattening.
   * Governed by {@link rasterVectorBalance}.
   */
  get lineArtAndTextResolution(): (number)[];
  set lineArtAndTextResolution(value: number);
  /**
   * The resolution (in ppi) for gradients rasterized during flattening, and
   * for drop shadows and feathers when printed or exported. Resolutions
   * above 300 increase file size and processing time without a visible
   * quality gain.
   */
  get gradientAndMeshResolution(): (number)[];
  set gradientAndMeshResolution(value: number);
  /** If `true`, keeps the boundaries between vector and rasterized artwork aligned to object paths. */
  get clipComplexRegions(): (boolean)[];
  set clipComplexRegions(value: boolean);
  /**
   * If `true`, converts all strokes to outlines so their width stays
   * constant during flattening. Affects every stroke in the document, not
   * only strokes involved in transparency, and can make thin strokes look
   * slightly heavier.
   */
  get convertAllStrokesToOutlines(): (boolean)[];
  set convertAllStrokesToOutlines(value: boolean);
  /**
   * If `true`, converts all text on transparent spreads to outlines and discards glyph
   * information, keeping stroke widths constant during flattening.
   *
   * Can make small fonts look slightly heavier in Acrobat or on low-resolution printers, but
   * has no effect on high-resolution output.
   */
  get convertAllTextToOutlines(): (boolean)[];
  set convertAllTextToOutlines(value: boolean);
  /** Deletes the flattener preset. */
  remove(): (void)[];
  /** Duplicates the flattener preset. */
  duplicate(): (FlattenerPreset)[];
}
