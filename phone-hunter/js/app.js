const loadPhone=async (searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data=await res.json()
const phones=data.data;
//console.log(phones)
displayPhone(phones)
}

const displayPhone= phones=>{

const phoneContainer=document.getElementById('phone-container')
phoneContainer.textContent=" ";
///display data
phones=phones.slice(0,12)
/* display alll button if theare are more than 12 phones */
const showAllButton=document.getElementById('showAllButton')

if(phones.length > 10){
showAllButton.classList.remove('hidden')
}else{
    showAllButton.classList.add('hidden')
}



phones.forEach((phone) => {
//console.log(phone)
/*2 create a div */
const phoneCard=document.createElement('div')
phoneCard.classList=(`card card-compact w-96 bg-base-100 shadow-xl`)
//set inner html
phoneCard.innerHTML=`

<figure><img src="${phone.image}" alt="Shoes" /></figure>
<h1 class="card-title ">${phone.brand}</h1>
<div class="card-body">
<h2 class="card-title">${phone.phone_name}</h2>
<p>I${phone.slug}</p>
<div class="card-actions justify-end">


<button class="btn btn-primary">Show Details</button>
</div>
</div>

`;

//4 append child
phoneContainer.appendChild(phoneCard)


})

//hide loading spinner
toggleSpinner(false)
}



//////////////////////////////////
const handleSearch =()=>{
    toggleSpinner(true)
const searchField=document.getElementById('searchField');
const searchText=searchField.value;
//console.log(searchText)

loadPhone(searchText)

}


/* toggle spinner */

const toggleSpinner=(isLoading)=>{

const spinner=document.getElementById('loading-spiner')

if(isLoading){

    spinner.classList.remove('hidden')

}else{
    spinner.classList.add('hidden')
}

}
//loadPhone()


