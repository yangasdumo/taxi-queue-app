function TaxiQueue() {

	let people_queue_counter = 0;
    let taxi_queue_counter = 0;


	function joinQueue() {
		people_queue_counter = people_queue_counter + 1;
		return people_queue_counter;

	}

	function leaveQueue() {
		if (people_queue_counter > 0) {
			people_queue_counter = people_queue_counter - 1;
		}


	}

	function joinTaxiQueue() {
		taxi_queue_counter = taxi_queue_counter + 1;

	}

	function queueLength() {
		return people_queue_counter;

	}

	function taxiQueueLength() {
		return taxi_queue_counter;

	}

	function taxiDepart(){

    if (taxi_queue_counter > 0 && people_queue_counter > 11) {
        taxi_queue_counter = taxi_queue_counter - 1;
        taxi_queue_countElement.innerHTML = taxi_queue_counter;
        people_queue_counter = people_queue_counter - 12;
        return people_queue_counter;
        
     }
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}