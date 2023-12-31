const loadAllData = () => {
  const url = ` https://openapi.programming-hero.com/api/ai/tools`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showAllData(data.data.tools.slice(0, 6)));
};

loadAllData();

const showAllDataTogether = () => {
  const url = ` https://openapi.programming-hero.com/api/ai/tools`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showAllData(data.data.tools));
};

const showAllData = (tools) => {
  console.log(tools);
  //   step-1 container element

  const toolsContainer = document.getElementById("tools-container");
  toolsContainer.innerHTML = "";

  tools.forEach((singleTool) => {
    // console.log(tool);
    //   // step-2 create child for each element
    const toolDiv = document.createElement("div");
    toolDiv.classList.add("col");
    // step-3 set content of the child
    toolDiv.innerHTML = `
          <div class="card w-full h-96 rounded-3">
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
  // stop loader
  toggleSpinner(false);
};

// loader btn clicked

// const btnShow = document.getElementById("btn-show-all");
// start loader
const btnShow = document
  .getElementById("btn-show-all")
  .addEventListener("click", function () {
    const btnShow = document.getElementById("btn-show-all");
    const btnField = btnShow.innerText;
    toggleSpinner(true);
    loadAllData(btnField);
    showAllDataTogether(btnField);
  });

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

// load single data
const loadToolDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showToolDetails(data.data));
};
loadToolDetails();

const showToolDetails = (tool) => {
  console.log(tool);
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = tool.tool_name;

  document.getElementById("modal-body").innerHTML = `
<div class= "d-lg-flex w-full h-100 gap-1 ">
<div class="card bg-danger-subtle w-100 ">
<h5 class= "p-2">${tool.description}</h5>
<div class="card-body row">
<div class="row row-cols-lg-3 gap-2">
<p class="card-text bg-body w-[132px] rounded fw-semibold text-center text-success col ">${tool.pricing[0].price}<br>${tool.pricing[0].plan}</p>
<p class="card-text bg-body rounded fw-semibold text-warning col">${tool.pricing[1].price}<br>${tool.pricing[1].plan}</p>
<p class="card-text bg-body rounded fw-semibold text-center text-danger col">${tool.pricing[2].price}${tool.pricing[2].plan}</p>
</div>
 
</div>
<h5 class="card-title fw-semibold p-2 ">Features</h5>
<small class="text-muted text-light">2. Contextual understanding</small>
<small class="text-muted text-light">1. Natural language processing</small>
<small class="text-muted text-light">3. Text generation</small>
<h5 class="card-title fw-semibold ">integrations
</h5>
<small class="text-muted text-light">Facebook Messenger</small>
<small class="text-muted text-light">Slack</small>
<small class="text-muted text-light">Telegram</small>
</div>
<div style= "padding:5px margin-top:5px" class="card w-100 ">
<button  type="button" class="btn btn-danger z-index po">94% accurancy</button>
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
// no the best way to load show all
// document.getElementById("btn-show-all").addEventListener("click", function () {
//   toggleSpinner(true);
// });

// modal
