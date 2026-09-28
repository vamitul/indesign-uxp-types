/**
 * EPSImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { CreateProxy } from './Enums/CreateProxy';

/**
 * EPS import preferences.
 */
export interface EPSImportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPSImportPreference';

  /** Resolves the proxy into the individual {@link EPSImportPreference} objects it stands for. */
  getElements(): EPSImportPreference<'single'>[];

  /** If true, reads OPI image links in the imported EPS file. If false, preserves the OPI links but does not read them. */
  get opiComments(): Read<M, boolean>;
  set opiComments(value: boolean);

  /** If true, applies clipping paths stored in the EPS file. */
  get epsFrames(): Read<M, boolean>;
  set epsFrames(value: boolean);

  /** Indicates when to create preview images. */
  get epsProxy(): Read<M, CreateProxy>;
  set epsProxy(value: CreateProxy);
}
