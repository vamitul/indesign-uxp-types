/**
 * Ink.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { InkTypes } from './Enums/InkTypes';
import type { MixedInk } from './MixedInk';
import type { MixedInkGroup } from './MixedInkGroup';

/**
 * A separations ink — process or spot — available to build {@link MixedInk}
 * and {@link MixedInkGroup} swatches and to control trapping and printing.
 */
export interface Ink<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Ink';

  /** Resolves the proxy into the individual {@link Ink} objects it stands for. */
  getElements(): Ink<'single'>[];

  /** The unique ID of the ink, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the ink, taken from the separations plate. */
  readonly name: Read<M, string>;

  /** Whether the ink is a process ink (as opposed to spot). */
  readonly isProcessInk: Read<M, boolean>;

  /** The solidity value of the ink. */
  readonly solidity: Read<M, number>;

  /** The name of another ink to map this ink onto for output. */
  get aliasInkName(): Read<M, string>;
  set aliasInkName(value: string);

  /** The screen angle of the ink, in degrees. */
  get angle(): Read<M, number>;
  set angle(value: number);

  /** Whether spot inks are converted to process inks on output. */
  get convertToProcess(): Read<M, boolean>;
  set convertToProcess(value: boolean);

  /** The halftone screen frequency of the ink, in lines per inch. */
  get frequency(): Read<M, number>;
  set frequency(value: number);

  /** The neutral density value used to calculate trapping for the ink. */
  get neutralDensity(): Read<M, number>;
  set neutralDensity(value: number);

  /** Whether the ink prints when printing separations. */
  get printInk(): Read<M, boolean>;
  set printInk(value: boolean);

  /** The ink's position in the trapping sequence, from darkest to lightest. */
  get trapOrder(): Read<M, number>;
  set trapOrder(value: number);

  /** How this ink traps against others during output — normal, opaque, transparent, or opaque while ignoring specific inks. See {@link InkTypes}. */
  get inkType(): Read<M, InkTypes>;
  set inkType(value: InkTypes);
}
