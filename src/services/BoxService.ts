import { PokemonResumo } from '../models/Pokemon.js';

export class CatalogoPokemon {
  // Esse é o nosso array privado onde os Pokémons ficarão guardados na memória (RF07 e RF12)
  private pokemons: PokemonResumo[] = [];

  // Método para adicionar um Pokémon no catálogo (RF08)
  adicionar(pokemon: PokemonResumo): void {
    // Usamos o método 'some' do array para checar se o ID já existe (RF11)
    const jaExiste = this.pokemons.some(item => item.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  // Método para listar tudo que temos salvo (RF09)
  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    console.log("\n--- Catálogo Atual ---");
    // Usamos o método 'forEach' do array para percorrer e imprimir cada Pokémon (RF11)
    this.pokemons.forEach(pokemon => {
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
      );
    });
    console.log("----------------------\n");
  }

  // Método para remover um Pokémon informando o ID dele (RF10)
  remover(id: number): void {
    // Verifica primeiro se o Pokémon existe antes de tentar remover
    const existe = this.pokemons.some(pokemon => pokemon.id === id);

    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    // Usamos o método 'filter' do array para manter apenas os Pokémons que têm ID diferente do que queremos remover (RF11)
    this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
    console.log(`[OK] Pokémon removido do catálogo.`);
  }
}