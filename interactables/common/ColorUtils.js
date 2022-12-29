export default class ColorUtils {

    static prependFormatHex(hexStr, length) {
        while (hexStr.length < length) {
            hexStr = "0" + hexStr;
        }
        return hexStr;
    }

    static getColorHexString(r, g, b) {
        let rComponent = r;
        let gComponent = g * 256;
        let bComponent = b * 256 * 256;
        let colorString = ColorUtils.prependFormatHex(
            (rComponent + gComponent + bComponent).toString(16),
            6
        );
        return "#" + colorString;
    }

}