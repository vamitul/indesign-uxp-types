/**
 * Event.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject } from './_base/DomObjects';
import type { EventPhases } from './Enums/EventPhases';
import type { EventString } from './_base/DomObjects';
import type { Document } from './Document';
import type { DocumentEvent } from './DocumentEvent';
import type { LayoutWindow } from './LayoutWindow';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * An event dispatched by an InDesign DOM object during a script-observable
 * lifecycle transition (creation, deletion, save, place, and so on).
 */
export interface Event {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: unknown;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Event, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Event, 'single'>);
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
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name — reports the specific kind, such as `'DocumentEvent'` when the object is a {@link DocumentEvent}. */
  readonly constructorName: 'Event' | 'DocumentEvent' | 'IdleEvent' | 'ImportExportEvent' | 'MutationEvent' | 'PrintEvent';
  /** Resolves the proxy into the individual {@link Event} objects it stands for. */
  getElements(): Event[];
  /** The unique ID of the Event. */
  readonly id: number;
  /** The name of the event. Well-known names are typed; custom names also flow through. */
  readonly eventType: EventString;
  /**
   * The object the event was originally dispatched on.
   *
   * `unknown` because it varies by event: the document save and export events report the
   * {@link Document}, while `afterSelectionChanged` reports the {@link LayoutWindow}. Narrow it
   * before use — {@link constructorName} on the value, or a check against the object you expect.
   * The event names whose target has been measured say so in their own description.
   */
  readonly target: unknown;
  /** The object currently being visited during event propagation. */
  readonly currentTarget: unknown;
  /** The current propagation phase of the event. */
  readonly eventPhase: EventPhases;
  /** If `true`, the event supports the bubbling phase of propagation. */
  readonly bubbles: boolean;
  /** If `true`, {@link preventDefault} can cancel the event's default behavior on its target. */
  readonly cancelable: boolean;
  /** The time the event was initialized. */
  readonly timeStamp: Date;
  /** If `true`, propagation beyond the current target has been stopped via {@link stopPropagation}. */
  readonly propagationStopped: boolean;
  /** If `true`, the default behavior on the target has been canceled via {@link preventDefault}. */
  readonly defaultPrevented: boolean;
  /** Stops propagation of the event beyond the current target. */
  stopPropagation(): void;
  /** Cancels the default behavior of the event on its target. Only has an effect when {@link cancelable} is `true`. */
  preventDefault(): void;
}


/**
 * The broadcast proxy for {@link Event} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Event} there.
 */
export interface EventPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (unknown)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<EventPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EventPlural, 'plural'>);
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
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name — reports the specific kind, such as `'DocumentEvent'` when the object is a {@link DocumentEvent}. */
  readonly constructorName: 'Event' | 'DocumentEvent' | 'IdleEvent' | 'ImportExportEvent' | 'MutationEvent' | 'PrintEvent';
  /** Resolves the proxy into the individual {@link Event} objects it stands for. */
  getElements(): Event[];
  /** The unique ID of the Event. */
  readonly id: (number)[];
  /** The name of the event. Well-known names are typed; custom names also flow through. */
  readonly eventType: (EventString)[];
  /**
   * The object the event was originally dispatched on.
   *
   * `unknown` because it varies by event: the document save and export events report the
   * {@link Document}, while `afterSelectionChanged` reports the {@link LayoutWindow}. Narrow it
   * before use — {@link constructorName} on the value, or a check against the object you expect.
   * The event names whose target has been measured say so in their own description.
   */
  readonly target: (unknown)[];
  /** The object currently being visited during event propagation. */
  readonly currentTarget: (unknown)[];
  /** The current propagation phase of the event. */
  readonly eventPhase: (EventPhases)[];
  /** If `true`, the event supports the bubbling phase of propagation. */
  readonly bubbles: (boolean)[];
  /** If `true`, {@link preventDefault} can cancel the event's default behavior on its target. */
  readonly cancelable: (boolean)[];
  /** The time the event was initialized. */
  readonly timeStamp: (Date)[];
  /** If `true`, propagation beyond the current target has been stopped via {@link stopPropagation}. */
  readonly propagationStopped: (boolean)[];
  /** If `true`, the default behavior on the target has been canceled via {@link preventDefault}. */
  readonly defaultPrevented: (boolean)[];
  /** Stops propagation of the event beyond the current target. */
  stopPropagation(): (void)[];
  /** Cancels the default behavior of the event on its target. Only has an effect when {@link cancelable} is `true`. */
  preventDefault(): (void)[];
}
