import type { FavoritePokemon } from "@interfaces/pokemon-favorite";

export const getPokemonImage = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
export const getPokemonCry = (id: number) => `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;

export const getFavoritePokemons = (): FavoritePokemon[] => {
    return JSON.parse(localStorage.getItem("favorite-pokemons") ?? "[]")
        .sort((a: FavoritePokemon, b: FavoritePokemon) => a.id > b.id ? 1 : -1);
}

export const toggleFavoritePokemon = ({ name, id }: FavoritePokemon) => {
    const favoritePokemons = getFavoritePokemons();
    const idx = favoritePokemons.findIndex((i) => i.id === id);
    const isFavorite = idx > -1;

    if (isFavorite) {
        favoritePokemons.splice(idx, 1);
    } else {
        favoritePokemons.push({ name, id });
    }

    localStorage.setItem("favorite-pokemons", JSON.stringify(favoritePokemons));
}