/**
 * GpuPerformancePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * GPU performance settings for the application.
 */
export interface GpuPerformancePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GpuPerformancePreference';

  /** Resolves the proxy into the individual {@link GpuPerformancePreference} objects it stands for. */
  getElements(): GpuPerformancePreference<'single'>[];

  /** If true, enables GPU performance. */
  get enableGpuPerformance(): Read<M, boolean>;
  set enableGpuPerformance(value: boolean);

  /** If true, enables animated zoom. */
  get enableAnimatedZoom(): Read<M, boolean>;
  set enableAnimatedZoom(value: boolean);
}
