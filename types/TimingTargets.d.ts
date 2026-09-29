/**
 * TimingTargets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { DynamicTarget } from './_base/Unions';
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { TimingTarget } from './TimingTarget';
import type { TimingGroup } from './TimingGroup';

/**
 * A collection of {@link TimingTarget} objects within a {@link TimingGroup}.
 * Timing targets represent individual interactive items (animations, media, behaviors)
 * that play together within a group, optionally with individual delays.
 *
 * @collection TimingTarget
 */
export interface TimingTargets extends BaseCollection<TimingTarget, TimingTarget, TimingTarget<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'TimingTargets';

  /**
   * Adds a new target item to the timing group.
   *
   * @param dynamicTarget The interactive page item to be timed. This must be an object with an animation applied to it (where `animationSettings.hasCustomSettings` is `true`), a button behavior, or a media clip.
   * @param delaySeconds The time delay in seconds for this specific target relative to the start of its parent {@link TimingGroup}. Defaults to `0`.
   * @param withProperties Initial values for properties of the new TimingTarget.
   */
  add(
    dynamicTarget: DynamicTarget,
    delaySeconds?: number,
    withProperties?: PropertiesSetter<TimingTarget>,
  ): TimingTarget;
}
