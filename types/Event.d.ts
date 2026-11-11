/**
 * Event.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
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

// The event names Event carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the Event type.
export declare const Event: {
  /** Dispatched before a Event is placed. This event bubbles. This event is cancelable. */
  readonly BEFORE_PLACE: 'beforePlace';
  /** Dispatched after a Event is placed. This event bubbles. This event is not cancelable. */
  readonly AFTER_PLACE: 'afterPlace';
  /** Dispatched after one or more links in the Event have been added, deleted, or modified. This event bubbles. This event is not cancelable. */
  readonly AFTER_LINKS_CHANGED: 'afterLinksChanged';
  /** Dispatched after a Event is created. This event bubbles. This event is not cancelable. */
  readonly AFTER_NEW: 'afterNew';
  /** Dispatched before a Event is deleted. This event bubbles. This event is cancelable. */
  readonly BEFORE_DELETE: 'beforeDelete';
  /** Dispatched after a Event is deleted. This event bubbles. This event is not cancelable. */
  readonly AFTER_DELETE: 'afterDelete';
  /** Dispatched before a Event is updated. This event bubbles. This event is cancelable. */
  readonly BEFORE_UPDATE: 'beforeUpdate';
  /** Dispatched after a Event is updated. This event bubbles. This event is not cancelable. */
  readonly AFTER_UPDATE: 'afterUpdate';
  /** Dispatched before a Event is embedded. This event bubbles. This event is cancelable. */
  readonly BEFORE_EMBED: 'beforeEmbed';
  /** Dispatched after a Event is embedded. This event bubbles. This event is not cancelable. */
  readonly AFTER_EMBED: 'afterEmbed';
  /** Dispatched before a Event is unembedded. This event bubbles. This event is cancelable. */
  readonly BEFORE_UNEMBED: 'beforeUnembed';
  /** Dispatched after a Event is unembedded. This event bubbles. This event is not cancelable. */
  readonly AFTER_UNEMBED: 'afterUnembed';
  /** Dispatched before a Event is relocated from one object to another. This event bubbles. This event is cancelable. */
  readonly BEFORE_MOVE: 'beforeMove';
  /** Dispatched after a Event is relocated from one object to another. This event bubbles. This event is not cancelable. */
  readonly AFTER_MOVE: 'afterMove';
  /** Dispatched when the Event is invoked. This event does not bubble. This event is not cancelable. */
  readonly ON_INVOKE: 'onInvoke';
  /** Dispatched before the Event is invoked. This event does not bubble. This event is cancelable. */
  readonly BEFORE_INVOKE: 'beforeInvoke';
  /** Dispatched after the Event is invoked. This event does not bubble. This event is not cancelable. */
  readonly AFTER_INVOKE: 'afterInvoke';
  /** Dispatched before the Event is displayed. This event does not bubble. This event is not cancelable. */
  readonly BEFORE_DISPLAY: 'beforeDisplay';
  /** Dispatched before the Event is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable. */
  readonly BEFORE_QUIT: 'beforeQuit';
  /** Dispatched when the Event is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable. */
  readonly AFTER_QUIT: 'afterQuit';
  /** Dispatched before a script method is invoked. This event bubbles. This event is not cancelable. */
  readonly BEFORE_SCRIPT_METHOD: 'beforeScriptMethod';
  /** Dispatched after a script method is invoked. This event bubbles. This event is not cancelable. */
  readonly AFTER_SCRIPT_METHOD: 'afterScriptMethod';
  /** Dispatched after the active context changes. This event bubbles. This event is not cancelable. */
  readonly AFTER_CONTEXT_CHANGED: 'afterContextChanged';
  /** Dispatched after the active selection changes. This event bubbles. This event is not cancelable. */
  readonly AFTER_SELECTION_CHANGED: 'afterSelectionChanged';
  /** Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable. */
  readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: 'afterSelectionAttributeChanged';
  /** Dispatched before the Event becomes inactive. This event bubbles. This event is not cancelable. */
  readonly BEFORE_DEACTIVATE: 'beforeDeactivate';
  /** Dispatched after the Event becomes active. This event bubbles. This event is not cancelable. */
  readonly AFTER_ACTIVATE: 'afterActivate';
  /** Dispatched after a Event is opened. This event bubbles. This event is not cancelable. */
  readonly AFTER_OPEN: 'afterOpen';
  /** Dispatched before a Event is closed. This event bubbles. This event is cancelable. */
  readonly BEFORE_CLOSE: 'beforeClose';
  /** Dispatched when a Event is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable. */
  readonly AFTER_CLOSE: 'afterClose';
  /** Dispatched after the Event changes. This event bubbles. This event is not cancelable. */
  readonly HOME_SCREEN_VISIBILITY_CHANGE: 'homeScreenVisibilityChange';
};
