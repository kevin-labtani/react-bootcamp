import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Index Page!!</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            {/* as prop will only change route on client side, client won't actually be able to navigate tot his route by typing it in the browser */}
            <Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ctx is context
Index.getInitialProps = async ctx => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return { posts: data };
};

export default Index;

// https://jsonplaceholder.typicode.com/posts
