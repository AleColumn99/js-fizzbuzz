//for che stampa i numeri
//se 3n = Fizz
//se 5n = Buzz
//se 3n E 5n = FizzBuzz

var print = "";
var num;
for(var i=0; i<100; i++){
  num = i + 1;
  if(num%3 == 0){
    if(num%5 != 0){
      print = "Fizz"
    }else{
      print = "FizzBuzz"
    }
  }else if(num%5 == 0){
    print = "Buzz";
  }else{
    print = num;
  }
  console.log(print);
}