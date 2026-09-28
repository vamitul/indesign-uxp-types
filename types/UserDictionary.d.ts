/**
 * UserDictionary.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * A user dictionary — application-level word lists used for spelling and
 * hyphenation, tracking words added to or removed from the base dictionary.
 */
export interface UserDictionary<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'UserDictionary';

  /** Resolves the proxy into the individual {@link UserDictionary} objects it stands for. */
  getElements(): UserDictionary<'single'>[];

  /** The name of the user dictionary. */
  readonly name: Read<M, string>;

  /** Words added to the user dictionary. */
  get addedWords(): Read<M, string[]>;
  set addedWords(value: string[]);

  /** Words removed from the user dictionary. */
  get removedWords(): Read<M, string[]>;
  set removedWords(value: string[]);

  /**
   * Adds words to the dictionary.
   * @param removedList If `true`, adds the words to the removed-words list
   * instead of the added-words list. Defaults to `false`.
   */
  addWord(addedWords: string[], removedList?: boolean): Read<M, void>;

  /**
   * Removes words from the dictionary.
   * @param removedList If `true`, removes the words from the removed-words
   * list instead of the added-words list. Defaults to `false`.
   */
  removeWord(removedWords: string[], removedList?: boolean): Read<M, void>;
}
