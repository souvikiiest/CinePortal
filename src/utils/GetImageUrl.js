function GetURL(name){
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}
function GetImage(name){
    return new URL(`../assets/${name}`, import.meta.url).href;
}
function GetIcons(name){
    return new URL(`../assets/icons/${name}`, import.meta.url).href;
}
export { GetIcons, GetImage, GetURL };

