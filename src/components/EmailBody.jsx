const EmailBody = ({ selectedEmail }) => {
  return (
    <div className="email-body">
      <div className="from">From: {selectedEmail.from}</div>
      <div className="message">Message: {selectedEmail.message}</div>
    </div>
  );
};

export default EmailBody;
