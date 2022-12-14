import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarwars from './ContextStarwars';

const arryColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function ProviderStarWars({ children }) {
  const [dataApiPlanets, setdataApiPlanets] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [column, setColumn] = useState(arryColumn);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filter, setFilter] = useState([]);
  const [columnSort, setColumnSort] = useState('population');
  const [sortRadio, setSortRadio] = useState('');
  const [order, setOrder] = useState({ order: { column: '', sort: '' } });

  useEffect(() => {
    const fetchApiPlanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      const { results } = await (await fetch(endpoint)).json();
      const removeResidents = results.filter((e) => delete e.residents);
      setdataApiPlanets(removeResidents);
      setCopyData(removeResidents);
    };
    fetchApiPlanets();
  }, []);

  const clickBtnFilter = useCallback(() => {
    const newColumn = [...column].filter((e) => e !== columnFilter);
    setColumnFilter(newColumn[0]);
    setColumn(newColumn);
    setFilter([...filter, { columnFilter, comparisonFilter, valueFilter }]);
    if (comparisonFilter === 'menor que') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] < +valueFilter));
    }
    if (comparisonFilter === 'igual a') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] === valueFilter));
    }
    if (comparisonFilter === 'maior que') {
      setdataApiPlanets(dataApiPlanets.filter((e) => e[columnFilter] > +valueFilter));
    }
  }, [column, columnFilter, comparisonFilter, dataApiPlanets, valueFilter, filter]);

  const clickBtnRemoveFiltrs = useCallback(() => {
    setdataApiPlanets(copyData);
    setColumn(arryColumn);
    setFilter([]);
    setColumnFilter('population');
  }, [copyData]);

  const clickBtnRemoveFilter = useCallback((elemnetColumn) => {
    const index = arryColumn.indexOf(elemnetColumn);
    column.splice(index, 0, elemnetColumn);

    setFilter(filter.filter((e) => e.columnFilter !== elemnetColumn));
    setdataApiPlanets(copyData);
    setColumn(column);
    setColumnFilter(column[0]);

    filter.filter((e) => e.columnFilter !== elemnetColumn).forEach((element) => {
      if (element.comparisonFilter === 'maior que') {
        const newData = copyData.filter(
          (e) => +e[element.columnFilter] > +element.valueFilter,
        );
        setColumn(column.filter((e) => e !== element.columnFilter));
        setColumnFilter(column[0]);
        setdataApiPlanets(newData);
      }

      if (element.comparisonFilter === 'menor que') {
        const newData = copyData.filter(
          (e) => +e[element.columnFilter] < +element.valueFilter,
        );

        setColumn(column.filter((e) => e !== element.columnFilter));
        setColumnFilter(column[0]);
        setdataApiPlanets(newData);
      }

      if (element.comparisonFilter === 'igual a') {
        const newData = copyData.filter(
          (e) => +e[element.columnFilter] === +element.valueFilter,
        );

        setColumn(column.filter((e) => e !== element.columnFilter));
        setColumnFilter(column[0]);
        setdataApiPlanets(newData);
      }
    });
  }, [filter, column, copyData]);

  const handleBtnSort = useCallback((objeto) => {
    setOrder(objeto);
    if (objeto.order.sort === 'DESC') {
      const dataSort = dataApiPlanets.sort(
        (a, b) => b[objeto.order.column] - a[objeto.order.column],
      );
      setdataApiPlanets(dataSort);
    }

    if (objeto.order.sort === 'ASC') {
      const dataSort = dataApiPlanets.sort(
        (a, b) => b[objeto.order.column] - a[objeto.order.column],
      );
      setdataApiPlanets(dataSort.sort(
        (a, b) => a[objeto.order.column] - b[objeto.order.column],
      ));
    }
  }, [dataApiPlanets]);

  const value = useMemo(
    () => ({
      dataApiPlanets,
      nameFilter,
      columnFilter,
      comparisonFilter,
      valueFilter,
      column,
      filter,
      columnSort,
      sortRadio,
      order,
      setNameFilter,
      setColumnFilter,
      setComparisonFilter,
      setValueFilter,
      clickBtnFilter,
      clickBtnRemoveFiltrs,
      clickBtnRemoveFilter,
      setColumnSort,
      setSortRadio,
      handleBtnSort,
    }),
    [
      dataApiPlanets,
      nameFilter,
      columnFilter,
      comparisonFilter,
      valueFilter,
      column,
      filter,
      columnSort,
      sortRadio,
      order,
      clickBtnFilter,
      clickBtnRemoveFiltrs,
      clickBtnRemoveFilter,
      handleBtnSort,
    ],
  );

  return (
    <ContextStarwars.Provider value={ value }>
      {children}
    </ContextStarwars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
