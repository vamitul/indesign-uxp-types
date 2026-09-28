/**
 * AngleEditbox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { NumericEditboxSurface } from './_base/WidgetMixins';

/**
 * A numeric entry field for angle values.
 */
export interface AngleEditbox<M extends Mode = 'single'> extends Widget<M>, NumericEditboxSurface<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'AngleEditbox';

  /** Resolves the proxy into the individual {@link AngleEditbox} objects it stands for. */
  getElements(): AngleEditbox<'single'>[];
}
