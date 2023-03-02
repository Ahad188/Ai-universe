 const loadApi = () =>{
     const url = `https://openapi.programming-hero.com/api/ai/tools`
     fetch(url)
     .then(res => res.json())
     .then(data => showData(data.data.tools))
 }
//  show 6 display data
     const showData =(data)=>{
          // console.log(data)
          const displayData = document.getElementById('displayData')
          data.forEach(element => {
               console.log(element);
               displayData.innerHTML +=`
               <div class="col">
                 <div class="card">
                   <img src="${element.image}" class="card-img-top p-3" alt="...">
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
                    <span class="fs-3">&#187;</span>
                    </div>
                   </div>
                 </div>
               </div>
               `;
          });
     }


 loadApi();
 
                                        
                                       
 