var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var removeAll = document.querySelector(".remove-all");

var tags = ["Tam", "Dong"];

function render() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
        ${tag}
        <i class="fas fa-times" onclick = "removeTag(${i})"></i>
    </li>`;
  }
  content.appendChild(input);
  input.focus();
}
function removeTag(index) {
  tags.splice(index, 1);
  render();
}
render();

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    tags.push(input.value.trim());
    render();
    input.value = "";
  }
});

removeAll.addEventListener('click', function(){
    tags = []
    render()
})
