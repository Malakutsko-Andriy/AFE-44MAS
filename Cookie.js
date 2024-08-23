function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const BirthDate = getCookie('BirthDate')
if (BirthDate) {
    alert(`Ваша дата народження ${BirthDate}`)
} else {
    const BirthDate = prompt('Введіть свою дату народження : ')
    if (BirthDate) {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        document.cookie = `BirthDate=${BirthDate}${expires}; ; path=/`
    } else {
        alert(':-(')
    }
}