/* eslint-disable react/prop-types */
import useStoreContext from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

// eslint-disable-next-line no-unused-vars
const FoodDisplay = ({ category }) => {
  const { food_list } = useStoreContext();

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list?.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default FoodDisplay;
