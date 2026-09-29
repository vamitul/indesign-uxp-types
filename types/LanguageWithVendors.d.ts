/**
 * LanguageWithVendors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, ReadonlyNamedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Language } from './Language';

/**
 * A language definition that exposes the available hyphenation, spelling, and
 * thesaurus vendor plug-ins and the user dictionaries associated with it.
 *
 * This is the surface behind the Dictionary preferences panel, as opposed to
 * the per-document {@link Language}.
 */
export interface LanguageWithVendors<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    ReadonlyNamedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'LanguageWithVendors';

  /** Resolves the proxy into the individual {@link LanguageWithVendors} objects it stands for. */
  getElements(): LanguageWithVendors<'single'>[];


  /** The unique numeric ID of the language within its session. */
  readonly id: Read<M, number>;
  /** The untranslated (English) name of the language. */
  readonly untranslatedName: Read<M, string>;

  /** The full name of the language's ICU locale, used by ICU-based text services. */
  readonly icuLocaleName: Read<M, string>;

  /** Every spell-checking vendor plug-in available for this language. */
  readonly spellingVendorList: Read<M, string[]>;

  /** Every hyphenation vendor plug-in available for this language. */
  readonly hyphenationVendorList: Read<M, string[]>;

  /** The single-quote pair used for this language, e.g. `'‘’'`. */
  get singleQuotes(): Read<M, string>;
  set singleQuotes(value: string);

  /** The double-quote pair used for this language, e.g. `'“”'`. */
  get doubleQuotes(): Read<M, string>;
  set doubleQuotes(value: string);

  /** The source of the hyphenation rules applied to text in this language. Must be one of {@link hyphenationVendorList}. */
  get hyphenationVendor(): Read<M, string>;
  set hyphenationVendor(value: string);

  /** The source of the spell-checking dictionary applied to text in this language. Must be one of {@link spellingVendorList}. */
  get spellingVendor(): Read<M, string>;
  set spellingVendor(value: string);

  /** The source of the thesaurus lookups for this language. */
  get thesaurusVendor(): Read<M, string>;
  set thesaurusVendor(value: string);

  /** The paths of every user dictionary added for this language. */
  get dictionaryPaths(): Read<M, string[]>;
  set dictionaryPaths(value: string[]);

  /**
   * Adds a user dictionary to this language.
   * @param filePath The path to the dictionary file.
   */
  addDictionaryPath(filePath: string): Read<M, string>;

  /**
   * Removes a user dictionary from this language.
   * @param filePath The path to the dictionary file.
   */
  removeDictionaryPath(filePath: string): Read<M, string>;
}
