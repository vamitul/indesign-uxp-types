/**
 * FontLockingPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Font locking preferences.
 */
export interface FontLockingPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FontLockingPreference';

  /** Resolves the proxy into the individual {@link FontLockingPreference} objects it stands for. */
  getElements(): FontLockingPreference<'single'>[];

  /** If true, turns on missing glyph protection during typing. */
  get fontInputLocking(): Read<M, boolean>;
  set fontInputLocking(value: boolean);

  /** If true, turns on missing glyph protection during font change. */
  get fontChangeLocking(): Read<M, boolean>;
  set fontChangeLocking(value: boolean);
}
