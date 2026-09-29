/**
 * IntegerEditbox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { NumericEditboxSurface } from './_base/WidgetMixins';

/**
 * A numeric entry field whose typed value rounds to the nearest whole
 * number (`.5` rounds up).
 */
export interface IntegerEditbox<M extends Mode = 'single'> extends Widget<M>, NumericEditboxSurface<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'IntegerEditbox';

  /** Resolves the proxy into the individual {@link IntegerEditbox} objects it stands for. */
  getElements(): IntegerEditbox<'single'>[];
}
