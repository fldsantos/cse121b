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

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute('src', myProfile.photo); 
document.getElementById('photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

