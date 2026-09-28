/**
 * IndexingSortOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  EventTargetDOMObject,
  IndexedDOMObject,
  ReadonlyNamedDOMObject,
} from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { HeaderTypes } from './Enums/HeaderTypes';
import type { NothingEnum } from './Enums/NothingEnum';
import type { Index } from './Index';

/**
 * A single sort-priority rule used when generating an {@link Index}.
 */
export interface IndexingSortOption<M extends Mode = 'single'>
  extends EventTargetDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    ReadonlyNamedDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'IndexingSortOption';

  /** Resolves the proxy into the individual {@link IndexingSortOption} objects it stands for. */
  getElements(): IndexingSortOption<'single'>[];

  /** If `true`, this sort option is applied when generating the index. */
  get include(): Read<M, boolean>;
  set include(value: boolean);

  /** This option's priority relative to the others (higher priority entries shuffle prior entries down). */
  get priority(): Read<M, number>;
  set priority(value: number);

  /** The kind of header this option groups entries under. */
  get headerType(): Read<M, HeaderTypes | NothingEnum>;
  set headerType(value: HeaderTypes | NothingEnum);
}
