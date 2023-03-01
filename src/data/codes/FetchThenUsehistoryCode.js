import React from "react";
import classes from "./Codes.module.css"

export default function FetchThenUsehistoryCode() {
  return <pre className={classes.codebox}>
    function NewMeetupPage() {"{"}
    <pre className="tab">
        <strong>const history = useHistory()</strong>;<br/><br/>
        function addMeetupHandler(meetupData) {"{"}
        <pre className="tab">
            <em><b>fetch</b>(<br/>
                'https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json',<br/>
                {"{"}
                <pre className="tab">
                    method: 'POST',<br/>
                    body: JSON.stringify(meetupData),<br/>
                    headers: {"{"}
                    <pre className="tab">
                        'Content-Type': 'application/json'
                    </pre>
                    {"}"}
                </pre>               
                {"}"}
            ).<b>then</b>(() => {"{"}
            <pre className="tab">
                <strong>history.replace("/")</strong>
            </pre>
            {"}"})</em>
        </pre>
        {"}"}<br/>
        return (...)
    </pre>
    {"}"}
  </pre>;
}
