import React from "react";
import Article from "../../components/wrappers/Article";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Tab from "../../components/codeWrappers/boxes/Tab"


export default function FetchGetKey() {
  return (
    <>
      <Article
        title="Fetch GET Key"
        tagline="Convert data object into array format"
      >
        <div>
          <h3>Key</h3>
          <p>
            Why is it still not working? When we fetch data from firebase, we
            don't get an array. instead we get an object with cryptic generated
            ids act as proper keys. If we have 2 meetups for example, when we
            send get request to our api, we get back an object with 2
            properties, with the property names (shown under the folder name).
            Nested inside these properties is the object with meetup data.
          </p>

          <p>
            Meanwhile we are using array map method in our component. Therefore
            first we need to convert the retrieved data into array.
          </p>
          <Codebox>
            .then(data => {"{"}
            <Tab>
              const meetups = [];
              <br />
              <br />
              for (const key in data) {"{"}
              <Tab>
                const meetup = {"{"}
                <Tab>
                  id: key,
                  <br />
                  ...data[key]
                </Tab>
                {"}"}
                <br />
                meetups.push(meetup);
              </Tab>
              {"}"}
              <br />
              <br />
              setIsLoading(false);
              <br />
              setLoadedMeetups(meetups);
            </Tab>
            {"}"})
          </Codebox>
        </div>
      </Article>
    </>
  );
}
