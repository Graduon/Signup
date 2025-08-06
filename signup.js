// 이메일 요소를 가져옵니다.
const emailInput = document.getElementById('emailInput');

// "인증번호 받기" 링크 요소를 가져옵니다.
VerificationLink.addEventListener('click', function(event) {
    event.preventDefault();

    const userName = nameInput.value;
    const userPassword = passwordInput.value;
    const userPasswordConfirm = passwordConfirmInput.value;
    const userEmail = emailInput.value;

    if (userEmail) {
        // 세션 스토리지에 사용자 입력값 저장
        sessionStorage.setItem('signup_name', userName);
        sessionStorage.setItem('signup_password', userPassword);
        sessionStorage.setItem('signup_passwordConfirm', userPasswordConfirm);
        sessionStorage.setItem('signup_email', userEmail);

        // 이메일 주소를 URL 쿼리 파라미터로 추가하여 verify_code.html로 이동
        window.location.href = `verify_code.html?email=${encodeURIComponent(userEmail)}`;
    } else {
        alert('이메일 주소를 입력해주세요.');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // ...기존 sessionStorage 값 복원 코드...

    // 인증 성공 메시지 표시
    const verifyMessage = document.getElementById('verifyMessage');
    if (sessionStorage.getItem('signup_verified') === 'true') {
        verifyMessage.innerHTML = '<span style="color:green; font-weight:bold;">이메일 인증이 완료되었습니다.</span>';
        // 인증 완료 후 플래그 제거(필요시)
        //sessionStorage.removeItem('signup_verified');

        // 인증번호 받기 버튼 숨기기
        const verificationLink = document.getElementById('VerificationLink');
        if (verificationLink) {
            verificationLink.style.display = 'none';
        }
    }
});
