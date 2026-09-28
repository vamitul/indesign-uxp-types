/**
 * MenuItem.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { MenuElement } from './MenuElement';
import type { MenuAction } from './MenuAction';
import type { Menu } from './Menu';
import type { Submenu } from './Submenu';

/**
 * A single choosable entry in a {@link Menu} or {@link Submenu}, backed by
 * the {@link MenuAction} that implements its behavior.
 */
export interface MenuItem<M extends Mode = 'single'> extends MenuElement<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'MenuItem';

  /** Resolves the proxy into the individual {@link MenuItem} objects it stands for. */
  getElements(): MenuItem<'single'>[];

  /** The item's identifying name, as opposed to its user-facing {@link title}. */
  readonly name: Read<M, string>;

  /**
   * The display name of the MenuItem, including any `&` mnemonic markers
   * (Windows) — a literal `&` is written `&&`.
   */
  readonly title: Read<M, string>;

  /** The unique ID of the MenuItem. */
  readonly id: Read<M, number>;

  /** Whether the MenuItem is enabled. */
  readonly enabled: Read<M, boolean>;

  /** Whether the MenuItem's {@link associatedMenuAction} is checked. */
  readonly checked: Read<M, boolean>;

  /** The {@link MenuAction} that implements this menu item. */
  readonly associatedMenuAction: Read<M, MenuAction>;

  /** Selects (chooses) the MenuItem. */
  select(): Read<M, void>;
}
