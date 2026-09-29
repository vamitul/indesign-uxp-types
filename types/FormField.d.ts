/**
 * FormField.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { PageItemParent } from './_base/Parents';
import type { Button } from './Button';
import type { CheckBox } from './CheckBox';
import type { ComboBox } from './ComboBox';
import type { ListBox } from './ListBox';
import type { MultiStateObject } from './MultiStateObject';
import type { RadioButton } from './RadioButton';
import type { SignatureField } from './SignatureField';
import type { TextBox } from './TextBox';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphic } from './Graphic';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Preferences } from './Preferences';
import type { SVGs } from './SVGs';
import type { State } from './State';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * An interactive PDF form field a document can contain — a button, check
 * box, combo box, list box, radio button, text box, signature field, or
 * multi-state object.
 *
 * See {@link Button}, {@link CheckBox}, {@link ComboBox}, {@link ListBox},
 * {@link RadioButton}, {@link TextBox}, {@link SignatureField}, and
 * {@link MultiStateObject}.
 */
export interface FormField<TParent = PageItemParent, TChildParent = PageItemParent, M extends Mode = 'single'> extends PageItem<TParent, TChildParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'CheckBox'` when this is a {@link CheckBox}. */
  readonly constructorName: 'FormField' | 'Button' | 'CheckBox' | 'ComboBox' | 'ListBox' | 'MultiStateObject' | 'RadioButton' | 'SignatureField' | 'TextBox';

  /** Resolves the proxy into the individual {@link FormField} objects it stands for. */
  getElements(): FormField<TParent, TChildParent, 'single'>[];

  /** The index of the active {@link State} in the field's `states` collection. */
  get activeStateIndex(): Read<M, number>;
  set activeStateIndex(value: number);

  /** Anchored object settings — see {@link AnchoredObjectSetting}. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** Accessible description of the field, exposed to screen readers in the exported PDF. */
  get description(): Read<M, string>;
  set description(value: string);
}

/**
 * A form control InDesign reports as a plain {@link FormField} rather than as a button, check
 * box, combo box, list box, radio button, signature field, text box or multi-state object.
 *
 * Handle it in the `'FormField'` case of a `constructorName` check. Only the members every form
 * control has are available on it.
 */
export interface PlainFormField<
  TParent = PageItemParent,
  TChildParent = PageItemParent,
  M extends Mode = 'single',
> extends FormField<TParent, TChildParent, M> {
  /** Always `'FormField'` — this is the generic case, by construction. */
  readonly constructorName: 'FormField';
}
