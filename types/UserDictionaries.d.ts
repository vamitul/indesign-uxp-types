/**
 * UserDictionaries.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { UserDictionary } from './UserDictionary';

/**
 * A collection of available {@link UserDictionary} objects. User dictionaries
 * store custom word lists for spelling and hyphenation, which can be
 * shared across multiple documents.
 *
 * @collection UserDictionary
 */
export interface UserDictionaries
  extends BaseCollection<UserDictionary, UserDictionary, UserDictionary<'plural'>>, NamedCollection<UserDictionary> {
  /** The object's DOM class name. */
  readonly constructorName: 'UserDictionaries';
}
