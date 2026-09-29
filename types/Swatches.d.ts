/**
 * Swatches.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Swatch } from './Swatch';
import type { AnySwatch } from './_base/Unions';
import type { Color } from './Color';
import type { Gradient } from './Gradient';
import type { MixedInk } from './MixedInk';
import type { Tint } from './Tint';
import type { ColorGroup } from './ColorGroup';

/**
 * A collection of {@link Swatch} objects in an InDesign document or application session.
 *
 * The swatches collection acts as a unified view of all color-related objects, including
 * {@link Color}, {@link Tint}, {@link Gradient}, and {@link MixedInk}.
 * @collection Swatch
 */
export interface Swatches
  extends
    BaseCollection<AnySwatch, Swatch, SwatchesPlural>,
    IdCollection<AnySwatch>,
    NamedCollection<AnySwatch> {
  /** The object's DOM class name. */
  readonly constructorName: 'Swatches';
}

/**
 * The plural proxy {@link Swatches.everyItem} hands back.
 *
 * Reading or writing a property on the proxy applies it to every swatch at once, using only
 * the members every swatch has. `getElements()` resolves it into the individual swatches, each
 * reported as its own specific kind.
 */
export interface SwatchesPlural extends Swatch<'plural'> {
  /** Resolves the proxy into the individual swatches, each at its concrete class. */
  getElements(): AnySwatch[];
}

