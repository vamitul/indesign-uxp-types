/**
 * TaggedPDFPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { TaggedPDFStructureOrderOptions } from './Enums/TaggedPDFStructureOrderOptions';

/**
 * Tagged PDF preferences.
 */
export interface TaggedPDFPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TaggedPDFPreference';

  /** Resolves the proxy into the individual {@link TaggedPDFPreference} objects it stands for. */
  getElements(): TaggedPDFPreference<'single'>[];

  /** Tagged PDF structure order preference. */
  get structureOrder(): Read<M, TaggedPDFStructureOrderOptions>;
  set structureOrder(value: TaggedPDFStructureOrderOptions);
}
