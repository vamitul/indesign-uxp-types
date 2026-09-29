/**
 * ScriptMenuAction.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { MenuAction } from './MenuAction';
import type { MenuItem } from './MenuItem';

/**
 * A {@link MenuAction} implemented entirely by script, dispatching an
 * `onInvoke` event to its listeners when chosen.
 */
export interface ScriptMenuAction<M extends Mode = 'single'> extends MenuAction<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ScriptMenuAction';

  /** Resolves the proxy into the individual {@link ScriptMenuAction} objects it stands for. */
  getElements(): ScriptMenuAction<'single'>[];

  /** The action's identifying name, as opposed to its user-facing {@link title}. */
  get name(): Read<M, string>;
  set name(value: string);

  /**
   * The display name of the ScriptMenuAction, including any `&` mnemonic
   * markers (Windows) — a literal `&` is written `&&`.
   */
  get title(): Read<M, string>;
  set title(value: string);

  /** The menu action's area (functional grouping). */
  get area(): Read<M, string>;
  set area(value: string);

  /** Whether the ScriptMenuAction is enabled. */
  get enabled(): Read<M, boolean>;
  set enabled(value: boolean);

  /** Whether the {@link MenuItem} associated with this action is checked. */
  get checked(): Read<M, boolean>;
  set checked(value: boolean);

  /** Deletes the ScriptMenuAction. */
  remove(): Read<M, void>;
}
