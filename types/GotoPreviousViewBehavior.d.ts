/**
 * GotoPreviousViewBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { GoToZoomOptions } from './Enums/GoToZoomOptions';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that jumps to the previous view in the navigation history.
 */
export interface GotoPreviousViewBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPreviousViewBehavior';

  /** Resolves the proxy into the individual {@link GotoPreviousViewBehavior} objects it stands for. */
  getElements(): GotoPreviousViewBehavior<'single'>[];

  /** The zoom setting to apply when navigating. */
  get zoomSetting(): Read<M, GoToZoomOptions>;
  set zoomSetting(value: GoToZoomOptions);

}
