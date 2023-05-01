// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";

const clientId = "5064977dfbe54808955e1f6a00b3b37d";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    const artist = await fetchArtist(accessToken);
    console.log(profile)
    console.log(artist)
    populateUI(profile);
    populatedUI(artist);
} 



async function fetchProfile(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

async function fetchArtist(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/artists/3ApUX1o6oSz321MMECyIYd", {
       method: "GET", headers: { Authorization: `Bearer ${token}` }
   });

   return await result.json();
}


function populateUI(profile: any) {
    document.getElementById("displayName")!.innerText = profile.display_name;
    if (profile.images[0]) {
        const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        document.getElementById("avatar")!.setAttribute("src", profileImage.src);
    }
    document.getElementById("id")!.innerText = profile.id;
    document.getElementById("email")!.innerText = profile.email;
    document.getElementById("uri")!.innerText = profile.uri;
    document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url")!.innerText = profile.href;
    document.getElementById("url")!.setAttribute("href", profile.href);
    document.getElementById("imgUrl")!.innerText = profile.images[0]?.url ?? '(no profile image)';
}

function populatedUI(artist: any) {
   document.getElementById("name")!.innerText = artist.name;
    if (artist.images[0]) {
        const artistImage = new Image(200, 200);
        artistImage.src = artist.images[0].url;
        document.getElementById("avatars")!.setAttribute("src", artistImage.src);
   }
    document.getElementById("genre")!.innerText = artist.genres;
    document.getElementById("popularity")!.innerText = artist.popularity;
    document.getElementById("artistUri")!.innerText = artist.uri;
    document.getElementById("artistUri")!.setAttribute("href", artist.external_urls.spotify);
    document.getElementById("artistUrl")!.innerText = artist.href;
    document.getElementById("artistUrl")!.setAttribute("href", artist.href);
}

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
   
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});



