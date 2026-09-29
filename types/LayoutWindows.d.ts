/**
 * LayoutWindows.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { LayoutWindow } from './LayoutWindow';

/**
 * A collection of {@link LayoutWindow} objects. Each layout window represents
 * an open document window where the layout is displayed and can be edited.
 *
 * @collection LayoutWindow
 */
export interface LayoutWindows
  extends BaseCollection<LayoutWindow, LayoutWindow, LayoutWindow<'plural'>>, NamedCollection<LayoutWindow> {
  /** The object's DOM class name. */
  readonly constructorName: 'LayoutWindows';
}
