
let story = document.querySelector("storyEntry");

let paragraph = document.querySelector("#paragraph");
let heading = document.querySelector("#heading");
let image = document.querySelector("#image");
let video = document.querySelector("#video");
let submit = document.querySelector("input[type=submit]");

// const paragraphFunc=()=>{
//     // 
// }
// const headingFunc=()=>{
//     // 
// }
// const imageFunc=()=>{
//     // 
// }
// const videoFunc=()=>{
//     // 
// }
const submitFunc=(event)=>{
    // 
    document.querySelector("#form").classList.add("hide");
    document.querySelector("span").classList.remove("hide")
}
const storyElement=(element)=>document.createElement(`${element}`).classList.add(".storyEntryElements");


paragraph.addEventListener("click", ()=>storyElement("textArea"));
heading.addEventListener("click", ()=>storyElement("h3"));
image.addEventListener("click", ()=>storyElement("img"));
video.addEventListener("click", ()=>storyElement("video"));
submit.addEventListener("click", ()=>{
    submitFunc(event)
});

