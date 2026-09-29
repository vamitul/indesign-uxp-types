/**
 * Groups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';
import type { PageItem } from './PageItem';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
  PageItemAddReference,
} from './_base/Collections';
import type { Group } from './Group';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of {@link Group} objects. Groups combine multiple page items into
 * a single selectable unit, preserving their relative positions and stacking order
 * within the layout.
 *
 * @collection Group
 */
export interface Groups<TParent = PageItemParent>
  extends BaseCollection<Group<TParent>, Group, Group<TParent, 'plural'>>, IdCollection<Group<TParent>>, NamedCollection<Group<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Groups';

  /**
   * Creates a new Group relative to a specific reference object.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing object relative to which the
   * new group is inserted.
   * @param groupItems The objects to group. These items must already exist and will be moved into the new group structure.
   * @param layer The {@link Layer} on which to create the Group. Defaults to the active layer.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link PageItemAddReference} to position against.
   * @param withProperties Initial values for properties of the new Group.
   */
  add(
    groupItems: PageItem[],
    layer: Layer | undefined,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: PageItemAddReference,
    withProperties?: PropertiesSetter<Group>,
  ): Group<TParent>;

  /**
   * Creates a new Group within a container object.
   *
   * @param groupItems The objects to group. These items must already exist and will be moved into the new group structure.
   * @param layer The {@link Layer} on which to create the Group. Defaults to the active layer.
   * @param at The location within the container. Defaults to {@link LocationOptions.AT_END}.
   * @param reference Ignored for container insertion.
   * @param withProperties Initial values for properties of the new Group.
   */
  add(
    groupItems: PageItem[],
    layer?: Layer,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: PageItemAddReference,
    withProperties?: PropertiesSetter<Group>,
  ): Group<TParent>;
}
