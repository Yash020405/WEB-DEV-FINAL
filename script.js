let postBtn = document.querySelector('.btn-post');
let deleteBtn = document.querySelector('.btn-delete');
let tweet = document.querySelector('.tweet');
let textArea = document.querySelector('.textarea-cont');
let mainCont = document.querySelector('.main-cont');
let commentBtn = document.querySelector('.btn-comment');
let editBtn = document.querySelectorAll('.btn-edit');


postBtn.addEventListener('click',function(e){
        if(textArea.value == ""){
            textArea.value = "";
            alert("Please Enter some task!");
            return;
        }
        generateTicket(textArea.value);
        textArea.value = "";
})


function generateTicket(task){
    let ticketCont = document.createElement("div");
    ticketCont.className = "tweet-cont";
    ticketCont.innerHTML = `<div class="profile-cont">
    <div class="profile-top">
        <img class="profile-pic" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
        <div class="profile-name">Yash Agarwal</div>
        <div class="profile-id">@Yashsd</div>
        <button class="btn-edit"><img src ="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661"></button>
        <button class="btn-delete"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643"></button>
    </div>
    <div class="ticket-area">hsdbjhgbadjsdbj</div>
    <div class="profile-bottom">
        <button class="btn-comment"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"></button>
        <button class="btn-like"><img src ="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455"></button>
    </div>
</div>`
    console.log(ticketCont)
    mainCont.appendChild(ticketCont);
}
