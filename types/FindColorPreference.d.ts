/**
 * FindColorPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Swatch } from './Swatch';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * Find color preferences.
 */
export interface FindColorPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindColorPreference';

  /** Resolves the proxy into the individual {@link FindColorPreference} objects it stands for. */
  getElements(): FindColorPreference<'single'>[];

  /** The color to find. */
  get findWhat(): Read<M, Swatch | NothingEnum.NOTHING>;
  set findWhat(value: Swatch | string | NothingEnum.NOTHING);

  /** Tint to find. */
  get tint(): Read<M, number | NothingEnum.NOTHING>;
  set tint(value: number | NothingEnum.NOTHING);

  /** Lower limit of tint to find. */
  get tintLowerLimit(): Read<M, number | NothingEnum.NOTHING>;
  set tintLowerLimit(value: number | NothingEnum.NOTHING);

  /** Upper limit of tint to find. */
  get tintUpperLimit(): Read<M, number | NothingEnum.NOTHING>;
  set tintUpperLimit(value: number | NothingEnum.NOTHING);
}
