import { IPokemonInParty } from "@gamehook-io/bindings/GB/PokemonCrystal"

export const getPokemonSpriteUrlFromName = (pokemonName: string) =>
  `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${pokemonName.toLowerCase()}.png`

export const getPokemonImageUrlFromDexNumber = (pokedexNumber: Number) =>
  `https://github.com/HybridShivam/Pokemon/blob/master/assets/thumbnails-compressed/${pokedexNumber.toString().padStart(3, '0')}.png?raw=true`

export const getPokemonImageHqUrlFromDexNumber = (pokedexNumber: Number) =>
  `https://github.com/HybridShivam/Pokemon/blob/master/assets/thumbnails-compressed/${pokedexNumber.toString().padStart(3, '0')}.png?raw=true`

export class PokemonStatsCalculation {
  hp: Number = 0
  maxHp: Number = 0
  attack: Number = 0
  defense: Number = 0
  specialAttack: Number = 0
  specialDefense: Number = 0
  speed: Number = 0
}

export function getPokemonStats(mapper: any, pokemon: IPokemonInParty): PokemonStatsCalculation {
  return {
    hp: pokemon.stats.hp.value,
    maxHp: pokemon.stats.maxHp.value,
    attack: pokemon.stats.attack.value,
    defense: pokemon.stats.defense.value,
    specialAttack: pokemon.stats.specialAttack.value,
    specialDefense: pokemon.stats.specialDefense.value,
    speed: pokemon.stats.speed.value
  }
}
