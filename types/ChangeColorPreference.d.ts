/**
 * ChangeColorPreference.d.ts — indesign-uxp-types
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
 * Change color preferences.
 */
export interface ChangeColorPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ChangeColorPreference';

  /** Resolves the proxy into the individual {@link ChangeColorPreference} objects it stands for. */
  getElements(): ChangeColorPreference<'single'>[];

  /** The replacement color. */
  get changeTo(): Read<M, Swatch | NothingEnum.NOTHING>;
  set changeTo(value: Swatch | string | NothingEnum.NOTHING);

  /** The replacement tint. */
  get tint(): Read<M, number | NothingEnum.NOTHING>;
  set tint(value: number | NothingEnum.NOTHING);
}
