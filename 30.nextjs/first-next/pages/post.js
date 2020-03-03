import { withRouter } from "next/router";

const Post = withRouter(props => {
  return <h1>You are looking at post # {props.router.query.id} </h1>;
});

// alternative to withrouter to get the query string
// const Post = ({ id }) => {
//   return <h1>You are looking at post # {id}</h1>;
// };
// Post.getInitialProps = async ({ query }) => {
//   return query;
// };

export default Post;
