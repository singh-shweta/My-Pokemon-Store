import {Pokemon} from './typesAndInterfaces';

export const getDetailedIntro = ( pokemon: Pokemon ) => {
    const {name, classification, height, weight} = pokemon;
    return `
    ${name} is classified as a ${classification} Pokemon.
    Its height ranges from ${height?.minimum} to ${height?.maximum} and weighs between
    ${weight?.minimum} and ${weight?.maximum}.
    `
  
};