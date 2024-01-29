/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    "name": "Felipe",
    "photo": "images/profile.jpg",
    "favoriteFoods": [
        "hamburger",
        "pizza",
        "sushi",
        "acai",
        "tacaca"
    ],
    "hobbies": [
        "bingewatching",
        "gaming",
        "projects",
        "gym"
    ],
    "placesLived": [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    'place': 'Kentucky',
    'length': '1 years'
});
myProfile.placesLived.push({
    'place': 'Amazonas',
    'length': '2 years'
});
myProfile.placesLived.push({
    'place': 'Sao Paulo',
    'length': '17 years'
});

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.getElementById("photo").setAttribute('src', myProfile.name); 
document.getElementById('#photo').setAttribute('alt', myProfile.name);

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


