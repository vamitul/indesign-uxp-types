/**
 * ShowHideFieldsBehaviors.d.ts — indesign-uxp-types
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
import type { ShowHideFieldsBehavior } from './ShowHideFieldsBehavior';
import type { Button } from './Button';
import type { FormField } from './FormField';

/**
 * A collection of {@link ShowHideFieldsBehavior} objects attached to an interactive {@link Button} or {@link FormField}.
 *
 * These behaviors control the visibility of other form elements when triggered by an event,
 * such as a mouse click or rollover in exported interactive PDFs or EPUBs.
 * @collection ShowHideFieldsBehavior
 */
export interface ShowHideFieldsBehaviors
  extends
    BaseCollection<ShowHideFieldsBehavior, ShowHideFieldsBehavior, ShowHideFieldsBehavior<'plural'>>,
    IdCollection<ShowHideFieldsBehavior>,
    NamedCollection<ShowHideFieldsBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'ShowHideFieldsBehaviors';

  /**
   * Creates a new {@link ShowHideFieldsBehavior} and adds it to the collection.
   *
   * @param withProperties Initial values for properties of the new {@link ShowHideFieldsBehavior},
   * including which fields to hide or show.
   */
  add(withProperties: PropertiesSetter<ShowHideFieldsBehavior>): ShowHideFieldsBehavior;

  add(
    withProperties?: PropertiesSetter<ShowHideFieldsBehavior>,
  ): ShowHideFieldsBehavior;
}
