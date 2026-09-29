/**
 * EventListeners.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EventString, EventHandler, InDesignEventMap } from './_base/Events';
import type { FilePath } from './_base/Types';
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { EventListener } from './EventListener';
import type { Event } from './Event';

/**
 * A collection of {@link EventListener} objects. Event listeners allow scripts
 * to respond to application or document-level events—such as saving, opening,
 * or printing—with custom automated actions.
 *
 * @collection EventListener
 */
export interface EventListeners
  extends
    BaseCollection<EventListener, EventListener, EventListener<'plural'>>,
    IdCollection<EventListener>,
    NamedCollection<EventListener> {
  /** The object's DOM class name. */
  readonly constructorName: 'EventListeners';

  /**
   * Adds a new event listener.
   *
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler The logic to execute when the event occurs. Can be a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @param withProperties Initial values for properties of the new EventListener.
   */
  add<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
    withProperties?: PropertiesSetter<EventListener>,
  ): EventListener;
  add(
    eventType: EventString,
    handler: FilePath | ((event: Event) => void),
    captures?: boolean,
    withProperties?: PropertiesSetter<EventListener>,
  ): EventListener;
}
