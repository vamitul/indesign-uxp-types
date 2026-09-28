/**
 * MathObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Rectangle } from './Rectangle';
import type { Swatch } from './Swatch';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * A MathML equation converted to InDesign objects, hosted inside the
 * auto-generated {@link Rectangle} that carries it.
 *
 * **Not a page item**, despite appearing on a page. It has no geometry, stroke,
 * fill, transparency or animation, and it is not reached through `pageItems` —
 * only through `Rectangle.mathObjects` or `Document.mathObjects`. Its parent is
 * always the `Rectangle` that hosts it.
 */
export interface MathObject<M extends Mode = 'single'> extends LabelableEventDOMObject<Rectangle, M>, IndexedDOMObject<Rectangle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MathObject';

  /** Resolves the proxy into the individual {@link MathObject} objects it stands for. */
  getElements(): MathObject<'single'>[];

  /** The unique numeric ID of the math object within its document. */
  readonly id: Read<M, number>;

  /** The object's name — an alias for {@link label}, with no uniqueness constraint. */
  get name(): Read<M, string>;
  set name(value: string);

  /** Whether this SVG object is a MathML equation rather than ordinary vector art. */
  readonly isMathMLObject: Read<M, boolean>;

  /** The font size, in points, used to render the equation. */
  get appliedMathMLFontSize(): Read<M, number>;
  set appliedMathMLFontSize(value: number);

  /** The swatch used to color the equation. Assign a {@link Swatch}, its name, or {@link NothingEnum.NOTHING}. RGB, CMYK, LAB, and HSB swatches are supported. */
  get appliedMathMLSwatch(): Read<M, Swatch | NothingEnum.NOTHING>;
  set appliedMathMLSwatch(value: Swatch | string | NothingEnum.NOTHING);

  /** The equation's color as `[r, g, b]`, each in the range `0`–`255`. */
  get appliedMathMLRgbColor(): Read<M, number[]>;
  set appliedMathMLRgbColor(value: number[]);

  /** The tint of the applied color, as a percentage. Range `0`–`100`. */
  get tintValue(): Read<M, number>;
  set tintValue(value: number);

  /** The equation's MathML source description. Empty string if this is not a MathML object. */
  get mathmlDescription(): Read<M, string>;
  set mathmlDescription(value: string);
}
