const muscovy1444ImgEl = document.getElementById("muscovy-1444-img")
const austria1444ImgEl = document.getElementById("austria-1444-img");
const ottoman1444ImgEl = document.getElementById("ottoman-1444-img");
const poland1444ImgEl = document.getElementById("poland-1444-img");
const brandenburg1444ImgEl = document.getElementById("brandenburg-1444-img");
const denmark1444ImgEl = document.getElementById("denmark-1444-img");
const england1444ImgEl = document.getElementById("england-1444-img");
const france1444ImgEl = document.getElementById("france-1444-img");
const castile1444ImgEl = document.getElementById("castile-1444-img");
const muscovyTooltipEl = document.getElementById("muscovy-tooltip");
const austriaTooltipEl = document.getElementById("austria-tooltip");
const ottomanTooltipEl = document.getElementById("ottoman-tooltip");
const polandTooltipEl = document.getElementById("poland-tooltip");
const brandenburgTooltipEl = document.getElementById("brandenburg-tooltip");
const denmarkTooltipEl = document.getElementById("denmark-tooltip");
const englandTooltipEl = document.getElementById("england-tooltip");
const franceTooltipEl = document.getElementById("france-tooltip");
const castileTooltipEl = document.getElementById("castile-tooltip");
const tooltipContainerEl = document.getElementById("tooltip-container");
const muscovyQuestionEl = document.getElementById("muscovy-question");
const austriaQuestionEl = document.getElementById("austria-question");
const ottomanQuestionEl = document.getElementById("ottoman-question");
const polandQuestionEl = document.getElementById("poland-question");
const brandenburgQuestionEl = document.getElementById("brandenburg-question");
const denmarkQuestionEl = document.getElementById("denmark-question");
const englandQuestionEl = document.getElementById("england-question");
const franceQuestionEl = document.getElementById("france-question");
const castileQuestionEl = document.getElementById("castile-question");
const muscovyTextContainerEl = document.getElementById("muscovy-text-container");
const austriaTextContainerEl = document.getElementById("austria-text-container");
const ottomanTextContainerEl = document.getElementById("ottoman-text-container");
const polandTextContainerEl = document.getElementById("poland-text-container");
const brandenburgTextContainerEl = document.getElementById("brandenburg-text-container");
const denmarkTextContainerEl = document.getElementById("denmark-text-container");
const englandTextContainerEl = document.getElementById("england-text-container");
const franceTextContainerEl = document.getElementById("france-text-container");
const castileTextContainerEl = document.getElementById("castile-text-container");
function showTooltipMiddle(element, image) {
    const x = event.clientX - 1000;
    const y = event.clientY;

    tooltipContainerEl.style.display = "grid"
    element.style.display = "grid"
    image.style.display = "revert"
    tooltipContainerEl.style.left = x + "px";
    tooltipContainerEl.style.top = y + "px";
}

function showTooltipRight(element, image) {
    const x = event.clientX - 200;
    const y = event.clientY;

    tooltipContainerEl.style.display = "grid"
    element.style.display = "grid"
    image.style.display = "revert"
    tooltipContainerEl.style.left = x + "px";
    tooltipContainerEl.style.top = y + "px";
}

function showTooltipLeft(element, image) {
    const x = event.clientX - 1600;
    const y = event.clientY;

    tooltipContainerEl.style.display = "grid"
    element.style.display = "grid"
    image.style.display = "revert"
    tooltipContainerEl.style.left = x + "px";
    tooltipContainerEl.style.top = y + "px";
}

function hideTooltip(element, image) {
    const cursor = document.elementFromPoint(event.clientX, event.clientY);
    if (element !== cursor.parentElement && !(cursor.parentElement in element.children) && cursor.className !== "question"){
    tooltipContainerEl.style.display = "none"
    element.style.display = "none"
    image.style.display = "none"}
}

function switchContent(element, switchElement) {
    if (element.style.display === "grid"){
        element.style.display = "none"
        switchElement.style.display = "grid"
    }else{
        element.style.display = "grid"
        switchElement.style.display = "none"
    }
}


