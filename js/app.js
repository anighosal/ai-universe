const loadAllData = () => {
  const url = ` https://openapi.programming-hero.com/api/ai/tools`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showAllData(data.data.tools));
};

const showAllData = (tools) => {
  console.log(tools);
  //   step-1 container element
  const toolsContainer = document.getElementById("tools-container");
  tools.slice(0, 6).forEach((singleTool) => {
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
            <i onclick="loadToolDetails('${singleTool.id}')" class="fas fa-arrow-right text-danger mt-4" data-bs-toggle="modal"
            data-bs-target="#exampleModal"></i>
        </div>
      </div>
        `;
    toolsContainer.appendChild(toolDiv);
  });
};

// modal
const loadToolDetails = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/ai/tool/01`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showToolDetails(data.data));
};

const showToolDetails = (tool) => {
  console.log(tool);
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = tool.tool_name;

  document.getElementById("modal-body").innerHTML = `

<div class= "d-lg-flex w-100  gap-2 ">

<div class="card bg-danger-subtle">
<h5 class= "py-2 px-2">${tool.description}</h5>
<div class="card-body">
<div class="row row-cols-3">
<div class= >
<p class="card-text">${tool.pricing[0].price}<br>
${tool.pricing[0].plan}</p>
</div>
<div>
<p class="card-text">${tool.pricing[1].price}<br>
${tool.pricing[1].plan}</p>
</div>
<div class="container text-center">
<p class="card-text">${tool.pricing[2].price}<br>
${tool.pricing[2].plan}</p>
</div>
</div>
 
</div>
</div>

<div class="card ">
<button type="button" class="btn btn-danger z-index po">94% accurancy</button>
<img class="card-img-top p-3 img-fluid" src="${tool.image_link[1]}
" alt="" srcset="">
<div class="card-body">
  <h6 class="card-text text-black text-center">${tool.input_output_examples[0].input}</h6>
  <small class="card-text text-black text-center">${tool.input_output_examples[0].output}</small>
  
</div>
</div>
</div>




     `;
};

// modal end
// document.getElementById();
// document
//   .getElementById("btn-show-all")
//   .addEventListener("click", function () {}); */

loadAllData();
loadToolDetails();
