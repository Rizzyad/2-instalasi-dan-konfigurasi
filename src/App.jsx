import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [angka, setAngka] = useState({});
  const [hasil, setHasil] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAngka((values) => ({ ...values, [name]: value }));
  };

  const handleTambah = (e) => {
    e.preventDefault();

    if (Object.entries(angka).length === 0) return;
    
    inputanAngka(angka);

    function inputanAngka(angka) {
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 + angka2);
    }
  };

  const handleKurang = (e) => {
    e.preventDefault();

    if (Object.entries(angka).length === 0) return;

    inputanAngka(angka);


    function inputanAngka(angka) {
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 - angka2);
    }
  };

  const handleKali = (e) => {
    e.preventDefault();

    if (Object.entries(angka).length === 0) return;

    inputanAngka(angka);


    function inputanAngka(angka) {
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 * angka2);
    }
  };

  const handleBagi = (e) => {
    e.preventDefault();

    if (Object.entries(angka).length === 0) return;

    inputanAngka(angka);


    function inputanAngka(angka) {
      const angka1 = Number(angka.angka1);
      const angka2 = Number(angka.angka2);
      setHasil(angka1 / angka2);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setAngka({});
    setHasil(0)
  };

  return (
    <>
      <div className="container mt-5">
        <Header author="Risyad" />

        <br />

        <div className="d-flex justify-content-center">
          <div className="wrapper">
            <form>
              <div className="alert alert-dismissible alert-light">
                <button
                  type="button"
                  className="btn-close"
                ></button>
                <strong>{hasil}</strong>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label> angka 1: </label>
                    <input
                      type="number"
                      name="angka1"
                      className="form-control"
                      value={angka.angka1 || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label> angka 2: </label>
                    <input
                      type="number"
                      name="angka2"
                      className="form-control"
                      value={angka.angka2 || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <br />
              <br />

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  onClick={handleTambah}
                  className="btn btn-info"
                  style={{ marginRight: "10px" }}
                >
                  +
                </button>

                <button
                  type="submit"
                  onClick={handleKurang}
                  className="btn btn-warning"
                  style={{ marginRight: "10px" }}
                >
                  -
                </button>

                <button
                  type="submit"
                  onClick={handleKali}
                  className="btn btn-success"
                  style={{ marginRight: "10px" }}
                >
                  x
                </button>

                <button
                  type="submit"
                  onClick={handleBagi}
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                >
                  :
                </button>

                <button
                  type="submit"
                  onClick={handleReset}
                  className="btn btn-danger"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
