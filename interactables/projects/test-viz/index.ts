import * as d3 from "d3";
import ColorUtils from "common/ColorUtils";

// Hard-coded Consts
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const UNIT_RADIUS = 20;

// Derived Consts
const GRID_WIDTH = CANVAS_WIDTH / UNIT_RADIUS;
const GRID_HEIGHT = CANVAS_HEIGHT / UNIT_RADIUS;

const canvas = d3.select("#index")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

// Instantiate grid
const grid = Array<Array<any>>();

// Generate grid
const _canvas_grid = canvas.append("g");
for (let x = 0; x < GRID_WIDTH; x++) {
    const layer = new Array<any>();

    for (let y = 0; y < GRID_HEIGHT; y++) {
        const gridSquare = _canvas_grid.append("rect")
            .attr("width", UNIT_RADIUS)
            .attr("height", UNIT_RADIUS)
            .attr("x", x * UNIT_RADIUS)
            .attr("y", y * UNIT_RADIUS)
            .attr("stroke", "grey")
            .attr("fill", "white");
        layer.push(gridSquare)
    }
    grid.push(layer)
}

// Set color strings
for (let x = 0; x < GRID_WIDTH; x++) {
    for (let y = 0; y < GRID_HEIGHT; y++) {

        let r = Math.floor(255 * (x / GRID_WIDTH))
        let b = Math.floor(255 * (y / GRID_HEIGHT))
        let g = Math.floor(255 * ((255 * 2 - r - b) / (255 * 3)));

        let colorString = ColorUtils.getColorHexString(r, g, b)

        grid[x][y]
            .attr("fill", colorString)
    }
}