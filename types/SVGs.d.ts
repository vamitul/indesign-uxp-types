/**
 * SVGs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { SVG } from './SVG';
import type { Layer } from './Layer';
import type { LocationOptions } from './Enums/LocationOptions';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of {@link SVG} page items.
 *
 * SVGs are vector graphic frames that can be placed on a page, spread, or within other
 * containers. Adding to this collection creates an empty SVG container; use `place()` on
 * the resulting object to load an SVG file.
 * @collection SVG
 */
export interface SVGs<TParent = PageItemParent>
  extends BaseCollection<SVG<TParent>, SVG, SVG<TParent, 'plural'>>, IdCollection<SVG<TParent>>, NamedCollection<SVG<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'SVGs';

  /**
   * Creates a new SVG container from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link SVG}.
   */
  add(withProperties: PropertiesSetter<SVG>): SVG<TParent>;

  /**
   * Creates a new SVG container.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER},
   * the `reference` parameter is required and specifies the existing SVG
   * relative to which the new container is inserted.
   *
   * @param layer The layer on which the new SVG will be created. If omitted, uses the active layer.
   * @param at The stacking order position relative to the reference object or within the container. Defaults to {@link LocationOptions.UNKNOWN}.
   * @param reference The existing {@link SVG} to place the new container relative to. Required when `at` is `BEFORE` or `AFTER`.
   * @param withProperties Initial values for properties of the new {@link SVG}.
   */
  add(
    layer?: Layer,
    at?: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference?: SVG,
    withProperties?: PropertiesSetter<SVG>,
  ): SVG<TParent>;

  /**
   * Creates a new SVG container.
   * @param layer The layer on which the new SVG will be created. If omitted, uses the active layer.
   * @param at The stacking order position within the container. Defaults to {@link LocationOptions.UNKNOWN}.
   * @param reference Ignored for absolute location options.
   * @param withProperties Initial values for properties of the new {@link SVG}.
   */
  add(
    layer?: Layer,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: SVG,
    withProperties?: PropertiesSetter<SVG>,
  ): SVG<TParent>;
}
