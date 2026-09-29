/**
 * PreflightProfile.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { FilePath } from './_base/Types';
import type { PreflightProfileRules } from './PreflightProfileRules';
import type { PreflightRuleInstances } from './PreflightRuleInstances';
import type { PreflightProcess } from './PreflightProcess';

/**
 * A named, reusable set of preflight rules that a {@link PreflightProcess}
 * checks a document against.
 */
export interface PreflightProfile<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightProfile';

  /** Resolves the proxy into the individual {@link PreflightProfile} objects it stands for. */
  getElements(): PreflightProfile<'single'>[];

  /** The unique ID of the preflight profile. */
  readonly id: Read<M, number>;

  /** The profile's built-in rules, each individually enabled and configured. */
  readonly preflightProfileRules: PreflightProfileRules;

  /** Additional preflight rules added directly to this profile. */
  readonly preflightRuleInstances: PreflightRuleInstances;

  /** The description of the preflight profile. */
  get description(): Read<M, string>;
  set description(value: string);

  /** Deletes the preflight profile. */
  remove(): Read<M, void>;

  /** Duplicates the preflight profile. */
  duplicate(): Read<M, PreflightProfile>;

  /**
   * Overwrites this profile's rule configuration by copying it from another
   * profile.
   * @param using The profile to copy from, or the name of an existing profile.
   */
  update(using?: PreflightProfile | string): Read<M, void>;

  /** Unembeds this profile, detaching it from the document that embedded it. */
  unembed(): Read<M, void>;

  /** Saves this preflight profile to a standalone InDesign preflight profile file. */
  save(to: FilePath): Read<M, void>;
}
