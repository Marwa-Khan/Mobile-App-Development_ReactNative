const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let inputValue=document.getElementById("input-item");
var count=0;

function newTodo() {
  /*Add Logic for creating a new Todo Item. */
  
  /*Below lines can be used to updated the data on frontend */
  if (inputValue.value==''){
  
    alert("Add items");
    }
  else{
      list.innerHTML +=`<li><input type="checkbox" name="name" value="item_name" id="checkBoxes" ><label> ${inputValue.value} </label>
      <button id="delete" onClick="singleTodo()">Delete</button></li>
      <br>`;
      
      
  inputValue.value='';
  count++;
  itemCountSpan.innerHTML =count ;
  uncheckedCountSpan.innerHTML =count;
  } 
}






// document.getElementsByTagName
function removeTodo() {
  /*Add Logic for removing an existing TODO Item */
  /*Below lines can be used to updated the data on frontend */
  list.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";
  count=0;
  itemCountSpan.innerHTML = itemCountSpan.innerHTML =count;
  uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML =count;
  // this.parentNode.style.display = "none"
  // alert(this.parentNode);
  
}

function singleTodo(){
  count--;
  itemCountSpan.innerHTML  =count;
  uncheckedCountSpan.innerHTML  =count;
  this.document.querySelector('li').remove();
}