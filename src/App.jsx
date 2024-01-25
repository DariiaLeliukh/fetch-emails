import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/css/app.css";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";

function App() {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
      );
      const people = await response.json();
      setEmails(people);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 email-list">
          {emails.length > 0 && (
            <>
              <EmailList emails={emails} setSelectedEmail={setSelectedEmail} />
            </>
          )}
        </div>
        <div className="col-8">
          {selectedEmail !== null && (
            <EmailBody selectedEmail={selectedEmail} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
