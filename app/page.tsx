import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { auth } from "@/auth";
import shotimeLogo from "@/public/images/ShotimeLogo.jpg";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <Image src={shotimeLogo} alt="Shotime Logo" />
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users"> Users </Link>
      <ProductCard />
    </main>
  );
}
