const EmailList = ({ emails, setSelectedEmail }) => {
  return (
    <>
      {emails.map((email) => (
        <div
          className="email-item"
          onClick={() => setSelectedEmail(email)}
          key={email.id}
        >
          <div className="from">{email.from}</div>
        </div>
      ))}
    </>
  );
};

export default EmailList;
