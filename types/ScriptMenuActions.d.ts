/**
 * ScriptMenuActions.d.ts — indesign-uxp-types
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
import type { ScriptMenuAction } from './ScriptMenuAction';

/**
 * A collection of {@link ScriptMenuAction} objects. Script menu actions allow
 * scripts to register custom commands that can be assigned to menu items and
 * submenus within the InDesign menu hierarchy.
 *
 * @collection ScriptMenuAction
 */
export interface ScriptMenuActions
  extends
    BaseCollection<ScriptMenuAction, ScriptMenuAction, ScriptMenuAction<'plural'>>,
    IdCollection<ScriptMenuAction>,
    NamedCollection<ScriptMenuAction> {
  /** The object's DOM class name. */
  readonly constructorName: 'ScriptMenuActions';

  /**
   * Creates a new script menu action from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link ScriptMenuAction}.
   */
  add(withProperties: PropertiesSetter<ScriptMenuAction>): ScriptMenuAction;

  /**
   * Creates a new script menu action.
   * @param title The display name of the script menu action. Use ampersands (`&`) to define Windows keyboard shortcuts (e.g., `&My Command`). Use double ampersands (`&&`) to display a literal ampersand.
   * @param withProperties Initial values for properties of the new ScriptMenuAction.
   */
  add(
    title?: string,
    withProperties?: PropertiesSetter<ScriptMenuAction>,
  ): ScriptMenuAction;
}
