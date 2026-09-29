/**
 * RadiobuttonGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { RadiobuttonControls } from './RadiobuttonControls';
import type { Widgets } from './Widgets';
import type { RadiobuttonControl } from './RadiobuttonControl';

/**
 * A bordered group of mutually-exclusive {@link RadiobuttonControl}s.
 */
export interface RadiobuttonGroup<M extends Mode = 'single'> extends Widget<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'RadiobuttonGroup';

  /** Resolves the proxy into the individual {@link RadiobuttonGroup} objects it stands for. */
  getElements(): RadiobuttonGroup<'single'>[];

  /** The individual buttons in the group. */
  readonly radiobuttonControls: RadiobuttonControls;

  /** The group's children as generic widgets. */
  readonly widgets: Widgets;

  /** The index of the currently selected button. */
  get selectedButton(): Read<M, number>;
  set selectedButton(value: number);
}
