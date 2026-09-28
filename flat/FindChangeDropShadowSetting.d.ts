/**
 * FindChangeDropShadowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { DropShadowSetting } from './DropShadowSetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { Swatch } from './Swatch';
import type { BlendMode } from './Enums/BlendMode';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { InDesignEventMap } from './_base/Events';
import type { MeasurementValue } from './_base/Types';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { ShadowMode } from './Enums/ShadowMode';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TransparencySetting } from './TransparencySetting';
/**
 * The same {@link DropShadowSetting} settings, applied as find/change criteria.
 */
export interface FindChangeDropShadowSetting {
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
  get properties(): PropertiesGetter<FindChangeDropShadowSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FindChangeDropShadowSetting, 'single'>);
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
  /** The distance between the item and its shadow. */
  get distance(): number;
  set distance(value: MeasurementValue);
  /** The angle at which the shadow is thrown. */
  get angle(): number;
  set angle(value: number);
  /** The shadow mode. */
  get mode(): ShadowMode;
  set mode(value: ShadowMode);
  /** The blending mode for the drop shadow effect. */
  get blendMode(): BlendMode;
  set blendMode(value: BlendMode);
  /** The opacity of the drop shadow (as a percentage). (Range: 0 to 100). */
  get opacity(): number;
  set opacity(value: number);
  /**
   * The horizontal offset of the drop shadow.
   *
   * Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for
   * inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for
   * ciceros: -78c2.389 to 78c2.389.
   */
  get xOffset(): number;
  set xOffset(value: MeasurementValue);
  /**
   * The vertical offset of the drop shadow.
   *
   * (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for
   * inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for
   * ciceros: -78c2.389 to 78c2.389).
   */
  get yOffset(): number;
  set yOffset(value: MeasurementValue);
  /** The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.). */
  get size(): number;
  set size(value: MeasurementValue);
  /** The {@link Swatch} applied to the drop shadow. */
  get effectColor(): Swatch;
  set effectColor(value: Swatch);
  /** The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100). */
  get noise(): number;
  set noise(value: number);
  /** The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100). */
  get spread(): number;
  set spread(value: number);
  /** If true, uses the global light angle. */
  get useGlobalLight(): boolean;
  set useGlobalLight(value: boolean);
  /** If true, the layer will knock out the drop shadow. */
  get knockedOut(): boolean;
  set knockedOut(value: boolean);
  /** If true, the drop shadow will take into account other non-shadow effects. */
  get honorOtherEffects(): boolean;
  set honorOtherEffects(value: boolean);
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeDropShadowSetting';
  /** Resolves the proxy into the individual {@link FindChangeDropShadowSetting} objects it stands for. */
  getElements(): FindChangeDropShadowSetting[];
}


/**
 * The broadcast proxy for {@link FindChangeDropShadowSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FindChangeDropShadowSetting} there.
 */
export interface FindChangeDropShadowSettingPlural {
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
  get properties(): (PropertiesGetter<FindChangeDropShadowSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FindChangeDropShadowSettingPlural, 'plural'>);
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
  /** The distance between the item and its shadow. */
  get distance(): (number)[];
  set distance(value: MeasurementValue);
  /** The angle at which the shadow is thrown. */
  get angle(): (number)[];
  set angle(value: number);
  /** The shadow mode. */
  get mode(): (ShadowMode)[];
  set mode(value: ShadowMode);
  /** The blending mode for the drop shadow effect. */
  get blendMode(): (BlendMode)[];
  set blendMode(value: BlendMode);
  /** The opacity of the drop shadow (as a percentage). (Range: 0 to 100). */
  get opacity(): (number)[];
  set opacity(value: number);
  /**
   * The horizontal offset of the drop shadow.
   *
   * Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for
   * inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for
   * ciceros: -78c2.389 to 78c2.389.
   */
  get xOffset(): (number)[];
  set xOffset(value: MeasurementValue);
  /**
   * The vertical offset of the drop shadow.
   *
   * (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for
   * inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for
   * ciceros: -78c2.389 to 78c2.389).
   */
  get yOffset(): (number)[];
  set yOffset(value: MeasurementValue);
  /** The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.). */
  get size(): (number)[];
  set size(value: MeasurementValue);
  /** The {@link Swatch} applied to the drop shadow. */
  get effectColor(): (Swatch)[];
  set effectColor(value: Swatch);
  /** The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100). */
  get noise(): (number)[];
  set noise(value: number);
  /** The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100). */
  get spread(): (number)[];
  set spread(value: number);
  /** If true, uses the global light angle. */
  get useGlobalLight(): (boolean)[];
  set useGlobalLight(value: boolean);
  /** If true, the layer will knock out the drop shadow. */
  get knockedOut(): (boolean)[];
  set knockedOut(value: boolean);
  /** If true, the drop shadow will take into account other non-shadow effects. */
  get honorOtherEffects(): (boolean)[];
  set honorOtherEffects(value: boolean);
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeDropShadowSetting';
  /** Resolves the proxy into the individual {@link FindChangeDropShadowSetting} objects it stands for. */
  getElements(): FindChangeDropShadowSetting[];
}
