import Link from "next/link";

export default async function getCharacter(){
    const domain = `https://rickandmortyapi.com/api/character`;
    const response = await fetch(domain);
    const dataList = await response.json();
    const charList = dataList.results;
    return(
        <div>
            {charList.map(char => (
              <Link href={`/characters/${char.id}`}>{char.name}<br></br></Link>  
            ))}
        </div>
    )
}
