import { PokeApiService } from './services/PokeApiService.js';
import { CatalogoPokemon } from './services/BoxService.js';

async function main() {
  // Criamos as instâncias das nossas classes
  const pokeApi = new PokeApiService();
  const catalogo = new CatalogoPokemon();

  console.log("=== Iniciando Pokédex TypeScript Lite ===\n");

  // 1. Busca Válida e Adição (RF13)
  const pikachu = await pokeApi.buscarPokemon("pikachu");
  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
  }

  // 2. Segunda Busca Válida (testando por ID)
  const charmander = await pokeApi.buscarPokemon("4");
  if (charmander !== null) {
    catalogo.adicionar(charmander);
  }

  // 3. Testando Duplicidade (tentando adicionar o Pikachu de novo)
  const pikachuDuplicado = await pokeApi.buscarPokemon("pikachu");
  if (pikachuDuplicado !== null) {
    catalogo.adicionar(pikachuDuplicado);
  }

  // 4. Testando Busca Inválida
  await pokeApi.buscarPokemon("pokemon-inexistente");

  // 5. Listando o estado atual do catálogo
  catalogo.listar();

  // 6. Testando Remoção (Removendo o Pikachu pelo ID 25)
  catalogo.remover(25);

  // 7. Listando novamente para confirmar a remoção
  catalogo.listar();
}

// Essa linha é quem dá a ordem para o sistema começar a rodar
main();