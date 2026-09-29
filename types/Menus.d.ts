/**
 * Menus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Menu } from './Menu';

/**
 * A collection of {@link Menu} objects representing the top-level menus and
 * contextual menus within the InDesign application user interface.
 *
 * @collection Menu
 */
export interface Menus extends BaseCollection<Menu, Menu, Menu<'plural'>>, NamedCollection<Menu> {
  /** The object's DOM class name. */
  readonly constructorName: 'Menus';
}
