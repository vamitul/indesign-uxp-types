/**
 * GrabberPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { PanningTypes } from './Enums/PanningTypes';

/**
 * Grabber preferences.
 */
export interface GrabberPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GrabberPreference';

  /** Resolves the proxy into the individual {@link GrabberPreference} objects it stands for. */
  getElements(): GrabberPreference<'single'>[];

  /** The display performance quality setting to use when scrolling. */
  get grabberPanning(): Read<M, PanningTypes>;
  set grabberPanning(value: PanningTypes);
}
