/**
 * FindChangeDirectionalFeatherSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { DirectionalFeatherSetting } from './DirectionalFeatherSetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FollowShapeModeOptions } from './Enums/FollowShapeModeOptions';
import type { InDesignEventMap } from './_base/Events';
import type { MeasurementValue } from './_base/Types';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TransparencySetting } from './TransparencySetting';
/**
 * The same {@link DirectionalFeatherSetting} settings, applied as find/change criteria.
 */
export interface FindChangeDirectionalFeatherSetting {
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
  get properties(): PropertiesGetter<FindChangeDirectionalFeatherSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FindChangeDirectionalFeatherSetting, 'single'>);
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
  /** If true, the directional feather effect is applied. */
  get applied(): boolean;
  set applied(value: boolean);
  /** The feather width (in pixels) on the left side of the object. */
  get leftWidth(): number;
  set leftWidth(value: MeasurementValue);
  /** The feather width (in pixels) on the right side of the object. (Range: .2 to 250). */
  get rightWidth(): number;
  set rightWidth(value: MeasurementValue);
  /** The feather width (in pixels) on the top side of the object. (Range: .2 to 250). */
  get topWidth(): number;
  set topWidth(value: MeasurementValue);
  /** The feather width (in pixels) on the bottom side of the object. (Range: .2 to 250). */
  get bottomWidth(): number;
  set bottomWidth(value: MeasurementValue);
  /** The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100). */
  get chokeAmount(): number;
  set chokeAmount(value: number);
  /** The angle of the feather. (Range: 180 to -180). */
  get angle(): number;
  set angle(value: number);
  /** The shape-following algorithm applied to the feather. */
  get followShapeMode(): FollowShapeModeOptions;
  set followShapeMode(value: FollowShapeModeOptions);
  /** The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100). */
  get noise(): number;
  set noise(value: number);
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeDirectionalFeatherSetting';
  /** Resolves the proxy into the individual {@link FindChangeDirectionalFeatherSetting} objects it stands for. */
  getElements(): FindChangeDirectionalFeatherSetting[];
}


/**
 * The broadcast proxy for {@link FindChangeDirectionalFeatherSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FindChangeDirectionalFeatherSetting} there.
 */
export interface FindChangeDirectionalFeatherSettingPlural {
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
  get properties(): (PropertiesGetter<FindChangeDirectionalFeatherSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FindChangeDirectionalFeatherSettingPlural, 'plural'>);
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
  /** If true, the directional feather effect is applied. */
  get applied(): (boolean)[];
  set applied(value: boolean);
  /** The feather width (in pixels) on the left side of the object. */
  get leftWidth(): (number)[];
  set leftWidth(value: MeasurementValue);
  /** The feather width (in pixels) on the right side of the object. (Range: .2 to 250). */
  get rightWidth(): (number)[];
  set rightWidth(value: MeasurementValue);
  /** The feather width (in pixels) on the top side of the object. (Range: .2 to 250). */
  get topWidth(): (number)[];
  set topWidth(value: MeasurementValue);
  /** The feather width (in pixels) on the bottom side of the object. (Range: .2 to 250). */
  get bottomWidth(): (number)[];
  set bottomWidth(value: MeasurementValue);
  /** The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100). */
  get chokeAmount(): (number)[];
  set chokeAmount(value: number);
  /** The angle of the feather. (Range: 180 to -180). */
  get angle(): (number)[];
  set angle(value: number);
  /** The shape-following algorithm applied to the feather. */
  get followShapeMode(): (FollowShapeModeOptions)[];
  set followShapeMode(value: FollowShapeModeOptions);
  /** The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100). */
  get noise(): (number)[];
  set noise(value: number);
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeDirectionalFeatherSetting';
  /** Resolves the proxy into the individual {@link FindChangeDirectionalFeatherSetting} objects it stands for. */
  getElements(): FindChangeDirectionalFeatherSetting[];
}
