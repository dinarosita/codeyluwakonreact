import React from "react";
import Article from "../../components/wrappers/Article";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Tab from "../../components/codeWrappers/boxes/Tab"
import Var from "../../components/codeWrappers/spans/Var"
import Attn from "../../components/codeWrappers/spans/Attn"
import Block from "../../components/codeWrappers/spans/Block"

export default function FetchGetThen() {
  return (
    <>
      <Article
        title="Fetch GET Then Then"
        tagline="Retrieving returned database data"
      >
        <div>
          <p>
            A <code>GET</code> request returns a promise which resolve to actual
            response object sometimes in the future. This response containing
            the data in <code>json</code> format. We first need to convert it to
            regular JavaScript format. It can be done by response's{" "}
            <code>.json()</code> method that is also returning a promise. So we
            need to include this method as a return, and ned to use another{" "}
            <code>then</code> to catch the result.
          </p>
          <Codebox>
            <Attn>fetch</Attn>(
            <Tab>
              'https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json'
            </Tab>
            ).<Attn>then</Attn>(<Var>response</Var> => {"{"}
            <Tab>
              return <Var>response</Var>.json();
            </Tab>
            {"}"}).<Attn>then</Attn>(<Var>data</Var> => {"{"}
            <Tab>
              <Block>
                /* Code for <Var>data</Var> retrieved */
              </Block>
            </Tab>
            {"}"});
          </Codebox>
        </div>
      </Article>
    </>
  );
}
