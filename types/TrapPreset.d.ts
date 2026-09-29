/**
 * TrapPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { EndJoin } from './Enums/EndJoin';
import type { TrapEndTypes } from './Enums/TrapEndTypes';
import type { TrapImagePlacementTypes } from './Enums/TrapImagePlacementTypes';

/**
 * A named set of trapping settings, applied when trapping a document for
 * separations-based printing.
 */
export interface TrapPreset<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TrapPreset';

  /** Resolves the proxy into the individual {@link TrapPreset} objects it stands for. */
  getElements(): TrapPreset<'single'>[];

  /** The unique ID of the trap preset. */
  readonly id: Read<M, number>;

  /** The default trap width, used for all colors except those involving solid black. */
  get defaultTrapWidth(): Read<M, number>;
  set defaultTrapWidth(value: MeasurementValue);

  /** The trap width used when trapping against solid black. */
  get blackWidth(): Read<M, number>;
  set blackWidth(value: MeasurementValue);

  /** The join style used at trap corners. */
  get trapJoin(): Read<M, EndJoin>;
  set trapJoin(value: EndJoin);

  /** The shape used at the intersection of three-way traps. */
  get trapEnd(): Read<M, TrapEndTypes>;
  set trapEnd(value: TrapEndTypes);

  /** If `true`, keeps vector objects overlapping (rather than knocking out) bitmap images. */
  get objectsToImages(): Read<M, boolean>;
  set objectsToImages(value: boolean);

  /** If `true`, traps along the boundary of overlapping or abutting bitmap images. */
  get imagesToImages(): Read<M, boolean>;
  set imagesToImages(value: boolean);

  /** If `true`, traps among colors within individual bitmap images. */
  get internalImages(): Read<M, boolean>;
  set internalImages(value: boolean);

  /** If `true`, traps one-bit images to abutting objects. */
  get oneBitImages(): Read<M, boolean>;
  set oneBitImages(value: boolean);

  /** The trap placement between vector objects and bitmap images. */
  get imagePlacement(): Read<M, TrapImagePlacementTypes>;
  set imagePlacement(value: TrapImagePlacementTypes);

  /**
   * The amount, as a percentage, that components of abutting colors must
   * vary before a trap is created.
   * @param value Range: `1`–`100`.
   */
  get stepThreshold(): Read<M, number>;
  set stepThreshold(value: number);

  /**
   * The minimum amount of black ink, as a percentage, required before
   * {@link blackWidth} is applied instead of {@link defaultTrapWidth}.
   * @param value Range: `0`–`100`.
   */
  get blackColorThreshold(): Read<M, number>;
  set blackColorThreshold(value: number);

  /**
   * The neutral density value at or above which an ink is considered black.
   * @param value Range: `.001`–`10`.
   */
  get blackDensity(): Read<M, number>;
  set blackDensity(value: number);

  /**
   * The difference, as a percentage, between the neutral densities of
   * abutting colors at which the trap moves from the darker color's edge
   * toward the centerline.
   * @param value Range: `0`–`100`.
   */
  get slidingTrapThreshold(): Read<M, number>;
  set slidingTrapThreshold(value: number);

  /**
   * The degree, as a percentage, to which components from abutting colors
   * reduce the trap color. `0` makes a trap whose neutral density equals
   * that of the darker color.
   * @param value Range: `0`–`100`.
   */
  get colorReduction(): Read<M, number>;
  set colorReduction(value: number);

  /**
   * Deletes the trap preset.
   * @param replacingWith The trap preset to apply in place of the deleted one.
   */
  remove(replacingWith: TrapPreset | string): Read<M, void>;

  /** Duplicates the trap preset. */
  duplicate(): Read<M, TrapPreset>;
}
