//==========>>Start API Fetching
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => userDataShow(data))
//==========>>End Api Fetching


function userDataShow(allData){
    console.log(allData);
    let lists = '';
    allData.forEach(singleData => {
         lists = lists + `<div class="data-area">
                            <h5>${singleData.name}</h5>
                            <span>${singleData.username}</span></br>
                            <span>${singleData.email}</span>
                          </div>`
    })
    console.log(lists);

    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = lists;
}


{/* <div class="user">
                           
                            
                          </div> */}
{/* <p>${singleData.address.street}</p>
<p>${singleData.address.suite}</p>
<p>${singleData.address.city}</p>
<p>${singleData.address.zipcode}</p>
<p>${singleData.address.geo.lat}</p>
<p>${singleData.address.geo.lng}</p>
<p>${singleData.phone}</p>
<p>${singleData.website}</p>
<p>${singleData.company.name}</p>
<p>${singleData.company.catchPhrase}</p>
<p>${singleData.company.bs}</p> */}