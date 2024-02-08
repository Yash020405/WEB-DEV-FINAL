const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var saveContent="";
var saveDate="";
window.addEventListener("DOMContentLoaded", (event) => {
    const element = document.querySelector("body");
    element.addEventListener("click", function (e) {
        if(e.target.classList.contains("heart")){
            if (e.target.src.includes("heart.png")) {
                e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
            } else {
                e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
            }
        }
        else if(e.target.id=="Post-button"){
            var mainElement=document.createElement("div");
            var textElement=document.querySelector("#Write-text");
            var content=textElement.value.trim();
            var date=new Date();
            var day=date.getDate();
            var month=months[date.getMonth()];
            if(content.length!=0){
                mainElement.classList.add("tweet");
                mainElement.innerHTML=`
                <div class="main-tweet">
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <div class="tweet-right">
                        <div class="top-right-tweet">
                            <div class="name-id">
                                <span id="user-name">Joanne Graham</span>
                                <span id="user-id">@joannegraham123</span>
                                <span id="time">&#183; ${day} ${month}</span>
                            </div>
                            <div class="edit-delete">
                                <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                <img class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                            </div>
                        </div>
                        <span contenteditable="false" id="tweet-content">${content}</span>
                        <div class="bottom-right-tweet">
                            <img class="com-icon" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="">
                            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                        </div>
                    </div> 
                </div>
                <div class="Comment-container" style="display: none;">
                    <div class="write-comment">
                        <div class="write-block">
                            <div class="top-block">
                                <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                                <textarea name="input-comment" id="input-comment" cols="30" rows="10" placeholder="Type your thoughts here....." maxlength="100"></textarea>
                            </div>
                            <div class="bottom-block">
                                <span id="comment-char-counter">0 / 100</span>
                                <button id="Cancel-button">Cancel</button>
                                <button id="Comment-button">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                var parentElement=document.querySelector(".tweet-container");
                parentElement.insertBefore(mainElement,parentElement.firstChild);
                textElement.value="";
                var counterElement=document.querySelector("#char-counter");
                counterElement.innerText=0+" / 100";
                counterElement.style.color="rgba(0, 0, 0, 0.6)";
                parentElement.parentElement.children[1].style.display="none";
            }
        }
        else if(e.target.classList.contains("com-icon")){
            var element1=e.target.parentElement.parentElement.parentElement.parentElement.children[1];
            if(element1.style.display=="block"){
                element1.style.display="none";
            }
            else{
                element1.children[0].style.display="block";
                element1.style.display="block";
            }
        }
        else if(e.target.id=="Comment-button"){
            var element3=e.target.parentElement.parentElement.children[0].children[1];
            var content=element3.value.trim();
            var date=new Date();
            var day=date.getDate();
            var month=months[date.getMonth()];
            var existingComments = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.comment');
            if(content.length!=0 && existingComments.length === 0){
                var newElement=document.createElement("div");
                newElement.classList.add("comment");
                newElement.innerHTML=`
                <div class="reply">
                    <img class="user-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    <div class="tweet-right">
                        <div class="top-right-tweet">
                            <div class="name-id">
                                <span id="user-name">Joanne Graham</span>
                                <span id="user-id">@joannegraham123</span>
                                <span id="time">&#183; ${day} ${month}</span>
                            </div>
                            <div class="edit-delete">
                                <img class="edit-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="">
                                <img class="delete-comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="">
                            </div>
                        </div>
                        <span contenteditable="false" id="tweet-content">${content}</span>
                        <div class="bottom-right-tweet">                                        
                            <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="">
                        </div>
                    </div>   
                </div>
                `;
                element3.value="";
                element3.parentElement.parentElement.children[1].children[0].style.color="rgba(0, 0, 0, 0.6)";
                var element4=e.target.parentElement.parentElement.parentElement.parentElement;
                element4.insertBefore(newElement,element4.children[1]);
                element4.children[0].children[0].children[1].children[0].innerText=0+" / 100";
            }
        }
        else if(e.target.classList.contains("delete")){
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        else if(e.target.classList.contains("edit")){
            var tweetContent = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('#tweet-content');
            tweetContent.contentEditable = true;
            tweetContent.focus();
        }
    });
    document.addEventListener('input', function(e) {
        if(e.target.id === "input-comment" || e.target.id === "tweet-content") {
            var charCount = e.target.value.length;
            var charCounter = e.target.parentElement.parentElement.querySelector("#comment-char-counter");
            charCounter.innerText = charCount + " / 100";
            if (charCount > 100) {
                charCounter.style.color = "red";
            } else {
                charCounter.style.color = "rgba(0, 0, 0, 0.6)";
            }
        }
    });
});
