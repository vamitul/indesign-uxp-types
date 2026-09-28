/**
 * InnerGlowSetting.d.ts — indesign-uxp-types
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
import type { InnerGlowSource } from './Enums/InnerGlowSource';
import type { FindChangeInnerGlowSetting } from './FindChangeInnerGlowSetting';

/**
 * Settings for the inner-glow effect — a glow that radiates inward from the edges
 * of the object or text it's applied to.
 */
export interface InnerGlowSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeInnerGlowSetting'` when the object is a {@link FindChangeInnerGlowSetting}. */
  readonly constructorName: 'InnerGlowSetting' | 'FindChangeInnerGlowSetting';

  /** Resolves the proxy into the individual {@link InnerGlowSetting} objects it stands for. */
  getElements(): InnerGlowSetting<'single'>[];

  /** If true, the inner glow effect is applied. */
  get applied(): Read<M, boolean>;
  set applied(value: boolean);

  /** The blending mode for the inner glow effect. */
  get blendMode(): Read<M, BlendMode>;
  set blendMode(value: BlendMode);

  /** The opacity of the inner glow (as a percentage). (Range: 0 to 100). */
  get opacity(): Read<M, number>;
  set opacity(value: number);

  /** The amount (as a percentage) of noise applied to the inner glow. (Range: 0 to 100). */
  get noise(): Read<M, number>;
  set noise(value: number);

  /**
   * The color applied to the inner glow, specified as a swatch (color, gradient, tint, or
   * mixed ink), or as an array of color values.
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

  /** The amount of spread (as a percentage of the inner glow size). (Range: 0 to 100). */
  get spread(): Read<M, number>;
  set spread(value: number);

  /** The size of the inner glow. */
  get size(): Read<M, number>;
  set size(value: MeasurementValue);

  /** Whether the glow radiates from the object's center or from its edge. See {@link InnerGlowSource}. */
  get source(): Read<M, InnerGlowSource>;
  set source(value: InnerGlowSource);
}
