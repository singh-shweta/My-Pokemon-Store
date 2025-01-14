import React, {useCallback} from 'react';
import { createUseStyles } from 'react-jss';

import { PokemonList } from '../components';


export const ListPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.details}>
      <PokemonList />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    details: {
      width: '100%',
      height: '100%',
    },
  },
  { name: 'ListPage' }
);
