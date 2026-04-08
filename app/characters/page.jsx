import Link from "next/link";

export default async function getCharacter(){
    const domain = `http://localhost:3000/api/characters`;
    const response = await fetch(domain);
    const dataList = await response.json();
    const charList = dataList;
    return(
        <div>
            {charList.map(char => (
              <Link href={`/characters/${char.id}`}>{char.name}<br></br></Link>  
            ))}
        </div>
    )
}
