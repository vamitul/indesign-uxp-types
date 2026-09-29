/**
 * EventListener.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { EventString } from './_base/DomObjects';
import type { File } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';

/**
 * A registered event listener, returned by `addEventListener` on the object it was registered
 * with — an {@link Application}, a {@link Document}, or any other object that raises events.
 *
 * Call {@link remove} on it to stop listening; that is more reliable than matching the event
 * name, handler and capture flag through `removeEventListener`.
 */
export interface EventListener<M extends Mode = 'single'>
  extends IndexedDOMObject<unknown, M>,
    LabelableDOMObject<unknown, M>,
    NamableDOMObject<unknown, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EventListener';

  /** Resolves the proxy into the individual {@link EventListener} objects it stands for. */
  getElements(): EventListener<'single'>[];

  /** The unique ID of the EventListener. */
  readonly id: Read<M, number>;

  /** The event type this listener is registered for. */
  readonly eventType: Read<M, EventString>;

  /** The handler invoked when the event fires — a JavaScript function, or the script file it runs, which reads back as a `Promise<`{@link File}`>`. */
  readonly handler: Read<M, Function | Promise<File>>;

  /** Deletes the EventListener, unregistering it from its target. */
  remove(): Read<M, void>;
}
