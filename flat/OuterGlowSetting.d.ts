/**
 * OuterGlowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TransparencySetting } from './TransparencySetting';
import type { BlendMode } from './Enums/BlendMode';
import type { GlowTechnique } from './Enums/GlowTechnique';
import type { FindChangeOuterGlowSetting } from './FindChangeOuterGlowSetting';
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
 * Settings for the outer-glow effect — a glow that radiates outward from the
 * edges of the object or text it's applied to.
 */
export interface OuterGlowSetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<OuterGlowSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<OuterGlowSetting, 'single'>);
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
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeOuterGlowSetting'` when the object is a {@link FindChangeOuterGlowSetting}. */
  readonly constructorName: 'OuterGlowSetting' | 'FindChangeOuterGlowSetting';
  /** Resolves the proxy into the individual {@link OuterGlowSetting} objects it stands for. */
  getElements(): OuterGlowSetting[];
  /** If true, the outer glow effect is applied. */
  get applied(): boolean;
  set applied(value: boolean);
  /** The blending mode for the outer glow effect. */
  get blendMode(): BlendMode;
  set blendMode(value: BlendMode);
  /** The opacity of the outer glow (as a percentage). (Range: 0 to 100). */
  get opacity(): number;
  set opacity(value: number);
  /** The amount (as a percentage) of noise applied to the outer glow. (Range: 0 to 100). */
  get noise(): number;
  set noise(value: number);
  /**
   * The color applied to the outer glow, specified as a swatch (color, gradient, tint, or
   * mixed ink), or an array of color values.
   *
   * The color mode dictates the array values: for RGB, specify three values, each in the
   * range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a
   * percentage and each in the range 0 to 100, in the format [C,'single',Y,K]; for LAB, specify
   * three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range
   * -128 to 127.
   */
  get effectColor(): Swatch;
  set effectColor(value: Swatch);
  /** Whether the glow's edge is soft or precise. See {@link GlowTechnique}. */
  get technique(): GlowTechnique;
  set technique(value: GlowTechnique);
  /** The amount of spread (as a percentage of the outer glow size). (Range: 0 to 100). */
  get spread(): number;
  set spread(value: number);
  /** The size of the outer glow. */
  get size(): number;
  set size(value: MeasurementValue);
}


/**
 * The broadcast proxy for {@link OuterGlowSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link OuterGlowSetting} there.
 */
export interface OuterGlowSettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<OuterGlowSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<OuterGlowSettingPlural, 'plural'>);
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
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeOuterGlowSetting'` when the object is a {@link FindChangeOuterGlowSetting}. */
  readonly constructorName: 'OuterGlowSetting' | 'FindChangeOuterGlowSetting';
  /** Resolves the proxy into the individual {@link OuterGlowSetting} objects it stands for. */
  getElements(): OuterGlowSetting[];
  /** If true, the outer glow effect is applied. */
  get applied(): (boolean)[];
  set applied(value: boolean);
  /** The blending mode for the outer glow effect. */
  get blendMode(): (BlendMode)[];
  set blendMode(value: BlendMode);
  /** The opacity of the outer glow (as a percentage). (Range: 0 to 100). */
  get opacity(): (number)[];
  set opacity(value: number);
  /** The amount (as a percentage) of noise applied to the outer glow. (Range: 0 to 100). */
  get noise(): (number)[];
  set noise(value: number);
  /**
   * The color applied to the outer glow, specified as a swatch (color, gradient, tint, or
   * mixed ink), or an array of color values.
   *
   * The color mode dictates the array values: for RGB, specify three values, each in the
   * range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a
   * percentage and each in the range 0 to 100, in the format [C,'plural',Y,K]; for LAB, specify
   * three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range
   * -128 to 127.
   */
  get effectColor(): (Swatch)[];
  set effectColor(value: Swatch);
  /** Whether the glow's edge is soft or precise. See {@link GlowTechnique}. */
  get technique(): (GlowTechnique)[];
  set technique(value: GlowTechnique);
  /** The amount of spread (as a percentage of the outer glow size). (Range: 0 to 100). */
  get spread(): (number)[];
  set spread(value: number);
  /** The size of the outer glow. */
  get size(): (number)[];
  set size(value: MeasurementValue);
}
