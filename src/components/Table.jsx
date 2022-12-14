import React, { useContext } from 'react';
import ContextStarwars from '../context/ContextStarwars';
import './Table.css';

export default function Table() {
  const { dataApiPlanets, nameFilter } = useContext(ContextStarwars);
  const handleFilters = (array) => {
    const filterName = array
      .filter((e) => e.name.toLowerCase().includes(nameFilter));
    return filterName;
  };

  return (
    <div className="container-table">
      <table className="container">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody className="tbody">
          { handleFilters(dataApiPlanets).map((e, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{e.name}</td>
              <td>{e.rotation_period}</td>
              <td>{e.orbital_period}</td>
              <td>{e.diameter}</td>
              <td>{e.climate}</td>
              <td>{e.gravity}</td>
              <td>{e.terrain}</td>
              <td>{e.surface_water}</td>
              <td>{e.population}</td>
              <td>{e.films.map((films) => films)}</td>
              <td>{e.created}</td>
              <td>{e.edited}</td>
              <td>{e.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
