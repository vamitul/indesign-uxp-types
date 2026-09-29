/**
 * Swatch.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { SwatchParent } from './_base/Parents';
import type { SwatchReference } from './_base/Unions';
import type { ColorGroup } from './ColorGroup';
import type { Color } from './Color';
import type { Gradient } from './Gradient';
import type { MixedInk } from './MixedInk';
import type { MixedInkGroup } from './MixedInkGroup';
import type { Tint } from './Tint';

/**
 * The base of every colorant — {@link Color}, {@link Tint}, {@link Gradient},
 * {@link MixedInk}, and {@link MixedInkGroup} — usable as a fill, stroke, or
 * text color.
 */
export interface Swatch<M extends Mode = 'single'>
  extends LabelableEventDOMObject<SwatchParent, M>,
    IndexedDOMObject<SwatchParent, M>,
    NamableDOMObject<SwatchParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'Color'` when the object is a {@link Color}. */
  readonly constructorName: 'Swatch' | 'Color' | 'Gradient' | 'MixedInk' | 'MixedInkGroup' | 'Tint';

  /** Resolves the proxy into the individual {@link Swatch} objects it stands for. */
  getElements(): Swatch<'single'>[];

  /** The unique ID of the swatch, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The {@link ColorGroup} the swatch belongs to, if any. */
  readonly parentColorGroup: Read<M, ColorGroup>;

  /**
   * Deletes the swatch.
   * @param replacingWith The swatch to apply in place of the deleted swatch, wherever it was in use.
   */
  remove(replacingWith?: Swatch | string): Read<M, void>;

  /** Duplicates the swatch. */
  duplicate(): Read<M, Swatch>;

  /** Merges the given swatches into this one, deleting them and reassigning their usages. */
  merge(withSwatches: Swatch[] | SwatchReference): Read<M, Swatch>;
}

/**
 * A swatch InDesign reports as a plain {@link Swatch} rather than as a colour, tint, gradient
 * or mixed ink. `[None]` is the everyday example.
 *
 * Handle it in the `'Swatch'` case of a `constructorName` check. Only the members every swatch
 * has — its name, its id, and removal — are available on it.
 */
export interface PlainSwatch<M extends Mode = 'single'> extends Swatch<M> {
  /** Always `'Swatch'` — this is the generic case, by construction. */
  readonly constructorName: 'Swatch';
}

