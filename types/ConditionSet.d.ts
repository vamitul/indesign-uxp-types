/**
 * ConditionSet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { Condition } from './Condition';

/** One entry of a {@link ConditionSet.setConditions} list: a condition paired with whether it is shown when the set is applied. */
export type ConditionSetEntry = [condition: Condition, visibility: boolean];

/**
 * A condition set for conditional text — a saved combination of
 * {@link Condition} visibilities that can be reapplied together, so a group of
 * conditions can be shown/hidden as a single named preset.
 */
export interface ConditionSet<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ConditionSet';

  /** Resolves the proxy into the individual {@link ConditionSet} objects it stands for. */
  getElements(): ConditionSet<'single'>[];

  /** The unique ID of the condition set, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The conditions this set controls, each paired with the visibility it applies. */
  get setConditions(): Read<M, ConditionSetEntry[]>;
  set setConditions(value: ConditionSetEntry[]);

  /**
   * Deletes the condition set.
   * @param replacingWith A condition set (or its name) to apply to affected text instead. If omitted, no replacement condition set is applied.
   */
  remove(replacingWith?: ConditionSet | string): Read<M, void>;

  /** Updates the set's saved visibilities to match every {@link Condition}'s current visibility. */
  redefine(): Read<M, void>;
}
