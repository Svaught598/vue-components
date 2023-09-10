export const getPokemonSpriteUrlFromName = (pokemonName: string) =>
  `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${pokemonName.toLowerCase()}.png`

export const getPokemonImageUrlFromDexNumber = (pokedexNumber: Number) =>
  `https://github.com/HybridShivam/Pokemon/blob/master/assets/thumbnails-compressed/${pokedexNumber.toString().padStart(3, '0')}.png?raw=true`

export const getPokemonImageHqUrlFromDexNumber = (pokedexNumber: Number) =>
  `https://github.com/HybridShivam/Pokemon/blob/master/assets/thumbnails-compressed/${pokedexNumber.toString().padStart(3, '0')}.png?raw=true`

export class PokemonStatsCalculation {
  hp: Number = 0
  attack: Number = 0
  defense: Number = 0
  specialAttack: Number = 0
  specialDefense: Number = 0
}

export function getPokemonStats(mapper: any, pokemon: any): PokemonStatsCalculation {
  return {
    hp: 12,
    attack: 32,
    defense: 55,
    specialAttack: 1,
    specialDefense: 3
  }
}

