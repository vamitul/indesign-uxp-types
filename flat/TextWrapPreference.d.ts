/**
 * TextWrapPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { ContourOption } from './ContourOption';
import type { Document } from './Document';
import type { FormField } from './FormField';
import type { ObjectStyle } from './ObjectStyle';
import type { Paths } from './Paths';
import type { Preferences } from './Preferences';
import type { NothingEnum } from './Enums/NothingEnum';
import type { TextWrapModes } from './Enums/TextWrapModes';
import type { TextWrapSideOptions } from './Enums/TextWrapSideOptions';
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
 * Settings controlling how surrounding text wraps around an object — the wrap
 * shape, the offset from the object's edges, and which side(s) text flows along.
 */
export interface TextWrapPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: PageItemUnion | FormField | Application | Document | ObjectStyle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TextWrapPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextWrapPreference, 'single'>);
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
  readonly constructorName: 'TextWrapPreference';
  /** Resolves the proxy into the individual {@link TextWrapPreference} objects it stands for. */
  getElements(): TextWrapPreference[];
  /** The contour used when {@link textWrapMode} is {@link TextWrapModes.CONTOUR}. */
  readonly contourOptions: ContourOption;
  /** If true, the text wrap path has been explicitly modified by the user. */
  readonly userModifiedWrap: boolean;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** A collection of paths. */
  readonly paths: Paths;
  /**
   * The minimum space between text and the edges of the wrapped object.
   *
   * The format for defining text wrap offset values depends on the text wrap type. If text
   * wrap type is jump object text wrap, specify 2 values in the format [top, bottom]. If text
   * wrap type is next column text wrap or contour, specify a single value. For bounding box
   * text wrap, specify 4 values in the format in the format [top, left, bottom, right].
   */
  get textWrapOffset(): number | number[] | NothingEnum.NOTHING;
  set textWrapOffset(value: MeasurementValue | number[] | NothingEnum.NOTHING);
  /** If true, inverts the text wrap. */
  get inverse(): boolean;
  set inverse(value: boolean);
  /** If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to. */
  get applyToMasterPageOnly(): boolean;
  set applyToMasterPageOnly(value: boolean);
  /** Which side(s) of the object text is allowed to flow along. See {@link TextWrapSideOptions}. */
  get textWrapSide(): TextWrapSideOptions;
  set textWrapSide(value: TextWrapSideOptions);
  /**
   * How text wraps around the object — not at all, jumping above and below,
   * jumping to the next column, around the bounding box, or around a custom
   * {@link contourOptions} shape. See {@link TextWrapModes}.
   */
  get textWrapMode(): TextWrapModes;
  set textWrapMode(value: TextWrapModes);
}


/**
 * The broadcast proxy for {@link TextWrapPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TextWrapPreference} there.
 */
export interface TextWrapPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (PageItemUnion | FormField | Application | Document | ObjectStyle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TextWrapPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextWrapPreferencePlural, 'plural'>);
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
  readonly constructorName: 'TextWrapPreference';
  /** Resolves the proxy into the individual {@link TextWrapPreference} objects it stands for. */
  getElements(): TextWrapPreference[];
  /** The contour used when {@link textWrapMode} is {@link TextWrapModes.CONTOUR}. */
  readonly contourOptions: (ContourOption)[];
  /** If true, the text wrap path has been explicitly modified by the user. */
  readonly userModifiedWrap: (boolean)[];
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** A collection of paths. */
  readonly paths: Paths;
  /**
   * The minimum space between text and the edges of the wrapped object.
   *
   * The format for defining text wrap offset values depends on the text wrap type. If text
   * wrap type is jump object text wrap, specify 2 values in the format [top, bottom]. If text
   * wrap type is next column text wrap or contour, specify a single value. For bounding box
   * text wrap, specify 4 values in the format in the format [top, left, bottom, right].
   */
  get textWrapOffset(): (number | number[] | NothingEnum.NOTHING)[];
  set textWrapOffset(value: MeasurementValue | number[] | NothingEnum.NOTHING);
  /** If true, inverts the text wrap. */
  get inverse(): (boolean)[];
  set inverse(value: boolean);
  /** If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to. */
  get applyToMasterPageOnly(): (boolean)[];
  set applyToMasterPageOnly(value: boolean);
  /** Which side(s) of the object text is allowed to flow along. See {@link TextWrapSideOptions}. */
  get textWrapSide(): (TextWrapSideOptions)[];
  set textWrapSide(value: TextWrapSideOptions);
  /**
   * How text wraps around the object — not at all, jumping above and below,
   * jumping to the next column, around the bounding box, or around a custom
   * {@link contourOptions} shape. See {@link TextWrapModes}.
   */
  get textWrapMode(): (TextWrapModes)[];
  set textWrapMode(value: TextWrapModes);
}
