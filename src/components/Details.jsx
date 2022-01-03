export const Details = ({ title, time, ingred, instruct }) => {
 return (
    <>
      <img src="https://img.icons8.com/stickers/100/000000/pizza.png" alt="This is your dish" />
      <div>Dish: {title}</div>
      <div>Time Taken: {time}mins</div>
      <div>Ingredients: {ingred}</div>
      <div>Instructions: {instruct}</div>
    </>
  );
};
