import React, { useState } from "react";
import styles from "./Form.module.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Here, we would send the data to an API or server function
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const { name, healthScore } = formData;
    const errors = {};
    if (!name) {
      errors.name = "Debe ingresar un nombre para la receta";
    } else if (/\d/.test(name)) {
      errors.name = "El nombre no puede contener números";
    }
    if (!healthScore) {
      errors.healthScore = "Debe ingresar un puntaje de salud para la receta";
    } else if (healthScore < 0 || healthScore > 10) {
      errors.healthScore = "El puntaje de salud debe estar entre 0 y 10";
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.onSubmit}>
        <div className={styles.divContainer}>
          <label htmlFor="name" className={styles.htmlFor}>
            Nombre:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby="name-error"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className={styles.divContainer}>
          <label htmlFor="summary" className={styles.summary}>
            Resumen del plato:
          </label>
          <textarea
            className={styles.textarea}
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div className={styles.divContainer}>
          <label htmlFor="healthScore" className={styles.htmlFor}>
            Nivel de comida saludable:
          </label>
          <input
            className={styles.input}
            type="number"
            id="healthScore"
            name="healthScore"
            min="0"
            max="10"
            value={formData.healthScore}
            onChange={handleChange}
          />
          {errors.healthScore && <div className="error">{errors.healthScore}</div>}
        </div>

        <div className={styles.divContainer}>
          <label htmlFor="steps" className={styles.htmlFor}>
            Paso a paso:
          </label>
          <textarea
            className={styles.textarea}
id="steps"
name="steps"
value={formData.steps}
onChange={handleChange}
/>
</div>
    <div className={styles.divContainer}>
      <label htmlFor="image" className={styles.htmlFor}>
        Imagen:
      </label>
      <input
        className={styles.input}
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
    </div>

    <div className={styles.divContainer}>
      <label htmlFor="diets" className={styles.htmlFor}>
        Dietas:
      </label>
      <select
        className={styles.select}
        id="diets"
        name="diets"
        multiple={true}
        value={formData.diets}
        onChange={(e) => {
          const selectedOptions = Array.from(e.target.selectedOptions).map(
            (option) => option.value
          );
          setFormData({ ...formData, diets: selectedOptions });
        }}
      >
        <option value="gluten free">Sin gluten</option>
        <option value="ketogenic">Ketogénica</option>
        <option value="vegetarian">Vegetariana</option>
        <option value="lacto vegetarian">Lacto vegetariana</option>
        <option value="ovo vegetarian">Ovo vegetariana</option>
        <option value="vegan">Vegana</option>
        <option value="pescatarian">Pescatariana</option>
        <option value="paleolithic">Paleolítica</option>
        <option value="primal">Primal</option>
        <option value="whole30">Whole30</option>
      </select>
    </div>

    <button type="submit" className={styles.button}>
      Agregar Receta
    </button>
  </form>
</div>
);
};

export default FormPage;
