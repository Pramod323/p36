var foodStockRef;
var feedDog;
var addFood;

class Food{
    constructor(){
        this.milk = loadImage("images/Milk.png");
    }

    getFoodStock(){
        foodStockRef = database.ref('Food');
        foodStockRef.on("value", function (data) {
            foodStock = data.val();
        })
    }

    feedDogButton(){
        feedDog = createButton("Feed Dog");
        feedDog.position(350,60);
        feedDog.size(100);
    }

    addFoodButton(){
        addFood = createButton("Add Food");
        addFood.position(550,60);
        addFood.size(100);
    }

    addFoodFunction(){
        addFood.mousePressed(abcde);

        function abcde(){
            foodStock++
            database.ref('/').update({
                Food: foodStock
            })
        }
    }

    updateFoodStock(){
        feedDog.mousePressed(abcd);
        function abcd(){
            efg();
            writeStock(foodStock);
            dog.addImage(happyDogImage);
            database.ref('/').update({
                LastFed: hour()
            })
        }

        function writeStock(x){
            if(x<=0){
              x=0   
            }else{
              x = x - 1;
            }
            database.ref('/').update({
              Food:x
            })
        }
    }

    display(){
        var x=47,y=157;
      
        if(foodStock!=0){
            for(var i=0;i<foodStock;i++){
            if(i%10==0){
                x=47;
                y=y+50;
            }
            image(this.milk,x,y,50,50);
            x=x+40;
            }
        }
    }

}