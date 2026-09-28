/**
 * TimingGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { DynamicTarget } from './_base/Unions';
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { TimingGroup } from './TimingGroup';
import type { TimingList } from './TimingList';

/**
 * A collection of {@link TimingGroup} objects within a {@link TimingList}.
 * Timing groups manage the sequence and timing of interactive elements,
 * allowing animations and media to play simultaneously or in a specific order.
 *
 * @collection TimingGroup
 */
export interface TimingGroups extends BaseCollection<TimingGroup, TimingGroup, TimingGroup<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'TimingGroups';

  /**
   * Adds a new timing group to the sequence.
   *
   * @param dynamicTarget The interactive page item target. This must be an object with an animation applied to it (where `animationSettings.hasCustomSettings` is `true`), a button behavior, or a media clip.
   * @param delaySeconds The time delay in seconds before the target starts playing. Defaults to `0`.
   * @param withProperties Initial values for properties of the new TimingGroup.
   */
  add(
    dynamicTarget: DynamicTarget,
    delaySeconds?: number,
    withProperties?: PropertiesSetter<TimingGroup>,
  ): TimingGroup;
}
