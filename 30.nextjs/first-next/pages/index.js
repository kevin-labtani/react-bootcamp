import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Index Page!!</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link href={`/post?id=${p.id}`}><a>{p.title}</a></Link>
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
