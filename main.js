var images = ["https://toppng.com/uploads/preview/family-clip-art-115507115399o71qs79d8.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WiLWJs0jY9fM52CbKP0uR-j9YcCuDp-eWw&usqp=CAU", "https://www.pngfind.com/pngs/m/220-2205011_family-daddy-3-555px-dad-clipart-hd-png.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIXjpRuoj6Yh0_TzmtdDKJ8dae1okK380WA&usqp=CAU"]
var names = ["Family Page", "Shabbih Reza", "Nazish Farhan", "Aashaz Farhan"];

var i = 0;

function update(){
    i++;
    var numberOfFamilyMembersInArray = 3;
    if (i > numberOfFamilyMembersInArray){
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("memberImage").src= updatedImage;
    document.getElementById("memberName").innerHTML = updatedName;
}