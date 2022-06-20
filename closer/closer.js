var my_name = "niraj"
console.log(my_name);

function dispaly_name() {
    console.log(my_name);
    var age = 24
    function display_age() {
        console.log(my_name);
       
        console.log(age);
    }display_age()
    console.log(my_name);
}dispaly_name()

