class ColorUtils {

    public static prependFormatHex(hexStr: string, length: number): string {
        while (hexStr.length < length) {
            hexStr = "0" + hexStr;
        }
        return hexStr
    }

    public static getColorHexString(r: number, g: number, b: number): string {
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

export default ColorUtils;