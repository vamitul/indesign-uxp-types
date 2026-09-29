/**
 * CheckboxControl.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';

/**
 * A standalone checkbox control with an adjoining text label.
 */
export interface CheckboxControl<M extends Mode = 'single'> extends Widget<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'CheckboxControl';

  /** Resolves the proxy into the individual {@link CheckboxControl} objects it stands for. */
  getElements(): CheckboxControl<'single'>[];

  /** Whether the control is checked by default when the dialog opens. */
  get checkedState(): Read<M, boolean>;
  set checkedState(value: boolean);

  /** The text shown next to the checkbox. */
  get staticLabel(): Read<M, string>;
  set staticLabel(value: string);
}
