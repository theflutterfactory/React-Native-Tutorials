import { useRecoilState } from "recoil"
import { foodListState } from "../atoms/foodState"

export const useFoodList = () => {
  const [foodList, setFoodList] = useRecoilState(foodListState)

  function addFood(name) {
    setFoodList((foodList) => [
      ...foodList,
      {
        key: Math.random(),
        name
      }
    ])
  }

  function deleteFood(key) {
    setFoodList((foodList) =>
      foodList.filter((item) =>
        item.key !== key)
    )
  }

  return { foodList, addFood, deleteFood }
}