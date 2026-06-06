// Essa interface é o "molde" que mapeia o que vamos receber da internet (PokeAPI)
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

// Essa interface é o nosso "Pokémon Resumido", é o formato simplificado que o professor pediu para salvarmos no nosso catálogo local
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}