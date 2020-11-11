// JavaScript source code
 // for the modal
            var modal = document.getElementById("theModal");

            // the button that opens the modal
            var btn = document.getElementById("button");
            var btn2 = document.getElementById("button2");
            var btn3 = document.getElementById("button3");

            // closes the modal
            var span = document.getElementsByClassName("close")[0];

            // To open modal when button is clicked
            btn.onclick = function() {
            modal.style.display = "block";
            }

            btn2.onclick = function() {
            modal.style.display = "block";
            }
            btn3.onclick = function() {
            modal.style.display = "block";
            }

            // To close modal when (x) is clicked
            span.onclick = function() {
            modal.style.display = "none";
            }

            // Close modal if anywgere outside the modal is clicked
            window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
            }