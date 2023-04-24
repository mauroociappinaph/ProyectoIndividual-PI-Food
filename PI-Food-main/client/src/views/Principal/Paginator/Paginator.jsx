import React from 'react';

const Paginator = ({ recipesPerPage, allRecipes, paginado }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
        pageNumbers.map(number => {
            <a onClick={() => paginador(number)} >{number} </a>
        }) }
      </ul>
    </nav>
  );
}

export default Paginator;
