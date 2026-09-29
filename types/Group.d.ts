/**
 * Group.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { PageItemContainer } from './_base/PageItemMixins';
import type { ArticleChildren } from './ArticleChildren';
import type { PageItemParent } from './_base/Parents';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { ObjectExportOption } from './ObjectExportOption';
import type { Article } from './Article';
import type { AnimationSetting } from './AnimationSetting';
import type { BackgroundTask } from './BackgroundTask';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { Groups } from './Groups';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { ObjectStyle } from './ObjectStyle';
import type { Ovals } from './Ovals';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SVGs } from './SVGs';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A group of page items combined so they can be selected, moved, and
 * transformed as one.
 *
 * Unlike a spline shape, a group has no path of its own to edit — its geometry
 * comes entirely from its members. {@link ungroup} releases them as independent
 * page items, and {@link articleChildren} tracks which are also members of an
 * {@link Article} for reading-order export.
 */
export interface Group<TParent = PageItemParent, M extends Mode = 'single'> extends PageItem<TParent, Group, M>, PageItemContainer<Group, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Group';

  /** Resolves the proxy into the individual {@link Group} objects it stands for. */
  getElements(): Group<TParent, 'single'>[];

  /** Members of this group that are also part of an {@link Article}. */
  readonly articleChildren: ArticleChildren;

  /** Inline / anchored-object positioning settings — see {@link AnchoredObjectSetting}. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** Reflowable-export options (alt text, tagging, conversion) — see {@link ObjectExportOption}. */
  readonly objectExportOptions: Read<M, ObjectExportOption>;

  /** Ungroups the group, releasing its members as independent page items. */
  ungroup(): Read<M, void>;

  /**
   * Brings the group to the front of its layer, or just in front of `reference`.
   * @param reference An item with the same parent to move directly in front of.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the group to the back of its layer, or just behind `reference`.
   * @param reference An item with the same parent to move directly behind.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the group forward one step in the stacking order. */
  bringForward(): Read<M, void>;

  /** Sends the group backward one step in the stacking order. */
  sendBackward(): Read<M, void>;
}
