// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const marker = document.querySelector("#treasureMarker");
    const treasure = document.querySelector("#treasureImage");
    const message = document.querySelector("#message");

    // Removed the permissionReminder logic, as it's not needed.
    
    let timeoutId = null;

    marker.addEventListener("markerFound", () => {
        console.log("Marker found!");
        message.textContent = "🎉 You found the treasure!";

        // Show treasure
        treasure.setAttribute("visible", true);

        // Clear any existing timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        // Set a timeout to hide the treasure after 10 seconds
        timeoutId = setTimeout(() => {
            treasure.setAttribute("visible", false);
            message.textContent = "💨 The treasure disappeared! Find it again.";
        }, 10000); // 10 seconds
    });

    marker.addEventListener("markerLost", () => {
        console.log("Marker lost");
        // The treasure will stay visible until the timeout ends.
    });
});