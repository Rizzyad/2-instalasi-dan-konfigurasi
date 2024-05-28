import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [angka, setAngka] = useState({});
  const [hasil, setHasil] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAngka(values => ({...values, [name]: value}))
  }

  const handleTambah = (e) => {
    e.preventDefault();
    inputanAngka(angka);

    function inputanAngka(angka) {      
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 + angka2);
    }
  }

  const handleKurang = (e) => {
    e.preventDefault();
    inputanAngka(angka);

    function inputanAngka(angka) {      
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 - angka2);
    }
  }

  const handleKali = (e) => {
    e.preventDefault();
    inputanAngka(angka);

    function inputanAngka(angka) {      
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 * angka2);
    }
  }

  const handleBagi = (e) => {
    e.preventDefault();
    inputanAngka(angka);

    function inputanAngka(angka) {      
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 / angka2);
    }
  }

  return (
    <div>

      <Header author = "Risyad" />

      <form>

        <label> angka 1: </label>
          <input 
            type="number" 
            name="angka1"
            value={angka.angka1}
            onChange={handleChange}
          />


        <label> angka 2: </label>
          <input 
            type="number" 
            name="angka2"
            value={angka.angka2}
            onChange={handleChange}
          />


        <br /><br />

        <button type="submit" onClick={handleTambah} style={{marginRight: "10px"}}>
          Tambah
        </button>

        <button type="submit" onClick={handleKurang} style={{marginRight: "10px"}}>
          Kurang
        </button>

        <button type="submit" onClick={handleKali} style={{marginRight: "10px"}}>
          Kali
        </button>

        <button type="submit" onClick={handleBagi}>
          Bagi
        </button>

        <h1>Hasil: {hasil}</h1>

      </form>

    </div>
  );
}

export default App;
