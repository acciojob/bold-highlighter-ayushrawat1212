		//Select all <strong> elements
        const boldWords = document.querySelectorAll("strong");
        
        function highlight() {
            
            // Change the color of each element to green
            boldWords.forEach((word) => {
                word.style.color = "rgb(0, 128, 0)";
            });
        }

        function return_normal() {

            // Change the color of each element back to black
            boldWords.forEach((word) => {
                word.style.color = "rgb(0, 0, 0)";
            });
        }
