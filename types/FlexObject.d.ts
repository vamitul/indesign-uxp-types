/**
 * FlexObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type {
  EndnoteFrameContainer,
  FormFieldContainer,
  ShapeContainer,
} from './_base/PageItemMixins';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { Paths } from './Paths';
import type { MeasurementValue } from './_base/Types';
import type { FlexWidthHeightMode } from './Enums/FlexWidthHeightMode';
import type { FlexEnum } from './Enums/FlexEnum';
import type { FlexDirection } from './Enums/FlexDirection';
import type { FlexWrap } from './Enums/FlexWrap';
import type { FlexPosition } from './Enums/FlexPosition';
import type { FlexSpacing } from './Enums/FlexSpacing';
import type { PageItemParent } from './_base/Parents';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
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
 * A flex-layout container page item (CSS-flexbox-style arrangement of child
 * page items). See {@link PageItem} for the shared page-item surface.
 */
export interface FlexObject<TParent = PageItemParent, M extends Mode = 'single'>
  extends PageItem<TParent, FlexObject, M>,
    // A flex container holds every shape except a placed EPS<PageItemParent, M>text frame, which
    // has no flex participation in the C++ layout engine.
    Omit<ShapeContainer<FlexObject>, 'epstexts'>,
    FormFieldContainer<FlexObject, M>,
    EndnoteFrameContainer<FlexObject, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FlexObject';

  /** Resolves the proxy into the individual {@link FlexObject} objects it stands for. */
  getElements(): FlexObject<TParent, 'single'>[];

  /** Anchored/inline-object placement settings for this item. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** A collection of the paths making up this item's shape. */
  readonly paths: Paths;

  /** Whether the flex container's width is fixed, fills the available space, or is set automatically; see {@link FlexWidthHeightMode} and {@link FlexEnum}. */
  get flexWidthMode(): Read<M, FlexWidthHeightMode | FlexEnum>;
  set flexWidthMode(value: FlexWidthHeightMode | FlexEnum);

  /** Whether the flex container's height is fixed, fills the available space, or is set automatically; see {@link FlexWidthHeightMode} and {@link FlexEnum}. */
  get flexHeightMode(): Read<M, FlexWidthHeightMode | FlexEnum>;
  set flexHeightMode(value: FlexWidthHeightMode | FlexEnum);

  /** The main-axis direction items are laid out along. */
  get flexDirection(): Read<M, FlexDirection>;
  set flexDirection(value: FlexDirection);

  /** Whether flex items are forced onto one line or may wrap onto multiple lines. */
  get flexWrap(): Read<M, FlexWrap>;
  set flexWrap(value: FlexWrap);

  /** How space is distributed between and around items along the main axis. */
  get justifyContent(): Read<M, FlexPosition | FlexSpacing>;
  set justifyContent(value: FlexPosition | FlexSpacing);

  /** The default alignment of items along the cross axis. */
  get alignItems(): Read<M, FlexPosition | FlexEnum>;
  set alignItems(value: FlexPosition | FlexEnum);

  /** How the container's lines are aligned when there is extra space on the cross axis. */
  get alignContent(): Read<M, FlexPosition | FlexEnum>;
  set alignContent(value: FlexPosition | FlexEnum);

  /** The top inner padding of the flex container. */
  get flexPaddingTop(): Read<M, number>;
  set flexPaddingTop(value: MeasurementValue);

  /** The right inner padding of the flex container. */
  get flexPaddingRight(): Read<M, number>;
  set flexPaddingRight(value: MeasurementValue);

  /** The bottom inner padding of the flex container. */
  get flexPaddingBottom(): Read<M, number>;
  set flexPaddingBottom(value: MeasurementValue);

  /** The left inner padding of the flex container. */
  get flexPaddingLeft(): Read<M, number>;
  set flexPaddingLeft(value: MeasurementValue);

  /** The gap between rows of flex items. */
  get flexGapRow(): Read<M, number>;
  set flexGapRow(value: MeasurementValue);

  /** The gap between columns of flex items. */
  get flexGapColumn(): Read<M, number>;
  set flexGapColumn(value: MeasurementValue);

  /**
   * Appends an existing page item to the end of the flex container.
   * @param addPageItem The page item to add.
   */
  addFlexObject(addPageItem: PageItem): Read<M, void>;

  /**
   * Inserts an existing page item immediately after a reference item.
   * @param referencePageItem The item to insert after.
   * @param addPageItem The page item to add.
   */
  addPageItemAfter(referencePageItem: PageItem, addPageItem: PageItem): Read<M, void>;

  /**
   * Inserts an existing page item immediately before a reference item.
   * @param referencePageItem The item to insert before.
   * @param addPageItem The page item to add.
   */
  addPageItemBefore(referencePageItem: PageItem, addPageItem: PageItem): Read<M, void>;

  /**
   * Inserts an existing page item at a specific index in the flex order.
   * @param positionIndex The index to insert at.
   * @param addPageItem The page item to add.
   */
  addPageItemAt(positionIndex: number, addPageItem: PageItem): Read<M, void>;

  /**
   * Inserts an existing page item at the start of the flex container.
   * @param addPageItem The page item to add.
   */
  addPageItemAtStart(addPageItem: PageItem): Read<M, void>;

  /**
   * Appends an existing page item to the end of the flex container.
   * @param addPageItem The page item to add.
   */
  addPageItemAtEnd(addPageItem: PageItem): Read<M, void>;
}
