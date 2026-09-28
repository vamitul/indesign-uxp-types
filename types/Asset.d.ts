/**
 * Asset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Library } from './Library';
import type { Document } from './Document';
import type { Text } from './Text';
import type { PageItem } from './PageItem';
import type { AssetType } from './Enums/AssetType';
import type { SelectionOptions } from './Enums/SelectionOptions';

/**
 * A stored item in an object {@link Library} — reusable content (a page item,
 * graphic, or text) that can be placed back into any document.
 */
export interface Asset<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Library, M>,
    IndexedDOMObject<Library, M>,
    NamableDOMObject<Library, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Asset';

  /** Resolves the proxy into the individual {@link Asset} objects it stands for. */
  getElements(): Asset<'single'>[];

  /** The unique ID of the asset. */
  readonly id: Read<M, number>;

  /** The date and time the asset was created. */
  readonly date: Read<M, Date>;

  /** The description of the asset. */
  get description(): Read<M, string>;
  set description(value: string);

  /** The type of content stored in the asset. */
  get assetType(): Read<M, AssetType>;
  set assetType(value: AssetType);

  /** Deletes the asset from the library. */
  remove(): Read<M, void>;

  /** Places the asset into the specified document or text. */
  placeAsset(on: Document | Text): Read<M, PageItem[]>;

  /**
   * Selects the asset in the Library panel.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
