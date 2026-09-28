/**
 * PreflightProcesses.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { PreflightOption } from './PreflightOption';
import type { PreflightProfile } from './PreflightProfile';
import type { Document } from './Document';
import type { BaseCollection } from './_base/Collections';
import type { PreflightProcess } from './PreflightProcess';

/**
 * A collection of active {@link PreflightProcess} tasks.
 *
 * Preflight processes represent the execution of a {@link PreflightProfile} against a
 * specific {@link Document}. Creating a process initiates a background inspection of the
 * document's content based on the rules defined in the profile.
 * @collection PreflightProcess
 */
export interface PreflightProcesses extends BaseCollection<PreflightProcess, PreflightProcess, PreflightProcess<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightProcesses';

  /**
   * Initiates a new preflight inspection on the specified document.
   * The process runs asynchronously, and its status can be monitored through the returned {@link PreflightProcess} object.
   *
   * @param targetObject The {@link Document} to be inspected.
   * @param appliedProfile The {@link PreflightProfile} containing the rules to apply during inspection.
   * @param preflightOptions Optional {@link PreflightOption} settings to further configure the preflight behavior.
   * @param withProperties Initial values for properties of the new {@link PreflightProcess}.
   */
  add(
    targetObject: Document,
    appliedProfile: PreflightProfile,
    preflightOptions?: PreflightOption,
    withProperties?: PropertiesSetter<PreflightProcess>,
  ): PreflightProcess;
}
