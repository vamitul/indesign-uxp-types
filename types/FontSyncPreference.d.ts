/**
 * FontSyncPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Font sync preferences.
 */
export interface FontSyncPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FontSyncPreference';

  /** Resolves the proxy into the individual {@link FontSyncPreference} objects it stands for. */
  getElements(): FontSyncPreference<'single'>[];

  /** Auto add font preference. */
  get autoActivateFont(): Read<M, boolean>;
  set autoActivateFont(value: boolean);
}
