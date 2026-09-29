/**
 * TimingGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { TimingList } from './TimingList';
import type { TimingTargets } from './TimingTargets';
import type { TimingTarget } from './TimingTarget';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * An ordered group of {@link TimingTarget}s within a {@link TimingList} that
 * play together (simultaneously), optionally looping.
 */
export interface TimingGroup<M extends Mode = 'single'>
  extends EventTargetDOMObject<TimingList, M>,
    IndexedDOMObject<TimingList, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TimingGroup';

  /** Resolves the proxy into the individual {@link TimingGroup} objects it stands for. */
  getElements(): TimingGroup<'single'>[];

  /** {@link TimingTargets} owned by this group. */
  readonly timingTargets: TimingTargets;

  /** This group's position within its parent {@link TimingList}. */
  get placement(): Read<M, number>;
  set placement(value: number);

  /** How many times this group plays. Range `1`–`100`. */
  get plays(): Read<M, number>;
  set plays(value: number);

  /** Whether this group loops indefinitely instead of stopping after {@link plays}. */
  get playsLoop(): Read<M, boolean>;
  set playsLoop(value: boolean);

  /** Deletes the timing group. */
  remove(): Read<M, void>;

  /** Unlinks every target in this group into separate single-target groups within the same {@link TimingList}. */
  unlink(): Read<M, void>;

  /**
   * Moves the timing group to a new location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference object. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: TimingGroup | TimingTarget | TimingList): Read<M, TimingGroup>;
}
