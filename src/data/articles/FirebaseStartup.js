import React from "react";
import Article from "../../components/wrappers/Article";
import ANew from "../../components/wrappers/ANew";

export default function FirebaseStartup() {
  return (
    <Article title="Starting a Firebase project">
      <div>
        <h3>Starting a project</h3>
        <ul>
          <li>
            Go to{" "}
            <ANew href="https://firebase.google.com">firebase.google.com</ANew>,
            log in with google account
          </li>
          <li>Add a project, disable google analytics for now. Create</li>
        </ul>
      </div>

      <div>
        <h3>Creating database</h3>
        <ul>
          <li>
            Build > Realtime Database
            <ul>
              <li>Location is fine</li>
              <li>Choose "Start in test mode", otherwise can't send request</li>
            </ul>
          </li>
          <li>This will set up a database and an api to which we can send request to.
            <ul>
                <li>Behind the scene on vfirebase server, the request will be parsed. Depending on which kind of request is sent, data attached to the request will be extracted and stored to the database automatically.</li>
                <li>It will look like as if we send data directly to a database. But we actually sending request to that firebase api, that then behind the scene stores them in a database</li>
            </ul>
          </li>

        </ul>
      </div>
    </Article>
  );
}
