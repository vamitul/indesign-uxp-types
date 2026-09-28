/**
 * GotoStateBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { MultiStateObject } from './MultiStateObject';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that jumps the associated {@link MultiStateObject} to a named state.
 */
export interface GotoStateBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'GotoStateBehavior';

  /** Resolves the proxy into the individual {@link GotoStateBehavior} objects it stands for. */
  getElements(): GotoStateBehavior<'single'>[];

  /** The associated {@link MultiStateObject}. */
  get associatedMultiStateObject(): Read<M, MultiStateObject>;
  set associatedMultiStateObject(value: MultiStateObject);

  /** The name of the target state in the associated multi-state object. */
  get stateName(): Read<M, string>;
  set stateName(value: string);

  /** Whether to automatically return to the prior state on roll-off of the rollover event. */
  get goBackOnRollOff(): Read<M, boolean>;
  set goBackOnRollOff(value: boolean);

}
