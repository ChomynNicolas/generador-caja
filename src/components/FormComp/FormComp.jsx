import React, { useState } from "react";

const FormComp = (props) => {
  const [formVal, setFormVal] = useState({ color: "", tamaño: "100" });

  const cambiarDatos = (event) => {
    const { name, value } = event.target;
    setFormVal({
      ...formVal,
      [name]: value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    props.guardarValores([...props.valores, formVal]);
    setFormVal({ color: "", tamaño: "100" })
  };

  return (
    <>
      <h3>Add block color</h3>
      <form onSubmit={enviarDatos}>
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formVal.color}
          onChange={cambiarDatos}
        />

        <div>
          <label htmlFor="tamaño">Tamaño</label>
          <input
            type="text"
            id="tamaño"
            name="tamaño"
            value={formVal.tamaño}
            onChange={cambiarDatos}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComp;
