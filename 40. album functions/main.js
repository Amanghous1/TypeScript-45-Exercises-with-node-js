// define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating three variables with different values
var album1 = make_album("Artist no. 1", "Album title 1");
var album2 = make_album("ABEEHA", "AMAN");
// calling a make album function with third parameter
var album3 = make_album("Ahmed", "albumtitle3", 100);
// printing values of our objected by function
console.log(album1);
console.log(album2);
console.log(album3);
