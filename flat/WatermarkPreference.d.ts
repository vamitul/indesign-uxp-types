/**
 * WatermarkPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { UIColors } from './Enums/UIColors';
import type { WatermarkHorizontalPositionEnum } from './Enums/WatermarkHorizontalPositionEnum';
import type { WatermarkVerticalPositionEnum } from './Enums/WatermarkVerticalPositionEnum';
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
 * The watermark drawn over a document's pages — its text, font, colour, opacity,
 * rotation, and where it sits on the page.
 */
export interface WatermarkPreference {
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
  get properties(): PropertiesGetter<WatermarkPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<WatermarkPreference, 'single'>);
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
  readonly constructorName: 'WatermarkPreference';
  /** Resolves the proxy into the individual {@link WatermarkPreference} objects it stands for. */
  getElements(): WatermarkPreference[];
  /** If true, the watermark is shown. */
  get watermarkVisibility(): boolean;
  set watermarkVisibility(value: boolean);
  /** If true, the watermark prints with the document. */
  get watermarkDoPrint(): boolean;
  set watermarkDoPrint(value: boolean);
  /** If true, draws the watermark behind the page content rather than in front of it. */
  get watermarkDrawInBack(): boolean;
  set watermarkDrawInBack(value: boolean);
  /** The watermark's text content. */
  get watermarkText(): string;
  set watermarkText(value: string);
  /** The font family used for the watermark text. */
  get watermarkFontFamily(): string;
  set watermarkFontFamily(value: string);
  /** The font style used for the watermark text. */
  get watermarkFontStyle(): string;
  set watermarkFontStyle(value: string);
  /** The point size of the watermark text. */
  get watermarkFontPointSize(): number;
  set watermarkFontPointSize(value: number);
  /** The color of the watermark text, as an `[R, G, B]` triple or a named {@link UIColors} value. */
  get watermarkFontColor(): number[] | UIColors;
  set watermarkFontColor(value: number[] | UIColors);
  /** The watermark's opacity, as a percentage. (Range: 0 to 100). */
  get watermarkOpacity(): number;
  set watermarkOpacity(value: number);
  /** The rotation angle of the watermark text. */
  get watermarkRotation(): number;
  set watermarkRotation(value: number);
  /** The watermark's horizontal position — left, center, or right — see {@link WatermarkHorizontalPositionEnum}. */
  get watermarkHorizontalPosition(): WatermarkHorizontalPositionEnum;
  set watermarkHorizontalPosition(value: WatermarkHorizontalPositionEnum);
  /** The horizontal offset of the watermark from {@link watermarkHorizontalPosition}. */
  get watermarkHorizontalOffset(): number;
  set watermarkHorizontalOffset(value: MeasurementValue);
  /** The watermark's vertical position — top, center, or bottom — see {@link WatermarkVerticalPositionEnum}. */
  get watermarkVerticalPosition(): WatermarkVerticalPositionEnum;
  set watermarkVerticalPosition(value: WatermarkVerticalPositionEnum);
  /** The vertical offset of the watermark from {@link watermarkVerticalPosition}. */
  get watermarkVerticalOffset(): number;
  set watermarkVerticalOffset(value: MeasurementValue);
}


/**
 * The broadcast proxy for {@link WatermarkPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link WatermarkPreference} there.
 */
export interface WatermarkPreferencePlural {
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
  get properties(): (PropertiesGetter<WatermarkPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<WatermarkPreferencePlural, 'plural'>);
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
  readonly constructorName: 'WatermarkPreference';
  /** Resolves the proxy into the individual {@link WatermarkPreference} objects it stands for. */
  getElements(): WatermarkPreference[];
  /** If true, the watermark is shown. */
  get watermarkVisibility(): (boolean)[];
  set watermarkVisibility(value: boolean);
  /** If true, the watermark prints with the document. */
  get watermarkDoPrint(): (boolean)[];
  set watermarkDoPrint(value: boolean);
  /** If true, draws the watermark behind the page content rather than in front of it. */
  get watermarkDrawInBack(): (boolean)[];
  set watermarkDrawInBack(value: boolean);
  /** The watermark's text content. */
  get watermarkText(): (string)[];
  set watermarkText(value: string);
  /** The font family used for the watermark text. */
  get watermarkFontFamily(): (string)[];
  set watermarkFontFamily(value: string);
  /** The font style used for the watermark text. */
  get watermarkFontStyle(): (string)[];
  set watermarkFontStyle(value: string);
  /** The point size of the watermark text. */
  get watermarkFontPointSize(): (number)[];
  set watermarkFontPointSize(value: number);
  /** The color of the watermark text, as an `[R, G, B]` triple or a named {@link UIColors} value. */
  get watermarkFontColor(): (number[] | UIColors)[];
  set watermarkFontColor(value: number[] | UIColors);
  /** The watermark's opacity, as a percentage. (Range: 0 to 100). */
  get watermarkOpacity(): (number)[];
  set watermarkOpacity(value: number);
  /** The rotation angle of the watermark text. */
  get watermarkRotation(): (number)[];
  set watermarkRotation(value: number);
  /** The watermark's horizontal position — left, center, or right — see {@link WatermarkHorizontalPositionEnum}. */
  get watermarkHorizontalPosition(): (WatermarkHorizontalPositionEnum)[];
  set watermarkHorizontalPosition(value: WatermarkHorizontalPositionEnum);
  /** The horizontal offset of the watermark from {@link watermarkHorizontalPosition}. */
  get watermarkHorizontalOffset(): (number)[];
  set watermarkHorizontalOffset(value: MeasurementValue);
  /** The watermark's vertical position — top, center, or bottom — see {@link WatermarkVerticalPositionEnum}. */
  get watermarkVerticalPosition(): (WatermarkVerticalPositionEnum)[];
  set watermarkVerticalPosition(value: WatermarkVerticalPositionEnum);
  /** The vertical offset of the watermark from {@link watermarkVerticalPosition}. */
  get watermarkVerticalOffset(): (number)[];
  set watermarkVerticalOffset(value: MeasurementValue);
}
