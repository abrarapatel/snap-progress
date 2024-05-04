window.onload = function () {
    initializeSnapProgress();
}

function initializeSnapProgress() {
    const progressElements = document.getElementsByClassName("snap-progress");

    for (let progressIndex = 0; progressIndex < progressElements.length; progressIndex++) {
        const element = progressElements[progressIndex];

        let dataValue = element.hasAttribute("data-snap-value") ? element.getAttribute("data-snap-value") : "0";

        if (dataValue.includes(".")) {
            dataValue = parseFloat(dataValue);
        } else {
            dataValue = parseInt(dataValue);
        }

        let strokeColor = element.hasAttribute("data-snap-stroke-color") ? element.getAttribute("data-snap-stroke-color") : "#ffc400";
        let backgroundColor = element.hasAttribute("data-snap-background-color") ? element.getAttribute("data-snap-background-color") : "#ededed";
        let baseColor = element.hasAttribute("data-snap-base-color") ? element.getAttribute("data-snap-base-color") : "#fff";
        let textColor = element.hasAttribute("data-snap-text-color") ? element.getAttribute("data-snap-text-color") : "#000";


        element.style.height = "100%";
        element.style.width = "100%";
        element.style.borderRadius = "50%";
        element.style.position = "relative";
        element.style.background = `conic-gradient(${strokeColor} 0deg, ${backgroundColor} 0deg)`;

        var baseDiv = document.createElement("div");
        baseDiv.style.background = baseColor;
        baseDiv.style.height = "calc(100% - 20px)";
        baseDiv.style.width = "calc(100% - 20px)";
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

        animateProgress(element, baseDiv, dataValue);
    }
}

function animateProgress(progressElement, baseElement, targetValue) {
    let startValue = 0;
    let progress = setInterval(() => {
        if (targetValue == 0) {
            clearInterval(progress);
        } else {
            startValue++;
        }

        baseElement.textContent = startValue + '%';
        progressElement.style.background = 'conic-gradient(#ffc400 ' + startValue * 3.6 + 'deg' + ', #ededed 0deg)'

        if (startValue == targetValue) {
            clearInterval(progress);
        }
    }, 50);
}