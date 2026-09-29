/**
 * PreflightBookOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Book } from './Book';
import type { PreflightProfile } from './PreflightProfile';
import type { PreflightLayerOptions } from './Enums/PreflightLayerOptions';
import type { PreflightProfileOptions } from './Enums/PreflightProfileOptions';
import type { PreflightScopeOptions } from './Enums/PreflightScopeOptions';
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
 * The active preflight configuration for a book — which profile and layers
 * are checked across its documents.
 */
export interface PreflightBookOption {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application | Book;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<PreflightBookOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PreflightBookOption, 'single'>);
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
  readonly constructorName: 'PreflightBookOption';
  /** Resolves the proxy into the individual {@link PreflightBookOption} objects it stands for. */
  getElements(): PreflightBookOption[];
  /** The pages or documents to preflight, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get preflightScope(): PreflightScopeOptions | string;
  set preflightScope(value: PreflightScopeOptions | string);
  /** Which layers preflight inspects — all layers, only visible ones, or only visible and printable ones. */
  get preflightWhichLayers(): PreflightLayerOptions;
  set preflightWhichLayers(value: PreflightLayerOptions);
  /** If true, include objects on pasteboard when preflighting. */
  get preflightIncludeObjectsOnPasteboard(): boolean;
  set preflightIncludeObjectsOnPasteboard(value: boolean);
  /** If true, include objects that do not print when preflighting. */
  get preflightIncludeNonprintingObjects(): boolean;
  set preflightIncludeNonprintingObjects(value: boolean);
  /** Whether preflight uses each document's embedded profile or the {@link preflightWorkingProfile}. */
  get preflightProfilePolicy(): PreflightProfileOptions;
  set preflightProfilePolicy(value: PreflightProfileOptions);
  /** The profile preflight uses in place of a document's embedded profile, when {@link preflightProfilePolicy} is {@link PreflightProfileOptions.USE_WORKING_PROFILE}. */
  get preflightWorkingProfile(): PreflightProfile | string;
  set preflightWorkingProfile(value: PreflightProfile | string);
}


/**
 * The broadcast proxy for {@link PreflightBookOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PreflightBookOption} there.
 */
export interface PreflightBookOptionPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application | Book)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<PreflightBookOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PreflightBookOptionPlural, 'plural'>);
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
  readonly constructorName: 'PreflightBookOption';
  /** Resolves the proxy into the individual {@link PreflightBookOption} objects it stands for. */
  getElements(): PreflightBookOption[];
  /** The pages or documents to preflight, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get preflightScope(): (PreflightScopeOptions | string)[];
  set preflightScope(value: PreflightScopeOptions | string);
  /** Which layers preflight inspects — all layers, only visible ones, or only visible and printable ones. */
  get preflightWhichLayers(): (PreflightLayerOptions)[];
  set preflightWhichLayers(value: PreflightLayerOptions);
  /** If true, include objects on pasteboard when preflighting. */
  get preflightIncludeObjectsOnPasteboard(): (boolean)[];
  set preflightIncludeObjectsOnPasteboard(value: boolean);
  /** If true, include objects that do not print when preflighting. */
  get preflightIncludeNonprintingObjects(): (boolean)[];
  set preflightIncludeNonprintingObjects(value: boolean);
  /** Whether preflight uses each document's embedded profile or the {@link preflightWorkingProfile}. */
  get preflightProfilePolicy(): (PreflightProfileOptions)[];
  set preflightProfilePolicy(value: PreflightProfileOptions);
  /** The profile preflight uses in place of a document's embedded profile, when {@link preflightProfilePolicy} is {@link PreflightProfileOptions.USE_WORKING_PROFILE}. */
  get preflightWorkingProfile(): (PreflightProfile | string)[];
  set preflightWorkingProfile(value: PreflightProfile | string);
}
