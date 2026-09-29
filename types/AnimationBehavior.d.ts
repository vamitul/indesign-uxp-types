/**
 * AnimationBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { PageItem } from './PageItem';
import type { AnimationPlayOperations } from './Enums/AnimationPlayOperations';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that plays a motion-preset animation applied to a page item.
 */
export interface AnimationBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'AnimationBehavior';

  /** Resolves the proxy into the individual {@link AnimationBehavior} objects it stands for. */
  getElements(): AnimationBehavior<'single'>[];

  /** The animated {@link PageItem}. */
  get animatedPageItem(): Read<M, PageItem>;
  set animatedPageItem(value: PageItem);

  /** Whether the behavior plays, stops, pauses, resumes, or reverses the animation — see {@link AnimationPlayOperations}. */
  get operation(): Read<M, AnimationPlayOperations>;
  set operation(value: AnimationPlayOperations);

  /** Whether the animation automatically plays in reverse on roll-off of the rollover event. */
  get autoReverseOnRollOff(): Read<M, boolean>;
  set autoReverseOnRollOff(value: boolean);

}
