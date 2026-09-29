/**
 * FindChangeGradientFeatherSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { OpacityGradientStops } from './OpacityGradientStops';
import type { GradientType } from './Enums/GradientType';
import type { NothingEnum } from './Enums/NothingEnum';
import type { GradientFeatherSetting } from './GradientFeatherSetting';
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
 * Gradient feather search/replace criteria — the same soft fade to transparent as
 * {@link GradientFeatherSetting}, matched or applied by find/change.
 */
export interface FindChangeGradientFeatherSetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: FindChangeTransparencySetting | FindChangeStrokeTransparencySetting | FindChangeFillTransparencySetting | FindChangeContentTransparencySetting;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<FindChangeGradientFeatherSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FindChangeGradientFeatherSetting, 'single'>);
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
  readonly constructorName: 'FindChangeGradientFeatherSetting';
  /** Resolves the proxy into the individual {@link FindChangeGradientFeatherSetting} objects it stands for. */
  getElements(): FindChangeGradientFeatherSetting[];
  /** A collection of opacity gradient stops. */
  readonly opacityGradientStops: OpacityGradientStops;
  /** If true, the gradient feather effect is applied. */
  get applied(): boolean | NothingEnum.NOTHING;
  set applied(value: boolean | NothingEnum.NOTHING);
  /** Whether the fade follows a straight line ({@link GradientType.LINEAR}) or radiates from a point ({@link GradientType.RADIAL}). */
  get type(): GradientType | NothingEnum.NOTHING;
  set type(value: GradientType | NothingEnum.NOTHING);
  /** The angle of the gradient feather. */
  get angle(): number | NothingEnum.NOTHING;
  set angle(value: number | NothingEnum.NOTHING);
  /** The length of the axial gradient, or radius of the radial gradient. */
  get length(): number | NothingEnum.NOTHING;
  set length(value: MeasurementValue | NothingEnum.NOTHING);
  /** The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y]. */
  get gradientStart(): number[] | NothingEnum.NOTHING;
  set gradientStart(value: number[] | NothingEnum.NOTHING);
  /** The hilite angle of the radial gradient feather. */
  get hiliteAngle(): number | NothingEnum.NOTHING;
  set hiliteAngle(value: number | NothingEnum.NOTHING);
  /** The hilite length of the radial gradient feather. */
  get hiliteLength(): number | NothingEnum.NOTHING;
  set hiliteLength(value: MeasurementValue | NothingEnum.NOTHING);
}


/**
 * The broadcast proxy for {@link FindChangeGradientFeatherSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FindChangeGradientFeatherSetting} there.
 */
export interface FindChangeGradientFeatherSettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (FindChangeTransparencySetting | FindChangeStrokeTransparencySetting | FindChangeFillTransparencySetting | FindChangeContentTransparencySetting)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FindChangeGradientFeatherSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FindChangeGradientFeatherSettingPlural, 'plural'>);
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
  readonly constructorName: 'FindChangeGradientFeatherSetting';
  /** Resolves the proxy into the individual {@link FindChangeGradientFeatherSetting} objects it stands for. */
  getElements(): FindChangeGradientFeatherSetting[];
  /** A collection of opacity gradient stops. */
  readonly opacityGradientStops: OpacityGradientStops;
  /** If true, the gradient feather effect is applied. */
  get applied(): (boolean | NothingEnum.NOTHING)[];
  set applied(value: boolean | NothingEnum.NOTHING);
  /** Whether the fade follows a straight line ({@link GradientType.LINEAR}) or radiates from a point ({@link GradientType.RADIAL}). */
  get type(): (GradientType | NothingEnum.NOTHING)[];
  set type(value: GradientType | NothingEnum.NOTHING);
  /** The angle of the gradient feather. */
  get angle(): (number | NothingEnum.NOTHING)[];
  set angle(value: number | NothingEnum.NOTHING);
  /** The length of the axial gradient, or radius of the radial gradient. */
  get length(): (number | NothingEnum.NOTHING)[];
  set length(value: MeasurementValue | NothingEnum.NOTHING);
  /** The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y]. */
  get gradientStart(): (number[] | NothingEnum.NOTHING)[];
  set gradientStart(value: number[] | NothingEnum.NOTHING);
  /** The hilite angle of the radial gradient feather. */
  get hiliteAngle(): (number | NothingEnum.NOTHING)[];
  set hiliteAngle(value: number | NothingEnum.NOTHING);
  /** The hilite length of the radial gradient feather. */
  get hiliteLength(): (number | NothingEnum.NOTHING)[];
  set hiliteLength(value: MeasurementValue | NothingEnum.NOTHING);
}
