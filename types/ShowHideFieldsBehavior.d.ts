/**
 * ShowHideFieldsBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { BehaviorParent } from './_base/Parents';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that shows or hides a set of interactive form fields.
 */
export interface ShowHideFieldsBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ShowHideFieldsBehavior';

  /** Resolves the proxy into the individual {@link ShowHideFieldsBehavior} objects it stands for. */
  getElements(): ShowHideFieldsBehavior<'single'>[];

  /** The form fields to hide. */
  get fieldsToHide(): Read<M, BehaviorParent[]>;
  set fieldsToHide(value: BehaviorParent[]);

  /** The form fields to show. */
  get fieldsToShow(): Read<M, BehaviorParent[]>;
  set fieldsToShow(value: BehaviorParent[]);

}
