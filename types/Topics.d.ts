/**
 * Topics.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Topic } from './Topic';
import type { Index } from './Index';

/**
 * A collection of {@link Topic} objects within an {@link Index}.
 * Topics represent the individual entries and hierarchical sub-entries
 * that constitute the document's index.
 *
 * @collection Topic
 */
export interface Topics extends BaseCollection<Topic, Topic, Topic<'plural'>>, NamedCollection<Topic> {
  /**
   * Creates a new topic from a properties bag alone. The bag must include `name`.
   * @param withProperties Initial values for properties of the new {@link Topic}.
   */
  add(withProperties: PropertiesSetter<Topic>): Topic;

  /** The object's DOM class name. */
  readonly constructorName: 'Topics';

  /**
   * Creates a new index topic.
   *
   * @param name The display name of the topic as it will appear in the index.
   * @param sortBy The string used to sort this topic instead of its display name.
   * @param withProperties Initial values for properties of the new Topic.
   */
  add(
    name: string,
    sortBy?: string,
    withProperties?: PropertiesSetter<Topic>,
  ): Topic;
}
