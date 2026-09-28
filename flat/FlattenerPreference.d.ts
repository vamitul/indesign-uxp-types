/**
 * FlattenerPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Spread } from './Spread';
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
 * Settings controlling how transparency is flattened to rasterized and vector
 * artwork when the spread is printed or exported — rasterization balance,
 * resolution, and stroke/text handling.
 */
export interface FlattenerPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Spread;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<FlattenerPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FlattenerPreference, 'single'>);
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
  readonly constructorName: 'FlattenerPreference';
  /** Resolves the proxy into the individual {@link FlattenerPreference} objects it stands for. */
  getElements(): FlattenerPreference[];
  /** The amount of vector artwork to rasterize during flattening, specified as an enumerator or as a percentage in the range 0 to 100. */
  get rasterVectorBalance(): FlattenerLevel | number;
  set rasterVectorBalance(value: FlattenerLevel | number);
  /** The resolution for vector objects rasterized as a result of flattening. (Range: 1 to 9600) See {@link rasterVectorBalance}. */
  get lineArtAndTextResolution(): number;
  set lineArtAndTextResolution(value: number);
  /**
   * The resolution for gradients rasterized as a result of flattening and for drop shadow and
   * feathers when printed or exported.
   *
   * (Range: 0 to 1200) Note: Resolutions higher than 300 ppi increase file size and printing
   * time but generally do not improve the image quality.
   */
  get gradientAndMeshResolution(): number;
  set gradientAndMeshResolution(value: number);
  /** If true, ensures that the boundaries between vector and rasterized artwork fall along object paths. */
  get clipComplexRegions(): boolean;
  set clipComplexRegions(value: boolean);
  /**
   * If true, converts all strokes to outlines and ensures that stroke widths remain constant
   * during flattening.
   *
   * Note: Can cause thin strokes to appear slightly thicker than their original width.
   * Affects all strokes, not only strokes involved in the transparency.
   */
  get convertAllStrokesToOutlines(): boolean;
  set convertAllStrokesToOutlines(value: boolean);
  /**
   * If true, converts all text to outlines and discards all type glyph information on spreads
   * with transparency; ensures that the width of text strokes remains constant during
   * flattening.
   *
   * Note: Can cause small fonts to appear slightly thicker when viewed in Acrobat or printed
   * on low-quality desktop printers, but does not affect type quality when printed on
   * high-resolution printers or imagesetters.
   */
  get convertAllTextToOutlines(): boolean;
  set convertAllTextToOutlines(value: boolean);
}


/**
 * The broadcast proxy for {@link FlattenerPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FlattenerPreference} there.
 */
export interface FlattenerPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Spread)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FlattenerPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FlattenerPreferencePlural, 'plural'>);
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
  readonly constructorName: 'FlattenerPreference';
  /** Resolves the proxy into the individual {@link FlattenerPreference} objects it stands for. */
  getElements(): FlattenerPreference[];
  /** The amount of vector artwork to rasterize during flattening, specified as an enumerator or as a percentage in the range 0 to 100. */
  get rasterVectorBalance(): (FlattenerLevel | number)[];
  set rasterVectorBalance(value: FlattenerLevel | number);
  /** The resolution for vector objects rasterized as a result of flattening. (Range: 1 to 9600) See {@link rasterVectorBalance}. */
  get lineArtAndTextResolution(): (number)[];
  set lineArtAndTextResolution(value: number);
  /**
   * The resolution for gradients rasterized as a result of flattening and for drop shadow and
   * feathers when printed or exported.
   *
   * (Range: 0 to 1200) Note: Resolutions higher than 300 ppi increase file size and printing
   * time but generally do not improve the image quality.
   */
  get gradientAndMeshResolution(): (number)[];
  set gradientAndMeshResolution(value: number);
  /** If true, ensures that the boundaries between vector and rasterized artwork fall along object paths. */
  get clipComplexRegions(): (boolean)[];
  set clipComplexRegions(value: boolean);
  /**
   * If true, converts all strokes to outlines and ensures that stroke widths remain constant
   * during flattening.
   *
   * Note: Can cause thin strokes to appear slightly thicker than their original width.
   * Affects all strokes, not only strokes involved in the transparency.
   */
  get convertAllStrokesToOutlines(): (boolean)[];
  set convertAllStrokesToOutlines(value: boolean);
  /**
   * If true, converts all text to outlines and discards all type glyph information on spreads
   * with transparency; ensures that the width of text strokes remains constant during
   * flattening.
   *
   * Note: Can cause small fonts to appear slightly thicker when viewed in Acrobat or printed
   * on low-quality desktop printers, but does not affect type quality when printed on
   * high-resolution printers or imagesetters.
   */
  get convertAllTextToOutlines(): (boolean)[];
  set convertAllTextToOutlines(value: boolean);
}
