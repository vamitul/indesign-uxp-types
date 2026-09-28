/**
 * MenuSeparator.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { MenuElement } from './MenuElement';
import type { Menu } from './Menu';
import type { MenuItem } from './MenuItem';
import type { Submenu } from './Submenu';

/**
 * A visual divider line between groups of {@link MenuItem}s in a {@link Menu}
 * or {@link Submenu}.
 */
export interface MenuSeparator<M extends Mode = 'single'> extends MenuElement<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'MenuSeparator';

  /** Resolves the proxy into the individual {@link MenuSeparator} objects it stands for. */
  getElements(): MenuSeparator<'single'>[];

  /** The unique ID of the MenuSeparator. */
  readonly id: Read<M, number>;
}
