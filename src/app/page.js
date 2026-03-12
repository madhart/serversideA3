import Image from "next/image";
import img from "../../assets/rickAndMortyA3.jpg";

export default function Home() {

  return (
    <view>
      <h1>Hi! Welcome to my (static) page</h1>
      <Image 
        src={img} 
        width={500} 
        height={500} 
        alt="a photo of characters Rick and Morty"
        loading="eager"
      />
    </view>
  );
}
