/**
 * TimingList.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { TimingSetting } from './TimingSetting';
import type { TimingGroups } from './TimingGroups';
import type { DynamicTriggerEvents } from './Enums/DynamicTriggerEvents';
import type { TimingGroup } from './TimingGroup';

/**
 * The root of a page item's animation timing tree: the ordered list of
 * {@link TimingGroup}s that play for a given trigger event (page load,
 * button click, self roll-off…).
 */
export interface TimingList<M extends Mode = 'single'>
  extends EventTargetDOMObject<TimingSetting, M>,
    IndexedDOMObject<TimingSetting, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TimingList';

  /** Resolves the proxy into the individual {@link TimingList} objects it stands for. */
  getElements(): TimingList<'single'>[];

  /** The event that triggers this timing list's groups to play. */
  readonly triggerEvent: Read<M, DynamicTriggerEvents>;

  /** {@link TimingGroups} owned by this list. */
  readonly timingGroups: TimingGroups;

  /** Deletes the timing list. */
  remove(): Read<M, void>;
}
