import "./index.css"

let container = document.getElementById("container");
let noteArr = JSON.parse(localStorage.getItem("notes")) || [];
document.getElementById("save").addEventListener("click", function () {
  let note = document.getElementById("textarea").value;
  noteArr.push(note);
  // console.log(noteArr);
  container.innerHTML=null
  append();
  localStorage.setItem("notes", JSON.stringify(noteArr));
});
append();
function append() {
  noteArr.map((el) => {
    let box= document.createElement("div");
    box.id="box"
    let div = document.createElement("div");
    div.innerText = el;
    div.id="note"
    let del = document.createElement("button");
    del.innerText="X"
    del.id="del"
    del.addEventListener("click",function(){
      let index = noteArr.indexOf(el)
      noteArr.splice(index,1)
      localStorage.setItem("notes", JSON.stringify(noteArr));
      container.innerHTML=""
      append();
    })
    box.append(div,del);
    container.append(box)
  });
}
