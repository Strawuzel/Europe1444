const austria1444ImgEl = document.getElementById("austria-1444-img");
const ottoman1444ImgEl =document.getElementById("ottoman-1444-img");
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

function showTooltipRight(element){
    const x = event.clientX;
    const y = event.clientY;

    tooltipContainerEl.style.display ="grid"
    element.style.display = "grid"
    tooltipContainerEl.style.left = x + "px";
    tooltipContainerEl.style.top = y + "px";
}
function hideTooltip(element){
    tooltipContainerEl.style.display = "none"
    element.style.display = "none"
}
function showTooltipLeft(element){
    const x = event.clientX - 400;
    const y = event.clientY ;

    tooltipContainerEl.style.display ="grid"
    element.style.display = "grid"
    tooltipContainerEl.style.left = x + "px";
    tooltipContainerEl.style.top = y + "px";
}
