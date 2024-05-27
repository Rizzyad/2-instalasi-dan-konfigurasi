import { useState } from 'react'

function Header({ author }) {
  return <h1>Belajar React bareng {author ? author : 'WPU'} 🚀</h1>
}

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header author={"Risyad"} />
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default App
