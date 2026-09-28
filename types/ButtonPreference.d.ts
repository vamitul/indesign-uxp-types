/**
 * ButtonPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';

/**
 * Button preferences.
 */
export interface ButtonPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M>, NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ButtonPreference';

  /** Resolves the proxy into the individual {@link ButtonPreference} objects it stands for. */
  getElements(): ButtonPreference<'single'>[];

}
