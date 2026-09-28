/**
 * TaggedTextExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { TagTextExportCharacterSet } from './Enums/TagTextExportCharacterSet';
import type { TagTextForm } from './Enums/TagTextForm';

/**
 * Tagged text export preferences.
 */
export interface TaggedTextExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TaggedTextExportPreference';

  /** Resolves the proxy into the individual {@link TaggedTextExportPreference} objects it stands for. */
  getElements(): TaggedTextExportPreference<'single'>[];

  /** The computer language character set the exported file is written in. */
  get characterSet(): Read<M, TagTextExportCharacterSet>;
  set characterSet(value: TagTextExportCharacterSet);

  /** The form for tags in the exported text. */
  get tagForm(): Read<M, TagTextForm>;
  set tagForm(value: TagTextForm);
}
