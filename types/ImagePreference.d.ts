/**
 * ImagePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Image preferences.
 */
export interface ImagePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ImagePreference';

  /** Resolves the proxy into the individual {@link ImagePreference} objects it stands for. */
  getElements(): ImagePreference<'single'>[];

  /** If true, preserve image bounds when relinking. */
  get preserveBounds(): Read<M, boolean>;
  set preserveBounds(value: boolean);
}
