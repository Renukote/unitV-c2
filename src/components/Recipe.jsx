import { Input } from "./Input";
import { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList";
import { Details } from "./Details";

export const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    getData("recipe");
  }, []);

  async function getData(data) {
    try {
      let res = await fetch(`http://localhost:3001/${data}`);

      res = await res.json();
      console.log("success", res);

      setRecipe(res);
    } catch (e) {
      console.log("error in fetching", e);
    }
  }

  const handleSubmit = async (data) => {
    console.log("submission", data);

    try {
      await fetch(`http://localhost:3001/recipe`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      getData("recipe");
    } catch (e) {
      console.log("error in posting data", e);
    }
  };

  const filter = async () => {
    let title = filterBy;
    let res = await fetch(`http://localhost:3001/recipe?title=${title}`);
    res = await res.json();
    setRecipe(res);

    console.log("filter is working");
  };

  const sort = async () => {
    let res = await fetch(`http://localhost:3001/recipe?_sort=time&_order=asc`);
    res = await res.json();

    console.log("sorted:", res);
    return setRecipe(res);
  };

  const viewDetails = async (dishId) => {
    console.log("dishId", dishId);

    let res = await fetch(`http://localhost:3001/recipe/${dishId}`);
    res = await res.json();

    console.log("view details", res);
    setDetails(res);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="addRecipe flex-box">
          <Input subFunc={handleSubmit} />
        </div>
        <div className="showRecipe flex-box">
          <div>
            <button onClick={sort}>Sort By Time</button>
            <button onClick={filter}>Filter by title</button>
            <input
              type="text"
              onChange={(e) => {
                setFilterBy(e.target.value);
              }}
            />
          </div>
          {recipe
            ? recipe.map((e) => (
                <RecipeList {...e} key={e.id} renderDetails={viewDetails} />
              ))
            : null}
        </div>
      </div>

      <div style={{ border: "1px solid coral", height: "300px" }}>
        {details ? (
          <>
            <Details {...details} key={details.id} />
          </>
        ) : null}
      </div>
    </>
  );
};
