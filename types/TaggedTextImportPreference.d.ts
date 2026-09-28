/**
 * TaggedTextImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { StyleConflict } from './Enums/StyleConflict';

/**
 * Tagged text import preferences.
 */
export interface TaggedTextImportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TaggedTextImportPreference';

  /** Resolves the proxy into the individual {@link TaggedTextImportPreference} objects it stands for. */
  getElements(): TaggedTextImportPreference<'single'>[];

  /** If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes. */
  get useTypographersQuotes(): Read<M, boolean>;
  set useTypographersQuotes(value: boolean);

  /** If true, removes text formatting. */
  get removeTextFormatting(): Read<M, boolean>;
  set removeTextFormatting(value: boolean);

  /** The policy for resolving conflicts when style names in the imported tagged text file match style names the current publication. */
  get styleConflict(): Read<M, StyleConflict>;
  set styleConflict(value: StyleConflict);
}
