import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Pokemon} from '../helpers/typesAndInterfaces';

export const GET_POKEMON_DETAILS = gql`
query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      image
    }
  }
`;

export const useGetPokemonDetails = ( id: string | undefined ) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      id
    },
  });

  const pokemon: Pokemon = useMemo(() => data?.pokemon || {}, [data]);

  return {
    pokemon,
    ...queryRes,
  };
};
