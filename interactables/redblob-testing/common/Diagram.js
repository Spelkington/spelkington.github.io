import Utilities from './Utilities.js'

const SCALE = 30;

class Diagram {
    constructor(containerId) {
        this.root = d3.select(`#${containerId}`);

        // Instantiate size and init points to -1, -1 until grid set
        this.size = {x: -1, y: -1}
        this.defaultA = {x: -1, y: -1};
        this.defaultB = {x: -1, y: -1};

        this.parent = this.root.select("svg");
        this._updateFunctions = [];
    }

    onUpdate(f) {
        this._updateFunctions.push(f);
        this.update();
        console.log("Updated!");
    }

    update() {
        this._updateFunctions.forEach((f) => f());
    }
    
    addGrid() {
        this.size = {
            x: Math.floor(720 / SCALE),
            y: Math.floor(360 / SCALE)
        }
        console.log(this.size)
        this.defaultA = {x: 2, y: 2}
        this.defaultB = {x: this.size.x - 2, y: this.size.y - 2}

        let g = this.parent.append('g').attr('class', "grid");
        for (let x = 0; x < this.size.x; x++) {
            for (let y = 0; y < this.size.y; y++) {
                g.append('rect')
                    .attr('transform', `translate(${x*SCALE}, ${y*SCALE})`)
                    .attr('fill', 'white')
                    .attr('stroke', 'grey')
                    .attr('width', SCALE)
                    .attr('height', SCALE);
            }
        }
        return this;
    }

        
    addHandles() {
        let g = this.parent.append('g').attr('class', "handles");
        return this;
    }
}

export default Diagram;