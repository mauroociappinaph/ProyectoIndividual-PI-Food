
import './Homepage.module.css';

function Homepage() {
  return (
    <div className="App">
      <h1> Estas en la HOME del PI de Food</h1>
      <p>Mauroo Ciappina</p>
    </div>
  );
}

export default Homepage;


/*
HOME PAGE | la página principal de tu SPA debe contener:

SearchBar: un input de búsqueda para encontrar recetas por nombre.
Sector en el que se vea un listado de cards con las recetas. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /recipes y deberá mostrar su:
Imagen.
Nombre.
Tipos de dietas.
Cuando se le hace click a una Card deberá redirigir al detalle de esa receta específica.
Botones/Opciones para filtrar por tipo de dieta, y por si su origen es de la API o de 
la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas 
por orden alfabético y por "comida saludable" (health score).
Paginado: el listado de recetas se hará por partes. Tu SPA debe contar 
con un paginado que muestre un total de 9 recetas por página.
⚠️ IMPORTANTE: se deben mostrar tanto las recetas traidas desde 
la API como así también las de la base de datos, pero NO está permitido 
almacenar en la base de datos las recetas de la API. Solamente se pueden 
guardar aquellas creadas desde el form.

⚠️ IMPORTANTE: debido a que en la API existen alrededor de 5.000 recetas, por cuestiones de performance puedes tomar la simplificación de obtener y paginar las primeras 100 recetas.


*/