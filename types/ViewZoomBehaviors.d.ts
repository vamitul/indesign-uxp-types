/**
 * ViewZoomBehaviors.d.ts — indesign-uxp-types
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
import type { ViewZoomBehavior } from './ViewZoomBehavior';

/**
 * A collection of {@link ViewZoomBehavior} objects. This behavior is applied
 * to interactive elements to trigger changes in the PDF document's view zoom or
 * layout display mode.
 *
 * @collection ViewZoomBehavior
 */
export interface ViewZoomBehaviors
  extends
    BaseCollection<ViewZoomBehavior, ViewZoomBehavior, ViewZoomBehavior<'plural'>>,
    IdCollection<ViewZoomBehavior>,
    NamedCollection<ViewZoomBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'ViewZoomBehaviors';

  /**
   * Creates a new view zoom behavior.
   * @param withProperties Initial values for properties of the new {@link ViewZoomBehavior}.
   */
  add(withProperties?: PropertiesSetter<ViewZoomBehavior>): ViewZoomBehavior;
}
