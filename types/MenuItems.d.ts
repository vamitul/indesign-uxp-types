/**
 * MenuItems.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { MenuElement } from './MenuElement';
import type { LocationOptions } from './Enums/LocationOptions';
import type { MenuAction } from './MenuAction';
import type { ScriptMenuAction } from './ScriptMenuAction';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { MenuItem } from './MenuItem';

/**
 * A collection of {@link MenuItem} objects within an InDesign menu or submenu.
 * Each menu item is backed by a {@link MenuAction} that defines its label,
 * enabled state, and the handler invoked when the item is chosen.
 *
 * @collection MenuItem
 */
export interface MenuItems
  extends
    BaseCollection<MenuItem, MenuItem, MenuItem<'plural'>>,
    IdCollection<MenuItem>,
    NamedCollection<MenuItem> {
  /** The object's DOM class name. */
  readonly constructorName: 'MenuItems';

  /**
   * Creates and inserts a new {@link MenuItem} into the menu.
   *
   * The item's visible label and behavior are determined entirely by the supplied
   * `associatedMenuAction`. When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the `reference` parameter is required and specifies the existing
   * {@link MenuElement} relative to which the new item is inserted.
   * @param associatedMenuAction The {@link MenuAction} or {@link ScriptMenuAction} that implements the menu item.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link MenuElement} relative to which the new item is inserted.
   * @param withProperties Initial values for properties of the new MenuItem.
   */
  add(
    associatedMenuAction: MenuAction | ScriptMenuAction,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: MenuElement,
    withProperties?: PropertiesSetter<MenuItem>,
  ): MenuItem;

  /**
   * Creates and inserts a new {@link MenuItem} into the menu.
   *
   * @param associatedMenuAction The {@link MenuAction} or {@link ScriptMenuAction} that implements the menu item.
   * @param at The location within the menu. Defaults to {@link LocationOptions.AT_END}.
   * @param reference Ignored for these `at` values.
   * @param withProperties Initial values for properties of the new MenuItem.
   */
  add(
    associatedMenuAction: MenuAction | ScriptMenuAction,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: MenuElement,
    withProperties?: PropertiesSetter<MenuItem>,
  ): MenuItem;
}
