import Link from "next/link";

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


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map( (image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
          )
        )}
      </div>
    </main>
  );
}
