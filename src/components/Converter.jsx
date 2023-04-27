import { useState } from "react";

const Converter = () => {
  const [miles, setMiles] = useState(0);
  const [km, setKm] = useState(0);

  const changeMiles = (e) => {
    const newMiles = e.target.value;
    setMiles(newMiles);
    setKm(newMiles*1.6);
  }

  return(
    <>
      <label>miles:</label>
      <input value={miles} onChange={changeMiles}/>
      <label>km:</label>
      <input value={km} />
    </>
  )};

export default Converter;