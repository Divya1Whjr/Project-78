var images=["Desert.jpg", "Kola.jpg"];
var Names=["Bhargavi", "Divya"];
var i=0;
function update(){
    i++;
    var no_Family_members=2;
    if(i>no_Family_members){
        i=0;
    }
    var updated_image=images[i];
    var updated_names=Names[i];
    document.getElementById("Family_images").src=updated_image;
    document.getElementById("Member_names").innerHTML=updated_names;
}