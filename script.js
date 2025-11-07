document.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("#treasureMarker");
  const treasure = document.querySelector("#treasureImage");
  const message = document.querySelector("#message");

  let timeoutId = null;

  marker.addEventListener("markerFound", () => {
    console.log("Marker found!");
    message.textContent = "🎉 You found the ADIIIIII💦💦💦💦    ";

    // Show treasure for 10 seconds
    treasure.setAttribute("visible", true);

    // Clear old timeout if any
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      treasure.setAttribute("visible", false);
      message.textContent = "💨 The treasure disappeared!";
    }, 10000); // 10 seconds
  });

  marker.addEventListener("markerLost", () => {
    console.log("Marker lost, but treasure stays until timeout ends");
  });
});
