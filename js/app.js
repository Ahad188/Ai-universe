 const loadApi = (dataLimit) =>{
     const url = `https://openapi.programming-hero.com/api/ai/tools`
     fetch(url)
     .then(res => res.json())
     .then(data => showData(data.data.tools, dataLimit))
 }
//  show 6 display data
     const showData =(data, dataLimit)=>{
          console.log(data.length)
          const displayData = document.getElementById('displayData')
          if(dataLimit && data.length >= 6){
               data = data.slice(0,6)
          }
          displayData.innerHTML = ' ';
          data.forEach(element => {
               // console.log(element);
               displayData.innerHTML +=`
               <div class="col" >
                 <div class="card" style="cursor: pointer;">
                   <img src="${element.image}" class="p-3 img-fluid" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">Features</h5>
                    <ol>
                    <li>${element.features[0]}</li>
                    <li>${element.features[1]}</li>
                    <li>${element.features[2]}</li>
                    </ol>
                    <hr>
                    <h4 class="">${element.name}</h4>
                    <div class=" d-flex justify-content-between">
                    <div>
                    <h6>${element.published_in}</h6>
                    </div>
                    <span title="show Details" class="fs-3" onclick="singleDitals('${element.id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">&#187;</span>
                     
                    </div>
                   </div>
                 </div>
               </div>
               `;
          });
     };

     // single details Api
     const singleDitals = (id) =>{
          console.log(id)
          const url2 = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
          fetch(url2)
          .then(res => res.json())
          .then(data => modalDisplay(data.data))
     }
     // show modal 
     const modalDisplay = (data)=>{
          console.log(data)
          const body = document.getElementById('modal-body');
          body.innerHTML = " ";
          body.innerHTML +=`
          <div class="container">
          <div class="row g-2">
            <div class="col-6 border-light-subtle border bg-light bg-gradient">
            <p class="card-text text-center fw-bold"> ${data.description}</p>
            <div class="d-flex align-items-around mx-auto">
            <div class="border mx-3 ">
                 <h6 class="p-2 text-center text-success"> ${data.pricing[0].plan}</h6>
                 <span class="p-2 text-center text-success">${data.pricing[0].price}</span>
            </div>
            <div class="border mx-3">
                 <h6 class="p-2 text-center text-danger-emphasis">${data.pricing[1].plan}</h6>
                 <span class="p-2 text-center text-danger-emphasis">${data.pricing[1].price}</span>
            </div>
            <div class="border">
                 <h6 class="p-1 text-center text-info-emphasis">${data.pricing[2].plan}</h6>
                 <span class="p-2 text-center text-info-emphasis">${data.pricing[2].price}</span>
            </div>
         </div>
         <div class="d-flex justify-conten-between g-5 mt-5">
         <div class="border ml-5 p-3">
              <h5>Features</h5>
              <ul class="text-mute">
                   <li>${data.features[1].feature_name}</li>
                   <li>${data.features[2].feature_name}</li>
                   <li>${data.features[3].feature_name}</li>  
              </ul>
         </div>
         <div class="border ms-5 p-3">
              <h5>Intergations</h5>
              <ul class = "text-muted">
                   <li>${data.integrations[0]}</li>
                   <li>${data.integrations[1]}</li>
                   <li>${data.integrations[2]}</li> 
              </ul>
         </div>
      </div>
          </div>
        </div>
            
            </div>
            <div class="col-5 ms-auto border "> 
            <img " src="${data.image_link[0]}" alt="" style="width: 250px; height: 200px;">
            
            
            
            </div>
          </div>
           
          
          `;
     }

     document.getElementById('seeMore').addEventListener('click',function(){
          
          loadApi()
     })
     loadApi(12);
 
                                        
                                       
 