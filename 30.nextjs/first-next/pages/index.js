import Link from "next/link";
import Navbar from "../components/navbar";

const Index = () => {
  console.log("running inside index component"); //we see this message in the server console and in our browser console
  return (
    <div>
      <Navbar />
      {/* link has rendering happening on client side only */}
      {/* can put what we want inside link as long as it can take an oClick method (auto added by next) */}
      <Link href="/about">
        <a>About page</a>
      </Link>
      <Link href="/contact">
        <button>Contact page</button>
      </Link>
      <h1>Index Page</h1>
    </div>
  );
};

export default Index;
