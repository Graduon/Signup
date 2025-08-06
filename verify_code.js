//이메일 인증 코드 확인 페이지
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email');

    // 이메일 주소를 표시할 요소를 가져옵니다.
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    if (userEmail) {
        userEmailDisplay.textContent = userEmail;
    }
});

// 인증번호 받기 링크 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    // "돌아가기" 링크 요소를 가져옵니다.
    const undo_verify_code = document.getElementById('undo_verify_code');

    undo_verify_code.addEventListener('click', function(event) {
        event.preventDefault();
        
        // 이전 페이지로 돌아갑니다.
        window.history.back();
    });
});

// 인증 코드 입력란 제어 및 자동화
document.addEventListener('DOMContentLoaded', function() {
    // 인증코드 입력란 제어
    const codeInputs = document.querySelectorAll('.d-flex input[type="text"]');
    codeInputs.forEach((input, idx) => {
        input.setAttribute('maxlength', 1); // 한 글자만 입력

        input.addEventListener('input', function(e) {
            // 숫자만 입력 허용
            this.value = this.value.replace(/[^0-9]/g, '');

            // 다음 칸으로 자동 이동
            if (this.value.length === 1 && idx < codeInputs.length - 1) {
                codeInputs[idx + 1].focus();
            }
        });

        input.addEventListener('keydown', function(e) {
            // 백스페이스 시 이전 칸으로 이동
            if (e.key === 'Backspace' && this.value === '' && idx > 0) {
                codeInputs[idx - 1].focus();
            }
        });
    });
});

// 세션 스토리지에서 사용자 입력값 가져오기(필요시 사용)
// const name = sessionStorage.getItem('signup_name');
// const password = sessionStorage.getItem('signup_password');