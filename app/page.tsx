import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { auth } from "@/auth";
import shotimeLogo from "@/public/images/ShotimeLogo.jpg";
import { Metadata } from "next";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <Image src={shotimeLogo} alt="Shotime Logo" width={300} height={180} />
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users"> Users </Link>
      <ProductCard />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Shotime Cards",
};
