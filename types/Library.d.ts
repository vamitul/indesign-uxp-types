/**
 * Library.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Assets } from './Assets';
import type { Asset } from './Asset';
import type { Panel } from './Panel';
import type { PageItem } from './PageItem';
import type { Movie } from './Movie';
import type { Sound } from './Sound';
import type { Graphic } from './Graphic';
import type { XMLElement } from './XMLElement';
import type { File, Folder } from './_base/Types';

/**
 * An object library file (`.indl`) that stores reusable page items, graphics,
 * and text as {@link Asset}s for drag-and-drop reuse across documents.
 */
export interface Library<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Library';

  /** Resolves the proxy into the individual {@link Library} objects it stands for. */
  getElements(): Library<'single'>[];

  /** The name of the library. */
  readonly name: Read<M, string>;

  /** The full path to the library file, including its name. */
  readonly fullName: Read<M, Promise<File>>;

  /** The full path to the library file. */
  readonly filePath: Read<M, Promise<Folder>>;

  /** The panel associated with this library. */
  readonly associatedPanel: Read<M, Panel>;

  /** The library's assets. */
  readonly assets: Assets;

  /** Closes the library. */
  close(): Read<M, void>;

  /**
   * Stores the specified object(s) in the library as a new asset.
   * @param using The page item(s), or other content, to store.
   * @param withProperties Initial values for properties of the new asset.
   */
  store(
    using: Array<PageItem | Movie | Sound | Graphic | XMLElement>,
    withProperties?: Object,
  ): Asset;
}
