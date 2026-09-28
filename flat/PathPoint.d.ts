/**
 * PathPoint.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Path } from './Path';
import type { PointType } from './Enums/PointType';
import type { MeasurementValue } from './_base/Types';
import type { JoinOptions } from './Enums/JoinOptions';
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
 * A single anchor point on a {@link Path}, with its incoming and outgoing
 * Bézier direction handles.
 */
export interface PathPoint {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Path;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<PathPoint, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PathPoint, 'single'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'PathPoint';
  /** Resolves the proxy into the individual {@link PathPoint} objects it stands for. */
  getElements(): PathPoint[];
  /** How the path's curvature is constrained at this point (corner, smooth, or symmetrical). */
  get pointType(): PointType;
  set pointType(value: PointType);
  /** The point's location on the page, as `[x, y]`. */
  get anchor(): number[];
  set anchor(value: MeasurementValue[]);
  /** The incoming direction handle, controlling the curve of the segment preceding this point, as `[x, y]`. */
  get leftDirection(): number[];
  set leftDirection(value: MeasurementValue[]);
  /** The outgoing direction handle, controlling the curve of the segment following this point, as `[x, y]`. */
  get rightDirection(): number[];
  set rightDirection(value: MeasurementValue[]);
  /** Deletes the path point. */
  remove(): void;
  /**
   * Joins this path point to another end point, combining their paths into a
   * single path on a single page item.
   * @param reference The path point to join to.
   * @param given How the two segments are joined.
   */
  join(reference: PathPoint, given?: JoinOptions): void;
}


/**
 * The broadcast proxy for {@link PathPoint} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PathPoint} there.
 */
export interface PathPointPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Path)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<PathPointPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PathPointPlural, 'plural'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'PathPoint';
  /** Resolves the proxy into the individual {@link PathPoint} objects it stands for. */
  getElements(): PathPoint[];
  /** How the path's curvature is constrained at this point (corner, smooth, or symmetrical). */
  get pointType(): (PointType)[];
  set pointType(value: PointType);
  /** The point's location on the page, as `[x, y]`. */
  get anchor(): (number[])[];
  set anchor(value: MeasurementValue[]);
  /** The incoming direction handle, controlling the curve of the segment preceding this point, as `[x, y]`. */
  get leftDirection(): (number[])[];
  set leftDirection(value: MeasurementValue[]);
  /** The outgoing direction handle, controlling the curve of the segment following this point, as `[x, y]`. */
  get rightDirection(): (number[])[];
  set rightDirection(value: MeasurementValue[]);
  /** Deletes the path point. */
  remove(): (void)[];
  /**
   * Joins this path point to another end point, combining their paths into a
   * single path on a single page item.
   * @param reference The path point to join to.
   * @param given How the two segments are joined.
   */
  join(reference: PathPoint, given?: JoinOptions): (void)[];
}
