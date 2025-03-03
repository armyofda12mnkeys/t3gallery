import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

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


export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post)=>(
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map( (image, index) => (
          <div key={image.id+"-"+index} className="w-48">
            <img src={image.url} />
          </div>
          )
        )}
      </div>
    </main>
  );
}
