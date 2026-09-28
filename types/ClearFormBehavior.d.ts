/**
 * ClearFormBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that resets every field of the interactive PDF form to its default value.
 */
export interface ClearFormBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ClearFormBehavior';

  /** Resolves the proxy into the individual {@link ClearFormBehavior} objects it stands for. */
  getElements(): ClearFormBehavior<'single'>[];

}
