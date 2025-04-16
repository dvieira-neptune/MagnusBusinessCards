// Get Binding Context

// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();

// Get entire model
const data = context.getObject();

modelCardDetailsPage.setData(data);


//  Do something
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

if (window.onYouTubeIframeAPIReady) {
    window.onYouTubeIframeAPIReady();
}

window.onYouTubeIframeAPIReady = function () {
    console.log("Youtube Loaded....");
    loadVideo();
};

// Place Holder
// imgReplaceContent.setSrc('/youTube.png');
imgReplaceContent.placeAt("player");


App.to(CardDetailsPage);
pauseVideo(); 