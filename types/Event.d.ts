/**
 * Event.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject } from './_base/DomObjects';
import type { EventPhases } from './Enums/EventPhases';
import type { EventString } from './_base/DomObjects';
import type { Document } from './Document';
import type { DocumentEvent } from './DocumentEvent';
import type { LayoutWindow } from './LayoutWindow';

/**
 * An event dispatched by an InDesign DOM object during a script-observable
 * lifecycle transition (creation, deletion, save, place, and so on).
 */
export interface Event<M extends Mode = 'single'> extends IndexedDOMObject<unknown, M> {
  /** The object's DOM class name — reports the specific kind, such as `'DocumentEvent'` when the object is a {@link DocumentEvent}. */
  readonly constructorName: 'Event' | 'DocumentEvent' | 'IdleEvent' | 'ImportExportEvent' | 'MutationEvent' | 'PrintEvent';

  /** Resolves the proxy into the individual {@link Event} objects it stands for. */
  getElements(): Event<'single'>[];

  /** The unique ID of the Event. */
  readonly id: Read<M, number>;

  /** The name of the event. Well-known names are typed; custom names also flow through. */
  readonly eventType: Read<M, EventString>;

  /**
   * The object the event was originally dispatched on.
   *
   * `unknown` because it varies by event: the document save and export events report the
   * {@link Document}, while `afterSelectionChanged` reports the {@link LayoutWindow}. Narrow it
   * before use — {@link constructorName} on the value, or a check against the object you expect.
   * The event names whose target has been measured say so in their own description.
   */
  readonly target: Read<M, unknown>;

  /** The object currently being visited during event propagation. */
  readonly currentTarget: Read<M, unknown>;

  /** The current propagation phase of the event. */
  readonly eventPhase: Read<M, EventPhases>;

  /** If `true`, the event supports the bubbling phase of propagation. */
  readonly bubbles: Read<M, boolean>;

  /** If `true`, {@link preventDefault} can cancel the event's default behavior on its target. */
  readonly cancelable: Read<M, boolean>;

  /** The time the event was initialized. */
  readonly timeStamp: Read<M, Date>;

  /** If `true`, propagation beyond the current target has been stopped via {@link stopPropagation}. */
  readonly propagationStopped: Read<M, boolean>;

  /** If `true`, the default behavior on the target has been canceled via {@link preventDefault}. */
  readonly defaultPrevented: Read<M, boolean>;

  /** Stops propagation of the event beyond the current target. */
  stopPropagation(): Read<M, void>;

  /** Cancels the default behavior of the event on its target. Only has an effect when {@link cancelable} is `true`. */
  preventDefault(): Read<M, void>;
}
