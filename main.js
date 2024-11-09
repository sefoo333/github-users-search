let search = document.getElementById("search");
let btn = document.getElementById("btn");
let cards = document.querySelectorAll("#card");
let links = document.querySelectorAll("#link");

btn.addEventListener("click", function () {
    fetch(`https://api.github.com/users/${search.value}`).then((res) => res.json()).then((data) => {
        document.querySelector("img").src = data.avatar_url;
        document.getElementById("login").innerHTML = data.name;
        document.getElementById("name").innerHTML = `@${data.login}`;
        document.getElementById("create_time").innerHTML = `Joined ${data.created_at.slice(0, 10)}`;

        document.getElementById("bio").innerHTML = data.bio === null || data.bio === "" ? "The account don't have bio" : data.bio;

        cards[0].innerHTML = data.public_repos;
        cards[1].innerHTML = data.followers;
        cards[2].innerHTML = data.following;


        links[0].innerHTML = data.location === null || data.location === "" ? "Not availbale" : data.location;
        links[1].innerHTML = data.twitter_username === null || data.twitter_username === "" ? "Not availbale" : data.twitter_username;
        links[2].innerHTML = data.company === null || data.company === "" ? "Not availbale" : data.company;
        links[3].innerHTML = data.blog === null || data.blog === "" ? "Not availbale" : data.blog;
    })
})