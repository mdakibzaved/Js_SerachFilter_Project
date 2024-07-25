const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItem = []

filter.addEventListener('input', (e) => filterData(e.target.value)) //gives whatever typed in input

getData()
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const data = await res.json();    //data.results
    
    // clear results
    result.innerHTML= '';

    // Fill data
    fillData(data.results);
}

function fillData(results) {

    results.forEach(user => {
        const li = document.createElement('li')

        listItem.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })

}

function filterData(searchTerm) {
    listItem.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')     //Think Solved MY Imagination
        }
    })
}

