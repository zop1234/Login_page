// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.


//     // [유효성 검증 함수]: 영어 또는 숫자만 가능
//       // ^ : 문자열의 시작
//       // [A-Za-z] : 첫 번째 문자는 알파벳 대문자 또는 소문자 중 하나여야 함
//       // [A-Za-z0-9]* : 그 다음에는 알파벳 대소문자나 숫자가 0개 이상 나와야 함
//       // $ : 문자열의 끝
// function onlyNumberAndEnglish(str) {
//   return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
// }

//     // [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
//       // ^ : 문자열의 시작
//       // (?=.*[A-Za-z]) : 최소한 1개의 알파벳 문자가 반드시 포함되어야 함
//       // (?=.*\d) : 최소한 1개의 숫자가 반드시 포함되어야 함
//       // (?=.[@$!%#?&]) : 최소한 1개의 특수문자(@, $, !, %, *, #, ?, &)가 반드시 포함되어야 함
//       // [A-Za-z\d@$!%*#?&]{8,} : 알파벳 대소문자, 숫자, 특수문자 중에서 8개 이상의 문자가 나와야 함
//       // $ : 문자열의 끝
// function strongPassword(str) {
//   return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
// }

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if (password1 !== password2) {
    return false;
  }
  return true;
}


// 아이디 설정
let elInputUsername = document.querySelector("#username"); // 아이디 input 태그
let elFailureMessage = document.querySelector('.failure-message'); // 실패 메세지
let elSuccessureMessage = document.querySelector('.success-message'); // 성공 메세지
let strongUsername = document.querySelector(".hard-id"); // 영문, 숫자 조합하라는 메세지

  // 아이디 입력 글자수 제한
elInputUsername.onkeyup = function() {
  if (isMoreThan4Length(elInputUsername.value)) { // 아이디가 4글자 이상일 때
    elFailureMessage.classList.add('hide'); // 실패 메세지 제거
    if (onlyNumberAndEnglish(elInputUsername.value)) { // 아이디가 영어로 시작하고 숫자와 조합될 때
      elSuccessureMessage.classList.remove('hide'); // 성공 메세지 추가
      strongUsername.classList.add("hide"); // 조합 메세지 제거
    }
    else {
      strongUsername.classList.remove("hide"); // 조합 메세지 추가
      elSuccessureMessage.classList.add('hide');
    }
  }
  else { // 4글자 이상이 아닐 때
    elSuccessureMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
    strongUsername.classList.add("hide");
  }
}


// 패스워드 설정
let inputpassword = document.querySelector('#password');
let inputpassword_re = document.querySelector('#password-retype');
let inputFailPassword = document.querySelector('.mismatch-message');
let strongpassword_message = document.querySelector('.hard-pw');


  // 비밀번호 확인 불일치
inputpassword_re.onkeyup = function() {
  if (isMatch(inputpassword.value, inputpassword_re.value)) {
    inputFailPassword.classList.add('hide');
  }
  else {
    inputFailPassword.classList.remove('hide');
  }
}

  // 강력한 정책의 비밀번호
inputpassword.onkeyup = function() {
  if (!strongPassword(inputpassword.value)) {
    strongpassword_message.classList.remove('hide');
  }
  else {
    strongpassword_message.classList.add('hide');
  }
}


// 클릭 이벤트
let createaccount = document.querySelector(".signup>button");
createaccount.addEventListener('click', function() {
  if (!(isMoreThan4Length(elInputUsername.value)) || !onlyNumberAndEnglish(elInputUsername.value)) {
    alert("아이디 똑바로 적어불라이");
  }
  else if (!isMatch(inputpassword.value, inputpassword_re.value) || !strongPassword(inputpassword.value)) {
    alert("비밀번호 똑바로 적어시냐?");
  }
  else {
    alert("회원가입 성공해수다 축하햄쪄");
    location.reload();
  }
})











