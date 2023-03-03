import React from "react";
import Article from "../../components/wrapper/Article";

export default function FetchGetCode() {
  return (
    <Article
      title="Fetch GET code"
      tagline="Code for Fetching and displaying data from database"
    >
      <pre className="codebox">
        function AllMeetupPage(){"{"}
        <pre className="tab">
          const [isLoading, setIsLoading] = useState(true);
          <br />
          const [loadedMeetups, setLoadedMeetups] = useState([]);
          <br />
          <br />
          useEffect(() => {"{"}
          <pre className="tab">
            setIsLoading(true);
            <br />
            fetch(
            <pre className="tab">
              "https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json"
            </pre>
            ).then(response => {"{"}
            <pre className="tab">return response.json();</pre>
            {"}"}).then(data => {"{"}
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
          {"}"}, [])
          <br />
          <br />
          if (isLoading) {"{"}
          <pre className="tab">&lt;section&gt;Loading...&lt;/section&gt;</pre>
          {"}"}
          <br />
          <br />
          return (
          <pre className="tab">
            &lt;section&gt;
            <pre className="tab">
              &lt;h1&gt;All Meetup Page&lt;/h1&gt;
              <br />
              &lt;MeetupList meetups={"{"}loadedMeetups{"}"} /&gt;
            </pre>
            &lt;/section&gt;
          </pre>
          )
        </pre>
        {"}"}
      </pre>
    </Article>
  );
}
