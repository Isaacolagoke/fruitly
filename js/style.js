// <!-- dasboard mobile menu -->
    function sideBar() {

        let btn = document.getElementById("aside");
        if (btn.style.transform === "translate(-100%)") {
                btn.style.transform = "translate(0)";
            } else {
                btn.style.transform = "translate(-100%)"
        }
    }

// <!-- mobile header menu -->
  
        function menuBtn() {
            let x = document.getElementById("headerCnt");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
            }
        }
  

// <!-- dashboard dropdown -->
      
            function dashBtn() {
    
                let btn = document.getElementById("dashDropdown");
            
                    if (btn.style.display === "none") {
                        btn.style.display = "block";
                    } else {
                        btn.style.display = "none";
                }
            }
    
            function dashBtnDelivery() {
                let btn = document.getElementById("dashDropdownDelivery");
            
                    if (btn.style.display === "none") {
                        btn.style.display = "block";
                    } else {
                        btn.style.display = "none";
                }
            }
    
            function dashBtnCard() {
                let btn = document.getElementById("dashDropdownCard");
                    
                    if (btn.style.display === "none") {
                        btn.style.display = "block";
                    } else {
                        btn.style.display = "none";
                }
            }
    
            function deliveryBtnCard() {
                let btn = document.getElementById("dashDnDeliHistory");
                    
                    if (btn.style.display === "none") {
                        btn.style.display = "block";
                    } else {
                        btn.style.display = "none";
                }
            }