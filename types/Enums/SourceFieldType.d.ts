/**
 * SourceFieldType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SourceFieldType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SourceFieldType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SourceFieldType>): boolean;

  /**
   * @internal **WARNING:** `__SourceFieldType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SourceFieldType]: never;
}


/**
 * The field can fill a data merge text placeholder.
 */
interface SourceFieldType_TEXT_FIELD extends SourceFieldType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684886630;
}

/**
 * The field can fill a data merge image placeholder.
 */
interface SourceFieldType_IMAGE_FIELD extends SourceFieldType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684883814;
}

/**
 * The field can fill a data merge QR code placeholder.
 */
interface SourceFieldType_QRCODE_FIELD extends SourceFieldType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684885862;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * What kind of data merge placeholder a field can fill — text, an image, or a QR code.
 */
export declare namespace SourceFieldType {
/**
 * The field can fill a data merge text placeholder.
 */
type TEXT_FIELD = SourceFieldType_TEXT_FIELD;

/**
 * The field can fill a data merge image placeholder.
 */
type IMAGE_FIELD = SourceFieldType_IMAGE_FIELD;

/**
 * The field can fill a data merge QR code placeholder.
 */
type QRCODE_FIELD = SourceFieldType_QRCODE_FIELD;

}
/**
 * What kind of data merge placeholder a field can fill — text, an image, or a QR code.
 */
export declare const SourceFieldType: typeof Enumeration & {

  /**
   * The field can fill a data merge text placeholder.
   */
  readonly TEXT_FIELD: SourceFieldType_TEXT_FIELD;
  /**
   * The field can fill a data merge text placeholder.
   */
  readonly textField: SourceFieldType_TEXT_FIELD;
  /**
   * The field can fill a data merge text placeholder.
   */
  readonly textfield: SourceFieldType_TEXT_FIELD;

  /**
   * The field can fill a data merge image placeholder.
   */
  readonly IMAGE_FIELD: SourceFieldType_IMAGE_FIELD;
  /**
   * The field can fill a data merge image placeholder.
   */
  readonly imageField: SourceFieldType_IMAGE_FIELD;
  /**
   * The field can fill a data merge image placeholder.
   */
  readonly imagefield: SourceFieldType_IMAGE_FIELD;

  /**
   * The field can fill a data merge QR code placeholder.
   */
  readonly QRCODE_FIELD: SourceFieldType_QRCODE_FIELD;
  /**
   * The field can fill a data merge QR code placeholder.
   */
  readonly qrcodeField: SourceFieldType_QRCODE_FIELD;
  /**
   * The field can fill a data merge QR code placeholder.
   */
  readonly qrcodefield: SourceFieldType_QRCODE_FIELD;

}
