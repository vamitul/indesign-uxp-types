/**
 * Panel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { PagesPanel } from './PagesPanel';

/**
 * An InDesign UI panel, possibly grouped with others in a panel group.
 */
export interface Panel<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name — reports the specific kind, such as `'PagesPanel'` when the object is a {@link PagesPanel}. */
  readonly constructorName: 'Panel' | 'LibraryPanel' | 'PagesPanel';

  /** Resolves the proxy into the individual {@link Panel} objects it stands for. */
  getElements(): Panel<'single'>[];

  /** The name of the Panel. */
  readonly name: Read<M, string>;

  /** Whether the panel is visible. */
  get visible(): Read<M, boolean>;
  set visible(value: boolean);
}
