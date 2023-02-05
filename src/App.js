import { useState } from 'react';
import FeedbackForm from './FeedbackForm.jsx';
import ThankYou from './ThankYou.jsx';

function App() {
  const [submit, setSubmit] = useState(null);
  return (
    <>
      {!submit && <FeedbackForm setSubmit={setSubmit} />}
      {submit && <ThankYou submit={submit} />}
    </>
  );
}

export default App;
