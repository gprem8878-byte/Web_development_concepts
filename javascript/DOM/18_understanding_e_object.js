// const parent = document.getElementById("parent");

// parent.addEventListener("click", function(e) {
//     console.log("Target:", e.target.id);
//     console.log("Current Target:", e.currentTarget.id);
// });

function handler(e) {
    // 🛡️ Guard Clause: Ignore clicks on the empty parent background
    if (e.target === e.currentTarget) return;

    // Safe: Guaranteed that a child element was clicked
    e.target.textContent = "I am clicked";
    parent.removeEventListener("click", handler);
}

parent.addEventListener("click", handler);