/**
 * NumberingLists.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { NumberingList } from './NumberingList';

/**
 * A collection of {@link NumberingList} objects. Numbering lists allow you to
 * manage hierarchical numbering (like legal or technical outlines) that can
 * be synchronized across multiple stories or documents in a book.
 *
 * @collection NumberingList
 */
export interface NumberingLists
  extends
    BaseCollection<NumberingList, NumberingList, NumberingList<'plural'>>,
    IdCollection<NumberingList>,
    NamedCollection<NumberingList> {
  /**
   * Creates a new numbering list from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link NumberingList}. Must include `name`.
   */
  add(withProperties: PropertiesSetter<NumberingList>): NumberingList;

  /** The object's DOM class name. */
  readonly constructorName: 'NumberingLists';

  /**
   * Creates a new numbering list.
   *
   * @param name The name for the new numbering list.
   * @param continueNumbersAcrossStories If `true`, numbering will continue across different stories.
   * @param continueNumbersAcrossDocuments If `true`, numbering will continue across different documents in a book.
   * @param withProperties Initial values for properties of the new NumberingList.
   */
  add(
    name: string,
    continueNumbersAcrossStories?: boolean,
    continueNumbersAcrossDocuments?: boolean,
    withProperties?: PropertiesSetter<NumberingList>,
  ): NumberingList;
}
