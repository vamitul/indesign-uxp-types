/**
 * States.d.ts — indesign-uxp-types
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
import type { State } from './State';
import type { MultiStateObject } from './MultiStateObject';

/**
 * A collection of {@link State} objects within a {@link MultiStateObject}.
 * Each state represents a unique visual appearance of the multi-state object,
 * used in interactive layouts to create slideshows or multi-state buttons.
 *
 * @collection State
 */
export interface States
  extends BaseCollection<State, State, State<'plural'>>, IdCollection<State>, NamedCollection<State> {
  /** The object's DOM class name. */
  readonly constructorName: 'States';

  /**
   * Creates a new visual state and adds it to the {@link MultiStateObject}.
   * @param withProperties Initial values for properties of the new {@link State}.
   */
  add(withProperties?: PropertiesSetter<State>): State;
}
