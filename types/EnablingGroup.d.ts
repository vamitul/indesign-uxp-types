/**
 * EnablingGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { WidgetContainer } from './_base/WidgetMixins';
import type { DialogColumns } from './DialogColumns';

/**
 * A bordered panel with an enabling checkbox in its title — the user
 * activates or deactivates every control it contains by clicking the
 * checkbox.
 */
export interface EnablingGroup<M extends Mode = 'single'> extends Widget<M>, WidgetContainer<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'EnablingGroup';

  /** Resolves the proxy into the individual {@link EnablingGroup} objects it stands for. */
  getElements(): EnablingGroup<'single'>[];

  /** The columns nested directly inside the group. */
  readonly dialogColumns: DialogColumns;

  /** Whether the group's controls are enabled by default when the dialog opens. */
  get checkedState(): Read<M, boolean>;
  set checkedState(value: boolean);

  /** The text shown next to the enabling checkbox. */
  get staticLabel(): Read<M, string>;
  set staticLabel(value: string);
}
