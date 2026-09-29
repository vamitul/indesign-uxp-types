/**
 * DisplayPerformancePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ViewDisplaySettings } from './Enums/ViewDisplaySettings';

/**
 * Default display performance settings for the application.
 */
export interface DisplayPerformancePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DisplayPerformancePreference';

  /** Resolves the proxy into the individual {@link DisplayPerformancePreference} objects it stands for. */
  getElements(): DisplayPerformancePreference<'single'>[];

  /** Object-level default display performance settings. Note: The settings do not apply to graphics that are already placed in the document. */
  get defaultDisplaySettings(): Read<M, ViewDisplaySettings>;
  set defaultDisplaySettings(value: ViewDisplaySettings);

  /** If true, ignores object-level default display performance settings and uses the application-level default display settings; also prevents setting object-level settings. */
  get ignoreLocalSettings(): Read<M, boolean>;
  set ignoreLocalSettings(value: boolean);

  /** If true, sets application-level preferences to preserve object-level display settings. */
  get persistLocalSettings(): Read<M, boolean>;
  set persistLocalSettings(value: boolean);
}
