// =========================
// 1) Form Validation (Contact)
// =========================
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    return true;
}

// =========================
// 2) Toggle Projects
// =========================
function toggleProject(id, btn) {
    var project = document.getElementById(id);

    if (project.style.display === "none") {
        project.style.display = "block";
        btn.textContent = "Hide";
    } else {
        project.style.display = "none";
        btn.textContent = "Show";
    }
}

// =========================
// 3) CV Page (blockquote hover)
// =========================
window.addEventListener("DOMContentLoaded", function () {
    var quote = document.getElementById("quote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "#f0e6f0";
            quote.style.transform = "scale(1.05)";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
            quote.style.transform = "scale(1)";
        });
    }
});

// =========================
// 4) Homepage (Add Date)
// =========================
window.onload = function () {
    var footer = document.querySelector("footer");

    if (footer) {
        var p = document.createElement("p");
        var date = new Date().toLocaleString();
        var text = document.createTextNode("Page loaded on: " + date);

        p.appendChild(text);
        footer.appendChild(p);
    }
};