import React from "react";
import Article from "../../components/wrappers/Article";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Imp from "../../components/codeWrappers/spans/Imp"


export default function FetchGetMethod() {
  return (
    <>
      <Article
        title="Fetch GET"
        tagline="Sending HTTP request for getting data from database"
      >
        <div>
          <p>
            <code>GET</code> is the default HTTP request method, therefore the{" "}
            <code>fetch()</code> doesn't need a second argument at all.
          </p>
          <Codebox>
            <Imp>fetch</Imp>
            ('https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json')
          </Codebox>
        </div>
      </Article>
    </>
  );
}
