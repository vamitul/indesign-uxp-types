/**
 * GotoNextStateBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { MultiStateObject } from './MultiStateObject';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that advances the associated {@link MultiStateObject} to its next state.
 */
export interface GotoNextStateBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'GotoNextStateBehavior';

  /** Resolves the proxy into the individual {@link GotoNextStateBehavior} objects it stands for. */
  getElements(): GotoNextStateBehavior<'single'>[];

  /** The associated {@link MultiStateObject}. */
  get associatedMultiStateObject(): Read<M, MultiStateObject>;
  set associatedMultiStateObject(value: MultiStateObject);

  /** Whether advancing past the last state loops back to the first. */
  get loopsToNextOrPrevious(): Read<M, boolean>;
  set loopsToNextOrPrevious(value: boolean);

}
