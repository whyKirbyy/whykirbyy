import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import "../style/components/SelectionWheel.scss";

type SelectionWheelProps = {
  options: string[];
  startAngle?: number;
};

const SelectionWheel: React.FC<SelectionWheelProps> = ({ options, startAngle = 0 }) => {
  const [rotation, setRotation] = useState(0);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<SVGGElement | null>(null);

  const anglePerOption = 180 / options.length;
  const maxRotation = (options.length - 1) * anglePerOption;

  useEffect(() => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;
    const data = options.map((option, index) => ({ label: option, value: 1 }));

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");

    //clearing any existing <g> elements
    svg.selectAll("*").remove();

    const container = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    containerRef.current = container.node();

    const pie = d3.pie<any>()
      .value(d => d.value)
      .sort(null)
      .startAngle(startAngle * (Math.PI / 180))
      .endAngle((startAngle + 180) * (Math.PI / 180));

    const arcs = container.selectAll("g.slice")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "slice");

    arcs.append("text")
      .attr("transform", function (d) {
        const angle = (d.startAngle + d.endAngle) / 2;
        const x = (radius - 20) * Math.cos(angle);
        const y = (radius - 20) * Math.sin(angle);
        const rotation = angle * 180 / Math.PI;
        return `translate(${x}, ${y}) rotate(${rotation + (rotation > 90 && rotation < 270 ? 180 : 0)})`;
      })
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text(d => d.data.label);
  }, [options, startAngle]);

  const handleWheel = (event: React.WheelEvent) => {
    const maxOptionsBeforeRotation = 4; //number of elements before rotations start
    if (options.length > maxOptionsBeforeRotation) {
      let newRotation = rotation + event.deltaY * 0.1;

      //rotation stop point
      if (newRotation > maxRotation - anglePerOption) {
        newRotation = maxRotation - anglePerOption;
      } else if (newRotation < -(anglePerOption)) {
        newRotation = -(anglePerOption);
      }

      setRotation(newRotation);
      d3.select(containerRef.current)
        .attr('transform', `translate(200, 200) rotate(${newRotation})`);
    }
  };

  return (
    <div className="selection-wheel" onWheel={handleWheel}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SelectionWheel;
