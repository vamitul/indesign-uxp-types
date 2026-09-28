/**
 * TransparencyPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { BlendingSpace } from './Enums/BlendingSpace';

/**
 * Transparency preferences.
 */
export interface TransparencyPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TransparencyPreference';

  /** Resolves the proxy into the individual {@link TransparencyPreference} objects it stands for. */
  getElements(): TransparencyPreference<'single'>[];

  /** The color space used for blending the colors of transparent objects. */
  get blendingSpace(): Read<M, BlendingSpace>;
  set blendingSpace(value: BlendingSpace);

  /** The angle of the global light. (Range: -360 to 360). */
  get globalLightAngle(): Read<M, number>;
  set globalLightAngle(value: number);

  /** The altitude of the global light. (Range: 0 to 90). */
  get globalLightAltitude(): Read<M, number>;
  set globalLightAltitude(value: number);
}
