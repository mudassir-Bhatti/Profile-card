document.addEventListener("DOMContentLoaded", () => {
    const body=document.querySelector("body");
    const editBtn = document.getElementById("edit-btn");
    const themeBtn = document.querySelector("#theme-btn");
    const name = document.getElementById("name");
    const bio = document.getElementById("bio");
    const about = document.getElementById("about");
    const profilePic = document.querySelector("#profile-pic img");

   
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    let editing = false;

    editBtn.addEventListener("click", () => {
        if (!editing) {
            
            editBtn.textContent = "Save Profile";

           
            name.contentEditable = "true";
            bio.contentEditable = "true";
            about.contentEditable = "true";
            name.style.borderBottom = "1px dashed black";
            bio.style.borderBottom = "1px dashed black";
            about.style.borderBottom = "1px dashed black";

           
            profilePic.style.cursor = "pointer";
            profilePic.addEventListener("click", () => fileInput.click());

            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profilePic.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };
 
            editing = true;
        } else {
           
            editBtn.textContent = "Edit Profile";

            name.contentEditable = "false";
            bio.contentEditable = "false";
            about.contentEditable = "false";
            name.style.borderBottom = "none";
            bio.style.borderBottom = "none";
            about.style.borderBottom = "none";

            profilePic.style.cursor = "default";
            editing = false;
        }
    });

    const card= document.querySelector("#card").style;
    let flag=1;

    themeBtn.addEventListener("click",()=>{
        if(flag==1){
            body.style.backgroundColor="#232323";
        card.backgroundColor="#4f4f4f8d"
        card.boxShadow="none";
        body.style.color="white";
        bio.style.color="#b8b8b8ff";
        about.style.color="#d6d6d6ff";
        profilePic.src="/Images/Default-Profile-D.png";
        editBtn.style.backgroundColor="inherit";
        editBtn.background="none";
        themeBtn.style.backgroundColor="inherit";
        profilePic.style.border="none";
        

        }else if(flag==2){
        body.style.backgroundColor="#29524A";
        profilePic.src="/Images/Default-profile.png";
        card.backgroundColor="#94A187";
        bio.style.color="#383737ff";
        about.style.color="#232222ff";
        body.style.color="black";
        


        }else if(flag==3){
            body.style.backgroundColor="#e0dfdf"
            card.backgroundColor="white";
            card.boxShadow="0px 0px 30px 0.1px";
            body.color="White";
            bio.style.color="rgba(78, 78, 78, 0.756)";
        
        }



        // flag++;
        // if(flag==4){
        //     flag=1;
        //     return;
        // }
        flag = flag < 3 ? flag + 1 : 1;
        
        

        
    })
});
