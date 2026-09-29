/**
 * FindGlyphPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Font } from './Font';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * Search criteria for the Find/Change Glyph feature — matches text by glyph
 * identity (GID/CID, font, design-axis coordinates) rather than by character.
 */
export interface FindGlyphPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindGlyphPreference';

  /** Resolves the proxy into the individual {@link FindGlyphPreference} objects it stands for. */
  getElements(): FindGlyphPreference<'single'>[];

  /** The variable-font design-axis coordinates to match. */
  get designAxes(): Read<M, number[] | NothingEnum.NOTHING>;
  set designAxes(value: number[] | NothingEnum.NOTHING);

  /** The GID/CID of the glyph. */
  get glyphID(): Read<M, number | NothingEnum.NOTHING>;
  set glyphID(value: number | NothingEnum.NOTHING);

  /** The Registry Ordered font group. */
  get rosFontGroup(): Read<M, string[] | NothingEnum.NOTHING>;
  set rosFontGroup(value: string[] | NothingEnum.NOTHING);

  /** The font to match. Accepts a {@link Font} or a font family name. */
  get appliedFont(): Read<M, Font | NothingEnum.NOTHING>;
  set appliedFont(value: Font | string | NothingEnum.NOTHING | null);

  /** The name of the font style. */
  get fontStyle(): Read<M, string | NothingEnum.NOTHING>;
  set fontStyle(value: string | NothingEnum.NOTHING);

  /**
   * Set Nth design axis of a variable font.
   * @param nthAxisIndex Index of design axis.
   * @param nthAxisValue Value of nth design axis.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): Read<M, void>;

  /**
   * If true, Nth design axis of variable font is hidden.
   * @param nthAxisIndex Index of design axis.
   */
  isNthDesignAxisHidden(nthAxisIndex: number): Read<M, boolean>;
}
