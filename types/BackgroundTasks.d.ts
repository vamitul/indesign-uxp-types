/**
 * BackgroundTasks.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { BackgroundTask } from './BackgroundTask';

/**
 * A collection of {@link BackgroundTask} objects. These represent long-running
 * asynchronous operations—such as PDF export or preflighting—that execute
 * in the background, allowing the user to continue working.
 *
 * @collection BackgroundTask
 */
export interface BackgroundTasks
  extends
    BaseCollection<BackgroundTask, BackgroundTask, BackgroundTask<'plural'>>,
    IdCollection<BackgroundTask>,
    NamedCollection<BackgroundTask> {
  /** The object's DOM class name. */
  readonly constructorName: 'BackgroundTasks';
}
