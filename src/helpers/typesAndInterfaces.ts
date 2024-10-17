 
export type Pokemon = {
    id: string;
    name: string;
    image: string;
    number: string;
    types: Array<string>;
    weight: MinMaxDetails;
    height: MinMaxDetails;
    classification: string;
    resistant: Array<string>;
    weaknesses: Array<string>;
  };

export interface MinMaxDetails {
    minimum: string;
    maximum: string;
};

export {};
