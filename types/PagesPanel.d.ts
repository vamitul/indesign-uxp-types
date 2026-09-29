/**
 * PagesPanel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Panel } from './Panel';
import type { IconSizes } from './Enums/IconSizes';
import type { PageViewOptions } from './Enums/PageViewOptions';
import type { PanelLayoutResize } from './Enums/PanelLayoutResize';
import type { Document } from './Document';

/**
 * The Pages panel — display settings only.
 *
 * Everything here controls how pages and masters are drawn in the panel; none of
 * it affects the document. Add, move, or delete pages through
 * {@link Document.pages} and {@link Document.masterSpreads}.
 */
export interface PagesPanel<M extends Mode = 'single'> extends Panel<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'PagesPanel';

  /** Resolves the proxy into the individual {@link PagesPanel} objects it stands for. */
  getElements(): PagesPanel<'single'>[];

  /** How page icons are arranged in the pages area. */
  get pagesViewSetting(): Read<M, PageViewOptions>;
  set pagesViewSetting(value: PageViewOptions);

  /** The size of the page icons. */
  get iconSize(): Read<M, IconSizes>;
  set iconSize(value: IconSizes);

  /** The size of the master-page icons. */
  get masterIconSize(): Read<M, IconSizes>;
  set masterIconSize(value: IconSizes);

  /** Whether master-page icons are stacked vertically around the binding spine. */
  get masterVerticalView(): Read<M, boolean>;
  set masterVerticalView(value: boolean);

  /** Which of the two areas absorbs the change when the panel is resized. */
  get resizeBehavior(): Read<M, PanelLayoutResize>;
  set resizeBehavior(value: PanelLayoutResize);

  /** Whether the pages area is drawn above the master-pages area. */
  get pagesOnTop(): Read<M, boolean>;
  set pagesOnTop(value: boolean);

  /** Whether page icons show a thumbnail of their content. */
  get pagesThumbnails(): Read<M, boolean>;
  set pagesThumbnails(value: boolean);

  /** Whether master-page icons show a thumbnail of their content. */
  get mastersThumbnails(): Read<M, boolean>;
  set mastersThumbnails(value: boolean);

  /** Whether spreads containing transparency are flagged with an icon. */
  get transparencyIcons(): Read<M, boolean>;
  set transparencyIcons(value: boolean);

  /** Whether spreads carrying a page transition are flagged with an icon. */
  get transitionsIcons(): Read<M, boolean>;
  set transitionsIcons(value: boolean);

  /** Whether spreads with a non-zero view rotation are flagged with an icon. */
  get rotationIcons(): Read<M, boolean>;
  set rotationIcons(value: boolean);
}
