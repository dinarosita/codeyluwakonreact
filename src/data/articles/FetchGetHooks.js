import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";
import Codebox from "../../components/codeWrappers/boxes/Codebox";
import Tab from "../../components/codeWrappers/boxes/Tab";



export default function FetchGetHooks() {
  return (
    <>
      <Article
        title="Fetch GET Hooks"
        tagline="Using hooks to display data retrieved from database"
      >
        <div>
          <h3>UseState</h3>

          <ul>
            <li>
              For loading status
              <br />
              Hook useState facilitates changing states for screen display.
              Before the promise fulfilled, we can display something like "Still
              loading...". We can include a function to change the state in the
              final <code>then</code> block. Which will be run once the data is
              received and converted to regular JavaScript. The loading message
              will be replaced with data display.
            </li>
            <li>
              for retrieved data
              <br />
              We still need to have another state, and this one is for the data
              retrieved from the database itself. We can see it as, at the
              beginning the data is empty, but we keep a placeholder. Upon data
              retrieval, this placeholder will house the data.
            </li>
          </ul>
          <Codebox>
            const [isLoading, setIsLoading] = useState(true);
            <br />
            const [loadedMeetups, setLoadedMeetups] = useState([]);
          </Codebox>

          <Codebox>
            .then(data => {"{"}
            <Tab>
              setIsLoading(false);
              <br />
              setLoadedMeetups(data);
            </Tab>
            {"}"})
          </Codebox>

          <Codebox>
            if (isLoading) {"{"}
            <Tab>&lt;section&gt;Loading...&lt;/section&gt;</Tab>
            {"}"}
          </Codebox>
        </div>
        <div>
          <h3>UseEffect to prevent infinite loop</h3>
          <p>
            Of course we can't just use this state as is, as it will create an
            infinite route: the fetching gurarantee this state to be updated,
            and update to a state causing rerendering of the function component
            which mean data fetching happens again. and so on.
          </p>
          <h4>Syntax refresher</h4>
          <Formula>useEffect(function, dependencies)</Formula>
          <p>Dependencies:</p>
          <ul>
            <li>
              Dependency not specified, second argument is omitted: Effect
              function will run every rendering. It will be the same with
              runnning the code without useEffect at all.
            </li>
            <li>
              [dependencies]: only running when any of the dependency's value is
              changed.
            </li>
            <li>
              Empty array [], meaning no dependency: It will only execute when
              the function is rendered for the first time.
            </li>
          </ul>
          <p>
            In reality, there's a simple rule: add all external values our
            effect function relies on.{" "}
          </p>
          <h4>Dependency in our case?</h4>
          <p>
            Technically setIsLoading and setLoadedMeetups are external values.
            but react guarantees set state value will not change, so we don't
            need to list them.
          </p>
          <p>
            Since there's no external value, put nothing in the dependency
            array. Leave the array empty.
          </p>
          <h4>So, how are we using our useEffect?</h4>
          <p>
            We already have a handy data state that was set to an empty array as
            initial state. We can wrapped the whole fetch function inside it,
            putting that empty array as the condition, it will only fired once,
            in the beginning. Then when the data resolved, it will be displayed,
            and the change in state doesn't trigger subsequent fetching.
          </p>
          <Codebox>
            useEffect(() => {"{"}
            <Tab>
              setIsLoaded(true);
              <br />
              fetch().then().then()
            </Tab>
            {"}"}, [])
          </Codebox>
        </div>
      </Article>
    </>
  );
}
