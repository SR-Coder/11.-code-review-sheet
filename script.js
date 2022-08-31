// Code Review Rubric beta test v1.0
// Jim Reeder

let email = document.getElementById("email");
let instructor = document.getElementById("instructor");
let assignment = document.getElementById("assignment");
let allSelectable = document.querySelectorAll(".selectable");
let score = document.getElementById("score");
let selected = document.querySelectorAll(".selected");
let modal = document.getElementById("myModal");
let closer = document.getElementsByClassName("close")[0];
let modalText = document.getElementById("modal-text");
const formAddress = "https://docs.google.com/forms/d/e/1FAIpQLSdXrgvOVpuQJ30znBiM8k0i1TpzhAdoYzRzuR3Pi2Rq045qLg/formResponse"
let totalScore = 10;

const resetHandler = () => {
    allSelectable.forEach(element => {
        element.classList.remove("selected");
    });
    score.innerText = 10;
    email.value = "";
    instructor.value = "";
    assignment.value = "";
}

const onSelectHandler = (e) => {
    let thisElement = e.target;
    let parentElement = e.target.parentElement

    if(thisElement.classList.contains("selected")){
        thisElement.classList.remove("selected");
    } else {
        for(let i = 0; i < parentElement.children.length; i++){
            let ithElement = parentElement.children[i]
            if(ithElement.classList.contains('selected')){
                ithElement.classList.remove("selected")
            }
        }

        thisElement.classList.add("selected");
    }

    // tabulates score
    selected = document.querySelectorAll(".selected");
    // console.log(selected);
    // console.log(score.innerHTML);
    let tempScore = 10.0;
    selected.forEach(element => {
        if(element.firstElementChild.innerHTML !="N/A"){
            let deduction = parseFloat(element.firstElementChild.innerHTML)
            tempScore = tempScore + deduction;
        }
    });
    score.innerText = tempScore.toFixed(2);
}

// Adds an event listener to each element that has the
// selectable class name
allSelectable.forEach(element => {
    element.addEventListener('click', onSelectHandler)
});

