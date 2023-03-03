import React from "react";
import Article from "../../components/wrapper/Article";

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
          <pre className="codebox">
            .then(data => {"{"}
            <pre className="tab">
              const meetups = [];
              <br />
              <br />
              for (const key in data) {"{"}
              <pre className="tab">
                const meetup = {"{"}
                <pre className="tab">
                  id: key,
                  <br />
                  ...data[key]
                </pre>
                {"}"}
                <br />
                meetups.push(meetup);
              </pre>
              {"}"}
              <br />
              <br />
              setIsLoading(false);
              <br />
              setLoadedMeetups(meetups);
            </pre>
            {"}"})
          </pre>
        </div>
      </Article>
    </>
  );
}
