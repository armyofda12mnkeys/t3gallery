import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

/*
const mockUrls = [
  "https://hzl0obujh5.ufs.sh/f/cTbLetPhDXg7Mwa6r6btpLozKRTvJxh032Ey4kXOY9n1ZmBs",
  "https://hzl0obujh5.ufs.sh/f/cTbLetPhDXg7424nMuEMxvVDB43eUmgN6roFCsfY8H9iqkzj",
  "https://hzl0obujh5.ufs.sh/f/cTbLetPhDXg7bdAbkV4aNF9rRW6wI8UEfzhY4s1eQ2CcqvDL",
  "https://hzl0obujh5.ufs.sh/f/cTbLetPhDXg7cI0n6EPhDXg7l5MduZoFtn6B24YGOK0NiVaE",
];
const mockImages = mockUrls.map( (url, index) => ({
    id: index+1,
    url,
  })
); 
*/
async function Images (){
  const images = await db.query.images.findMany({
    orderBy: (model,{desc}) => desc(model.id)
  });
  console.log(images);

  return (
    <div className="flex flex-wrap gap-4">
    {[...images, ...images, ...images].map( (image, index) => (
      <div key={image.id+"-"+index} className="w-48 flex flex-col">
        <img src={image.url} />
        <div>{image.name}</div>
      </div>
      )
    )}
   </div>
);

}


export default async function HomePage() {

  
  return (
    <main className="">
      <SignedOut>
        Please sign in above
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
