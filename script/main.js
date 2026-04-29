import { 
    getDaysInMonth, 
    increaseMonth, 
    decreaseMonth 
} from "./calendar.js";

window.addEventListener("DOMContentLoaded", main)

function main() {
    getDaysInMonth();
    increaseMonth();
    decreaseMonth();
}