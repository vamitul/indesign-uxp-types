/**
 * Submenus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { MenuElement } from './MenuElement';
import type { LocationOptions } from './Enums/LocationOptions';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Submenu } from './Submenu';

/**
 * A collection of {@link Submenu} objects. Submenus are nested menus that
 * can contain their own collection of menu items, separators, and further submenus.
 *
 * @collection Submenu
 */
export interface Submenus
  extends BaseCollection<Submenu, Submenu, Submenu<'plural'>>, NamedCollection<Submenu> {
  /** The object's DOM class name. */
  readonly constructorName: 'Submenus';

  /**
   * Creates and inserts a new {@link Submenu} into the menu.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing {@link MenuElement} relative
   * to which the submenu is inserted.
   * @param title The display name of the submenu. Use ampersands (`&`) to define Windows keyboard shortcuts (e.g., `&Window`). Use double ampersands (`&&`) to display a literal ampersand.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link MenuElement} relative to which the submenu is inserted.
   * @param withProperties Initial values for properties of the new Submenu.
   */
  add(
    title: string,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: MenuElement,
    withProperties?: PropertiesSetter<Submenu>,
  ): Submenu;

  /**
   * Creates and inserts a new {@link Submenu} into the menu.
   *
   * @param title The display name of the submenu. Use ampersands (`&`) to define Windows keyboard shortcuts (e.g., `&Window`). Use double ampersands (`&&`) to display a literal ampersand.
   * @param at The location within the menu. Defaults to {@link LocationOptions.AT_END}.
   * @param reference Ignored for these `at` values.
   * @param withProperties Initial values for properties of the new Submenu.
   */
  add(
    title: string,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: MenuElement,
    withProperties?: PropertiesSetter<Submenu>,
  ): Submenu;
}
