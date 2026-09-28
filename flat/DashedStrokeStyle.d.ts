/**
 * DashedStrokeStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { StrokeStyle } from './StrokeStyle';
import type { MeasurementValue } from './_base/Types';
import type { StrokeCornerAdjustment } from './Enums/StrokeCornerAdjustment';
import type { EndCap } from './Enums/EndCap';
import type { DocumentOrApplication } from './_base/Parents';
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
 * A stroke style of alternating dashes and gaps.
 */
export interface DashedStrokeStyle {
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
  get properties(): PropertiesGetter<DashedStrokeStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DashedStrokeStyle, 'single'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The unique ID of the stroke style, stable across saves and reopens. */
  readonly id: number;
  /** The kind of stroke pattern — dashed, dotted, or striped. */
  readonly strokeStyleType: string;
  /**
   * Deletes the stroke style.
   * @param replacingWith The stroke style (or its name) to apply in place of the deleted style, wherever it was in use.
   */
  remove(replacingWith?: StrokeStyle | string): void;
  /** The object's DOM class name. */
  readonly constructorName: 'DashedStrokeStyle';
  /** Resolves the proxy into the individual {@link DashedStrokeStyle} objects it stands for. */
  getElements(): DashedStrokeStyle[];
  /**
   * The dash/gap pattern, as `[dash1, gap1, dash2, gap2, …]`. Up to 10 values.
   */
  get dashArray(): number[];
  set dashArray(value: MeasurementValue[]);
  /** How dashes are adjusted at corners to avoid clipping. */
  get strokeCornerAdjustment(): StrokeCornerAdjustment;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The shape of the ends of each dash segment. */
  get endCap(): EndCap;
  set endCap(value: EndCap);
  /** Duplicates the dashed stroke style. */
  duplicate(): DashedStrokeStyle;
}


/**
 * The broadcast proxy for {@link DashedStrokeStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link DashedStrokeStyle} there.
 */
export interface DashedStrokeStylePlural {
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
  get properties(): (PropertiesGetter<DashedStrokeStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DashedStrokeStylePlural, 'plural'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The unique ID of the stroke style, stable across saves and reopens. */
  readonly id: (number)[];
  /** The kind of stroke pattern — dashed, dotted, or striped. */
  readonly strokeStyleType: (string)[];
  /**
   * Deletes the stroke style.
   * @param replacingWith The stroke style (or its name) to apply in place of the deleted style, wherever it was in use.
   */
  remove(replacingWith?: StrokeStyle | string): (void)[];
  /** The object's DOM class name. */
  readonly constructorName: 'DashedStrokeStyle';
  /** Resolves the proxy into the individual {@link DashedStrokeStyle} objects it stands for. */
  getElements(): DashedStrokeStyle[];
  /**
   * The dash/gap pattern, as `[dash1, gap1, dash2, gap2, …]`. Up to 10 values.
   */
  get dashArray(): (number[])[];
  set dashArray(value: MeasurementValue[]);
  /** How dashes are adjusted at corners to avoid clipping. */
  get strokeCornerAdjustment(): (StrokeCornerAdjustment)[];
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The shape of the ends of each dash segment. */
  get endCap(): (EndCap)[];
  set endCap(value: EndCap);
  /** Duplicates the dashed stroke style. */
  duplicate(): (DashedStrokeStyle)[];
}
