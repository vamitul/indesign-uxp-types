/**
 * PreflightProcess.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { PreflightProfile } from './PreflightProfile';
import type { FilePath } from './_base/Types';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';

/** A single labeled sub-detail of a {@link PreflightAggregatedResult} error entry. */
export type PreflightErrorDetail = [label: string, description: string];

/** A single flagged error found while running a {@link PreflightProcess}. */
export type PreflightAggregatedError = [
  parentNodeID: number,
  errorName: string,
  pageNumber: string,
  errorInfo: string,
  errorDetail: PreflightErrorDetail[],
];

/** The aggregated results reported by a completed {@link PreflightProcess}. */
export type PreflightAggregatedResult = [
  documentName: string,
  profileName: string,
  results: PreflightAggregatedError[],
];
/**
 * A preflight check running (or completed) against a {@link Document}, created
 * by {@link Application.preflightProcesses}.
 */
export interface PreflightProcess {
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
  get properties(): PropertiesGetter<PreflightProcess, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PreflightProcess, 'single'>);
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
  readonly constructorName: 'PreflightProcess';
  /** Resolves the proxy into the individual {@link PreflightProcess} objects it stands for. */
  getElements(): PreflightProcess[];
  /** The document the process is inspecting. */
  readonly targetObject: Document;
  /** The preflight profile the process is checking against. */
  readonly appliedProfile: PreflightProfile;
  /** The description of the preflight process. */
  readonly description: string;
  /** The results found by the process, as a large formatted string. */
  readonly processResults: string;
  /** A description of every element visited by the process. */
  readonly processInventory: string;
  /** The results found by the process, in a structured, machine-readable form. */
  readonly aggregatedResults: PreflightAggregatedResult;
  /** Deletes the preflight process, aborting it if still running. */
  remove(): void;
  /**
   * Blocks script execution until the process finishes. No other processes
   * get CPU time while waiting.
   * @param waitTime The maximum time to wait, in seconds. If omitted, waits
   * until completion no matter how long it takes.
   * @returns `true` if the process finished within the wait time.
   */
  waitForProcess(waitTime?: number): boolean;
  /**
   * Saves a report of the completed preflight process.
   * @param autoOpen If `true`, opens the report after it is created. Defaults to `false`.
   */
  saveReport(to: FilePath, autoOpen?: boolean): void;
}


/**
 * The broadcast proxy for {@link PreflightProcess} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PreflightProcess} there.
 */
export interface PreflightProcessPlural {
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
  get properties(): (PropertiesGetter<PreflightProcessPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PreflightProcessPlural, 'plural'>);
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
  readonly constructorName: 'PreflightProcess';
  /** Resolves the proxy into the individual {@link PreflightProcess} objects it stands for. */
  getElements(): PreflightProcess[];
  /** The document the process is inspecting. */
  readonly targetObject: (Document)[];
  /** The preflight profile the process is checking against. */
  readonly appliedProfile: (PreflightProfile)[];
  /** The description of the preflight process. */
  readonly description: (string)[];
  /** The results found by the process, as a large formatted string. */
  readonly processResults: (string)[];
  /** A description of every element visited by the process. */
  readonly processInventory: (string)[];
  /** The results found by the process, in a structured, machine-readable form. */
  readonly aggregatedResults: (PreflightAggregatedResult)[];
  /** Deletes the preflight process, aborting it if still running. */
  remove(): (void)[];
  /**
   * Blocks script execution until the process finishes. No other processes
   * get CPU time while waiting.
   * @param waitTime The maximum time to wait, in seconds. If omitted, waits
   * until completion no matter how long it takes.
   * @returns `true` if the process finished within the wait time.
   */
  waitForProcess(waitTime?: number): (boolean)[];
  /**
   * Saves a report of the completed preflight process.
   * @param autoOpen If `true`, opens the report after it is created. Defaults to `false`.
   */
  saveReport(to: FilePath, autoOpen?: boolean): (void)[];
}
