/**
 * IdleEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Event } from './Event';
import type { IdleTask } from './IdleTask';
import type { Document } from './Document';
import type { LayoutWindow } from './LayoutWindow';

/**
 * An event dispatched at idle time for a registered {@link IdleTask}.
 */
export interface IdleEvent<M extends Mode = 'single'> extends Event<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'IdleEvent';

  /** Resolves the proxy into the individual {@link IdleEvent} objects it stands for. */
  getElements(): IdleEvent<'single'>[];

  readonly parent: Read<M, IdleTask>;

  /** The amount of time (in milliseconds) allocated to the task when the event was dispatched. */
  readonly timeAllocated: Read<M, number>;
}

// The event names IdleEvent carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the IdleEvent type.
export declare const IdleEvent: {
  /** Dispatched at idle time for this IdleEvent. This event does not bubble. This event is not cancelable. */
  readonly ON_IDLE: 'onIdle';
};
