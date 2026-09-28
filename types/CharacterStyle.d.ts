/**
 * CharacterStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { CharacterStyleGroup } from './CharacterStyleGroup';
import type { CharacterStyleAttributes, TextGraphicAttributes } from './_base/TextAttributes';
import type { StyleExportTagMaps } from './StyleExportTagMaps';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { ColorSpace } from './Enums/ColorSpace';
import type { UIColors } from './Enums/UIColors';
import type { FilePath } from './_base/Types';
import type { CharacterStyles } from './CharacterStyles';
import type { Color } from './Color';
import type { Capitalization } from './Enums/Capitalization';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { Leading } from './Enums/Leading';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyTypes } from './Enums/RubyTypes';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Gradient } from './Gradient';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MixedInk } from './MixedInk';
import type { Swatch } from './Swatch';
import type { Tint } from './Tint';

/**
 * A named character style definition, held in a document's or the application's {@link CharacterStyles} collection (optionally nested inside a {@link CharacterStyleGroup}).
 *
 * Stores the same character formatting a text range carries — font, size, leading, kerning,
 * OpenType features, CJK attributes — but as a reusable named definition rather than as
 * formatting applied directly to text.
 *
 * A character style holds only the attributes explicitly set on it: any attribute left
 * unset reads back as {@link NothingEnum.NOTHING} rather than resolving to a value.
 */
export interface CharacterStyle<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | CharacterStyleGroup, M>,
    IndexedDOMObject<Document | Application | CharacterStyleGroup, M>,
    CharacterStyleAttributes<M, NothingEnum.NOTHING, null, NothingEnum.NOTHING>,
    TextGraphicAttributes<M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CharacterStyle';

  /** Resolves the proxy into the individual {@link CharacterStyle} objects it stands for. */
  getElements(): CharacterStyle<'single'>[];

  /** The unique ID of the character style, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the character style. */
  get name(): Read<M, string>;
  set name(value: string);

  /** If `true`, the style was imported from another document. */
  readonly imported: Read<M, boolean | NothingEnum.NOTHING>;

  /** The style this style is based on. Accepts a {@link CharacterStyle} or its name. */
  get basedOn(): Read<M, CharacterStyle | string>;
  set basedOn(value: CharacterStyle | string);

  /** A collection of style export tag maps, mapping the style to markup tags for each export format. */
  readonly styleExportTagMaps: StyleExportTagMaps;

  /** If `true`, generates a separate document when exporting to EPUB. */
  get splitDocument(): Read<M, boolean | NothingEnum.NOTHING>;
  set splitDocument(value: boolean | NothingEnum.NOTHING);

  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): Read<M, boolean | NothingEnum.NOTHING>;
  set emitCss(value: boolean | NothingEnum.NOTHING);

  /**
   * A unique identifier that can be assigned to the style to differentiate it
   * from others. Internal use only.
   */
  get styleUniqueId(): Read<M, string | NothingEnum.NOTHING>;
  set styleUniqueId(value: string | NothingEnum.NOTHING);

  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): Read<M, boolean | NothingEnum.NOTHING>;
  set includeClass(value: boolean | NothingEnum.NOTHING);

  /** The ARIA role to emit for text in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): Read<M, string | NothingEnum.NOTHING>;
  set epubAriaRole(value: string | NothingEnum.NOTHING);

  /**
   * The color used to preview the style in the Paragraph/Character Styles
   * panel, as `[R, G, B]` (each 0-255) or a {@link UIColors} enumerator.
   */
  get previewColor(): Read<M, [number, number, number] | UIColors | NothingEnum.NOTHING>;
  set previewColor(value: [number, number, number] | UIColors | NothingEnum.NOTHING);

  /**
   * Sets the value of the design axis at `nthAxisIndex` in a variable font
   * applied through this style.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): Read<M, void>;

  /** Whether the design axis at `nthAxisIndex` is hidden in a variable font applied through this style. */
  isNthDesignAxisHidden(nthAxisIndex: number): Read<M, boolean>;

  /**
   * Renders a sample thumbnail image of `previewText` set in this style, and
   * writes it to `to`.
   * @param space The color space (RGB, CMYK, or LAB) `colorValue` is expressed in.
   * @param colorValue The sample text color, as component values in `space`.
   */
  createThumbnailWithProperties(
    previewText: string,
    pointSize: number,
    space: ColorSpace,
    colorValue: number[],
    to: FilePath,
  ): boolean;

  /**
   * Deletes the style.
   * @param replacingWith The style applied to any text currently tagged with this style. Text is left unstyled if omitted.
   */
  remove(replacingWith?: CharacterStyle | string): Read<M, void>;

  /** Duplicates the character style. */
  duplicate(): Read<M, CharacterStyle>;

  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, CharacterStyle>;
}
