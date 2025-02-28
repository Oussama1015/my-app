import Image from "next/image";
import Accueil from "./acceuil/Accueil";
import Header from "./acceuil/Header";
import Link from "next/link";
import Footer from "./acceuil/Footer";

export default function Home() {
  return (
    <>
        <Header />
        <div>
      <h1>Welcome to the Main Page</h1>
      <Link href="/home">Go to Home Page</Link>
    </div>
        <Accueil />
        <Footer />
        </>
  );
}
