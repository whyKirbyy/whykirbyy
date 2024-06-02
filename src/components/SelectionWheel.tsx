import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import * as d3 from 'd3';
import "../style/components/SelectionWheel.scss";
import SelectionWheelBackground from "./SelectionWheelBackground.tsx";

type SelectionWheelProps = {
  options: string[];
  startAngle?: number;
};

const SelectionWheel: React.FC<SelectionWheelProps & { ref?: React.Ref<any> }> = forwardRef(({ options, startAngle = 0 }, ref) => {
  const [rotation, setRotation] = useState(0);
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<SVGGElement | null>(null);
  const anglePerOption = 180 / options.length;
  const maxRotation = (options.length - 1) * anglePerOption;

  useEffect(() => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;
    const data = options.map((option) => ({ label: option, value: 1 }));

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");

    // Clearing any existing <g> elements
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
      .attr("class", "slice")
      .style("pointer-events", "all")
      .on("click", (event, d) => handleClick(d.index));

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
      .attr("fill", "#E87889")
      .attr("stroke", "#00000000")
      .attr("stroke-width", "1px")
      .text(d => d.data.label)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("stroke", "#FFFFFF");
      })
      .on("mouseout", function (event, d) {
        d3.select(this).attr("stroke", "#00000000");
      });
  }, [options, startAngle]);

  const handleWheel = (event: React.WheelEvent) => {
    const maxOptionsBeforeRotation = 4;
    if (options.length > maxOptionsBeforeRotation) {
      let newRotation = rotation + event.deltaY * 0.1;

      if (newRotation > maxRotation - anglePerOption) {
        newRotation = maxRotation - anglePerOption;
      } else if (newRotation < -(anglePerOption)) {
        newRotation = -(anglePerOption);
      }

      setRotation(newRotation);
      d3.select(containerRef.current)
        .attr('transform', `translate(200, 200) rotate(${newRotation})`);

      checkRotation(newRotation);
    }
  };

  const checkRotation = (currentRotation: number) => {
    const targetAngles = [-30, 0, 30, 60, 90, 120];
    const tolerance = 1.2;

    for (const [index, targetAngle] of targetAngles.entries()) {
      if (Math.abs(currentRotation - targetAngle) <= tolerance) {
        setRotation(targetAngle);
        d3.select(containerRef.current)
          .attr('transform', `translate(200, 200) rotate(${targetAngle})`);
        setCurrentSelection(options[options.length - 1 - index]); // Update current selection with the option text
        return;
      }
    }
  };

  const handleClick = (index: number) => {
    const angles = [120, 90, 60, 30, 0, -30];
    const angle = angles[index];
    if (angle !== undefined) {
      setRotationFromOutside(angle, options[index]);
    } else {
      console.log("Current Selection never changed", currentSelection);
    }
  };

  const setRotationFromOutside = (angle: number, selection: string) => {
    setRotation(angle);
    setCurrentSelection(selection);
    if (containerRef.current) {
      d3.select(containerRef.current)
        .transition()
        .duration(500)
        .attr('transform', `translate(200, 200) rotate(${angle})`);
    }
  };

  useImperativeHandle(ref, () => ({
    setRotation: setRotationFromOutside
  }));

  const handleButtonClick = () => {
    console.log(currentSelection);
  };

  return (
    <div className="selection-wheel-container">
      <button className="half-circle-button" onClick={handleButtonClick}>
        <div className={"button-text"}>Select Record</div>
      </button>
      <div className="selection-wheel" onWheel={handleWheel}>
        <svg ref={svgRef}></svg>
      </div>
      <SelectionWheelBackground />
    </div>
  );
});

export default SelectionWheel;
