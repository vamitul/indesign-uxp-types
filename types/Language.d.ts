/**
 * Language.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, ReadonlyNamedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';

/**
 * The language on which hyphenation rules and spell checking are based, as applied to a text
 * range through its `appliedLanguage`.
 */
export interface Language<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    ReadonlyNamedDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Language';

  /** Resolves the proxy into the individual {@link Language} objects it stands for. */
  getElements(): Language<'single'>[];


  /** The unique numeric ID of the language within its document. */
  readonly id: Read<M, number>;
  /** The untranslated (English) name of the language. */
  readonly untranslatedName: Read<M, string>;

  /** The full name of the language's ICU locale, used by ICU-based text services. */
  readonly icuLocaleName: Read<M, string>;

  /** The single-quote pair used for this language, e.g. `'‘’'`. */
  get singleQuotes(): Read<M, string>;
  set singleQuotes(value: string);

  /** The double-quote pair used for this language, e.g. `'“”'`. */
  get doubleQuotes(): Read<M, string>;
  set doubleQuotes(value: string);

  /** The source of the hyphenation rules applied to text in this language. */
  get hyphenationVendor(): Read<M, string>;
  set hyphenationVendor(value: string);

  /** The source of the spell-checking dictionary applied to text in this language. */
  get spellingVendor(): Read<M, string>;
  set spellingVendor(value: string);
}
