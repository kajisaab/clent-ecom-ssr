function toggleClearButton() {
    const input = document.getElementById('textInput');
    const clearButton = document.getElementById('clearButton');
    const { name, value } = input;

    if (name === 'phoneNumber') {
        handlePhoneNumberValidation();
    }
    if (value.length > 0) {
        clearButton.style.display = 'inline';
    } else {
        clearButton.style.display = 'none';
    }
}

function clearInput() {
    const input = document.getElementById('textInput');
    const clearButton = document.getElementById('clearButton');
    input.value = '';

    const { name } = input;

    if (name === 'phoneNumber') {
        handlePhoneNumberValidation();
    }

    clearButton.style.display = 'none';
    input.focus();
}

function handlePhoneNumberValidation() {
    const input = document.getElementById('textInput');
    const errorMessage = document.getElementById('errorMessage');

    const phoneNumberPattern = /^(98|97)\d{8}$/;

    const { value } = input;

    input.style.border = '1px solid #f44336';
    errorMessage.style.visibility = 'visible';
    if (value.length === 0) {
        errorMessage.innerText = "You can't leave this empty";
        return;
    }

    console.log('phone number validation', phoneNumberPattern.test(value));
    if (!phoneNumberPattern.test(value)) {
        errorMessage.innerText = 'Please enter a valid phone number';
        return;
    } else {
        errorMessage.style.visibility = 'hidden';
        input.style.border = '1px solid #ddd';
    }
}

function togglePasswordVisibility() {
    const input = document.getElementById('passwordTextInput');
    const iconName = document.getElementById('visibilityIcon');

    if (iconName.innerText === 'visibility_off') {
        iconName.innerText = 'visibility';
        input.type = 'text';
    } else {
        iconName.innerText = 'visibility_off';
        input.type = 'password';
    }
}

function handlePasswordInput() {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const input = document.getElementById('passwordTextInput');
    const errorMessage = document.getElementById('passwordErrorMessage');

    const { value } = input;

    if (value.length === 0) {
        input.style.border = '1px solid #f44336';
        errorMessage.style.visibility = 'visible';
        errorMessage.innerText = 'Password cannot be empty';
        return;
    }

    if (!pattern.test(value)) {
        input.style.border = '1px solid #f44336';
        errorMessage.style.visibility = 'visible';
        errorMessage.innerText = 'Minimum 6 characters with a number and a letter';
        return;
    } else {
        errorMessage.style.visibility = 'hidden';
        input.style.border = '1px solid #ddd';
        errorMessage.innerText = '';
    }
}
