/**
 * SubmitFormBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that submits the interactive PDF form to a URL.
 */
export interface SubmitFormBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'SubmitFormBehavior';

  /** Resolves the proxy into the individual {@link SubmitFormBehavior} objects it stands for. */
  getElements(): SubmitFormBehavior<'single'>[];

  /** The URL the form data is submitted to. */
  get url(): Read<M, string>;
  set url(value: string);

}
