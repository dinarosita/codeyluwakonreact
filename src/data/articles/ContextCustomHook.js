import React from "react";
import Article from "../../components/wrappers/Article";

export default function ContextCustomHook() {
  return (
    <Article
      title="Context Custom Hook"
      tagline="Simplify useContext even more"
    >
      <div>
        <h3>Context Provider</h3>
        <p>
          Through formation of context provider, with the use of context custom
          hooks instead of regular useContext in the children component, we can
          super simplify the usage of useContext.
        </p>
      </div>
    </Article>
  );
}
