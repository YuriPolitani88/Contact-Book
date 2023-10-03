document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contact");
    const phoneNumberInput = document.getElementById("phone-number");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const contactName = document.getElementById("contact-name").value;
        const phoneNumber = phoneNumberInput.value;

        if (phoneNumber.length < 10) {
            alert("The phone number must be at least 10 digits long.");
        } else {
            adicionaLinha(contactName, phoneNumber);
        }
    });
});

const Contact = [];
const Phone = [];

let linhas = '';

function adicionaLinha(contactName, phoneNumber) {
    if (Contact.includes(contactName)) {
        alert(`Contact: ${contactName} has already been inserted`);
    } else {
        Contact.push(contactName);
        Phone.push(phoneNumber);

        let linha = '<tr>';
        linha += `<td>${contactName}</td>`;
        linha += `<td>${phoneNumber}</td>`;
        linha += '<td>';
        linha += '</td>';
        linha += '</tr>';

        linhas += linha;
        atualizaTabela();
    }

    const inputContactName = document.getElementById('contact-name');
    const inputPhoneNumber = document.getElementById('phone-number');

    inputContactName.value = '';
    inputPhoneNumber.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
