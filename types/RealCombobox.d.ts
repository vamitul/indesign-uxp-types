/**
 * RealCombobox.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { NumericComboboxSurface } from './_base/WidgetMixins';

/**
 * An editable dropdown for high-precision numeric values.
 */
export interface RealCombobox<M extends Mode = 'single'> extends Widget<M>, NumericComboboxSurface<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'RealCombobox';

  /** Resolves the proxy into the individual {@link RealCombobox} objects it stands for. */
  getElements(): RealCombobox<'single'>[];
}
