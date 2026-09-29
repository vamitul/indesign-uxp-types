/**
 * EPubExportPreviewAppPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
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
 * The list of external applications available for previewing an exported EPUB,
 * and whether the export result opens automatically.
 */
export interface EPubExportPreviewAppPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<EPubExportPreviewAppPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPubExportPreviewAppPreference, 'single'>);
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
  readonly constructorName: 'EPubExportPreviewAppPreference';
  /** Resolves the proxy into the individual {@link EPubExportPreviewAppPreference} objects it stands for. */
  getElements(): EPubExportPreviewAppPreference[];
  /** If true, opens the document in the viewer after export. */
  get viewDocumentAfterExport(): boolean;
  set viewDocumentAfterExport(value: boolean);
  /**
   * Add a new preview application preference
   * @param applicationPath The full path of the application to be added.
   * @param selectedForReflowableEpub Check if the app is selected in Reflowable ePub export.
   * @param selectedForFixedLayoutEpub Check if the app is selected in Fixed Layout ePub export.
   * @param withProperties Initial values for properties of the new EPubExportPreviewAppPreference.
   */
  addApplication(applicationPath: string, selectedForReflowableEpub: boolean, selectedForFixedLayoutEpub: boolean, withProperties?: object): void;
  /**
   * Remove an application at specified index.
   * @param indexOfApp The index of the application to be removed.
   * @param withProperties Listed by the dictionary but described there as initial values for a
   * *new* entry, copied from `addApplication`. Nothing is created when an entry is removed, so
   * what it does here is undocumented.
   */
  removeApplication(indexOfApp: number, withProperties?: object): void;
  /**
   * Get the application at index.
   * @param indexOfApp The index of the application to get information for.
   * @param withProperties Listed by the dictionary but described there as initial values for a
   * *new* entry, copied from `addApplication`. Nothing is created when an entry is read, so
   * what it does here is undocumented.
   */
  getApplicationAtIndex(indexOfApp: number, withProperties?: object): unknown;
  /** Number of applications added for ePub Preview. */
  getApplicationCount(): number;
}


/**
 * The broadcast proxy for {@link EPubExportPreviewAppPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link EPubExportPreviewAppPreference} there.
 */
export interface EPubExportPreviewAppPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<EPubExportPreviewAppPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPubExportPreviewAppPreferencePlural, 'plural'>);
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
  readonly constructorName: 'EPubExportPreviewAppPreference';
  /** Resolves the proxy into the individual {@link EPubExportPreviewAppPreference} objects it stands for. */
  getElements(): EPubExportPreviewAppPreference[];
  /** If true, opens the document in the viewer after export. */
  get viewDocumentAfterExport(): (boolean)[];
  set viewDocumentAfterExport(value: boolean);
  /**
   * Add a new preview application preference
   * @param applicationPath The full path of the application to be added.
   * @param selectedForReflowableEpub Check if the app is selected in Reflowable ePub export.
   * @param selectedForFixedLayoutEpub Check if the app is selected in Fixed Layout ePub export.
   * @param withProperties Initial values for properties of the new EPubExportPreviewAppPreference.
   */
  addApplication(applicationPath: string, selectedForReflowableEpub: boolean, selectedForFixedLayoutEpub: boolean, withProperties?: object): (void)[];
  /**
   * Remove an application at specified index.
   * @param indexOfApp The index of the application to be removed.
   * @param withProperties Listed by the dictionary but described there as initial values for a
   * *new* entry, copied from `addApplication`. Nothing is created when an entry is removed, so
   * what it does here is undocumented.
   */
  removeApplication(indexOfApp: number, withProperties?: object): (void)[];
  /**
   * Get the application at index.
   * @param indexOfApp The index of the application to get information for.
   * @param withProperties Listed by the dictionary but described there as initial values for a
   * *new* entry, copied from `addApplication`. Nothing is created when an entry is read, so
   * what it does here is undocumented.
   */
  getApplicationAtIndex(indexOfApp: number, withProperties?: object): (unknown)[];
  /** Number of applications added for ePub Preview. */
  getApplicationCount(): (number)[];
}
