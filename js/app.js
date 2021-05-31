// Make sure Service Workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-workers/sw_cached_site.js", {
        scope: "/service-workers/",
      })
      .then((reg) => console.log("Service Worker: Registered"))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
