/**
 * StoryWindow.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Window } from './Window';
import type { LayoutWindow } from './LayoutWindow';
import type { Document } from './Document';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * A story-editor {@link Window} showing a story's text in galley view,
 * independent of its page layout -- as opposed to a {@link LayoutWindow}'s
 * page-geometry view of the same {@link Document}.
 */
export interface StoryWindow<M extends Mode = 'single'> extends Window<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'StoryWindow';

  /** Resolves the proxy into the individual {@link StoryWindow} objects it stands for. */
  getElements(): StoryWindow<'single'>[];
}
