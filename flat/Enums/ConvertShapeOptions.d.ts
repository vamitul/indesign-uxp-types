/**
 * ConvertShapeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ConvertShapeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ConvertShapeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ConvertShapeOptions>): boolean;

  /**
   * @internal **WARNING:** `__ConvertShapeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ConvertShapeOptions]: never;
}


/**
 * Converts the object to a rectangle.
 */
interface ConvertShapeOptions_CONVERT_TO_RECTANGLE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129534021;
}

/**
 * Converts the object to a rectangle with rounded corners.
 */
interface ConvertShapeOptions_CONVERT_TO_ROUNDED_RECTANGLE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129534034;
}

/**
 * Converts the object to a rectangle with beveled corners.
 */
interface ConvertShapeOptions_CONVERT_TO_BEVELED_RECTANGLE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129529938;
}

/**
 * Converts the object to a rectangle with inverse rounded corners.
 */
interface ConvertShapeOptions_CONVERT_TO_INVERSE_ROUNDED_RECTANGLE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129531730;
}

/**
 * Converts the object to an ellipse.
 */
interface ConvertShapeOptions_CONVERT_TO_OVAL extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129533270;
}

/**
 * Converts the object to a triangle.
 */
interface ConvertShapeOptions_CONVERT_TO_TRIANGLE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129534546;
}

/**
 * Converts the object to a polygon.
 */
interface ConvertShapeOptions_CONVERT_TO_POLYGON extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129533519;
}

/**
 * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
 */
interface ConvertShapeOptions_CONVERT_TO_LINE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129532489;
}

/**
 * Converts the object to straight line.
 *
 * If the object is a square, circle, or its bounding box is wider than it is tall, the line
 * is horizontal and connects the center points on the vertical sides of the bounding box.
 * If the object's bounding box is taller than it is wide, the line connects the center
 * points of the horizontal sides of the bounding box.
 */
interface ConvertShapeOptions_CONVERT_TO_STRAIGHT_LINE extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129534284;
}

/**
 * Converts the object to an open path.
 */
interface ConvertShapeOptions_CONVERT_TO_OPEN_PATH extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129533296;
}

/**
 * Converts the object to a closed path.
 */
interface ConvertShapeOptions_CONVERT_TO_CLOSED_PATH extends ConvertShapeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129530224;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for indicating the type of shape to which to convert an object.
 */
export declare namespace ConvertShapeOptions {
/**
 * Converts the object to a rectangle.
 */
type CONVERT_TO_RECTANGLE = ConvertShapeOptions_CONVERT_TO_RECTANGLE;

/**
 * Converts the object to a rectangle with rounded corners.
 */
type CONVERT_TO_ROUNDED_RECTANGLE = ConvertShapeOptions_CONVERT_TO_ROUNDED_RECTANGLE;

/**
 * Converts the object to a rectangle with beveled corners.
 */
type CONVERT_TO_BEVELED_RECTANGLE = ConvertShapeOptions_CONVERT_TO_BEVELED_RECTANGLE;

/**
 * Converts the object to a rectangle with inverse rounded corners.
 */
type CONVERT_TO_INVERSE_ROUNDED_RECTANGLE = ConvertShapeOptions_CONVERT_TO_INVERSE_ROUNDED_RECTANGLE;

/**
 * Converts the object to an ellipse.
 */
type CONVERT_TO_OVAL = ConvertShapeOptions_CONVERT_TO_OVAL;

/**
 * Converts the object to a triangle.
 */
type CONVERT_TO_TRIANGLE = ConvertShapeOptions_CONVERT_TO_TRIANGLE;

/**
 * Converts the object to a polygon.
 */
type CONVERT_TO_POLYGON = ConvertShapeOptions_CONVERT_TO_POLYGON;

/**
 * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
 */
type CONVERT_TO_LINE = ConvertShapeOptions_CONVERT_TO_LINE;

/**
 * Converts the object to straight line.
 *
 * If the object is a square, circle, or its bounding box is wider than it is tall, the line
 * is horizontal and connects the center points on the vertical sides of the bounding box.
 * If the object's bounding box is taller than it is wide, the line connects the center
 * points of the horizontal sides of the bounding box.
 */
type CONVERT_TO_STRAIGHT_LINE = ConvertShapeOptions_CONVERT_TO_STRAIGHT_LINE;

/**
 * Converts the object to an open path.
 */
type CONVERT_TO_OPEN_PATH = ConvertShapeOptions_CONVERT_TO_OPEN_PATH;

/**
 * Converts the object to a closed path.
 */
type CONVERT_TO_CLOSED_PATH = ConvertShapeOptions_CONVERT_TO_CLOSED_PATH;

}
/**
 * Options for indicating the type of shape to which to convert an object.
 */
