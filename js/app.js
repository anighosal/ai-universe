const loadAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showAllData(data.data));
};

const showAllData = (data) => {
  // console.log(data);
  //   step-1 container element
  const toolsContainer = document.getElementById("tools-container");
  data.tools.slice(0, 6).forEach((singleTool) => {
    console.log(singleTool);
    // step-2 create child for each element
    const toolDiv = document.createElement("div");
    toolDiv.classList.add("col");

    // step-3 set content of the child
    toolDiv.innerHTML = `
    <div class="card h-100 rounded-3">
    <img src="${singleTool.image}" class="card-img-top p-3 img-fluid" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Features</h5>
      <small class="text-muted">1. Natural language processing</small> <br>
      <small class="text-muted">2. Contextual understanding</small> <br>
      <small class="text-muted">3. Text generation</small>
      <hr>
     <div class = "d-flex justify-content-between">
        <div> <h5 class="card-title">${singleTool.name}</h5>
        <small class="text-muted">${singleTool.published_in}</small></div>

        <i class="fas fa-arrow-right text-danger mt-4" onclick="showToolDetails('${singleTool.id}')" data-bs-toggle="modal"
        data-bs-target="#exampleModal"></i>
     
    
      
      
      
       

    </div>
    
    
  </div>
    `;
    toolsContainer.appendChild(toolDiv);
  });
};

const loadToolDetails = (id) => {
  const url = `  https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showToolDetails(data.data));
};

const showToolDetails = (toolDetail) => {};

loadAllData();
