import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface MinMaxDetails {
    minimum: string;
    maximum: string;
  }

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  number: string;
  types: Array<string>;
  weight: MinMaxDetails;
  height: MinMaxDetails;
  classification: string;
  resistant: string;
};

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
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemonDetails = ( id ) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      id
    },
  });

  const pokemon: Pokemon[] = useMemo(() => data?.pokemon || {}, [data]);

  return {
    pokemon,
    ...queryRes,
  };
};
