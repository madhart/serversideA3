import Character from "../../components/character";
import Image from "next/image";

export default async function characterDetail({ params }) {
    const awaitedParams = await params;
    const domain = `http://localhost:3000/api/characters/${awaitedParams.id}`;
    const response = await fetch(domain);
    const character = await response.json();
    console.log("CHARACTER:", character);
     return(
        <Character
            name={character.name}
            species={character.species}
            image={character.image}
        />
     )
}