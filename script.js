let element = document.getElementById('submit');

element.addEventListener('click', function (e) {
    e.preventDefault()
    let inputElement = document.getElementById('finput1');
    let inputValue = inputElement.value;
    nameVadlidate();
    passwordVadlidate();
});

function nameVadlidate() {

    const inputElement1 = document.getElementById("finput1");
    const errorspan = document.getElementById("errorPartnerName");

    if(inputElement1 == inputElement1.toUpperCase()){
        errorspan.style.display = "inline";
        errorspan.innerHTML = "Input must be in Capita Letters";
    }else{
        console.log("Input must be in capital letters.");
        
    }

}

