import ColorUtils from "../common/ColorUtils.js";
import Grid from "../common/Grid.js";

// Hard-coded Consts
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const UNIT_RADIUS = 50;

const canvas = d3.select("#index")
    .append("svg")
    .attr("width", CANVAS_WIDTH)
    .attr("height", CANVAS_HEIGHT);

let grid = new Grid(canvas, UNIT_RADIUS)
    .generateGrid();

// Set color strings
for (let x = 0; x < grid.width(); x++) {
    for (let y = 0; y < grid.height(); y++) {

        let r = Math.floor(255 * (x / grid.width()));
        let b = Math.floor(255 * (y / grid.height()));
        let g = Math.floor(255 * ((255 * 2 - r - b) / (255 * 3)));

        let colorString = ColorUtils.getColorHexString(r, g, b);
        console.log(colorString);

        grid.get(x, y)
            .attr("fill", colorString);
    }
}