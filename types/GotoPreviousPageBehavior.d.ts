/**
 * GotoPreviousPageBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { GoToZoomOptions } from './Enums/GoToZoomOptions';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that jumps to the previous page of the document.
 */
export interface GotoPreviousPageBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPreviousPageBehavior';

  /** Resolves the proxy into the individual {@link GotoPreviousPageBehavior} objects it stands for. */
  getElements(): GotoPreviousPageBehavior<'single'>[];

  /** The zoom setting to apply when navigating. */
  get zoomSetting(): Read<M, GoToZoomOptions>;
  set zoomSetting(value: GoToZoomOptions);

}
