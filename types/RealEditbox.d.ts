/**
 * RealEditbox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { NumericEditboxSurface } from './_base/WidgetMixins';

/**
 * A high-precision (non-rounding) numeric entry field.
 */
export interface RealEditbox<M extends Mode = 'single'> extends Widget<M>, NumericEditboxSurface<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'RealEditbox';

  /** Resolves the proxy into the individual {@link RealEditbox} objects it stands for. */
  getElements(): RealEditbox<'single'>[];
}
