/**
 * BackgroundTask.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { TaskState } from './Enums/TaskState';
import type { TaskAlertType } from './Enums/TaskAlertType';

/**
 * A long-running operation (such as preflight or export) executing outside
 * the main script thread.
 */
export interface BackgroundTask<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'BackgroundTask';

  /** Resolves the proxy into the individual {@link BackgroundTask} objects it stands for. */
  getElements(): BackgroundTask<'single'>[];

  /** The unique ID of the BackgroundTask. */
  readonly id: Read<M, number>;

  /** The name of the BackgroundTask. */
  readonly name: Read<M, string>;

  /** The name of the document this task operates on. */
  readonly documentName: Read<M, string>;

  /** Progress information for this task, from `0` to `100`. */
  readonly percentDone: Read<M, number>;

  /** The current status of this task. */
  readonly status: Read<M, TaskState>;

  /** The alerts encountered while running this task, as `[type, message]` pairs. */
  readonly alerts: Read<M, [TaskAlertType | string, TaskAlertType | string][]>;

  /** Cancels the task. */
  cancelTask(): Read<M, void>;

  /** Blocks until the task finishes, returning its final status. */
  waitForTask(): Read<M, TaskState>;

  /** Queries a property in the task's metadata. */
  queryProperty(name: string): Read<M, unknown>;
}
