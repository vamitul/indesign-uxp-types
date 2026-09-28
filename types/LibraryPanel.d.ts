/**
 * LibraryPanel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Panel } from './Panel';
import type { Library } from './Library';
import type { Asset } from './Asset';
import type { LibraryPanelViews } from './Enums/LibraryPanelViews';
import type { SortAssets } from './Enums/SortAssets';
import type { NothingEnum } from './Enums/NothingEnum';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { SelectAll } from './Enums/SelectAll';

/**
 * The panel showing one open {@link Library} — its assets, their display mode,
 * and the current asset selection.
 *
 * A view onto the library, not the library itself: add and remove assets
 * through {@link associatedLibrary}, and use this panel only to control what the
 * user sees and has selected.
 */
export interface LibraryPanel<M extends Mode = 'single'> extends Panel<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'LibraryPanel';

  /** Resolves the proxy into the individual {@link LibraryPanel} objects it stands for. */
  getElements(): LibraryPanel<'single'>[];

  /** The {@link Library} this panel is showing. */
  readonly associatedLibrary: Read<M, Library>;

  /** How assets are displayed — thumbnails, a list, or names only. */
  get view(): Read<M, LibraryPanelViews>;
  set view(value: LibraryPanelViews);

  /** The order assets are listed in. */
  get sortOrder(): Read<M, SortAssets>;
  set sortOrder(value: SortAssets);

  /**
   * The selected {@link Asset}(s). Assign a single asset, an array of them, or
   * {@link NothingEnum.NOTHING} to clear the selection.
   */
  get selection(): Read<M, Asset[]>;
  set selection(value: Asset | Asset[] | NothingEnum);

  /** Clears any active filter so every asset in the library is listed. */
  showAll(): Read<M, void>;

  /**
   * Selects the given asset(s) in the panel.
   * @param selectableItems An {@link Asset}, an array of them, {@link SelectAll.ALL} for every
   * asset in the library, or {@link NothingEnum.NOTHING} to deselect everything.
   * @param existingSelection How this selection combines with the current one.
   * Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(
    selectableItems: Asset | Asset[] | SelectAll | NothingEnum,
    existingSelection?: SelectionOptions,
  ): Read<M, void>;
}
