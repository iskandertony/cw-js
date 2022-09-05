const baseURL = "https://api.sampleapis.com/cartoons/cartoons2D";
function fetchData() {
  let localData = localStorage.getItem("data");
  if (localData) {
    const localArray = JSON.parse(localData);
    displayData(localArray);
    // console.log("localData1", localData);
  } else {
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log("Data2", data);
        localStorage.setItem("data", JSON.stringify(data));
        displayData(data);
      });
  }
}

fetchData();

function displayData(data) {
  const container = document.querySelector("pre");
  let result = "";
  data.forEach((element) => {
    // console.log("element", element);
    result += `<div class="parent">
      <div class="child"  id="title">${element.title}</div>
      <div class="child"  >${element.genre}</div>
      <div class="child"  >${element.episodes}</div>
      <div class="child"  >${element.creator}</div>
      </div>`;
    container.innerHTML = result;
  });
}

function search() {
  let input = document.getElementById("input").value;
  console.log(input);
  let localData = localStorage.getItem("data");
  const localArray = JSON.parse(localData);
  let filterData = localArray.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );
  displayData(filterData);
}

function selectName() {
  let select = document.getElementById("select").value;
  let localData = localStorage.getItem("data");
  const localArray = JSON.parse(localData);
  // // let name = localArray[0].title;

  // console.log(name);
}

// let cartoon = [
//   { name: `a`, age: 1 },
//   { name: `b`, age: 2 },
//   { name: `c`, age: 3 },
//   { name: `e`, age: 4 },
//   { name: `t`, age: 5 },
//   { name: `asd`, age: 18 },
//   { name: `asafd`, age: 12 },
// ];
// let result = document.getElementById("result");
// let box = "";
// cartoon.forEach((element) => {
//   box += `<div>
//     <div>${element.name}</div>
//   </div>`;
// });
// result.innerHTML = box;
