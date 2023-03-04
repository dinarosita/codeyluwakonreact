import React from "react";
import Codebox from "../../components/codeWrappers/boxes/Codebox";
import Tab from "../../components/codeWrappers/boxes/Tab";

export default function FetchThenUsehistoryCode() {
  return (
    <Codebox>
      function NewMeetupPage() {"{"}
      <Tab>
        <strong>const history = useHistory()</strong>;<br />
        <br />
        function addMeetupHandler(meetupData) {"{"}
        <Tab>
          <em>
            <b>fetch</b>(<br />
            'https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json',
            <br />
            {"{"}
            <Tab>
              method: 'POST',
              <br />
              body: JSON.stringify(meetupData),
              <br />
              headers: {"{"}
              <Tab>'Content-Type': 'application/json'</Tab>
              {"}"}
            </Tab>
            {"}"}
            ).<b>then</b>(() => {"{"}
            <Tab>
              <strong>history.replace("/")</strong>
            </Tab>
            {"}"})
          </em>
        </Tab>
        {"}"}
        <br />
        return (...)
      </Tab>
      {"}"}
    </Codebox>
  );
}
