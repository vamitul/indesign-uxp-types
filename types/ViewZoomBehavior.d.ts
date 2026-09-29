/**
 * ViewZoomBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { ViewZoomStyle } from './Enums/ViewZoomStyle';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that changes the view zoom level.
 */
export interface ViewZoomBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ViewZoomBehavior';

  /** Resolves the proxy into the individual {@link ViewZoomBehavior} objects it stands for. */
  getElements(): ViewZoomBehavior<'single'>[];

  /** The view zoom style to apply. */
  get viewZoomStyle(): Read<M, ViewZoomStyle>;
  set viewZoomStyle(value: ViewZoomStyle);

}
