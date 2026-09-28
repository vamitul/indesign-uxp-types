/**
 * StrokeFillProxySetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Swatch } from './Swatch';
import type { StrokeFillProxyOptions } from './Enums/StrokeFillProxyOptions';
import type { StrokeFillTargetOptions } from './Enums/StrokeFillTargetOptions';

/**
 * Stroke/fill proxy settings.
 */
export interface StrokeFillProxySetting<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'StrokeFillProxySetting';

  /** Resolves the proxy into the individual {@link StrokeFillProxySetting} objects it stands for. */
  getElements(): StrokeFillProxySetting<'single'>[];

  /** Which part of the stroke/fill proxy is currently active. */
  get active(): Read<M, StrokeFillProxyOptions>;
  set active(value: StrokeFillProxyOptions);

  /** Which target is affected by changes to the stroke/fill proxy. */
  get target(): Read<M, StrokeFillTargetOptions>;
  set target(value: StrokeFillTargetOptions);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the StrokeFillProxySetting. */
  get fillColor(): Read<M, Swatch>;
  set fillColor(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the StrokeFillProxySetting. */
  get strokeColor(): Read<M, Swatch>;
  set strokeColor(value: Swatch | string);
}
