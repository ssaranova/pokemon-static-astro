import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";
import { getFavoritePokemons } from "src/shared/utils";

export const FavoritePokemons = () => {
    const [data, setData] = createSignal(getFavoritePokemons());
    return (
        <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-5">
            <For each={data()}>
                { item => <FavoritePokemonCard pokemon={item} />}
            </For>
        </div>
    );
};
