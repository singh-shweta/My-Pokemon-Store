import React, {useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createUseStyles } from 'react-jss';
import {DetailsDialog} from '../components/shared/modal';
import sharedStyles from '../shared/sharedStyles';
import { useGetPokemonDetails } from '../hooks/useGetPokemonDetails';

import {getDetailedIntro} from '../helpers/pokemaonDetailHelper';



export const DetailsPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const {pokemon = {}} = useGetPokemonDetails(id);
  console.log(pokemon);

  const navigateToList = useCallback(() => {
    navigate(`/pokemon`)
  },[]);

  return (
    <div className={classes.details}>
      <DetailsDialog title={pokemon.name} onCloseModal={navigateToList} openModal={true}>
        <div>
        <div className={`${classes.row} ${classes.centerText}`}>
            <div className={`${classes.col}  ${classes.col4}`}>
              <img src={pokemon.image} className={classes.image}></img>
            </div>

          </div>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes.centerText}`}>
              <p>
                {getDetailedIntro(pokemon)}
                <br></br>
                <br />
                <b>Types: </b> {(pokemon?.types || []).join(", ")}
                <br></br>
                <br />
                <b>Weaknesses: </b>{(pokemon?.weaknesses || []).join(", ")} 
                <br />
                <br />
                <b>Resistant To: </b>{(pokemon?.resistant || []).join(", ")}

              </p>
            </div>

          </div>

        </div>
      </DetailsDialog>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    details: {
      width: '100%',
      height: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition:'center',
  },
    ...sharedStyles
  },
  { name: 'DetailsPage' }
);


