/**
 * Window.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';

import type { NothingEnum } from './Enums/NothingEnum';
import type { SelectAll } from './Enums/SelectAll';
import type { SelectionOptions } from './Enums/SelectionOptions';

import type { Document } from './Document';
import type { PageItem } from './PageItem';
import type { SelectionItem } from './_base/Unions';
import type { LayoutWindow } from './LayoutWindow';
import type { StoryWindow } from './StoryWindow';

/**
 * A window onto a {@link Document} -- the base of the {@link LayoutWindow} and {@link StoryWindow} kinds.
 *
 * Carries the shared window chrome (open/close, minimize/maximize/restore, front-to-back
 * ordering) and the document selection, which is shared across all windows viewing the same
 * document.
 */
export interface Window<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M>, IndexedDOMObject<Document, M> {
  /** The object's DOM class name — reports the specific kind, such as `'LayoutWindow'` when the object is a {@link LayoutWindow}. */
  readonly constructorName: 'Window' | 'LayoutWindow' | 'StoryWindow';

  /** Resolves the proxy into the individual {@link Window} objects it stands for. */
  getElements(): Window<'single'>[];

  /** The name of the window. Readonly, unlike a normal named DOM object. */
  readonly name: Read<M, string>;

  /**
   * The current selection, shared with the document's other windows. Assign a
   * single object, an array of objects, or {@link NothingEnum.NOTHING} to clear it.
   */
  get selection(): Read<M, SelectionItem[]>;
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);

  /** The bounds of the window in screen pixels, as `[top, left, bottom, right]`. */
  get bounds(): Read<M, number[]>;
  set bounds(value: number[]);

  /** Key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): Read<M, PageItem | null>;
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);

  /**
   * Selects the specified object(s) in this window.
   * @param selectableItems The object(s) to select, {@link SelectAll} for
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): Read<M, void>;

  /** Closes the window. */
  close(): Read<M, void>;

  /** Maximizes the window. */
  maximize(): Read<M, void>;

  /** Minimizes the window. */
  minimize(): Read<M, void>;

  /** Restores the window from its minimized or maximized state. */
  restore(): Read<M, void>;

  /** Brings the window to the front. */
  bringToFront(): Read<M, void>;

}
