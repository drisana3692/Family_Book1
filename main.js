var images = ["https://images-na.ssl-images-amazon.com/images/I/51wZfvZev-L._SY465_BO1,204,203,200_.jpg","https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-person-character-vector-illustration-185480506.jpg","https://thumbs.dreamstime.com/b/best-mom-ever-black-vector-illustration-cartoon-198983581.jpg","https://previews.123rf.com/images/reginast777/reginast7771905/reginast777190500039/129328436-cute-cartoon-baby-girl-with-pink-bow.jpg","https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6"]
names = ["Family Book","Pablo Biswas", "Sumi Biswas", "Aaditri Biswas", "Drisana Biswas"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
