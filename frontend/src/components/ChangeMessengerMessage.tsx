import { useState } from 'react';
import { setMessengerMessage } from '../fetchers/messenger';

export const ChangeMessengerMessage = ({ currentMessage }: { currentMessage: string }) => {
  const [message, setMessage] = useState(currentMessage);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: 'auto',
        gap: '10px'
      }}
    >
      <input
        placeholder="Change Message"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button onClick={async () => await setMessengerMessage(message)}>Change Message</button>
    </div>
  );
};
