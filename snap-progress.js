window.addEventListener('load', function () {
    initializeSnapProgress();
});

function initializeSnapProgress(specificContainer = null) {
    let progressElements;

    if (specificContainer != null) {
        progressElements = specificContainer.getElementsByClassName("snap-progress");
    } else {
        progressElements = document.getElementsByClassName("snap-progress");
    }

    for (let progressIndex = 0; progressIndex < progressElements.length; progressIndex++) {
        loadInitialsSnapProgress(progressElements[progressIndex]);
    }
}

function loadInitialsSnapProgress(element) {
    let dataValue = element.hasAttribute("data-snap-value") ? element.getAttribute("data-snap-value") : "0";

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

    element.style.height = "100%";
    element.style.width = "100%";
    element.style.borderRadius = "50%";
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
    baseDiv.style.borderRadius = "50%";
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