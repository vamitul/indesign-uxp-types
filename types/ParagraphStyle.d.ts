/**
 * ParagraphStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { ParagraphStyleGroup } from './ParagraphStyleGroup';
import type {
  ParagraphStyleAttributes,
  CharacterStyleAttributes,
  TextGraphicAttributes,
} from './_base/TextAttributes';
import type { StyleExportTagMaps } from './StyleExportTagMaps';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { ColorSpace } from './Enums/ColorSpace';
import type { UIColors } from './Enums/UIColors';
import type { NothingEnum } from './Enums/NothingEnum';
import type { FilePath } from './_base/Types';
import type { ParagraphStyles } from './ParagraphStyles';
import type { Bullet } from './Bullet';
import type { Color } from './Color';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { CornerOptions } from './Enums/CornerOptions';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { Leading } from './Enums/Leading';
import type { NumberingStyle } from './Enums/NumberingStyle';
import type { ParagraphJustificationOptions } from './Enums/ParagraphJustificationOptions';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyTypes } from './Enums/RubyTypes';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Gradient } from './Gradient';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MixedInk } from './MixedInk';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { Swatch } from './Swatch';
import type { TabStop } from './TabStop';
import type { Tint } from './Tint';

/**
 * A named paragraph style definition, held in a document's or the application's {@link ParagraphStyles} collection (optionally nested inside a {@link ParagraphStyleGroup}).
 *
 * Stores both the paragraph-level formatting — indents, spacing, justification, drop caps,
 * rules, hyphenation, bullets and numbering — and the character formatting applied along with
 * it, as a reusable named definition rather than as formatting applied directly to text.
 *
 * Unlike a character style, a paragraph style always resolves every attribute to a
 * concrete value rather than leaving unset ones as {@link NothingEnum.NOTHING}.
 */
export interface ParagraphStyle<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | ParagraphStyleGroup, M>,
    IndexedDOMObject<Document | Application | ParagraphStyleGroup, M>,
    ParagraphStyleAttributes<M, NothingEnum.NOTHING>,
    CharacterStyleAttributes<M, never, never, NothingEnum.NOTHING>,
    TextGraphicAttributes<M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ParagraphStyle';

  /** Resolves the proxy into the individual {@link ParagraphStyle} objects it stands for. */
  getElements(): ParagraphStyle<'single'>[];

  /** The unique ID of the paragraph style, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the paragraph style. */
  get name(): Read<M, string>;
  set name(value: string);

  /** If `true`, the style was imported from another document. */
  readonly imported: Read<M, boolean>;

  /** The style this style is based on. Accepts a {@link ParagraphStyle} or its name. */
  get basedOn(): Read<M, ParagraphStyle | string>;
  set basedOn(value: ParagraphStyle | string);

  /** The style automatically applied to a new paragraph typed after one tagged with this style. */
  get nextStyle(): Read<M, ParagraphStyle>;
  set nextStyle(value: ParagraphStyle);

  /** A collection of style export tag maps, mapping the style to markup tags for each export format. */
  readonly styleExportTagMaps: StyleExportTagMaps;

  /** If `true`, generates a separate document when exporting to EPUB. */
  get splitDocument(): Read<M, boolean>;
  set splitDocument(value: boolean);

  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): Read<M, boolean>;
  set emitCss(value: boolean);

  /**
   * A unique identifier that can be assigned to the style to differentiate it
   * from others. Internal use only.
   */
  get styleUniqueId(): Read<M, string>;
  set styleUniqueId(value: string);

  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): Read<M, boolean>;
  set includeClass(value: boolean);

  /** The ARIA role to emit for text in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): Read<M, string>;
  set epubAriaRole(value: string);

  /**
   * The color used to preview the style in the Paragraph Styles panel, as
   * `[R, G, B]` (each 0-255) or a {@link UIColors} enumerator.
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

  /** Converts any bullets or numbering applied through this style into literal text. */
  convertBulletsAndNumberingToText(): Read<M, void>;

  /**
   * Deletes the style.
   * @param replacingWith The style applied to any paragraphs currently tagged with this style. Paragraphs are left unstyled if omitted.
   */
  remove(replacingWith?: ParagraphStyle | string): Read<M, void>;

  /**
   * @internal Forcefully deletes the style, bypassing the usual safety checks. Internal use only.
   * @param replacingWith The style applied to any paragraphs currently tagged with this style.
   */
  forceDelete(replacingWith?: ParagraphStyle): Read<M, void>;

  /** Duplicates the paragraph style. */
  duplicate(): Read<M, ParagraphStyle>;

  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, ParagraphStyle>;
}
