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

export function getTypeColor(type?: string): string | undefined {
  switch (type) {
    case "Normal": return "#A8A878";
    case "Fire": return "#F08030";
    case "Water": return "#6890F0";
    case "Electric": return "#F8D030";
    case "Grass": return "#78C850";
    case "Ice": return "#98D8D8";
    case "Fighting": return "#C03028";
    case "Poison": return "#A040A0";
    case "Ground": return "#E0C068";
    case "Flying": return "#A890F0";
    case "Psychic": return "#F85888";
    case "Bug": return "#A8B820";
    case "Rock": return "#B8A038";
    case "Ghost": return "#705898";
    case "Dragon": return "#7038F8";
    case "Dark": return "#705848";
    case "Steel": return "#B8B8D0";
    default: return "";
  }
}
