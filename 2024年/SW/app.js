const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.register("./sw.js");
    registration.addEventListener("updatefound", () => {
      console.log("New worker being installed => ", registration.installing);
    });
    if (registration.installing) {
      console.log("Service worker installed");
    } else if (registration.active) {
      console.log("Service worker active!");
    }
    try {
    } catch (err) {
      console.log("Registration failed");
    }
  }
};

registerServiceWorker();