const onSubmitHandler = () => {
    // console.log(selected.length);
    if(selected.length !== 13){
        alert("Please make a selection for all categories");
        return false;
    } 

    if(email.value=="" || instructor.value =="" || assignment.value ==""){
        alert("Please fill in Student/Instructor information.");
        return false;
    }
    
    // let questions = document.querySelectorAll(".question");
    // questions.forEach(question => {
    //     console.log(question.firstElementChild.innerText);
        
    // });

    let myForm = document.createElement("FORM");
    myForm.setAttribute('id', "TestForm");
    myForm.setAttribute("method", "POST");
    myForm.setAttribute("target", "hiddenConfirm");
    document.body.appendChild(myForm);

    let thisForm = document.getElementById("TestForm")

    let input1 = document.createElement("Input");
    input1.setAttribute("id", "input1");
    input1.setAttribute("type", "email");
    input1.setAttribute("name", "entry.1845460757");
    input1.setAttribute("Value", email.value);
    thisForm.appendChild(input1);

    let input2 = document.createElement("Input");
    input2.setAttribute("id", "input2");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "entry.1164957749");
    input2.setAttribute("Value", instructor.value);
    thisForm.appendChild(input2);

    let input3 = document.createElement("Input");
    input3.setAttribute("id", "input3");
    input3.setAttribute("type", "text");
    input3.setAttribute("name", "entry.489152719");
    input3.setAttribute("Value", assignment.value);
    thisForm.appendChild(input3);

    let input4 = document.createElement("Input");
    input4.setAttribute("id", "input4");
    input4.setAttribute("type", "text");
    input4.setAttribute("name", "entry.131994712");
    input4.setAttribute("Value",selected[0].firstElementChild.innerHTML);
    thisForm.appendChild(input4);

    let input5 = document.createElement("Input");
    input5.setAttribute("id", "input5");
    input5.setAttribute("type", "text");
    input5.setAttribute("name", "entry.744897574");
    input5.setAttribute("Value",selected[1].firstElementChild.innerHTML);
    thisForm.appendChild(input5);

    let input6 = document.createElement("Input");
    input6.setAttribute("id", "input6");
    input6.setAttribute("type", "text");
    input6.setAttribute("name", "entry.1380845034");
    input6.setAttribute("Value",selected[2].firstElementChild.innerHTML);
    thisForm.appendChild(input6);

    let input7 = document.createElement("Input");
    input7.setAttribute("id", "input7");
    input7.setAttribute("type", "text");
    input7.setAttribute("name", "entry.768631213");
    input7.setAttribute("Value",selected[3].firstElementChild.innerHTML);
    thisForm.appendChild(input7);

    let input8 = document.createElement("Input");
    input8.setAttribute("id", "input8");
    input8.setAttribute("type", "text");
    input8.setAttribute("name", "entry.987942806");
    input8.setAttribute("Value",selected[4].firstElementChild.innerHTML);
    thisForm.appendChild(input8);

    let input9 = document.createElement("Input");
    input9.setAttribute("id", "input9");
    input9.setAttribute("type", "text");
    input9.setAttribute("name", "entry.462034436");
    input9.setAttribute("Value",selected[5].firstElementChild.innerHTML);
    thisForm.appendChild(input9);

    let input10 = document.createElement("Input");
    input10.setAttribute("id", "input10");
    input10.setAttribute("type", "text");
    input10.setAttribute("name", "entry.136172028");
    input10.setAttribute("Value",selected[6].firstElementChild.innerHTML);
    thisForm.appendChild(input10);

    let input11 = document.createElement("Input");
    input11.setAttribute("id", "input11");
    input11.setAttribute("type", "text");
    input11.setAttribute("name", "entry.1580908084");
    input11.setAttribute("Value",selected[7].firstElementChild.innerHTML);
    thisForm.appendChild(input11);

    let input12 = document.createElement("Input");
    input12.setAttribute("id", "input12");
    input12.setAttribute("type", "text");
    input12.setAttribute("name", "entry.669148456");
    input12.setAttribute("Value",selected[8].firstElementChild.innerHTML);
    thisForm.appendChild(input12);

    let input13 = document.createElement("Input");
    input13.setAttribute("id", "input13");
    input13.setAttribute("type", "text");
    input13.setAttribute("name", "entry.1189209658");
    input13.setAttribute("Value",selected[9].firstElementChild.innerHTML);
    thisForm.appendChild(input13);

    let input14 = document.createElement("Input");
    input14.setAttribute("id", "input14");
    input14.setAttribute("type", "text");
    input14.setAttribute("name", "entry.112870598");
    input14.setAttribute("Value",selected[10].firstElementChild.innerHTML);
    thisForm.appendChild(input14);

    let input15 = document.createElement("Input");
    input15.setAttribute("id", "input15");
    input15.setAttribute("type", "text");
    input15.setAttribute("name", "entry.2102068348");
    input15.setAttribute("Value",selected[11].firstElementChild.innerHTML);
    thisForm.appendChild(input15);

    let input16 = document.createElement("Input");
    input16.setAttribute("id", "input16");
    input16.setAttribute("type", "text");
    input16.setAttribute("name", "entry.778378546");
    input16.setAttribute("Value",selected[12].firstElementChild.innerHTML);
    thisForm.appendChild(input16);


    myForm.method = "POST";
    myForm.action = formAddress;
    myForm.submit();

    // selected.forEach(element => {
    //     console.log(
    //         element.firstElementChild.innerHTML
    //     );
    // });

    generateFeedback();

    resetHandler();
    // submitted=true;
}

const generateFeedback = () => {
    if(selected.length < 1){
        // console.log("empty array");
        return false;
    }
    selected.forEach(element => {
        let tempText = ""        
        let lineOne = document.createElement("p");
        lineOne.setAttribute("class", "line-head");
        lineOne.innerText = element.parentElement.children[0].firstElementChild.innerText;
        modalText.appendChild(lineOne);

        let lineTwo = document.createElement("p");
        lineTwo.setAttribute("class", "score");
        lineTwo.innerText = "Points Deducted" + " " + element.children[0].innerText;
        modalText.appendChild(lineTwo);

        let lineThree = document.createElement("p");
        lineThree.setAttribute("class", "reason");
        lineThree.innerText = element.children[1].innerText;
        modalText.appendChild(lineThree);
        

    });
    myModal.style.display = "block";
}

// Close the modal for the info
closer.onclick = () => {
    modal.style.display = "none";
}

/*
These are the form keys that are needed to populate our google form
Form url and data
https://docs.google.com/forms/d/e/1FAIpQLSdXrgvOVpuQJ30znBiM8k0i1TpzhAdoYzRzuR3Pi2Rq045qLg/formResponse

1 entry.1845460757=999-StudentEmail
2 entry.1164957749=999-Instructor
3 entry.489152719=999-AssignmentName
4 entry.131994712=0
5 entry.744897574=0.0
6 entry.1380845034=0
7 entry.768631213=0
8 entry.987942806=0
9 entry.462034436=0
10 entry.136172028=0
11 entry.1580908084=0
12 entry.669148456=0
13 entry.1189209658=0
14 entry.112870598=0
15 entry.2102068348=0
16 entry.778378546=0

*/