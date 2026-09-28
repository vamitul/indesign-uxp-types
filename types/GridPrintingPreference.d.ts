/**
 * GridPrintingPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Grid printing and exporting preferences.
 */
export interface GridPrintingPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GridPrintingPreference';

  /** Resolves the proxy into the individual {@link GridPrintingPreference} objects it stands for. */
  getElements(): GridPrintingPreference<'single'>[];

  /** If true, displays layout grids in the printed or exported document. */
  get layoutGridPrinting(): Read<M, boolean>;
  set layoutGridPrinting(value: boolean);

  /** If true, displays frame (story) grids in the printed or exported document. */
  get frameGridPrinting(): Read<M, boolean>;
  set frameGridPrinting(value: boolean);

  /** If true, displays text in the printed or exported document. */
  get textPrinting(): Read<M, boolean>;
  set textPrinting(value: boolean);

  /** If true, displays page items other than text, frame grids, and layout grids in the printed or exported document — see {@link textPrinting}, {@link frameGridPrinting}, and {@link layoutGridPrinting} for those three. */
  get pageItemPrinting(): Read<M, boolean>;
  set pageItemPrinting(value: boolean);

  /** The stroke weight (in points) of the layout grid. */
  get layoutGridStrokeWeight(): Read<M, number>;
  set layoutGridStrokeWeight(value: number);

  /** The stroke weight (in points) of the frame grid. */
  get frameGridStrokeWeight(): Read<M, number>;
  set frameGridStrokeWeight(value: number);
}
