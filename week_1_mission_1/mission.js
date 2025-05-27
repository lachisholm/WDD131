



// confirm the script is running
alert("mission.js is running");


//grab the select dropdown
const themeSelector = document.querySelector('#themeSelector');

//change the theme when the dropdown is used
function changeTheme() {

    alert("changeTheme function triggered");


    // check if the currently selected option in the dropdown is dark
    if (themeSelector.value === 'dark'){

        // If it is, add the darkclass to the body to apply dark theme styles
        document.body.classList.add('dark');

        // change the logo to the white version for better contrast in dark mode
        document.querySelector('img').src = 'byui-logo_white.webp';
    } else {
        
        // If it's not dark, remove the dark class
        document.body.classList.remove('dark');

        // change the logo back to the default blue version
        document.querySelector('img').src = 'byui-logo_blue.webp';
    }
}

//Set up event Listener
themeSelector.addEventListener('change',changeTheme);
