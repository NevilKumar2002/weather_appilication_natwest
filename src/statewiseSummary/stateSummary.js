import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const WEATHER_API_KEY = '74e0b5d138651a7806f1447c32505376';

const StateWiseTreemap = ({ data, onStateClick }) => {
  const treemapRef = useRef(null);
  const [weatherData, setWeatherData] = useState({});

  const fetchData = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
      setWeatherData(prevData => ({ ...prevData, [city]: response.data.main.temp }));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleMouseOver = async (event, d) => {
    if (!weatherData[d.data.name]) {
      // Fetch real-time temperature data on hover if not available
      await fetchData(d.data.name);
    }
  };

  useEffect(() => {
    if (!data) return;

    // Clear previous content
    d3.select(treemapRef.current).selectAll('*').remove();

    const width = 500;
    const height = 300;

    const svg = d3.select(treemapRef.current)
      .attr('width', width)
      .attr('height', height);

    // Use a categorical color scale for each state
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const treemap = d3.treemap()
      .size([width, height])
      .padding(1);

    const root = d3.hierarchy({ children: data })
      .sum(d => d.temp);

    treemap(root);

    svg.selectAll('rect')
      .data(root.leaves())
      .enter().append('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', (d, i) => colorScale(i)) // Use index as input to color scale
      .on('mouseover', handleMouseOver)
      .on('mouseout', () => {
        // Your tooltip hide code
      })
      .on('click', (event, d) => onStateClick(d.data.name))
      .append('title')
      .text(d => `${d.data.name}: ${weatherData[d.data.name] || 'N/A'}°C`); // Adding title for accessibility

    // Add text labels to each treemap part
    svg.selectAll('text')
      .data(root.leaves())
      .enter().append('text')
      .attr('x', d => (d.x0 + d.x1) / 2)
      .attr('y', d => (d.y0 + d.y1) / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .text(d => d.data.name);

  }, [data, weatherData, onStateClick]);

  return (
    <>
      <svg ref={treemapRef}></svg>
      {/* Your tooltip div */}
      {/* <h2>Hello World</h2> */}
    </>
  );
};

export default StateWiseTreemap;

