document.querySelector('#copyright').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

const calculateWindChill = (airtemp, windspeed) => {
    if (airtemp <= 50 && windspeed > 3) {
        return 35.74 + 0.6215 * airtemp - 35.75 * windspeed ** 0.16 + 0.4275 * airtemp * windspeed ** 0.16;
    } else {
        return 'N/A'
    }

}

document.querySelector('#windchill').textContent = calculateWindChill();