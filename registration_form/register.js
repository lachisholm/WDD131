//Keep track of how many participant sections exist (starts at 1)
let participantCount = 1;

document.addEventListener("DOMContentLoaded", () => {
    attachAddParticipantListener();
    attachFormSubmitListener();     
});

/*
 Returns the HTML string for a new participant section (#count),
 duplicating Participant 1's structure but appending 'count',
 to every id/name so they remain unique. */ 

 function participantTemplate(count) {
    return`
    <section class="participant${count}">
        <p>Participant ${count}</p>
        
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        

        <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
        </div>


        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
        </div>

        <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade${count}">
                <option selected value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>
    `;
 }


 /*
Attach a click listener to "Add Participant" (id="add").
On click
1. Increment participantCount
2. Generate a new HTML via participant Template - participantCount
3. Insert it right before the "Add Participant" button in the DOM
*/

function attachAddParticipantListener() {
    const addBtn = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");

    if (!addBtn || !participantsFieldset) {
        console.error("Cannot find #add button or .participants fieldset.");
        return;
    }

    addBtn.addEventListener("click", () => {
        participantCount += 1;
        const newSectionHTML = participantTemplate(participantCount);
        addBtn.insertAdjacentHTML("beforebegin", newSectionHTML);
    });
}

/*
 *Attach a submit listener to the form (id="registrationForm").
 *On submit, call submitForm().
 */

 function attachFormSubmitListener() {
    const form = document.getElementById("registrationForm");
    if(!form) {
        console.error("Cannot find #registrationForm");
        return;
    }
    form.addEventListener("submit, submitForm");
}

/*
 called when the form is submitted.
 Right now, we just prevent the default reload;
 */

function submitForm(event) {
    event.preventDefault();
}