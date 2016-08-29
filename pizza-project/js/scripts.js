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

Pizza.prototype.sizePriceUpdate = function(size) {
  if (size === 1) {
    orderSummary[0].price += 6;
  } else if (size === 2) {
    orderSummary[0].price += 8;
  } else if (size === 3) {
    orderSummary[0].price += 10;
  } else if (size === 4) {
    orderSummary[0].price += 12;
  } else if (size === 5) {
    orderSummary[0].price += 14;
  }

}

Pizza.prototype.toppingsPriceUpdate = function() {
  orderSummary[0].toppings.forEach(function(x) {
    if (x === 6) {
      orderSummary[0].price += 4;
    } else if(x === 7) {
      orderSummary[0].price += 6;
    } else if(x === 8) {
      orderSummary[0].price += 8;
    } else if(x === 9) {
      orderSummary[0].price += 10;
    } else if(x === 10) {
      orderSummary[0].price += 2;
    } else if(x === 11) {
      orderSummary[0].price += 2;
    } else if(x === 12) {
      orderSummary[0].price += 2;
    } else if(x === 13) {
      orderSummary[0].price += 2;
    } else if(x === 14) {
      orderSummary[0].price += 2;
    } else if(x === 15) {
      orderSummary[0].price += 2;
    } else if(x === 16) {
      orderSummary[0].price += 3;
    } else if(x === 17) {
      orderSummary[0].price += 4;
    } else if(x === 18) {
      orderSummary[0].price += 5;
    } else if(x === 19) {
      orderSummary[0].price += 6;
    } else if(x === 20) {
      orderSummary[0].price += 7;
    } else if(x === 21) {
      orderSummary[0].price += 8;
    } else if(x === 22) {
      orderSummary[0].price += 0;
    } else if(x === 23) {
      orderSummary[0].price += 3;
    } else if(x === 24) {
      orderSummary[0].price += 4;
    } else if(x === 25) {
      orderSummary[0].price += 5;
    } else if(x === 26) {
      orderSummary[0].price += 6;
    } else if(x === 27) {
      orderSummary[0].price += 7;
    } else if(x === 28) {
      orderSummary[0].price += 8;
    } else if(x === 29) {
      orderSummary[0].price += 9;
    } else if(x === 30) {
      orderSummary[0].price += 0;
    } else if(x === 31) {
      orderSummary[0].price += 2;
    } else if(x === 32) {
      orderSummary[0].price += 2;
    } else if(x === 33) {
      orderSummary[0].price += 2;
    } else if(x === 34) {
      orderSummary[0].price += 2;
    } else if(x === 35) {
      orderSummary[0].price += 2;
    } else if(x === 36) {
      orderSummary[0].price += 2;
    } else if(x === 37) {
      orderSummary[0].price += 2;
    } else if(x === 38) {
      orderSummary[0].price += 2;
    } else if(x === 39) {
      orderSummary[0].price += 0;
    } else if(x === 40) {
      orderSummary[0].price += 5;
    }
  })
}

var orderSummary = [];

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
    var name = $("#patronName1").val();
    var phone = $("#patronPhone1").val();
    var address = $("#patronAddress1").val();
    toppings.push(crust);
    toppings.push(sauce);
    toppings.push(cheese);
    toppings.push(protein);
    toppings.push(veggie);
    toppings.push(order);

    if(size === 0) {
      console.log();
    } else if ((size === 1)||(size === 2)||(size === 3)||(size === 4)||(size === 5)) {
      var pizza1 = new Pizza(size);
    }
    for (var i = 0; i < toppings.length; i++) {
      pizza1.toppings.push(toppings[i])
    }
    alert(pizza1.toppings);
    orderSummary.push(pizza1);
    pizza1.sizePriceUpdate(size);
    $("#patronName").text(name);
    $("#patronPhone").text(phone);
    $("#patronAddress").text(address);
    $("#totalHere").text("Your Pizza Total Is $" + orderSummary[0].price + ".00");
    $("#options_screen").fadeToggle();
    $("#checkout").fadeToggle();
  });
});
