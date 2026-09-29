/**
 * ContourOptionsTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ContourOptionsTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ContourOptionsTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ContourOptionsTypes>): boolean;

  /**
   * @internal **WARNING:** `__ContourOptionsTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ContourOptionsTypes]: never;
}


/**
 * Sets the text wrap shape to the object's bounding box.
 */
interface ContourOptionsTypes_BOUNDING_BOX extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701732962;
}

/**
 * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
 */
interface ContourOptionsTypes_PHOTOSHOP_PATH extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886613620;
}

/**
 * Sets the text wrap shape to the edges of the image.
 */
interface ContourOptionsTypes_DETECT_EDGES extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685349735;
}

/**
 * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
 */
interface ContourOptionsTypes_ALPHA_CHANNEL extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634756707;
}

/**
 * Sets the text wrap shape to the wrapped object's graphics frame.
 */
interface ContourOptionsTypes_GRAPHIC_FRAME extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701734246;
}

/**
 * Sets the text wrap shape to the clipping path (if any) defined in Photoshop.
 *
 * Note: A path cannot be specified using this enumeration. To set the text wrap shape to a
 * specific path, use the photoshop path contour options type enumeration value.
 */
interface ContourOptionsTypes_SAME_AS_CLIPPING extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935762288;
}

/**
 * The Smart Text Wrap selects the key Subject in the content based on Adobe Sensei.
 */
interface ContourOptionsTypes_SELECT_SUBJECT extends ContourOptionsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685087092;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The path on which to base the contour text wrap.
 */
export declare namespace ContourOptionsTypes {
/**
 * Sets the text wrap shape to the object's bounding box.
 */
type BOUNDING_BOX = ContourOptionsTypes_BOUNDING_BOX;

/**
 * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
 */
type PHOTOSHOP_PATH = ContourOptionsTypes_PHOTOSHOP_PATH;

/**
 * Sets the text wrap shape to the edges of the image.
 */
type DETECT_EDGES = ContourOptionsTypes_DETECT_EDGES;

/**
 * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
 */
type ALPHA_CHANNEL = ContourOptionsTypes_ALPHA_CHANNEL;

/**
 * Sets the text wrap shape to the wrapped object's graphics frame.
 */
type GRAPHIC_FRAME = ContourOptionsTypes_GRAPHIC_FRAME;

/**
 * Sets the text wrap shape to the clipping path (if any) defined in Photoshop.
 *
 * Note: A path cannot be specified using this enumeration. To set the text wrap shape to a
 * specific path, use the photoshop path contour options type enumeration value.
 */
type SAME_AS_CLIPPING = ContourOptionsTypes_SAME_AS_CLIPPING;

/**
 * The Smart Text Wrap selects the key Subject in the content based on Adobe Sensei.
 */
type SELECT_SUBJECT = ContourOptionsTypes_SELECT_SUBJECT;

}
/**
 * The path on which to base the contour text wrap.
 */
export declare const ContourOptionsTypes: typeof Enumeration & {

  /**
   * Sets the text wrap shape to the object's bounding box.
   */
  readonly BOUNDING_BOX: ContourOptionsTypes_BOUNDING_BOX;
  /**
   * Sets the text wrap shape to the object's bounding box.
   */
  readonly boundingBox: ContourOptionsTypes_BOUNDING_BOX;
  /**
   * Sets the text wrap shape to the object's bounding box.
   */
  readonly boundingbox: ContourOptionsTypes_BOUNDING_BOX;

  /**
   * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
   */
  readonly PHOTOSHOP_PATH: ContourOptionsTypes_PHOTOSHOP_PATH;
  /**
   * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
   */
  readonly photoshopPath: ContourOptionsTypes_PHOTOSHOP_PATH;
  /**
   * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
   */
  readonly photoshoppath: ContourOptionsTypes_PHOTOSHOP_PATH;

  /**
   * Sets the text wrap shape to the edges of the image.
   */
  readonly DETECT_EDGES: ContourOptionsTypes_DETECT_EDGES;
  /**
   * Sets the text wrap shape to the edges of the image.
   */
  readonly detectEdges: ContourOptionsTypes_DETECT_EDGES;
  /**
   * Sets the text wrap shape to the edges of the image.
   */
  readonly detectedges: ContourOptionsTypes_DETECT_EDGES;

  /**
   * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
   */
  readonly ALPHA_CHANNEL: ContourOptionsTypes_ALPHA_CHANNEL;
  /**
   * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
   */
  readonly alphaChannel: ContourOptionsTypes_ALPHA_CHANNEL;
  /**
   * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
   */
  readonly alphachannel: ContourOptionsTypes_ALPHA_CHANNEL;

  /**
   * Sets the text wrap shape to the wrapped object's graphics frame.
   */
  readonly GRAPHIC_FRAME: ContourOptionsTypes_GRAPHIC_FRAME;
  /**
   * Sets the text wrap shape to the wrapped object's graphics frame.
   */
  readonly graphicFrame: ContourOptionsTypes_GRAPHIC_FRAME;
  /**
   * Sets the text wrap shape to the wrapped object's graphics frame.
   */
  readonly graphicframe: ContourOptionsTypes_GRAPHIC_FRAME;

  /**
   * Sets the text wrap shape to the clipping path (if any) defined in Photoshop.
   *
   * Note: A path cannot be specified using this enumeration. To set the text wrap shape to a
   * specific path, use the photoshop path contour options type enumeration value.
   */
  readonly SAME_AS_CLIPPING: ContourOptionsTypes_SAME_AS_CLIPPING;
  /**
   * Sets the text wrap shape to the clipping path (if any) defined in Photoshop.
   *
   * Note: A path cannot be specified using this enumeration. To set the text wrap shape to a
   * specific path, use the photoshop path contour options type enumeration value.
   */
  readonly sameAsClipping: ContourOptionsTypes_SAME_AS_CLIPPING;
  /**
   * Sets the text wrap shape to the clipping path (if any) defined in Photoshop.
   *
   * Note: A path cannot be specified using this enumeration. To set the text wrap shape to a
   * specific path, use the photoshop path contour options type enumeration value.
   */
  readonly sameasclipping: ContourOptionsTypes_SAME_AS_CLIPPING;

  /**
   * The Smart Text Wrap selects the key Subject in the content based on Adobe Sensei.
   */
  readonly SELECT_SUBJECT: ContourOptionsTypes_SELECT_SUBJECT;
  /**
   * The Smart Text Wrap selects the key Subject in the content based on Adobe Sensei.
   */
  readonly selectSubject: ContourOptionsTypes_SELECT_SUBJECT;
  /**
   * The Smart Text Wrap selects the key Subject in the content based on Adobe Sensei.
   */
  readonly selectsubject: ContourOptionsTypes_SELECT_SUBJECT;

}
