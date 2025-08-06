// 이메일 요소를 가져옵니다.
const emailInput = document.getElementById('emailInput');

// "인증번호 받기" 링크 요소를 가져옵니다.
const VerificationLink = document.getElementById('VerificationLink');


VerificationLink.addEventListener('click', function(event) {
    event.preventDefault();

    const userEmail = emailInput.value;

    if (userEmail) {
        // 이메일 주소를 URL 쿼리 파라미터로 추가하여 verify_code.html로 이동
        window.location.href = `verify_code.html?email=${encodeURIComponent(userEmail)}`;
    } else {
        alert('이메일 주소를 입력해주세요.');
    }
});