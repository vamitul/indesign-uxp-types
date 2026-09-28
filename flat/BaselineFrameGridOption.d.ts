/**
 * BaselineFrameGridOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { ObjectStyle } from './ObjectStyle';
import type { TextFrame } from './TextFrame';
import type { BaselineFrameGridRelativeOption } from './Enums/BaselineFrameGridRelativeOption';
import type { UIColors } from './Enums/UIColors';
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
 * Settings for a custom baseline grid scoped to a single text frame, endnote
 * frame, or object style, distinct from the document's default grid.
 */
export interface BaselineFrameGridOption {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application | Document | TextFrame | EndnoteTextFrame | ObjectStyle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<BaselineFrameGridOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BaselineFrameGridOption, 'single'>);
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
  readonly constructorName: 'BaselineFrameGridOption';
  /** Resolves the proxy into the individual {@link BaselineFrameGridOption} objects it stands for. */
  getElements(): BaselineFrameGridOption[];
  /** If true, uses a custom baseline frame grid. */
  get useCustomBaselineFrameGrid(): boolean;
  set useCustomBaselineFrameGrid(value: boolean);
  /** The amount to offset the baseline grid. */
  get startingOffsetForBaselineFrameGrid(): number;
  set startingOffsetForBaselineFrameGrid(value: MeasurementValue);
  /** The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid. */
  get baselineFrameGridRelativeOption(): BaselineFrameGridRelativeOption;
  set baselineFrameGridRelativeOption(value: BaselineFrameGridRelativeOption);
  /** The distance between grid lines. */
  get baselineFrameGridIncrement(): number;
  set baselineFrameGridIncrement(value: MeasurementValue);
  /** The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. */
  get baselineFrameGridColor(): number[] | UIColors;
  set baselineFrameGridColor(value: number[] | UIColors);
}


/**
 * The broadcast proxy for {@link BaselineFrameGridOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link BaselineFrameGridOption} there.
 */
export interface BaselineFrameGridOptionPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application | Document | TextFrame | EndnoteTextFrame | ObjectStyle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<BaselineFrameGridOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BaselineFrameGridOptionPlural, 'plural'>);
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
  readonly constructorName: 'BaselineFrameGridOption';
  /** Resolves the proxy into the individual {@link BaselineFrameGridOption} objects it stands for. */
  getElements(): BaselineFrameGridOption[];
  /** If true, uses a custom baseline frame grid. */
  get useCustomBaselineFrameGrid(): (boolean)[];
  set useCustomBaselineFrameGrid(value: boolean);
  /** The amount to offset the baseline grid. */
  get startingOffsetForBaselineFrameGrid(): (number)[];
  set startingOffsetForBaselineFrameGrid(value: MeasurementValue);
  /** The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid. */
  get baselineFrameGridRelativeOption(): (BaselineFrameGridRelativeOption)[];
  set baselineFrameGridRelativeOption(value: BaselineFrameGridRelativeOption);
  /** The distance between grid lines. */
  get baselineFrameGridIncrement(): (number)[];
  set baselineFrameGridIncrement(value: MeasurementValue);
  /** The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. */
  get baselineFrameGridColor(): (number[] | UIColors)[];
  set baselineFrameGridColor(value: number[] | UIColors);
}
