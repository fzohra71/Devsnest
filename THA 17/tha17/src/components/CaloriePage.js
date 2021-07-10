import "../styles/CaloriePage.css";
import CalorieBox from "./CalorieBox";

const calorieArr = [
{
    title: "Pizza",
    calories: 55,
},
{
    title: "Burger",
    calories: 58
},
{
    title: "Coke",
    calories: 550
},
{
    title: "Fried Rice",
    calories: 99
},
{
    title: "Brownie",
    calories: 180,
},
{
    title: "Pani Puri",
    calories: 15,
},
{
    title: "Lassania",
    calories: 210,
},
];


function CaloriePage(props) {
    return (
    <div className="page">
        <div className="container">
        {calorieArr.map(element => (
            <CalorieBox title={element.title} calories ={element.calories}/>
        ))}
        </div>
    </div>
    )
}

export default CaloriePage;