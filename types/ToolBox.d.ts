/**
 * ToolBox.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { UITools } from './Enums/UITools';
import type { File } from './_base/Types';

/**
 * The application's tools panel — reports and sets the currently active
 * drawing/selection tool.
 */
export interface ToolBox<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ToolBox';

  /** Resolves the proxy into the individual {@link ToolBox} objects it stands for. */
  getElements(): ToolBox<'single'>[];

  /** The name of the currently active tool. */
  readonly currentToolName: Read<M, string>;

  /** The hint text of the currently active tool. */
  readonly currentToolHint: Read<M, string>;

  /** The icon resource file of the currently active tool. */
  get currentToolIconFile(): Read<M, Promise<File>>;

  /** The currently active {@link UITools tool}. */
  get currentTool(): Read<M, UITools>;
  set currentTool(value: UITools);
}

// The event names ToolBox carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the ToolBox type.
export declare const ToolBox: {
  /** Dispatched when the value of a property changes on this ToolBox. This event bubbles. This event is not cancelable. */
  readonly AFTER_ATTRIBUTE_CHANGED: 'afterAttributeChanged';
};
