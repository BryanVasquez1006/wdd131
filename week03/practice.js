let firstName = 'Antonia';
let lastName = 'Francesca';

const fullName = function(first, last) {
    return `${first} ${last}`
}


const arrowFullName = (first, last) => {
    return `${first} ${last}`
}


document.querySelector('#fullName').innerHTML = fullname(firstName, lastName)