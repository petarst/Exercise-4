var movies = ["Conan", "Star wars", "Speed", "Terminator"];
var movieName ="";
var previewElementArray = function(movies) {
  "use strict";
var html = "";
movies.forEach(function(content) {
html += "<li>" + content + "</li>";
});
return html;
};
function addMovies_To_Selectbox(i, p) {
  "use strict";
    $("#listOfMovies").append($("<option></option>").val(p).html(p));
    }
function addMovies_To_FavoriteBox(i, p) {
  "use strict";
    $("#listOfFavoriteFilms").append($("<option></option>").val(p).html(p));
    }

    function input_Name_Of_Movies(){
      "use strict";
$.each(movies, addMovies_To_Selectbox);
$.each(movies, addMovies_To_FavoriteBox);
  }
function defaultMovies() {
  "use strict";
  presentLocalStorage();
  presentFavoriteMoviesLocalStorage();
  $("#demo").html(previewElementArray(movies));
    input_Name_Of_Movies();
    refresh_List_Of_Favorite_Movies ();
}
function addLocalStorage (){
  "use strict";
  localStorage.dataArray=JSON.stringify(movies);
}
function presentLocalStorage(){
    "use strict";
  if(localStorage.dataArray){
    movies=JSON.parse(localStorage.dataArray);
  }
}
function addFavoriteMoviesLocalStorage (){
  "use strict";
  var favoriteHelperArray=[];

$.each(favoriteListFilm,function(index, value) {
  favoriteHelperArray.push({name:favoriteListFilm[index]});
});
localStorage.dataFavoriteArray=JSON.stringify(favoriteHelperArray);
}
function presentFavoriteMoviesLocalStorage(){
    "use strict";
  var favoritePresentHelperArray=[];
  if(localStorage.dataFavoriteArray){
    favoritePresentHelperArray=JSON.parse(localStorage.dataFavoriteArray);
    favoriteListFilm=[];
    //Here I have a problem. I use "for" loop, because with Jquery my code don't work (The result is object).
    for (var i=0 ; i<favoritePresentHelperArray.length ; i+=1){
    favoriteListFilm.push(favoritePresentHelperArray[i].name);
  }
}
}
function save1() {
  "use strict";
        var theArray = [];
        $("li", "#favoriteDemo").each(function (count, item) {
            theArray[count] = {"name":$(this).text()};
        });
        var dataFavoriteArray=JSON.stringify(theArray);
        localStorage.setItem("dataFavoriteArray", dataFavoriteArray);
      }
function fullSort(first_Element, second_Element) {
  "use strict";
  var first=first_Element.toLowerCase();
  var second=second_Element.toLowerCase();
        if (first == second){
        return 0;
     }
     else{
       return (first<second) ? -1 : 1;
     }
}
function addMovie(){
"use strict";
var insMovie="";
insMovie=$("#addNewMovie").val();
        if (insMovie===""){
            alert ("Your text is empty");
        }

        else if(movies.indexOf(insMovie)!==-1 ){
            alert("This text has already");
        }
        else
movies.push(insMovie);
movies.sort(fullSort);
movieName="";
addLocalStorage();
refreshArray();
}

function refreshArray(){
    $("#demo").html(previewElementArray(movies));
    $("#favoriteDemo").html(preview_Element_Of_Favorite_Array(favoriteListFilm));
    $("#addNewMovie").val("");
    $("#listOfMovies").empty();
    $("#listOfFavoriteFilms").empty();
    input_Name_Of_Movies();
    presentLocalStorage();
}
function removeMovie(){
var remove_from_List_Of_Movie = $("#listOfMovies").prop("selectedIndex");
  movies.splice(remove_from_List_Of_Movie,1);
  addLocalStorage();
  movieName="";
  refreshArray();
}
var favoriteListFilm = [];
var favoriteFilmName="";
var preview_Element_Of_Favorite_Array = function(favoriteListFilm) {
var html = "";
favoriteListFilm.forEach(function(favorite_Content) {
html += "<li>" + favorite_Content + "</li>";
});
return html;
};
function Movies_To_FavoriteBox_To_Remove(i, p) {
  "use strict";
    $("#listOfFavoriteFilmsToRemove").append($("<option></option>").val(p).html(p));
  }

function add_To_Favorite_Movies() {
  "use strict";
    $("#favoriteDemo").html(preview_Element_Of_Favorite_Array(favoriteListFilm));
    $.each(favoriteListFilm,Movies_To_FavoriteBox_To_Remove );
  $(function() {
    $( "#favoriteDemo" ).sortable(
      {
      update:function(event,ui){
        save1();
      }
    });
    $( "#favoriteDemo" ).disableSelection();
  });
}
function refresh_List_Of_Favorite_Movies (){
  favoriteFilmName="";
  $("#listOfFavoriteFilmsToRemove").empty();
  presentFavoriteMoviesLocalStorage();
  add_To_Favorite_Movies();
}
function addFavoritesFilm(){
  var insert_Element_To_Favorite_Movies="";
insert_Element_To_Favorite_Movies = $("#listOfFavoriteFilms").val();
        if(favoriteListFilm.indexOf(insert_Element_To_Favorite_Movies)!==-1 ){
            alert("This text has already");
        }
        else
  favoriteListFilm.push(insert_Element_To_Favorite_Movies);
  insert_Element_To_Favorite_Movies="";
  addFavoriteMoviesLocalStorage ();
  refresh_List_Of_Favorite_Movies ();
}
function removeFavoritesFilm(){

var remove_from_Favorite_List_Of_Movie = $("#listOfFavoriteFilmsToRemove").prop("selectedIndex");
  favoriteListFilm.splice(remove_from_Favorite_List_Of_Movie,1);
  addFavoriteMoviesLocalStorage ();
  refresh_List_Of_Favorite_Movies ();
}