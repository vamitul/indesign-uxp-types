/**
 * Events.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { Event } from './Event';

/**
 * A collection of {@link Event} objects. Events represent interactions and state
 * changes in the InDesign application or document that can be monitored by
 * event listeners.
 *
 * @collection Event
 */
export interface Events extends BaseCollection<Event, Event, Event<'plural'>>, IdCollection<Event> {
  /** The object's DOM class name. */
  readonly constructorName: 'Events';
}
