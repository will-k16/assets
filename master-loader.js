if (!window.config.unityWebglLoaderUrl) {
    window.config.unityWebglLoaderUrl = "https://cdn.jsdelivr.net/gh/gn-math/assets@7b475280c96633a3dddcc7c138390b23825267b1/UnityLoader.2019.2.js";
}
let sdkScript = document.createElement("script");
sdkScript.src = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/poki-sdk.js";
sdkScript.onload = function() {
    let i = document.createElement("script");
    i.src = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/unity.js";
    document.body.appendChild(i)
};
document.body.appendChild(sdkScript);