export declare const ConvertShapeOptions: typeof Enumeration & {

  /**
   * Converts the object to a rectangle.
   */
  readonly CONVERT_TO_RECTANGLE: ConvertShapeOptions_CONVERT_TO_RECTANGLE;
  /**
   * Converts the object to a rectangle.
   */
  readonly convertToRectangle: ConvertShapeOptions_CONVERT_TO_RECTANGLE;
  /**
   * Converts the object to a rectangle.
   */
  readonly converttorectangle: ConvertShapeOptions_CONVERT_TO_RECTANGLE;

  /**
   * Converts the object to a rectangle with rounded corners.
   */
  readonly CONVERT_TO_ROUNDED_RECTANGLE: ConvertShapeOptions_CONVERT_TO_ROUNDED_RECTANGLE;
  /**
   * Converts the object to a rectangle with rounded corners.
   */
  readonly convertToRoundedRectangle: ConvertShapeOptions_CONVERT_TO_ROUNDED_RECTANGLE;
  /**
   * Converts the object to a rectangle with rounded corners.
   */
  readonly converttoroundedrectangle: ConvertShapeOptions_CONVERT_TO_ROUNDED_RECTANGLE;

  /**
   * Converts the object to a rectangle with beveled corners.
   */
  readonly CONVERT_TO_BEVELED_RECTANGLE: ConvertShapeOptions_CONVERT_TO_BEVELED_RECTANGLE;
  /**
   * Converts the object to a rectangle with beveled corners.
   */
  readonly convertToBeveledRectangle: ConvertShapeOptions_CONVERT_TO_BEVELED_RECTANGLE;
  /**
   * Converts the object to a rectangle with beveled corners.
   */
  readonly converttobeveledrectangle: ConvertShapeOptions_CONVERT_TO_BEVELED_RECTANGLE;

  /**
   * Converts the object to a rectangle with inverse rounded corners.
   */
  readonly CONVERT_TO_INVERSE_ROUNDED_RECTANGLE: ConvertShapeOptions_CONVERT_TO_INVERSE_ROUNDED_RECTANGLE;
  /**
   * Converts the object to a rectangle with inverse rounded corners.
   */
  readonly convertToInverseRoundedRectangle: ConvertShapeOptions_CONVERT_TO_INVERSE_ROUNDED_RECTANGLE;
  /**
   * Converts the object to a rectangle with inverse rounded corners.
   */
  readonly converttoinverseroundedrectangle: ConvertShapeOptions_CONVERT_TO_INVERSE_ROUNDED_RECTANGLE;

  /**
   * Converts the object to an ellipse.
   */
  readonly CONVERT_TO_OVAL: ConvertShapeOptions_CONVERT_TO_OVAL;
  /**
   * Converts the object to an ellipse.
   */
  readonly convertToOval: ConvertShapeOptions_CONVERT_TO_OVAL;
  /**
   * Converts the object to an ellipse.
   */
  readonly converttooval: ConvertShapeOptions_CONVERT_TO_OVAL;

  /**
   * Converts the object to a triangle.
   */
  readonly CONVERT_TO_TRIANGLE: ConvertShapeOptions_CONVERT_TO_TRIANGLE;
  /**
   * Converts the object to a triangle.
   */
  readonly convertToTriangle: ConvertShapeOptions_CONVERT_TO_TRIANGLE;
  /**
   * Converts the object to a triangle.
   */
  readonly converttotriangle: ConvertShapeOptions_CONVERT_TO_TRIANGLE;

  /**
   * Converts the object to a polygon.
   */
  readonly CONVERT_TO_POLYGON: ConvertShapeOptions_CONVERT_TO_POLYGON;
  /**
   * Converts the object to a polygon.
   */
  readonly convertToPolygon: ConvertShapeOptions_CONVERT_TO_POLYGON;
  /**
   * Converts the object to a polygon.
   */
  readonly converttopolygon: ConvertShapeOptions_CONVERT_TO_POLYGON;

  /**
   * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
   */
  readonly CONVERT_TO_LINE: ConvertShapeOptions_CONVERT_TO_LINE;
  /**
   * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
   */
  readonly convertToLine: ConvertShapeOptions_CONVERT_TO_LINE;
  /**
   * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
   */
  readonly converttoline: ConvertShapeOptions_CONVERT_TO_LINE;

  /**
   * Converts the object to straight line.
   *
   * If the object is a square, circle, or its bounding box is wider than it is tall, the line
   * is horizontal and connects the center points on the vertical sides of the bounding box.
   * If the object's bounding box is taller than it is wide, the line connects the center
   * points of the horizontal sides of the bounding box.
   */
  readonly CONVERT_TO_STRAIGHT_LINE: ConvertShapeOptions_CONVERT_TO_STRAIGHT_LINE;
  /**
   * Converts the object to straight line.
   *
   * If the object is a square, circle, or its bounding box is wider than it is tall, the line
   * is horizontal and connects the center points on the vertical sides of the bounding box.
   * If the object's bounding box is taller than it is wide, the line connects the center
   * points of the horizontal sides of the bounding box.
   */
  readonly convertToStraightLine: ConvertShapeOptions_CONVERT_TO_STRAIGHT_LINE;
  /**
   * Converts the object to straight line.
   *
   * If the object is a square, circle, or its bounding box is wider than it is tall, the line
   * is horizontal and connects the center points on the vertical sides of the bounding box.
   * If the object's bounding box is taller than it is wide, the line connects the center
   * points of the horizontal sides of the bounding box.
   */
  readonly converttostraightline: ConvertShapeOptions_CONVERT_TO_STRAIGHT_LINE;

  /**
   * Converts the object to an open path.
   */
  readonly CONVERT_TO_OPEN_PATH: ConvertShapeOptions_CONVERT_TO_OPEN_PATH;
  /**
   * Converts the object to an open path.
   */
  readonly convertToOpenPath: ConvertShapeOptions_CONVERT_TO_OPEN_PATH;
  /**
   * Converts the object to an open path.
   */
  readonly converttoopenpath: ConvertShapeOptions_CONVERT_TO_OPEN_PATH;

  /**
   * Converts the object to a closed path.
   */
  readonly CONVERT_TO_CLOSED_PATH: ConvertShapeOptions_CONVERT_TO_CLOSED_PATH;
  /**
   * Converts the object to a closed path.
   */
  readonly convertToClosedPath: ConvertShapeOptions_CONVERT_TO_CLOSED_PATH;
  /**
   * Converts the object to a closed path.
   */
  readonly converttoclosedpath: ConvertShapeOptions_CONVERT_TO_CLOSED_PATH;

}
