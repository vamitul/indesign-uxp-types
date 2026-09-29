/**
 * FlattenerPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { FlattenerLevel } from './Enums/FlattenerLevel';

/**
 * A named set of transparency-flattening settings, applied when flattening
 * transparent artwork for printing, export, or per-spread overrides.
 */
export interface FlattenerPreset<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    NamableDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FlattenerPreset';

  /** Resolves the proxy into the individual {@link FlattenerPreset} objects it stands for. */
  getElements(): FlattenerPreset<'single'>[];

  /** The unique ID of the flattener preset. */
  readonly id: Read<M, number>;

  /**
   * The amount of vector artwork to rasterize during flattening, as a level
   * or as a percentage.
   */
  get rasterVectorBalance(): Read<M, FlattenerLevel | number>;
  set rasterVectorBalance(value: FlattenerLevel | number);

  /**
   * The resolution (in ppi) for vector objects rasterized during flattening.
   * Governed by {@link rasterVectorBalance}.
   */
  get lineArtAndTextResolution(): Read<M, number>;
  set lineArtAndTextResolution(value: number);

  /**
   * The resolution (in ppi) for gradients rasterized during flattening, and
   * for drop shadows and feathers when printed or exported. Resolutions
   * above 300 increase file size and processing time without a visible
   * quality gain.
   */
  get gradientAndMeshResolution(): Read<M, number>;
  set gradientAndMeshResolution(value: number);

  /** If `true`, keeps the boundaries between vector and rasterized artwork aligned to object paths. */
  get clipComplexRegions(): Read<M, boolean>;
  set clipComplexRegions(value: boolean);

  /**
   * If `true`, converts all strokes to outlines so their width stays
   * constant during flattening. Affects every stroke in the document, not
   * only strokes involved in transparency, and can make thin strokes look
   * slightly heavier.
   */
  get convertAllStrokesToOutlines(): Read<M, boolean>;
  set convertAllStrokesToOutlines(value: boolean);

  /**
   * If `true`, converts all text on transparent spreads to outlines and discards glyph
   * information, keeping stroke widths constant during flattening.
   *
   * Can make small fonts look slightly heavier in Acrobat or on low-resolution printers, but
   * has no effect on high-resolution output.
   */
  get convertAllTextToOutlines(): Read<M, boolean>;
  set convertAllTextToOutlines(value: boolean);

  /** Deletes the flattener preset. */
  remove(): Read<M, void>;

  /** Duplicates the flattener preset. */
  duplicate(): Read<M, FlattenerPreset>;
}
