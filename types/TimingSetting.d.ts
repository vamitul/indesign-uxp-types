/**
 * TimingSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DynamicTarget, PageItemUnion } from './_base/Unions';
import type { FormField } from './FormField';
import type { MasterSpread } from './MasterSpread';
import type { Spread } from './Spread';
import type { TimingLists } from './TimingLists';

/**
 * Timing settings.
 */
export interface TimingSetting<M extends Mode = 'single'> extends EventTargetDOMObject<PageItemUnion | FormField | MasterSpread | Spread, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TimingSetting';

  /** Resolves the proxy into the individual {@link TimingSetting} objects it stands for. */
  getElements(): TimingSetting<'single'>[];

  /** Dynamic targets on the spread that are not assigned. */
  readonly unassignedDynamicTargets: Read<M, DynamicTarget[]>;

  /** Timing lists grouped by the event that triggers them, such as page load or a click. */
  readonly timingLists: TimingLists;
}
