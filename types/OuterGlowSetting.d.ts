/**
 * OuterGlowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TransparencySetting } from './TransparencySetting';
import type { BlendMode } from './Enums/BlendMode';
import type { GlowTechnique } from './Enums/GlowTechnique';
import type { FindChangeOuterGlowSetting } from './FindChangeOuterGlowSetting';

/**
 * Settings for the outer-glow effect — a glow that radiates outward from the
 * edges of the object or text it's applied to.
 */
export interface OuterGlowSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeOuterGlowSetting'` when the object is a {@link FindChangeOuterGlowSetting}. */
  readonly constructorName: 'OuterGlowSetting' | 'FindChangeOuterGlowSetting';

  /** Resolves the proxy into the individual {@link OuterGlowSetting} objects it stands for. */
  getElements(): OuterGlowSetting<'single'>[];

  /** If true, the outer glow effect is applied. */
  get applied(): Read<M, boolean>;
  set applied(value: boolean);

  /** The blending mode for the outer glow effect. */
  get blendMode(): Read<M, BlendMode>;
  set blendMode(value: BlendMode);

  /** The opacity of the outer glow (as a percentage). (Range: 0 to 100). */
  get opacity(): Read<M, number>;
  set opacity(value: number);

  /** The amount (as a percentage) of noise applied to the outer glow. (Range: 0 to 100). */
  get noise(): Read<M, number>;
  set noise(value: number);

  /**
   * The color applied to the outer glow, specified as a swatch (color, gradient, tint, or
   * mixed ink), or an array of color values.
   *
   * The color mode dictates the array values: for RGB, specify three values, each in the
   * range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a
   * percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify
   * three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range
   * -128 to 127.
   */
  get effectColor(): Read<M, Swatch>;
  set effectColor(value: Swatch);

  /** Whether the glow's edge is soft or precise. See {@link GlowTechnique}. */
  get technique(): Read<M, GlowTechnique>;
  set technique(value: GlowTechnique);

  /** The amount of spread (as a percentage of the outer glow size). (Range: 0 to 100). */
  get spread(): Read<M, number>;
  set spread(value: number);

  /** The size of the outer glow. */
  get size(): Read<M, number>;
  set size(value: MeasurementValue);
}
