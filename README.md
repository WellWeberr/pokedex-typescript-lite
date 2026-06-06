# Pokédex TypeScript Lite

## Sobre o projeto
O Pokédex TypeScript Lite é uma aplicação em Node.js com TypeScript que consulta dados na PokeAPI e organiza resultados em um catálogo local. O projeto aplica arquitetura em camadas e tipagem forte.

## Objetivo
Praticar Node.js, TypeScript, consumo de APIs (fetch), métodos de array e Programação Orientada a Objetos.

## Tecnologias utilizadas
- Node.js
- TypeScript
- TSX
- PokeAPI

## Como instalar e executar

1. Clone o repositório:
   git clone [SEU_LINK_DO_GITHUB_AQUI]

2. Acesse a pasta:
   cd pokedex-typescript-lite

3. Instale as dependências:
   npm install

4. Execute o projeto:
   npm run dev

## Exemplos de execução

**Busca válida e Adição:**
[OK] Pokémon encontrado na internet: pikachu
[OK] pikachu adicionado ao catálogo.

**Busca inválida:**
[ERRO] Pokémon não encontrado: pokemon-inexistente

**Duplicidade:**
[AVISO] pikachu já está no catálogo.

**Listagem e Remoção:**
--- Catálogo Atual ---
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
----------------------
[OK] Pokémon removido do catálogo.

## Conceitos aplicados
- **TypeScript:** Interfaces criadas em `src/models/Pokemon.ts` para tipar a resposta da API e o formato do catálogo.
- **Fetch e async/await:** Utilizados em `PokeApiService.ts` para buscar dados assincronamente.
- **Tratamento de erros:** Bloco `try/catch` e validação `!resposta.ok` impedem que o sistema quebre se o Pokémon não existir.
- **Métodos de array:** Uso de `.map()` para formatar tipos, `.some()` para checar duplicidades/existência, `.forEach()` para listagem e `.filter()` para remoção.
- **Classe CatalogoPokemon:** Encapsula um array privado e expõe métodos públicos de controle, garantindo a integridade dos dados.

## Branches utilizadas
- main
- develop
- feat/pokedex