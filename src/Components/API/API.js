
// export const getFilmText = async () => {
//   try {
//     const response = await fetch('https://swapi.co/api/films/');
//     const filmData = await response.json();
//     console.log(filmData);
//   } 
//   catch (error) {
//     console.log(error.message);
//   }
// };

  // getCategoryData = async(category) => {
  //   const url = `https://swapi.co/api/${category.toLowerCase()}/`;
  //   const response = await fetch(url);
  //   const starwarsData = await response.json();
  //   this.setState({ starwarsData });
  // }

  export const getCategoryData = async (category) => {
    const Category = category;
    const url = `https://swapi.co/api/${Category.toLowerCase()}/`;
    const response = await fetch(url);
    const data = await response.json();
    const stateCategory = `${Category}Data`;
    return data;
  }