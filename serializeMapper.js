import { PokemonYellowMapperClient } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { writeFileSync } from 'fs'

const mapper = new PokemonYellowMapperClient()
await mapper.connect()

const dataJson = JSON.stringify(mapper, function (k, v) {
  if (k === 'properties') return undefined;
  if (k.startsWith('_')) return undefined;
  else { return v; }
}, 2)

await writeFileSync('./src/data/YellowMapperClientTestData.json', dataJson)