const loadPhone=async (searchText=13,isShowAll)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data=await res.json()
const phones=data.data;
//console.log(phones)
displayPhone(phones,isShowAll)
}

const displayPhone= (phones,isShowAll)=>{

const phoneContainer=document.getElementById('phone-container')
phoneContainer.textContent=" ";
///display data
if(!isShowAll){
    phones=phones.slice(0,12)
}
/* display alll button if theare are more than 12 phones */
const showAllButton=document.getElementById('showAllButton')

if(phones.length > 10  && !isShowAll){
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


<button onClick="handleShowDetail('${phone.slug}');my_modal_1.showModal() " class="btn btn-primary">


Show Details

</button>
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
const handleSearch =(isShowAll)=>{
    toggleSpinner(true)
const searchField=document.getElementById('searchField');
const searchText=searchField.value;
//console.log(searchText)

loadPhone(searchText,isShowAll)

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
loadPhone()

 /* handle show all */
 const handleShowAll=()=>{

    handleSearch(true)


 }
/* handle show deatai */
const handleShowDetail= async(id)=>{
//console.log("dskj",id)
 /* load-data singale phone dat */
const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data= await res.json()
const phone=data.data;
//console.log(data)
showHandleModal(phone)







}


/* hadnle show deatial */

const showHandleModal=(phone)=>{
    console.log(phone)
    const phoneName=document.getElementById('phone-name-detail')
    phoneName.innerText=phone.name;

const showContainer=document.getElementById('show-detail-container')
showContainer.innerHTML=`

<p>${phone.brand}</p>
<img src='${phone.image}' alt=""/>
<p class="fs-1xl">displaySize:${phone.mainFeatures?.memory}</p>
<p>releaseData: ${phone.releaseDate}</p>
`;



    /* show modal */
    my_modal_1.showModal() 


}