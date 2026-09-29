/**
 * IdleTasks.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { IdleTask } from './IdleTask';

/**
 * A collection of {@link IdleTask} objects. Idle tasks allow scripts to register
 * custom code that executes during the InDesign application's idle time,
 * enabling background processing without blocking the UI.
 *
 * @collection IdleTask
 */
export interface IdleTasks
  extends
    BaseCollection<IdleTask, IdleTask, IdleTask<'plural'>>,
    IdCollection<IdleTask>,
    NamedCollection<IdleTask> {
  /** The object's DOM class name. */
  readonly constructorName: 'IdleTasks';

  /**
   * Creates and registers a new idle task.
   * @param withProperties Initial values for properties of the new {@link IdleTask}.
   */
  add(withProperties?: PropertiesSetter<IdleTask>): IdleTask;
}
