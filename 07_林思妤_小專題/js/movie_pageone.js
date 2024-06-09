var text = document.querySelector('.text');
var city_1 = document.querySelector('.city--1');
var city_2 = document.querySelector('.city--2');
var city_3 = document.querySelector('.city--3');

window.addEventListener('scroll', function(){
  var value= window.scrollY;
  text.style.top = scrollY * 1 + 'px';
  city_1.style.left = scrollY * -1 + 'px';
  city_2.style.right = scrollY * -1 + 'px';
  city_3.style.bottom = scrollY * -0.3 + 'px';
})


/* ----------------------電影選單的時間按鈕--------------------*/

// document.addEventListener("DOMContentLoaded", function() {
//   const spans = document.querySelectorAll(".tabcontent span");
  
//   spans.forEach(span => {
//       span.addEventListener("click", function() {
//           // 移除所有 span 的選中狀態
//           spans.forEach(s => s.classList.remove("selected"));
          
//           // 為當前點擊的 span 添加選中狀態
//           this.classList.add("selected");
//       });
//   });
// });




/*-------------------- 確認場次的出現 ----------------------*/

// function openPage(pageName, elmnt) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" selected", "");
//   }
//   document.getElementById(pageName).style.display = "block";
//   elmnt.className += " selected";
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const itemC = document.querySelector(".itemC");
//   const spans = document.querySelectorAll(".tabcontent span");

//   spans.forEach(span => {
//       span.addEventListener("click", function() {
//           // 移除所有 span 的選中狀態
//           spans.forEach(s => s.classList.remove("selected"));
          
//           // 為當前點擊的 span 添加選中狀態
//           this.classList.add("selected");

//           // 顯示 itemC
//           itemC.style.display = "block";
//       });
//   });

//   // 打開預設頁面
//   document.getElementById("defaultOpen").click();
// });

/* ----------------------電影時間選單 --------------------*/

// function openPage(pageName,elmnt) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
    
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.boxShadow = '';
//     tablinks[i].style.color = '';
//     tablinks[i].style.borderBottom = '';
    
//   }
//   document.getElementById(pageName).style.display = "block";
//   // elmnt.style.boxShadow = '0px 0px 10px 0px #7070704a';
//   elmnt.style.borderBottom = '2px solid rgb(241, 63, 63)';
//   elmnt.style.color = 'rgb(241, 63, 63)';
  
 
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click()

/* 整合後得第一次 */


function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.boxShadow = '';
      tablinks[i].style.color = '';
      tablinks[i].style.borderBottom = '';
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = '2px solid rgb(241, 63, 63)';
  elmnt.style.color = 'rgb(241, 63, 63)';
  
  // 隱藏 itemC
  document.querySelector(".itemC").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const itemC = document.querySelector(".itemC");
  const tabcontentDivs = document.querySelectorAll(".tabcontent");

  tabcontentDivs.forEach(div => {
      const spans = div.querySelectorAll("span");
      
      spans.forEach(span => {
          span.addEventListener("click", function() {
              // 移除當前 tabcontent div 中的所有 span 的選中狀態
              spans.forEach(s => s.classList.remove("selected"));
              
              // 為當前點擊的 span 添加選中狀態
              this.classList.add("selected");

              // 顯示 itemC
              itemC.style.display = "block";
          });
      });
  });

  // 打開預設頁面
  document.getElementById("defaultOpen").click();
});

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// ----------------------時間確認 -------------------- 

document.addEventListener("DOMContentLoaded", function() {
  const itemC = document.querySelector(".itemC");
  const tabcontentDivs = document.querySelectorAll(".tabcontent");
  let selectedTab = null;
  let selectedSpan = null;
  let selectedTablink = null;

  tabcontentDivs.forEach(div => {
    const tablink = div.parentNode.querySelector(".tablink");
    const spans = div.querySelectorAll("span");
    
    spans.forEach(span => {
        span.addEventListener("click", function() {

            console.log("Span clicked!");
            // 如果之前已經有選擇的內容，則清除並重置狀態
            if (selectedTab && selectedSpan) {
                selectedTab = null;
                selectedSpan = null;
                selectedTablink = null; // 重置 selectedTablink
                document.getElementById("OK").innerText = "場次確認";
            }

            // 移除當前 tabcontent div 中的所有 span 的選中狀態
            spans.forEach(s => s.classList.remove("selected"));
            
            // 為當前點擊的 span 添加選中狀態
            this.classList.add("selected");

            // 顯示 itemC
            itemC.style.display = "block";

            // 記錄選中的 tab 和 span
            selectedTab = tablink.innerText;
            selectedSpan = this.innerText;
            
            // 設置選中的 tablink
            selectedTablink = tablink.innerText;

            // 檢查是否正確觸發了點擊事件
            console.log("Selected Tab:", selectedTab);
            console.log("Selected Span:", selectedSpan);
            console.log("Selected Tablink:", selectedTablink); // 在這裡檢查 selectedTablink
        });
    });
});



  // 場次確認按鈕點擊事件
  document.getElementById("OK").addEventListener("click", function() {
      if (selectedTab && selectedSpan && selectedTablink) {
          this.innerText = `${selectedTab} ${selectedSpan}`;
      }
  });

  // 打開預設頁面
  document.getElementById("defaultOpen").click();
});

function Open(){
    ticket.style.display='block'
}



/* ----------------電影票種 -------------*/


document.addEventListener('DOMContentLoaded', function() {
    const pricePerTicket = 150;
    const selectElement = document.getElementById('A_quantity');
    const totalElement = document.getElementById('A_total');

    selectElement.addEventListener('change', function() {
      const selectedValue = this.value;
      const totalPrice = selectedValue * pricePerTicket;
      totalElement.innerText = `${totalPrice}元`;

      // 改變背景顏色
      a.style.backgroundColor = 'rgb(240, 240, 240)'; // 或者你選擇的顏色
      
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const pricePerTicket = 75;
    const selectElement = document.getElementById('B_quantity');
    const totalElement = document.getElementById('B_total');

    selectElement.addEventListener('change', function() {
      const selectedValue = this.value;
      const totalPrice = selectedValue * pricePerTicket;
      totalElement.innerText = `${totalPrice}元`;

      // 改變背景顏色
      b.style.backgroundColor = 'rgb(240, 240, 240)'; // 或者你選擇的顏色
    });
  });


