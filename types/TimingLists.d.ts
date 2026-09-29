/**
 * TimingLists.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { DynamicTriggerEvents } from './Enums/DynamicTriggerEvents';
import type { BaseCollection } from './_base/Collections';
import type { TimingList } from './TimingList';

/**
 * A collection of {@link TimingList} objects within a `TimingSetting`.
 * Timing lists define the sequence and behavior of animations or media triggered
 * by a specific event (e.g., page load, click).
 *
 * @collection TimingList
 */
export interface TimingLists extends BaseCollection<TimingList, TimingList, TimingList<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'TimingLists';

  /**
   * Adds a new event-triggered timing list.
   * * Each `TimingList` is tied to exactly one `triggerEvent`. To trigger animations on multiple events (e.g., both Page Load and Click), you must create separate timing lists.
   *
   * @param triggerEvent The {@link DynamicTriggerEvents} that starts the playback for this list.
   * @param withProperties Initial values for properties of the new TimingList.
   **/
  add(
    triggerEvent: DynamicTriggerEvents,
    withProperties?: PropertiesSetter<TimingList>,
  ): TimingList;
}
