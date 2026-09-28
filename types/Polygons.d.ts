/**
 * Polygons.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
  PageItemAddReference,
} from './_base/Collections';
import type { Polygon } from './Polygon';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of {@link Polygon} page items.
 *
 * Polygons are regular or star-shaped geometric frames that can be placed on a page, layer,
 * or other container object. The number of sides and optional star-inset percentage are
 * specified at creation time.
 * @collection Polygon
 */
export interface Polygons<TParent = PageItemParent>
  extends
    BaseCollection<Polygon<TParent>, Polygon, Polygon<TParent, 'plural'>>,
    IdCollection<Polygon<TParent>>,
    NamedCollection<Polygon<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Polygons';

  /**
   * Creates a new {@link Polygon} relative to a specific reference object.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing object relative to which the
   * new polygon is inserted.
   * @param layer The {@link Layer} on which to create the polygon. If omitted, defaults to the active layer.
   * @param numberOfSides The number of sides for the polygon. Valid range: `3` to `100`; defaults to `6`.
   * @param insetPercentage The star inset percentage for the polygon. Valid range: `0` to `100`; defaults to `0`.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link PageItemAddReference} to position against.
   * @param withProperties Initial values for properties of the new Polygon.
   */
  add(
    layer: Layer | undefined,
    numberOfSides: number | undefined,
    insetPercentage: number | undefined,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: PageItemAddReference,
    withProperties?: PropertiesSetter<Polygon>,
  ): Polygon<TParent>;

  /**
   * Creates a new item from a properties bag alone.
   * @param withProperties Initial values for properties of the new item.
   */
  add(withProperties: PropertiesSetter<Polygon>): Polygon<TParent>;

  add(
    layer?: Layer,
    numberOfSides?: number,
    insetPercentage?: number,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: PageItemAddReference,
    withProperties?: PropertiesSetter<Polygon>,
  ): Polygon<TParent>;
}
