export default class Grid {

    // Instantiate grid
    _width;
    _height;
    _canvas;
    _grid;
    _unit_radius;

    constructor(canvas, unitRadius) {
        this._canvas = canvas;

        this._unit_radius = unitRadius;
        this._width = Math.floor(canvas.attr("width") / unitRadius);
        this._height = Math.floor(canvas.attr("height")/ unitRadius);
    }

    generateGrid() {
        this._grid = new Array();

        // Generate grid
        const canvas_grid = this._canvas.append("g");
        for (let x = 0; x < this._width; x++) {
            const layer = new Array();

            for (let y = 0; y < this._height; y++) {
                const gridSquare = canvas_grid.append("rect")
                    .attr("width", this._unit_radius)
                    .attr("height", this._unit_radius)
                    .attr("x", x * this._unit_radius)
                    .attr("y", y * this._unit_radius)
                    .attr("stroke", "grey")
                    .attr("fill", "white");
                layer.push(gridSquare);
            }
            this._grid.push(layer);
        }

        return this;
    }

    width() {
        return this._width;
    }

    height() {
        return this._height;
    }

    get(x, y) {
        return this._grid[x][y];
    }


}