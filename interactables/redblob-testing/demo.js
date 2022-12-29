const scale = 20;
const xSize = 30;
const ySize = 15;

let root = d3.select("#demo svg");

for (let x = 0; x < xSize; x++) {
    for (let y = 0; y < ySize; y++) {
        root.append('rect')
            .attr('transform', `translate(${x*scale}, ${y*scale})`)
            .attr('width', scale)
            .attr('height', scale)
            .attr('fill', "white")
            .attr('stroke', "grey");
    }
}