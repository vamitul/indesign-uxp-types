/**
 * MenuSeparators.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { MenuElement } from './MenuElement';
import type { LocationOptions } from './Enums/LocationOptions';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { MenuSeparator } from './MenuSeparator';

/**
 * A collection of {@link MenuSeparator} objects. Menu separators are horizontal lines
 * used to visually group related items within a menu or submenu.
 *
 * @collection MenuSeparator
 */
export interface MenuSeparators
  extends BaseCollection<MenuSeparator, MenuSeparator, MenuSeparator<'plural'>>, IdCollection<MenuSeparator> {
  /** The object's DOM class name. */
  readonly constructorName: 'MenuSeparators';

  /**
   * Creates and inserts a new {@link MenuSeparator} into the menu.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing {@link MenuElement} relative
   * to which the separator is inserted.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link MenuElement} relative to which the separator is inserted.
   * @param withProperties Initial values for properties of the new MenuSeparator.
   */
  add(
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: MenuElement,
    withProperties?: PropertiesSetter<MenuSeparator>,
  ): MenuSeparator;

  /**
   * Creates a new menu separator from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link MenuSeparator}.
   */
  add(withProperties: PropertiesSetter<MenuSeparator>): MenuSeparator;

  /**
   * Creates and inserts a new {@link MenuSeparator} into the menu.
   *
   * @param at The location within the menu. Defaults to {@link LocationOptions.AT_END}.
   * @param reference Ignored for these `at` values.
   * @param withProperties Initial values for properties of the new MenuSeparator.
   */
  add(
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: MenuElement,
    withProperties?: PropertiesSetter<MenuSeparator>,
  ): MenuSeparator;
}
