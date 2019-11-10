
// const mongo=require("mongodb");
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://chinguv12:<toucans05>@tutorial-inibo.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const newELement = document.createElement("div");
// let uploadButton = document.createElement("input");
const x = document.createElement("span")
x.innerHTML = "&times;";
x.classList.add("x");
let text = document.createElement("p");
text.innerHTML="Drag And Drop Your Files Here";
let story = document.querySelector("#storyEntry");
let paragraph = document.querySelector("#paragraph");
let image = document.querySelector("#image");
let video = document.querySelector("#video");
let submit = document.querySelector("#continue");
let completedStory = document.querySelector(".completedStory");
let thankyou = document.createElement("div")

// let locale = document.querySelector("#locale")

// const staticPages =(name,location,story)=>{
//     this.location = location;
//     this.story = story;
//     this.name = name;
// };

let storyInfo = {};

const submitFunc=(event)=>{
    storyInfo.name = document.querySelector("input[placeholder=Name]").value;
    // storyInfo.image = document.querySelector("input[placeholder=Name]").value;
    storyInfo.location = document.querySelector("#place").value;
    console.log(storyInfo)
    event.preventDefault();
    document.querySelector("#form").classList.add("hide");
    story.classList.remove("hide");
    
}

const storyElement=(element)=>{
    let pELement  = document.createElement(`${element}`)
    document.querySelector("#storyEntry").appendChild(pELement);
    pELement.classList.add("storyEntryElements");
    // pELement.setAttribute("input", ()=>{
    //     // this.style.height = "";
    //     this.style.height = this.scrollHeight + 3 + "px";
    // })
}
const handleFiles =(files,elem)=>{
    let output = document.createElement(`${elem}`);
    let reader = new FileReader();
    reader.onload =()=>{
        let dataurl =  reader.result;
        output.src = dataurl;
        output.classList.add("shown");
    }
    reader.readAsDataURL(files[0]);
    document.querySelector("#storyEntry").appendChild(output);
    newELement.remove();
    // console.log(files.target)
};

const storyFile = (elem) =>{

    document.querySelector("#storyEntry").appendChild(newELement);
    text.classList.add("text");
    newELement.classList.add("popup");
    // uploadButton.setAttribute("type","file");
    // uploadButton.setAttribute("action",handle);
    newELement.setAttribute("draggable", true);
    // newELement.appendChild(uploadButton);
    newELement.appendChild(text);
    newELement.appendChild(x);
    x.addEventListener("click", ()=>{
        newELement.remove()
    });

    // story.style.visibility = "visible"
    
    //preventDefaults to allow drop
    let preventDefaults=(ev)=>{
        ev.preventDefault();
        ev.stopPropagation();
    };
    //add visual clue
    let highlight=(ev)=>{
        newELement.classList.add("highlight")
    };
    //remove visual highlight when target area isn't selected by user
    let nohighlight=(ev)=>{
        newELement.classList.remove("highlight")
    };
    let drop =(ev)=>{
        let dt = ev.dataTransfer;
        let files = dt.files;
        // continue
        
        
        handleFiles(files,elem)
        
    }

    
    //drag api
    ["dragenter", "dragover", "dragleave", "drop"].forEach((ev)=>
        newELement.addEventListener(ev, preventDefaults, false)
    );
    ["dragenter", "dragover"].forEach((ev)=>{
        newELement.addEventListener(ev, highlight, false)
    });
    ["dragleave", "drop"].forEach((ev)=>{
        newELement.addEventListener(ev, nohighlight, false)
    });

    newELement.addEventListener("drop",drop,false)

};



paragraph.addEventListener("click", ()=>storyElement("textarea"));
image.addEventListener("click", ()=>storyFile("img"));
video.addEventListener("click", ()=>storyFile("video"));
submit.addEventListener("click", ()=>{
    submitFunc(event)
});

// const writePage=()=>{
//     let xmlhttp = new XMLHttpRequest();
//     let content = `<html><head> <meta charset=\"uft-8\"/><title>${storyInfo.location}</title> </head><body>${storyInfo.story}<body></html>`;
//     xmlhttp.open("GET",`writepage.php?content=${content}`,true);
//     xmlhttp.send();
// }

completedStory.addEventListener("click", ()=>{
    storyInfo.story = document.querySelector("#storyEntry");
    document.body.appendChild(thankyou)
    thankyou.classList.add("popup2");
    thankyou.innerHTML="Thank you!!"
    // console.log(storyInfo.location);
    
});

