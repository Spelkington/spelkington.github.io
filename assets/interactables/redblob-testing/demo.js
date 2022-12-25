const scale = 22;
let root = d3.select("#demo svg");

for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 10; y++) {
        root.append('rect')
            .attr('transform', `translate(${x*scale}, ${y*scale})`)
            .attr('width', scale)
            .attr('height', scale)
            .attr('fill', "red")
            .attr('stroke', "gray");
    }
}