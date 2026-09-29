/**
 * AlignDistributePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { AlignDistributeBounds } from './Enums/AlignDistributeBounds';

/**
 * Preferences for alignment and distribution.
 */
export interface AlignDistributePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AlignDistributePreference';

  /** Resolves the proxy into the individual {@link AlignDistributePreference} objects it stands for. */
  getElements(): AlignDistributePreference<'single'>[];

  /** The bounds to use as a basis for aligning or distributing page items. */
  get alignDistributeBounds(): Read<M, AlignDistributeBounds>;
  set alignDistributeBounds(value: AlignDistributeBounds);

  /** If true, distributes page items by a fixed distance rather than using {@link alignDistributeBounds}. */
  get distributeAbsolute(): Read<M, boolean>;
  set distributeAbsolute(value: boolean);

  /** The fixed distance used to distribute page items when {@link distributeAbsolute} is `true`. */
  get distributeAbsoluteMeasurement(): Read<M, number>;
  set distributeAbsoluteMeasurement(value: MeasurementValue);

  /** If true, distributes the space between page items by a fixed distance rather than using {@link alignDistributeBounds}. */
  get distributeSpaceAbsolute(): Read<M, boolean>;
  set distributeSpaceAbsolute(value: boolean);

  /** The fixed distance used to distribute the space between page items when {@link distributeSpaceAbsolute} is `true`. */
  get distributeSpaceAbsoluteMeasurement(): Read<M, number>;
  set distributeSpaceAbsoluteMeasurement(value: MeasurementValue);
}
