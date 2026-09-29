/**
 * ContourOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { TextWrapPreference } from './TextWrapPreference';
import type { ContourOptionsTypes } from './Enums/ContourOptionsTypes';
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
 * Settings for tracing a custom text-wrap outline around a graphic's shape —
 * from an embedded clipping path, an alpha channel, or detected edges.
 */
export interface ContourOption {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TextWrapPreference;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<ContourOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ContourOption, 'single'>);
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
  readonly constructorName: 'ContourOption';
  /** Resolves the proxy into the individual {@link ContourOption} objects it stands for. */
  getElements(): ContourOption[];
  /** A list of the clipping paths stored in the graphic. */
  readonly photoshopPathNames: string[];
  /** A list of the alpha channels stored in the graphic. */
  readonly alphaChannelPathNames: string[];
  /**
   * Which shape traces the text-wrap outline — the object's bounding box or
   * graphics frame, a Photoshop path or alpha channel, detected edges, or Adobe
   * Sensei's detected subject. See {@link ContourOptionsTypes}.
   */
  get contourType(): ContourOptionsTypes;
  set contourType(value: ContourOptionsTypes);
  /** If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges. */
  get includeInsideEdges(): boolean;
  set includeInsideEdges(value: boolean);
  /** The alpha channel or Photoshop path to use for the contour option. Valid only when the contour options is photoshop path or alpha channel. */
  get contourPathName(): string;
  set contourPathName(value: string);
  /**
   * Index of the alpha channel to trace, as an alternative to naming it through
   * {@link contourPathName}. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.ALPHA_CHANNEL}.
   */
  get contourAlphaIndex(): number;
  set contourAlphaIndex(value: number);
  /**
   * Index of the Photoshop path to trace, as an alternative to naming it through
   * {@link contourPathName}. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.PHOTOSHOP_PATH}.
   */
  get contourPathIndex(): number;
  set contourPathIndex(value: number);
  /**
   * How light a pixel may be and still count as background when tracing edges.
   * Valid only when {@link contourType} is {@link ContourOptionsTypes.DETECT_EDGES}.
   */
  get contourThreshold(): number;
  set contourThreshold(value: number);
  /**
   * How closely the traced path follows the detected edge — higher values give a
   * simpler path with fewer points. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.DETECT_EDGES}.
   */
  get contourTolerance(): number;
  set contourTolerance(value: number);
}


/**
 * The broadcast proxy for {@link ContourOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ContourOption} there.
 */
export interface ContourOptionPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TextWrapPreference)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ContourOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ContourOptionPlural, 'plural'>);
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
  readonly constructorName: 'ContourOption';
  /** Resolves the proxy into the individual {@link ContourOption} objects it stands for. */
  getElements(): ContourOption[];
  /** A list of the clipping paths stored in the graphic. */
  readonly photoshopPathNames: (string[])[];
  /** A list of the alpha channels stored in the graphic. */
  readonly alphaChannelPathNames: (string[])[];
  /**
   * Which shape traces the text-wrap outline — the object's bounding box or
   * graphics frame, a Photoshop path or alpha channel, detected edges, or Adobe
   * Sensei's detected subject. See {@link ContourOptionsTypes}.
   */
  get contourType(): (ContourOptionsTypes)[];
  set contourType(value: ContourOptionsTypes);
  /** If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges. */
  get includeInsideEdges(): (boolean)[];
  set includeInsideEdges(value: boolean);
  /** The alpha channel or Photoshop path to use for the contour option. Valid only when the contour options is photoshop path or alpha channel. */
  get contourPathName(): (string)[];
  set contourPathName(value: string);
  /**
   * Index of the alpha channel to trace, as an alternative to naming it through
   * {@link contourPathName}. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.ALPHA_CHANNEL}.
   */
  get contourAlphaIndex(): (number)[];
  set contourAlphaIndex(value: number);
  /**
   * Index of the Photoshop path to trace, as an alternative to naming it through
   * {@link contourPathName}. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.PHOTOSHOP_PATH}.
   */
  get contourPathIndex(): (number)[];
  set contourPathIndex(value: number);
  /**
   * How light a pixel may be and still count as background when tracing edges.
   * Valid only when {@link contourType} is {@link ContourOptionsTypes.DETECT_EDGES}.
   */
  get contourThreshold(): (number)[];
  set contourThreshold(value: number);
  /**
   * How closely the traced path follows the detected edge — higher values give a
   * simpler path with fewer points. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.DETECT_EDGES}.
   */
  get contourTolerance(): (number)[];
  set contourTolerance(value: number);
}
