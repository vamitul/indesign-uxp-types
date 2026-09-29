/**
 * Menu.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { MenuElements } from './MenuElements';
import type { Submenus } from './Submenus';
import type { MenuItems } from './MenuItems';
import type { MenuSeparators } from './MenuSeparators';

/**
 * A top-level application menu (for example the Edit or Object menu).
 */
export interface Menu<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Menu';

  /** Resolves the proxy into the individual {@link Menu} objects it stands for. */
  getElements(): Menu<'single'>[];

  /** The name of the Menu. */
  readonly name: Read<M, string>;

  /**
   * The display name of the Menu, including any `&` mnemonic markers
   * (Windows) — a literal `&` is written `&&`.
   */
  readonly title: Read<M, string>;

  /** All elements — items, separators, and submenus — directly inside the Menu. */
  readonly menuElements: MenuElements;

  /** The submenus directly inside the Menu. */
  readonly submenus: Submenus;

  /** The menu items directly inside the Menu. */
  readonly menuItems: MenuItems;

  /** The separators directly inside the Menu. */
  readonly menuSeparators: MenuSeparators;
}
