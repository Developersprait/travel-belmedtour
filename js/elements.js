document.addEventListener(("DOMContentLoaded"), () => {
    const
        title = document.querySelector("title"),
        logoBar = document.querySelector("#logo__wrapper"),
        menu = document.querySelector('#menu');




    title.innerHTML = "BelMedTour";
    logoBar.innerHTML = "";
    menu.innerHTML = "";




    logoBar.innerHTML = ` 
<div class="logotype">
     <img class="logo" src="img/logo.png" alt="logo">
     <span class="logo__subtitle">BMT</span>
</div>
<div class="logo__title">BelMedTour</div>
<div class="header__btn-menu"></div>
`;
    menu.innerHTML = `
<div class="container">
        <ul class="menu__list">
            <li><a class="menu a menu__link" href="index.html">Główna</a></li>
            <li><a class="menu a menu__link" href="novamed.html">NOVAMED</a></li>
            <li><a class="menu a menu__link" href="third.html">Plan tur</a></li>
            <li><a class="menu a menu__link" href="info.html">Info</a></li>
            <li><a class="menu a menu__link" href="calendar.html">Kalendarz</a></li>
        </ul>
    </div>`;
});