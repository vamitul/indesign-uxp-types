/**
 * MathObjects.d.ts — indesign-uxp-types
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
import type { MathObject } from './MathObject';

/**
 * A collection of {@link MathObject} page items. Math objects are specialized
 * containers that represent mathematical formulas (typically from MathML)
 * as high-quality vector graphics on a page.
 *
 * @collection MathObject
 */
export interface MathObjects
  extends
    BaseCollection<MathObject, MathObject, MathObject<'plural'>>,
    IdCollection<MathObject>,
    NamedCollection<MathObject> {
  /** The object's DOM class name. */
  readonly constructorName: 'MathObjects';

  /**
   * Creates a new math object from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link MathObject}.
   */
  add(withProperties: PropertiesSetter<MathObject>): MathObject;

  /**
   * Creates a new math object on a page.
   *
   * @param mathmlDescription The MathML source text used to generate the math object's vector representation.
   * @param mathmlDestinationPage The {@link Page} on which to create the object.
   * @param destinationLayer The {@link Layer} on which to create the object. Defaults to the active document layer.
   * @param placePoint The [x, y] coordinates where the object should be placed on the page.
   * @param withProperties Initial values for properties of the new MathObject.
   */
  add(
    mathmlDescription?: string,
    mathmlDestinationPage?: Page,
    destinationLayer?: Layer,
    placePoint?: [x:MeasurementValue, y:MeasurementValue],
    withProperties?: PropertiesSetter<MathObject>,
  ): MathObject;
}
