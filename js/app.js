window.addEventListener("load", async () => {
  if (navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js");
      console.log("sw is ready", reg);
    } catch (e) {
      console.log("Service worker register fail", e);
    }
  }
});
