/**
 * ObjectStyleStrokeEffectsCategorySettings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ObjectStyle } from './ObjectStyle';

/**
 * Which effect categories an {@link ObjectStyle} enables for an object's stroke,
 * independently of the object itself, its fill, or its content.
 */
export interface ObjectStyleStrokeEffectsCategorySettings<M extends Mode = 'single'> extends EventTargetDOMObject<ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyleStrokeEffectsCategorySettings';

  /** Resolves the proxy into the individual {@link ObjectStyleStrokeEffectsCategorySettings} objects it stands for. */
  getElements(): ObjectStyleStrokeEffectsCategorySettings<'single'>[];

  /** If true, the object style will apply transparency settings. */
  get enableTransparency(): Read<M, boolean>;
  set enableTransparency(value: boolean);

  /** If true, the object style will apply drop shadows. */
  get enableDropShadow(): Read<M, boolean>;
  set enableDropShadow(value: boolean);

  /** If true, the object style will apply feathering. */
  get enableFeather(): Read<M, boolean>;
  set enableFeather(value: boolean);

  /** If true, the object style will apply inner shadows. */
  get enableInnerShadow(): Read<M, boolean>;
  set enableInnerShadow(value: boolean);

  /** If true, the object style will apply outer glow. */
  get enableOuterGlow(): Read<M, boolean>;
  set enableOuterGlow(value: boolean);

  /** If true, the object style will apply inner glow. */
  get enableInnerGlow(): Read<M, boolean>;
  set enableInnerGlow(value: boolean);

  /** If true, the object style will apply bevel emboss. */
  get enableBevelEmboss(): Read<M, boolean>;
  set enableBevelEmboss(value: boolean);

  /** If true, the object style will apply satin. */
  get enableSatin(): Read<M, boolean>;
  set enableSatin(value: boolean);

  /** If true, the object style will apply directional feathering. */
  get enableDirectionalFeather(): Read<M, boolean>;
  set enableDirectionalFeather(value: boolean);

  /** If true, the object style will apply gradient feathering. */
  get enableGradientFeather(): Read<M, boolean>;
  set enableGradientFeather(value: boolean);
}
