import type { FavoritePokemon } from "@interfaces/pokemon-favorite";
import { createSignal, Show, type Component } from "solid-js";
import { getPokemonImage, toggleFavoritePokemon } from "src/shared/utils";

interface Props {
    pokemon: FavoritePokemon;
}
export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
    const { id, name } = pokemon;

    const [isVisible, setIsVisible] = createSignal(true);

    const imageSrc = getPokemonImage(id);

    const deleteFavorite = () => {
        toggleFavoritePokemon({ id, name });
        setIsVisible(false);
    };

    return (
        <Show when={isVisible()}>
            <div class="rounded border flex flex-col justify-center items-center p-2">
                <a href={`/pokemons/${name}`} class="flex flex-col justify-center items-center">
                    <img src={imageSrc} alt={name} class="w-22 h-22" />
                    <span class="capitalize">
                        #{id} {name}
                    </span>
                </a>

                <button onClick={deleteFavorite} class="text-red-400">
                    Delete
                </button>
            </div>
        </Show>
    );
};
