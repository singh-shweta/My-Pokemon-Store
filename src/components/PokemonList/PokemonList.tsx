import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import sharedStyles from '../../shared/sharedStyles';
import { SearchInput } from '../common/searchInput';
import { ListCard } from './ListCard';

export const PokemonList = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { pokemons, loading } = useGetPokemons();
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() =>{
    setFilteredPokemons(pokemons);
  },[pokemons])

  const filterPokemons = useCallback((searchInput) => {
    if(searchInput.length) {
      const filtered = pokemons.filter(pok => (pok.name.toLowerCase()).includes(searchInput.toLowerCase()));
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons(pokemons);
    }
    
  }, [pokemons]);

  const goToDetails = (item: { id: string; }) => {
    navigate(`/pokemon/${item.id}`)
  };

  return (
    <div className={`${classes.root} ${classes.container}`}>
      {loading && <div>Loading...</div>}
      
      <SearchInput onSearchInput={filterPokemons} />
      <div className={`${classes.row} ${classes.centerText}`}>
        {filteredPokemons.map((pkmn) => (
          <ListCard data={pkmn} idField='id' onItemClick={goToDetails}/>        
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
    ...sharedStyles
  },
  { name: 'PokemonList' }
);
