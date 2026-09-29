/**
 * FlattenerPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Spread } from './Spread';
import type { FlattenerLevel } from './Enums/FlattenerLevel';

/**
 * Settings controlling how transparency is flattened to rasterized and vector
 * artwork when the spread is printed or exported — rasterization balance,
 * resolution, and stroke/text handling.
 */
export interface FlattenerPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Spread, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FlattenerPreference';

  /** Resolves the proxy into the individual {@link FlattenerPreference} objects it stands for. */
  getElements(): FlattenerPreference<'single'>[];

  /** The amount of vector artwork to rasterize during flattening, specified as an enumerator or as a percentage in the range 0 to 100. */
  get rasterVectorBalance(): Read<M, FlattenerLevel | number>;
  set rasterVectorBalance(value: FlattenerLevel | number);

  /** The resolution for vector objects rasterized as a result of flattening. (Range: 1 to 9600) See {@link rasterVectorBalance}. */
  get lineArtAndTextResolution(): Read<M, number>;
  set lineArtAndTextResolution(value: number);

  /**
   * The resolution for gradients rasterized as a result of flattening and for drop shadow and
   * feathers when printed or exported.
   *
   * (Range: 0 to 1200) Note: Resolutions higher than 300 ppi increase file size and printing
   * time but generally do not improve the image quality.
   */
  get gradientAndMeshResolution(): Read<M, number>;
  set gradientAndMeshResolution(value: number);

  /** If true, ensures that the boundaries between vector and rasterized artwork fall along object paths. */
  get clipComplexRegions(): Read<M, boolean>;
  set clipComplexRegions(value: boolean);

  /**
   * If true, converts all strokes to outlines and ensures that stroke widths remain constant
   * during flattening.
   *
   * Note: Can cause thin strokes to appear slightly thicker than their original width.
   * Affects all strokes, not only strokes involved in the transparency.
   */
  get convertAllStrokesToOutlines(): Read<M, boolean>;
  set convertAllStrokesToOutlines(value: boolean);

  /**
   * If true, converts all text to outlines and discards all type glyph information on spreads
   * with transparency; ensures that the width of text strokes remains constant during
   * flattening.
   *
   * Note: Can cause small fonts to appear slightly thicker when viewed in Acrobat or printed
   * on low-quality desktop printers, but does not affect type quality when printed on
   * high-resolution printers or imagesetters.
   */
  get convertAllTextToOutlines(): Read<M, boolean>;
  set convertAllTextToOutlines(value: boolean);
}
