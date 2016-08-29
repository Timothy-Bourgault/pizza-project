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
    var size = parseInt($("#selectSize1").val());
    var crust = parseInt($("#selectCrust1").val());
    var sauce = parseInt($("#selectSauce1").val());
    var cheese = parseInt($("#selectCheese1").val());
    var protein = parseInt($("#selectProtein1").val());
    var veggie = parseInt($("#selectVeggie1").val());
    var order = ($("input:radio[name='orderType']:checked").val());
    var toppings = [];
  })
})
