/**
 * RadiobuttonControl.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { RadiobuttonGroup } from './RadiobuttonGroup';

/**
 * A single button inside a {@link RadiobuttonGroup}.
 */
export interface RadiobuttonControl<M extends Mode = 'single'> extends Widget<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'RadiobuttonControl';

  /** Resolves the proxy into the individual {@link RadiobuttonControl} objects it stands for. */
  getElements(): RadiobuttonControl<'single'>[];

  /** The parent {@link RadiobuttonGroup} this button belongs to. */
  readonly parent: Read<M, RadiobuttonGroup>;

  /** The text shown next to the button. */
  get staticLabel(): Read<M, string>;
  set staticLabel(value: string);

  /** Whether this button is selected by default when the dialog opens. */
  get checkedState(): Read<M, boolean>;
  set checkedState(value: boolean);
}
