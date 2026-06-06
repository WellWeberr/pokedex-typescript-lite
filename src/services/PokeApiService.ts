import { PokemonApiResponse, PokemonResumo } from '../models/Pokemon.js';

export class PokeApiService {
  // Guarda o endereço principal da API
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  // Função assíncrona que busca o Pokémon (RF04)
  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    // Limpa a palavra digitada (tira espaços e joga pra minúsculo) para evitar erros
    const busca = nomeOuId.toLowerCase().trim();

    try {
      // Faz a requisição na internet usando o fetch
      const resposta = await fetch(`${this.baseUrl}/${busca}`);

      // Se a resposta não for "ok", significa que o Pokémon não existe (RF05)
      if (!resposta.ok) {
        console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
        return null;
      }

      // Converte a resposta da internet para JSON usando a nossa interface
      const dados: PokemonApiResponse = await resposta.json();

      // Transforma a resposta gigante no nosso modelo simplificado (RF06)
      const pokemonFormatado: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map(item => item.type.name), // Aqui usamos o método de array map() (RF11)
        altura: dados.height,
        peso: dados.weight
      };

      console.log(`[OK] Pokémon encontrado na internet: ${pokemonFormatado.nome}`);
      return pokemonFormatado;

    } catch (erro) {
      // Se a internet cair ou der pau na requisição
      console.log("[ERRO] Não foi possível buscar o Pokémon devido a uma falha na rede.");
      return null;
    }
  }
}