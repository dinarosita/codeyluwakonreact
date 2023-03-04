import React from "react";
import Article from "../../components/wrappers/Article";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Tab from "../../components/codeWrappers/boxes/Tab"

export default function FetchGetCode() {
  return (
    <Article
      title="Fetch GET code"
      tagline="Code for Fetching and displaying data from database"
    >
      <Codebox>
        function AllMeetupPage(){"{"}
        <Tab>
          const [isLoading, setIsLoading] = useState(true);
          <br />
          const [loadedMeetups, setLoadedMeetups] = useState([]);
          <br />
          <br />
          useEffect(() => {"{"}
          <Tab>
            setIsLoading(true);
            <br />
            fetch(
            <Tab>
              "https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json"
            </Tab>
            ).then(response => {"{"}
            <Tab>return response.json();</Tab>
            {"}"}).then(data => {"{"}
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
          </Tab>
          {"}"}, [])
          <br />
          <br />
          if (isLoading) {"{"}
          <Tab>&lt;section&gt;Loading...&lt;/section&gt;</Tab>
          {"}"}
          <br />
          <br />
          return (
          <Tab>
            &lt;section&gt;
            <Tab>
              &lt;h1&gt;All Meetup Page&lt;/h1&gt;
              <br />
              &lt;MeetupList meetups={"{"}loadedMeetups{"}"} /&gt;
            </Tab>
            &lt;/section&gt;
          </Tab>
          )
        </Tab>
        {"}"}
      </Codebox>
    </Article>
  );
}
