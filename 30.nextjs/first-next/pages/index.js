import React, { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // console.log("fetching your data in constructor");
    // seen the log both on the server and client side, the issue is we'd fetch data on both server and client side if wer fetched data from api here!
  }

  componentDidMount() {
    // console.log("fetching your data in CDM");
    // only see clg client side, not on server side!
    // this method only run on client side!!
    // so we can't fetch data here if we want to render server side
  }

  static async getInitialProps(ctx) {
    console.log("fetching you data in getInitalProps");
    return {};
  }

  render() {
    return (
      <div>
        <h1>Index Page!!</h1>
      </div>
    );
  }
}

// import Link from "next/link";
// import Navbar from "../components/navbar";

// const Index = () => {
//   console.log("running inside index component"); //we see this message in the server console and in our browser console
//   return (
//     <div>
//       {/* <Navbar /> */}
//       {/* link has rendering happening on client side only */}
//       {/* can put what we want inside link as long as it can take an oClick method (auto added by next) */}
//       <Link href="/about">
//         <a>About page</a>
//       </Link>
//       <Link href="/contact">
//         <button>Contact page</button>
//       </Link>
//       <h1>Index Page</h1>
//     </div>
//   );
// };
//
// export default Index;
