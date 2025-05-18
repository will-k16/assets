if (!window.config.unityWebglLoaderUrl) {
    window.config.unityWebglLoaderUrl = "https://cdn.jsdelivr.net/gh/gn-math/assets@2bca57e32f8a6b67ea5d415fd7b6068ebf00d0be/UnityLoader.2019.2.js";
}
let sdkScript = document.createElement("script");
sdkScript.src = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/poki-sdk.js";
sdkScript.onload = function() {
    let i = document.createElement("script");
    i.src = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/unity.js";
    document.body.appendChild(i)
};
document.body.appendChild(sdkScript);