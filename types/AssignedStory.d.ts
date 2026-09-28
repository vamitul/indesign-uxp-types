/**
 * AssignedStory.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { Assignment } from './Assignment';
import type { Story } from './Story';
import type { PageItem } from './PageItem';
import type { Oval } from './Oval';
import type { Rectangle } from './Rectangle';
import type { Polygon } from './Polygon';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A single story or page item bound into an {@link Assignment}.
 */
export interface AssignedStory<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Assignment, M>,
    IndexedDOMObject<Assignment, M>,
    NamableDOMObject<Assignment, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AssignedStory';

  /** Resolves the proxy into the individual {@link AssignedStory} objects it stands for. */
  getElements(): AssignedStory<'single'>[];

  /** The unique ID of the AssignedStory. */
  readonly id: Read<M, number>;

  /** The story or page item the assignment references. */
  readonly storyReference: Read<M, Story | PageItem | Oval | Rectangle | Polygon>;

  /** The file path (colon-delimited on macOS). */
  readonly filePath: Read<M, string>;

  /**
   * Moves this assigned story relative to another object within the assignment.
   * @param reference The reference object. Required when `to` specifies `BEFORE` or `AFTER`.
   */
  move(
    to?: LocationOptions,
    reference?: Assignment | AssignedStory,
  ): AssignedStory;
}
