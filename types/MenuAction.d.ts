/**
 * MenuAction.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { MenuItem } from './MenuItem';
import type { ScriptMenuAction } from './ScriptMenuAction';

/**
 * The action a {@link MenuItem} performs when chosen — every built-in
 * InDesign command is backed by one, alongside script-defined
 * {@link ScriptMenuAction}s.
 */
export interface MenuAction<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name — reports the specific kind, such as `'ScriptMenuAction'` when the object is a {@link ScriptMenuAction}. */
  readonly constructorName: 'MenuAction' | 'ScriptMenuAction';

  /** Resolves the proxy into the individual {@link MenuAction} objects it stands for. */
  getElements(): MenuAction<'single'>[];

  /** The name of the MenuAction. */
  readonly name: Read<M, string>;

  /**
   * The display name of the MenuAction, including any `&` mnemonic markers
   * (Windows) — a literal `&` is written `&&`.
   */
  readonly title: Read<M, string>;

  /** The menu action's area (functional grouping). */
  readonly area: Read<M, string>;

  /** Whether the MenuAction is enabled. */
  readonly enabled: Read<M, boolean>;

  /** Whether the {@link MenuItem} associated with this action is checked. */
  readonly checked: Read<M, boolean>;

  /** The unique ID of the MenuAction. */
  readonly id: Read<M, number>;

  /** Invokes the action. */
  invoke(): Read<M, void>;
}
