/**
 * HyphenationException.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';

/**
 * A document's hyphenation exceptions list — words added to or removed from
 * InDesign's automatic hyphenation.
 */
export interface HyphenationException<M extends Mode = 'single'>
  extends EventTargetDOMObject<Document, M>,
    IndexedDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyphenationException';

  /** Resolves the proxy into the individual {@link HyphenationException} objects it stands for. */
  getElements(): HyphenationException<'single'>[];

  /** The name of the hyphenation exceptions list. */
  readonly name: Read<M, string>;

  /** Words removed from the hyphenation exceptions list. */
  get removedExceptions(): Read<M, string[]>;
  set removedExceptions(value: string[]);

  /** Words added to the hyphenation exceptions list. */
  get addedExceptions(): Read<M, string[]>;
  set addedExceptions(value: string[]);

  /**
   * Adds words to the hyphenation exceptions list.
   * @param removedList If `true`, adds the words to the removed-exceptions
   * list instead of the added-exceptions list. Defaults to `false`.
   */
  addException(addedExceptions: string[], removedList?: boolean): Read<M, void>;

  /**
   * Removes words from the hyphenation exceptions list.
   * @param removedList If `true`, removes the words from the
   * removed-exceptions list instead of the added-exceptions list. Defaults to `false`.
   */
  removeException(removedExceptions: string[], removedList?: boolean): Read<M, void>;
}
