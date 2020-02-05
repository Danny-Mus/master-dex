import { InternalType } from './Type';

export default interface Pokemon {
    forms: [];
    abilities: [];
    stats: [];
    name: string;
    weight: number;
    moves: [];
    sprites: object;
    held_items: [];
    location_area_encounters: string;
    height: number;
    is_default: boolean;
    species: object;
    id: number;
    order: number;
    game_indices: [];
    base_experience: number;
    types: TypeSlot[];
    is_caught: boolean;
}

interface TypeSlot {
    slot: number,
    type: InternalType,
}
