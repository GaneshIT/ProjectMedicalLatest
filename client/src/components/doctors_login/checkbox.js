import {useState} from 'react';


export default function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = event => {
    if (event.target.checked) {
        setDisabled(!disabled);
    } else {
        setDisabled(disabled);
    }
    setIsSubscribed(current => !current);
  };
  

  return (
    <div>
      <label htmlFor="subscribe">
        <input
          type="checkbox"
          
          
          name="subscribe"
        />
        Subscribe
      </label>
      <label htmlFor="subscribe">
        <input
          type="checkbox"
          value={isSubscribed}
          onChange={handleChange}
          id="subscribe"
          name="unsubscribe"
        />
        Subscribe
      </label>

      <hr />

      <button disabled={!isSubscribed}>Proceed</button>

      {isSubscribed && <h2>bobbyhadz.com</h2>}
    </div>
  );
}
