import React from "react";
import Article from "../../components/wrapper/Article";

export default function FirebaseIntro() {
  return (
    <Article
      title="Firebase as backend"
    >
      <div>
        <p>
          To work with database in the server side, we need a backend api to
          where we can send our requests. React's backend doesn't send back
          html. It expects data in certain format, typically json format, and
          returns data in the same format.
        </p>
        <p>
          In typical React backend, we will have a couple of urls to where we
          can send requests. Depending which urls we send to, different things
          can happen.
        </p>
        <p>
          We don't connect a frontend app like React and Angular to a database
          itself. We don't want to do that because of security. All the code
          written in React is exposed to the page visitors. When a visitor open
          the page source, all the React code is there. Database credential will
          be there as well.
        </p>
        <p>
          That's why instead we need a backend api and a backend server, to
          where we can send request. Than it's that server, which on the server
          connects to a database and stores data in database. At this moment we are not going to write our own api. We are going to use Firebase.
        </p>
      </div>
    </Article>
  );
}
