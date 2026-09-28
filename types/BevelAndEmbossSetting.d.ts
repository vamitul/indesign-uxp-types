/**
 * BevelAndEmbossSetting.d.ts — indesign-uxp-types
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
import type { BevelAndEmbossDirection } from './Enums/BevelAndEmbossDirection';
import type { BevelAndEmbossStyle } from './Enums/BevelAndEmbossStyle';
import type { BevelAndEmbossTechnique } from './Enums/BevelAndEmbossTechnique';
import type { BlendMode } from './Enums/BlendMode';
import type { FindChangeBevelAndEmbossSetting } from './FindChangeBevelAndEmbossSetting';

/**
 * Bevel and emboss effect settings.
 */
export interface BevelAndEmbossSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeBevelAndEmbossSetting'` when the object is a {@link FindChangeBevelAndEmbossSetting}. */
  readonly constructorName: 'BevelAndEmbossSetting' | 'FindChangeBevelAndEmbossSetting';

  /** Resolves the proxy into the individual {@link BevelAndEmbossSetting} objects it stands for. */
  getElements(): BevelAndEmbossSetting<'single'>[];

  /** If true, the bevel or emboss effect is applied. */
  get applied(): Read<M, boolean>;
  set applied(value: boolean);

  /** The style of bevel or emboss. */
  get style(): Read<M, BevelAndEmbossStyle>;
  set style(value: BevelAndEmbossStyle);

  /** The edging technique of the bevel or emboss. */
  get technique(): Read<M, BevelAndEmbossTechnique>;
  set technique(value: BevelAndEmbossTechnique);

  /** The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000). */
  get depth(): Read<M, number>;
  set depth(value: number);

  /** The direction of the bevel or emboss. */
  get direction(): Read<M, BevelAndEmbossDirection>;
  set direction(value: BevelAndEmbossDirection);

  /** The size of the bevel or emboss. */
  get size(): Read<M, number>;
  set size(value: MeasurementValue);

  /** The amount (in pixels) of softening. */
  get soften(): Read<M, number>;
  set soften(value: MeasurementValue);

  /** The angle of the light source. (Range: -180 to 180). */
  get angle(): Read<M, number>;
  set angle(value: number);

  /** The altitude of the light source. (Range: 0 to 90). */
  get altitude(): Read<M, number>;
  set altitude(value: number);

  /** If true, the global light source is used. */
  get useGlobalLight(): Read<M, boolean>;
  set useGlobalLight(value: boolean);

  /** The {@link Swatch} applied to the highlight portion of the effect. */
  get highlightColor(): Read<M, Swatch>;
  set highlightColor(value: Swatch);

  /** The blending mode for the highlight portion of the effect. */
  get highlightBlendMode(): Read<M, BlendMode>;
  set highlightBlendMode(value: BlendMode);

  /** The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100). */
  get highlightOpacity(): Read<M, number>;
  set highlightOpacity(value: number);

  /** The {@link Swatch} applied to the shadow portion of the effect. */
  get shadowColor(): Read<M, Swatch>;
  set shadowColor(value: Swatch);

  /** The blending mode for the shadow portion of the effect. */
  get shadowBlendMode(): Read<M, BlendMode>;
  set shadowBlendMode(value: BlendMode);

  /** The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100). */
  get shadowOpacity(): Read<M, number>;
  set shadowOpacity(value: number);
}
