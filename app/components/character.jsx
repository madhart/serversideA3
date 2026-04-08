import Image from "next/image";

export default async function Character({name, species, image}) {
     return(
        <div>
            <h1>{name}</h1>
            <h2>{species}</h2>
            {image && image!=="" && (
            <Image 
                src={image}
                width={500} 
                height={500} 
           />
            )}
        </div>
     )
}