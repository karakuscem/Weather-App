// Change unit function
/* eslint-disable no-param-reassign */
export default function changeUnits(changeUnitButton, allUnits){
        if (changeUnitButton.value === "imperial") {
            changeUnitButton.value = "metric";
            changeUnitButton.innerHTML = "°F";
            allUnits[0] = " °C";
            allUnits[1] = " km/h";
        } else if (changeUnitButton.value === "metric") {
            changeUnitButton.value = "imperial";
            changeUnitButton.innerHTML = "°C";
            allUnits[0] = " °F";
            allUnits[1] = " mph";
        }
}
