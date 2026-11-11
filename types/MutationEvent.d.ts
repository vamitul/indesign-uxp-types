/**
 * MutationEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Event } from './Event';
import type { Document } from './Document';
import type { LayoutWindow } from './LayoutWindow';

/**
 * An event dispatched when the value of a property changes on its target.
 */
export interface MutationEvent<M extends Mode = 'single'> extends Event<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'MutationEvent';

  /** Resolves the proxy into the individual {@link MutationEvent} objects it stands for. */
  getElements(): MutationEvent<'single'>[];

  /** The name of the property that changed. */
  readonly attributeName: Read<M, string>;

  /** The current value of the property that changed. */
  readonly attributeValue: Read<M, unknown>;
}

// The event names MutationEvent carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the MutationEvent type.
export declare const MutationEvent: {
  /** Dispatched when the value of a property changes on this MutationEvent. This event bubbles. This event is not cancelable. */
  readonly AFTER_ATTRIBUTE_CHANGED: 'afterAttributeChanged';
};
