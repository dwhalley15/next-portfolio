import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <section className="not-found">
        <div className="image-container">
          <div className="purple-orb"></div>
          <Image className="main-image" src="https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png" alt="Light Bulb Image" width={256} height={256} />
        </div>
        <div className="text-container">
          <h1>Page <span>Not Found</span></h1>
          <p>This page is not supported by this site.</p>
          <Link href="/" className="btn">
            {"Go back to Home Page"}
          </Link>
        </div>
      </section>
    </>
  );
}
