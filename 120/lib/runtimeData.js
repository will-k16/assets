const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "twoootwo",
        productName: "Bad Parenting",
        productVersion: "1.0",
        sdkVersion: "3.19.12+merge4",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/Bad ParentingNew_Web_YandexGames.loader.js",
        dataURL: "bin/Bad ParentingNew_Web_YandexGames.data.gz",
        frameworkURL: "bin/Bad ParentingNew_Web_YandexGames.framework.js.gz",
        workerURL: "",
        codeURL: "bin/Bad ParentingNew_Web_YandexGames.wasm.gz",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "LOGO_TYPE",
        iconTextureName: "icon.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,
        rotationLockType : "None",

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "yandexGamesWrapper.js",

        // YandexGames.
        yandexGamesSDK: "sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

        // CrazyGames.
        crazyGamesXSollaProjectId: "",

        // Ads by Google.
        googleAdsClient: "",
        googleAdsChannel: "",
        googleAdsTest: true,

        // GamePush.
        gamepushProjectId: "",
        gamepushToken: "",

    }

})();