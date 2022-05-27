import "./style.css";
let url =
  "https://api.unsplash.com/photos/?client_id=RAwyi7P5k2ysyEe3ZgMXrMmb45zWztvwL9_fbEvLHso&page=1";
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  appendData(data)
}
getData();

function appendData(data) {
  data.map((e) => {
    let box = document.createElement("div");
    box.className = "box";
    let imgDiv = document.createElement("div");
    imgDiv.className="imgDiv"
    let img = document.createElement("img");
    img.src=e.urls.small
    img.className="images"
    let bot = document.createElement("div");
    imgDiv.append(img);
    box.append(imgDiv,bot);
    document.getElementById("container").append(box);
  });
}
