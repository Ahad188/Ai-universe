 let obj;
const loadApi = (dataLimit) =>{
     const url = `https://openapi.programming-hero.com/api/ai/tools`
     fetch(url)
     .then(res => res.json())
     .then(data =>{
           showData(data.data.tools, dataLimit)
           obj = data.data.tools
          })
     }
//  show 6 display data
     const showData =(data, dataLimit)=>{
           
          const displayData = document.getElementById('displayData')
          if(dataLimit && data.length >= 6){
               data = data.slice(0,6)
          }
          displayData.innerHTML = ' ';
          data.forEach(element => {
               displayData.innerHTML +=`
               <div class="col" >
                 <div class="card" style="cursor: pointer;">
                   <img src="${element.image}" class="p-3 img-fluid" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">Features</h5>
                    <ol>
                    <li>${element.features[0]  }</li>
                    <li>${element.features[1]  }</li>
                    <li>${element.features[2]  }</li>
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
          spiner(false)
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
          <div class="contaoner bg-light bg-gradient p-3">
               <div class="row g-4">
                    <div class="col-10 col-md-6 mx-auto border">
                    <div class="card-body">
                    <p class="card-text"> <p class="card-text text-center fw-bold"> ${data.description}</p></p>
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
               <div class="d-flex">
              <ul class="text-mute">
                        <h5>Features</h5> <br/>
                        <li>${data.features[1].feature_name}</li>
                        <li>${data.features[2].feature_name}</li>
                        <li>${data.features[3].feature_name}</li>  
               </ul>
                   <ul class = "text-muted">
                        <h5>Intergations</h5> <br/>
                        <li>${data.integrations[0]}</li>
                        <li>${data.integrations[1]}</li>
                        <li>${data.integrations[2]}</li> 
                   </ul>
                         </div>
                         </div>
                    </div>
                    <div class="col-10 col-md-6 mx-auto border">
                    <div class="card mt-3" style="width: 28rem;">
                         <img src="${data.image_link[0]}" class="card-img-top" alt="...">
                         <div class="card-body">
                         <p class="card-text text-center">${data.input_output_examples ? data.input_output_examples[0].input : 'No! Not Yet! Take break!!!'}</p>
                         <p class="card-text text-center">${data.input_output_examples ? data.input_output_examples[0].output : 'No! Not Yet! Take break!!!'}</p>
                         
                         </div>
                         <div class="accuracy">${(data.accuracy.score !== null) ? `<button>${Math.floor(data.accuracy.score * 100)}% accracy</button>` : " " }</div>
                    </div>
                    </div>
               </div>
          </div>
          `;
     }

     document.getElementById('seeMore').addEventListener('click',function(){
          loadApi()
          spiner(true)
     })
     loadApi(12);

      const spiner= (isloder)=>{
          const loder = document.getElementById('loder');
          if(isloder){
               loder.classList.remove('d-none')
          }else{
               loder.classList.add('d-none')
          }
      }
     
      document.getElementById('sort').addEventListener('click',function(){
           sortData(obj)
          })
          
          function sortData (data){
               data.sort((a,b)=> new Date(a.published_in) - new Date(b.published_in))
               showData(data)
          }