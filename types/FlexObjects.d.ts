/**
 * FlexObjects.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { MeasurementValue } from './_base/Types';
import type { PropertiesSetter } from './_base/Properties';
import type { Layer } from './Layer';
import type { Page } from './Page';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { FlexObject } from './FlexObject';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of {@link FlexObject} objects. Flex objects are part of the
 * flexible layout system, allowing for responsive positioning and sizing of
 * elements based on container constraints. Available since InDesign 21 (2026).
 *
 * Unlike most page-item collections, which return only direct children of their
 * container, this one is exhaustive: it indexes every {@link FlexObject} in the
 * hierarchy, including ones nested inside other flex objects.
 *
 * @collection FlexObject
 */
export interface FlexObjects<TParent = PageItemParent>
  extends
    BaseCollection<FlexObject<TParent>, FlexObject, FlexObject<TParent, 'plural'>>,
    IdCollection<FlexObject<TParent>>,
    NamedCollection<FlexObject<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'FlexObjects';

  /**
   * Creates a new {@link FlexObject} flex container from a properties bag alone.
   *
   * The other overload accepts a serialized flex layout description and page
   * placement instead.
   * @param withProperties Initial values for properties of the new {@link FlexObject}.
   */
  add(withProperties: PropertiesSetter<FlexObject>): FlexObject<TParent>;

  /**
   * Creates a new {@link FlexObject} flex container, a page item that lays out its
   * children along a CSS-flexbox-like model (direction, wrap, padding, and gap are
   * exposed as properties on the resulting object once created).
   *
   * @param flexDescription A serialized description of the flex container's initial layout
   * (direction, wrap, padding, gap, etc.). If omitted, the object is created with InDesign's
   * default flex layout, which can be adjusted afterwards via the object's flex properties.
   * @param flexDestinationPage The {@link Page} on which to create the object.
   * @param destinationLayer The {@link Layer} on which to create the object. Defaults to the active document layer.
   * @param placePoint The `[x, y]` coordinates where the object should be placed. Only applicable when `flexDestinationPage` is provided.
   * @param withProperties Initial values for properties of the new FlexObject.
   */
  add(
    flexDescription?: string,
    flexDestinationPage?: Page,
    destinationLayer?: Layer,
    placePoint?: [x: MeasurementValue, y: MeasurementValue],
    withProperties?: PropertiesSetter<FlexObject>,
  ): FlexObject<TParent>;
}
