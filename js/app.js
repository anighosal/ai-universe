const loadAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showAllData(data.data));
};

const showAllData = (data) => {
  //   console.log(data);
  data.tools.forEach((singleTool) => {
    console.log(singleTool);
  });
};

loadAllData();
