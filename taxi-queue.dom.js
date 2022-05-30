// write your DOM code here.
const buttonjoin_people_queue = document.querySelector(".join_queue");
const buttonleave_people_queue = document.querySelector(".leave_queue");
const buttonjoin_taxi_queue = document.querySelector(".join_taxi_queue");
const button_depart_taxi = document.querySelector(".depart");
const passenger_queue_countElement = document.querySelector(".passenger_queue_count");
const taxi_queue_countElement = document.querySelector(".taxi_queue_count");
// DOM element references
// create Factory Function instance
const taxiQueue = TaxiQueue();
// DOM events
let people_queue_counter = 0;
let taxi_queue_counter = 0;
function joinPeopleQueue() {
    people_queue_counter = people_queue_counter + 1;
    passenger_queue_countElement.innerHTML = people_queue_counter;
    console.log('people_queue_counter', people_queue_counter)
}
function leavePeopleQueue() {
    if (people_queue_counter > 0) {
        people_queue_counter = people_queue_counter - 1;
    }
    passenger_queue_countElement.innerHTML = people_queue_counter;
    console.log('people_queue_counter', people_queue_counter)
}
function joinTaxiQueue() {
    taxi_queue_counter = taxi_queue_counter + 1;
    taxi_queue_countElement.innerHTML = taxi_queue_counter;
    console.log('taxi_queue_count', taxi_queue_counter)
}
function taxiDepart() {
    if (taxi_queue_counter > 0 && people_queue_counter > 11) {
        taxi_queue_counter = taxi_queue_counter - 1;
        taxi_queue_countElement.innerHTML = taxi_queue_counter;
        people_queue_counter = people_queue_counter - 12;
        passenger_queue_countElement.innerHTML = people_queue_counter;
        console.log('people_queue_counter', people_queue_counter)
    }
}


button_depart_taxi.addEventListener('click', function () {
    taxiQueue.joinQueue();
    taxiQueue.leaveQueue();
    taxiQueue.joinTaxiQueue();
    taxiQueue.queueLength();

    

});
buttonjoin_people_queue.addEventListener('click', joinPeopleQueue);
buttonleave_people_queue.addEventListener('click', leavePeopleQueue);
buttonjoin_taxi_queue.addEventListener('click', joinTaxiQueue);
button_depart_taxi.addEventListener('click', taxiDepart);