/**
 * Submenu.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { MenuElement } from './MenuElement';
import type { MenuElements } from './MenuElements';
import type { Submenus } from './Submenus';
import type { MenuItems } from './MenuItems';
import type { MenuSeparators } from './MenuSeparators';

/**
 * A nested menu that can itself contain menu items, separators, and further
 * submenus.
 */
export interface Submenu<M extends Mode = 'single'> extends MenuElement<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'Submenu';

  /** Resolves the proxy into the individual {@link Submenu} objects it stands for. */
  getElements(): Submenu<'single'>[];

  /** The name of the Submenu. */
  readonly name: Read<M, string>;

  /**
   * The display name of the Submenu, including any `&` mnemonic markers
   * (Windows) — a literal `&` is written `&&`.
   */
  readonly title: Read<M, string>;

  /** All elements — items, separators, and nested submenus — directly inside the Submenu. */
  readonly menuElements: MenuElements;

  /** The nested submenus directly inside the Submenu. */
  readonly submenus: Submenus;

  /** The menu items directly inside the Submenu. */
  readonly menuItems: MenuItems;

  /** The separators directly inside the Submenu. */
  readonly menuSeparators: MenuSeparators;
}

// The event names Submenu carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the Submenu type.
export declare const Submenu: {
  /** Dispatched before the Submenu is displayed. This event does not bubble. This event is not cancelable. */
  readonly BEFORE_DISPLAY: 'beforeDisplay';
};
