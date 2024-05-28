import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [likes, setLikes] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    setLikes(likes + 1);
  }

  function toggleShowMessage() {
    setShowMessage(prevShowMessage => !prevShowMessage);
  }

  const cek = "ini variabel";

  const tulisan = `cek tulisan ${cek} `;

  return (
    <div>
      <Header author={"Risyad"} />
      <button onClick={handleClick}>Like ({likes})</button>
      <button onClick={toggleShowMessage}>Tambah</button>
      {showMessage ? <h1>Tombol diklik</h1> : <h1>Tombol tidak diklik</h1>}
      <h1> adalah {tulisan}</h1>
    </div>
  );
}

export default App;
