/**
 * IdleEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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
