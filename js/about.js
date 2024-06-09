// javascript
// 複製程式碼
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});




/*------------ 表單的內容 ------------ */
function OK(){
    var userName = document.getElementById('name').value

    if( userName.trim()===""){
        var error = yourname.innerHTML =` <i class="bi bi-asterisk"></i>請輸入你的名稱 <i class="bi bi-asterisk"></i>`

    }else{
        yourname.innerHTML = ` 
        ${userName} 你好 ٩(｡・ω・｡)و  請寫下你的願望吧！
        <br>
        <button id='GO' class='animate__animated animate__shakeY' onclick='Open()'>
        Les's GO!<br>
        <i class="bi bi-caret-down-fill"></i>
        </button>`
    }

}

function Open(){
    like.style.display = 'block'
}

document.getElementById('wishForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交後重新載入頁面
    Finish();
});

function Finish(){
    var movieTc = document.getElementById('movie_tc').value
    var movieEc = document.getElementById('movie_en').value
    var movieTm = document.getElementById('movie_tm').value
    var myWord = document.getElementById('myword').value

    if( movieTc.trim()===""){
        apple.innerHTML = `每一個願望條件都要寫唷`
    }else if(movieEc.trim()===""){
        apple.innerHTML = `每一個願望條件都要寫唷`
    }else if(movieTm.trim()===""){
        apple.innerHTML = `每一個願望條件都要寫唷`
    }else if(myWord.trim()===""){
        apple.innerHTML = `每一個願望條件都要寫唷`
    }else{
        apple.innerHTML = `我們收到你的願望囉！`
    }
        
        
}

