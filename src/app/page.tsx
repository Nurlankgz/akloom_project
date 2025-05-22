// import Image from "next/image";
// import styles from "./page.module.css";

import Image from "next/image";

export default async function HomePage() {
  // const products = await fetch("http://localhost:1337/api/products", {
  //   cache: "no-store",
  // });
  return (
    <>
      <div>
        <Image
          src="/header-images/Frame57.svg"
          width={1440}
          height={600}
          alt="photo"
        />
      </div>
      <h1>HOME</h1>
    </>
  );
}
