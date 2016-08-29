// Business Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

function PatronInfo(name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;
}

// User Interface Logic
$(document).ready(function(){
  $("form#option_fields").submit(function(event){
    event.preventDefault();
  })
})
