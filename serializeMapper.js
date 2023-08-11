import { MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import { writeFileSync } from 'fs'

const mapper = new MapperClient()
await mapper.connect()

function removeGetters(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => removeGetters(item));
    }

    const newObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !key.startsWith('_')) {
            const value = obj[key];
            debugger;

            if (typeof value === 'function' && Object.getOwnPropertyDescriptor(obj, key)?.get) {
                debugger;
                newObj[key] = value();
            } else {
                newObj[key] = removeGetters(value);
            }
        }
    }

    return newObj;
}

const newObject = removeGetters({ metadata: mapper.metadata, properties: mapper.properties })
await writeFileSync('./data/CrystalMapperClientTestData.json', JSON.stringify(newObject))
console.info('File written.')

process.exit()