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

export const getDetailedIntro = ( pokemon: Pokemon ) => {
    const {name, classification, height, weight} = pokemon;
    return `
    ${name} is classified as a ${classification} Pokemon.
    Its height ranges from ${height?.minimum} to ${height?.maximum} and weighs between
    ${weight?.minimum} and ${weight?.maximum}.
    `
  
};