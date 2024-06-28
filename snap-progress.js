window.addEventListener('load', function () {
    initializeSnapProgress();
});

function initializeSnapProgress(specificContainer = null, specificElement = null, progess) {
    if (specificElement != null) {
        loadInitialsSnapProgress(specificElement, progess);
        return;
    }

    let progressElements;

    if (specificContainer != null) {
        progressElements = specificContainer.getElementsByClassName("snap-progress");
    } else {
        progressElements = document.getElementsByClassName("snap-progress");
    }

    for (let progressIndex = 0; progressIndex < progressElements.length; progressIndex++) {
        loadInitialsSnapProgress(progressElements[progressIndex], progess);
    }
}

function loadInitialsSnapProgress(element, progess = null) {
    element.innerHTML = "";
    let dataValue = progess == null ? (element.hasAttribute("data-snap-value") ? element.getAttribute("data-snap-value") : "0") : progess;

    if (dataValue.includes(".")) {
        dataValue = parseFloat(dataValue);
    } else {
        dataValue = parseInt(dataValue);
    }

    let strokeSize = element.hasAttribute("data-snap-stroke-size") ? element.getAttribute("data-snap-stroke-size") : "20";

    let strokeColor = element.hasAttribute("data-snap-stroke-color") ? element.getAttribute("data-snap-stroke-color") : "#ffc400";
    let backgroundColor = element.hasAttribute("data-snap-background-color") ? element.getAttribute("data-snap-background-color") : "#ededed";
    let baseColor = element.hasAttribute("data-snap-base-color") ? element.getAttribute("data-snap-base-color") : "#fff";
    let textColor = element.hasAttribute("data-snap-text-color") ? element.getAttribute("data-snap-text-color") : "#000";
    let duration = parseInt(element.hasAttribute("data-snap-animation-duration") ? element.getAttribute("data-snap-animation-duration") : "0");

    let radiusStyle = element.hasAttribute("data-snap-radius-sytle") ? element.getAttribute("data-snap-radius-sytle") : "";

    let radiusValue;
    switch (radiusStyle) {
        case "normal":
            radiusValue = "50%";
            break;
        case "square":
            radiusValue = "0%";
            break;
        case "radius-square":
            radiusValue = "20%";
            break;
        case "drum":
            radiusValue = "60% / 20%";
            break;
        case "egg-left":
            radiusValue = "80% 40% 40% 80% / 60% 60% 60% 60%";
            break;
        case "egg-right":
            radiusValue = "40% 80% 80% 40% / 60% 60% 60% 60%";
            break;
        case "random":
            const random1 = Math.floor(Math.random() * dataValue) + "%";
            const random2 = Math.floor(Math.random() * dataValue) + "%";
            const random3 = Math.floor(Math.random() * dataValue) + "%";
            const random4 = Math.floor(Math.random() * dataValue) + "%";
            const random5 = Math.floor(Math.random() * dataValue) + "%";
            const random6 = Math.floor(Math.random() * dataValue) + "%";
            const random7 = Math.floor(Math.random() * dataValue) + "%";
            const random8 = Math.floor(Math.random() * dataValue) + "%";
            radiusValue = `${random1} ${random2} ${random3} ${random4} / ${random5} ${random6} ${random7} ${random8}`;
            break;
        default:
            radiusValue = "50%";
            break;
    }

    element.style.height = "100%";
    element.style.width = "100%";
    element.style.borderRadius = radiusValue;
    element.style.position = "relative";
    element.style.background = `conic-gradient(${strokeColor} 0deg, ${backgroundColor} 0deg)`;

    var baseDiv = document.createElement("div");
    baseDiv.style.background = baseColor;
    baseDiv.style.height = `calc(100% - ${strokeSize}px)`;
    baseDiv.style.width = `calc(100% - ${strokeSize}px)`;
    baseDiv.style.position = "absolute";
    baseDiv.style.top = "50%";
    baseDiv.style.left = "50%";
    baseDiv.style.transform = "translate(-50%, -50%)";
    baseDiv.style.borderRadius = radiusValue;
    baseDiv.style.display = "flex";
    baseDiv.style.justifyContent = "center";
    baseDiv.style.alignItems = "center";
    baseDiv.style.color = textColor;
    baseDiv.innerText = "0%";

    element.appendChild(baseDiv);

    animateSnapProgress(element, baseDiv, dataValue, strokeColor, backgroundColor, duration);
}

function animateSnapProgress(progressElement, baseElement, targetValue, strokeColor, backgroundColor, animationDuration = 0) {
    if (animationDuration <= 0) {
        animationDuration = 20;
    } else if (animationDuration > 80) {
        animationDuration = 80;
    }

    let startValue = 0;
    let progress = setInterval(() => {
        if (targetValue == 0) {
            clearInterval(progress);
        } else {
            startValue++;
        }

        baseElement.textContent = startValue + '%';
        progressElement.style.background = `conic-gradient(${strokeColor} ${startValue * 3.6}deg, ${backgroundColor} 0deg)`;

        if (startValue == targetValue) {
            clearInterval(progress);
        }
    }, animationDuration);
}