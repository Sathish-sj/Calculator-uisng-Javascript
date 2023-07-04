        var currentPageUrl = window.location.href;
        var calcLink = document.getElementById("calc-link");
        var bmiLink = document.getElementById("bmi-link");
        var ageLink = document.getElementById("age-link");
        var aboutLink = document.getElementById("about-link");

        if (currentPageUrl.includes("index.html")) 
    {
        calcLink.classList.add("active");
        } else if (currentPageUrl.includes("bmi.html")) {
        bmiLink.classList.add("active");
        } else if (currentPageUrl.includes("age_calc.html")) {
        ageLink.classList.add("active");
        } else if (currentPageUrl.includes("about.html")) {
        aboutLink.classList.add("active");
    }

        let outputDisplay = document.querySelector("#calc_display");
        let popup = document.querySelector("#Mymodal");

        function display(num) {
            outputDisplay.value += num;
        }

        function Calc() {
            try {
                outputDisplay.value = eval(outputDisplay.value);
            }
            catch {
                popup.style.display = "block";
            }
        }

        function clr() {
            outputDisplay.value = "";
        }

        function del() {
            outputDisplay.value = outputDisplay.value.slice(0, -1);
        }

        // taking input from keyboard

        document.addEventListener("keydown", function(event) {
            const key = event.key;

            if(key === "1"||key === "2"||key === "3"||key === "4"||key === "5"
            ||key === "6"||key === "7"||key === "8"||key === "9"||key === "0"
            ||key === "."||key === "%"||key === "/"||key === "*"||key === "+"||key === "-") {
                outputDisplay.value += key;
            }

            else if(key === "Enter") {
                Calc();    
            }

            else if(key === "Backspace") {
                del();
            }

            else if(key === "Delete" || key === "Escape") {
                clr();
            }
        })

        // ------------------ Popup ----------------------
        let close = document.querySelector(".close")

        close.addEventListener("click", function(){
            popup.style.display = "none";
            clr();
        } ) 

        window.onclick = function(event) {
            if (event.target == popup) {
            popup.style.display = "none";
            clr();
            }
        }
    </script>
