document.addEventListener('DOMContentLoaded', function() {
    // 이메일 표시 자동화
    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email');
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    if (userEmail && userEmailDisplay) {
        userEmailDisplay.textContent = userEmail;
    }

    // "돌아가기" 버튼
    const undo_verify_code = document.getElementById('undo_verify_code');
    if (undo_verify_code) {
        undo_verify_code.addEventListener('click', function(event) {
            event.preventDefault();
            window.history.back();
        });
    }

    // 인증코드 입력란 제어 및 자동화
    const codeInputs = document.querySelectorAll('.d-flex input[type="text"]');
    codeInputs.forEach((input, idx) => {
        input.setAttribute('maxlength', 1);

        input.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length === 1 && idx < codeInputs.length - 1) {
                codeInputs[idx + 1].focus();
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value === '' && idx > 0) {
                codeInputs[idx - 1].focus();
            }
        });
    });

    // 폼 제출(인증코드 검증)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let enteredCode = '';
            codeInputs.forEach(input => enteredCode += input.value);
            const correctCode = '123456'; // 서버에서 받아와야 함

            if (enteredCode === correctCode) {
                sessionStorage.setItem('signup_verified', 'true');
                window.location.href = 'signup.html';
            } else {
                alert('인증코드가 올바르지 않습니다.');
            }
        });
    }
});

// 세션 스토리지에서 사용자 입력값 가져오기(필요시 사용)
// const name = sessionStorage.getItem('signup_name');
// const password = sessionStorage.getItem('signup_password');