import Character from "../../components/character";
import Image from "next/image";

export default async function characterDetail( props ) {
    const {id} = await props.params;
    const domain = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(domain);
    const character = await response.json();
     return(
        <Character
            name={character.name}
            species={character.species}
            image={character.image}
        />
     )
}