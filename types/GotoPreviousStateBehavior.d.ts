/**
 * GotoPreviousStateBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { MultiStateObject } from './MultiStateObject';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that moves the associated {@link MultiStateObject} to its previous state.
 */
export interface GotoPreviousStateBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPreviousStateBehavior';

  /** Resolves the proxy into the individual {@link GotoPreviousStateBehavior} objects it stands for. */
  getElements(): GotoPreviousStateBehavior<'single'>[];

  /** The associated {@link MultiStateObject}. */
  get associatedMultiStateObject(): Read<M, MultiStateObject>;
  set associatedMultiStateObject(value: MultiStateObject);

  /** Whether moving before the first state loops around to the last. */
  get loopsToNextOrPrevious(): Read<M, boolean>;
  set loopsToNextOrPrevious(value: boolean);

}
