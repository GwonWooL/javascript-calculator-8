# 문자열 덧셈 계산기

<details>

## 0. 프리코스 진행 방식

#### 0. 1 진행방식

* 미션은 과제 진행 요구 사항, 기능 요구 사항, 프로그래밍 요구 사항 세 가지로 구성되어 있다.
* 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
* 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다
* 매주 진행할 미션은 화요일 오후 3시부터 확인할 수 있으며, 다음 주 월요일까지 구현을 완료하여 제출해야 한다. 제출은 일요일 오후 3시부터 가능하다.
  * 정해진 시간을 지키지 않을 경우 미션을 제출하지 않은 것으로 간주한다.
  * 종료 일시 이후에는 추가 푸시를 허용하지 않는다.
  
#### 0. 2 미션 제출 방법

* 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  * GitHub을 활용한 제출 방법은 프리코스 과제 제출 문서를 참고해 제출한다.
* GitHub에 미션을 제출한 후 우아한테크코스 지원 플랫폼에 PR 링크를 포함하여 최종 제출한다.
  * 자세한 안내는 제출 가이드를 참고한다.
  * 과제를 수행하면서 느낀 점, 배운 점, 많은 시간을 투자한 부분 등 자유롭게 작성한다.
  
#### 0. 3 과제 제출 전 체크 리스트

* 기능을 올바르게 구현했더라도 요구 사항에 명시된 출력 형식을 따르지 않으면 0점을 받게 된다.
* 기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.
* 테스트가 실패하면 점수가 0점이 되므로 제출하기 전에 반드시 확인한다.

#### 0. 4 테스트 실행 가이드

* 터미널에서 node --version을 실행하여 Node.js 버전이 22.19.0 이상인지 확인한다.
* 아래 명령을 입력하여 패키지를 설치한 후 실행하는 데 문제가 없어야 한다.
>npm install <br>
>npm run test <br>
>npm run start

</details>

## 1. 서론

### 1. 1 기능 요구사항

* 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
* 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  * 예: ""=> 0, "1,2"=> 3, "1,2,3"=> 6, "1,2:3"=> 6
* 앞의 기본 구분자(쉼표, 콜론)외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 `"//"`와 `"\n"`사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  * 예를 들어 `"//;\n1;2;3"`과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환된다.
  * 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.



### 1. 2 입출력 요구사항

* 입력
> 구분자와 양수로 구성된 문자열

* 출력
> 덧셈 결과 <br>
> 결과 : 6

* 실행 결과 예시
> 덧셈할 문자열을 입력해 주세요.<br>
> 1,2:3<br>
> 결과 : 6


### 1. 3 프로그래밍 요구사항
  
  * Node.js 22.19.0 버전에서 실행 가능해야 한다.
 * 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
 * package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
* 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
* 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
* 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
* 기본적으로 `JavaScript Style Guide`를 원칙으로 한다.


### 1. 4 라이브러리

* `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.
    * 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.



## 2. 문제 풀이

### 2. 1 끄적이는 노트

* 구분자 앞에 있는 문자는 숫자로 파악한다.(문자가 몇개가 있을지 모름)
* custom 구분자 존재 여부에 따라 다르게 작성
* custom 구분자는 문자열 앞에 존재할 수 밖에 없음
* 문자열이 `""`인 경우 0을 출력
* 사용자가 잘못된 값을 입력한 경우
* 숫자가 일의 자리가 아닌 경우, 십의 자리, 백의 자리도 될 수 있다.

### 2. 2 코드 구현 
```
import fs from "fs";

class App {
  async run() {
    let str = fs.readFileSync(0, "utf-8").trim().split("");
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let sum = 0
    let point = 0

    function isblanked() {
      if(str[0]!='"'&&str[1]!='"') {
        return true
      }
      console.log(0)
    }
    let cus = "" //구분자가 한개 나온다는 가정
    function isCustom() {
        for(let i = 2; i<str.length-1; i++) {
        if(str[i+1]=='\\'&&str[i+2]=='n'&&str[i-2]=='/' && str[i-1]=='/' )  {
            cus += str[i]
            point = i
            return true   
            }
        }
        return false
    }

    function customCalcul() {
        let num = ""
        for(let i = point+3; i<str.length; i++) {
            let isExit = arr.includes(str[i])
            if(isExit==true) {
                num += str[i]
                if(i==str.length-1) {
                    sum += Number(num)
                }
                if(str[i+1]==','||str[i+1]==':'||str[i+1]==cus) {
                    sum += Number(num)
                    num = ""
                }
            }
            if(isExit==false) {
                if(str[i]!=',' && str[i]!=':' && str[i]!=cus) {
                    return false
                }
            } 
        }
        return true
    }

    function noncustomCalcul() {
        let num = ""
        for(let i = 0; i<str.length; i++) {
            let isExit = arr.includes(str[i])
            if(isExit==true) {
                num += str[i]
                if(i==str.length-1) {
                    sum += Number(num)
                }
                if(str[i+1]==','||str[i+1]==':') { 
                    sum += Number(num)
                    num = ""
                }
            }
            if(isExit==false&&((str[i]!=','&&str[i]!=':'))) {
                return false
            }      
        }
        return true
    }

if(isblanked() ) {
      if(isCustom()) {
          if(!customCalcul()) {
            console.log("ERROR")
          }
          else {
            console.log("덧셈할 문자열을 입력해 주세요.")
            console.log(str.join(""))
            console.log(sum)
          }
      }
      else {
          if(!noncustomCalcul()) {
            console.log("ERROR")
          }
          else {
            console.log("덧셈할 문자열을 입력해 주세요.")
            console.log(str.join(""))
            console.log(sum)
          } 
        }
      }
  }
}

export default App;

```
---

#### 2. 2.1 (str 배열)
```
let str = fs.readFileSync(0, "utf-8").trim().split("");
let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let sum = 0
let point = 0
```
* 입력 문자열을 `str` 배열안에 split("")하여 한 글자씩 저장
* `arr` 변수는 `0~9`까지 문자 형태인 숫자 목록
* `sum` 변수는 문자열에서 나오는 숫자의 합을 저장
* `point` 변수는 custom 구분자의 인덱스를 저장
---
#### 2. 2.2 (출력 동작) 
```
if(isblanked() ) {
      if(isCustom()) {
          if(!customCalcul()) {
            console.log("ERROR")
          }
          else {
            console.log("덧셈할 문자열을 입력해 주세요.")
            console.log(str.join(""))
            console.log(sum)
          }
      }
      else {
          if(!noncustomCalcul()) {
            console.log("ERROR")
          }
          else {
            console.log("덧셈할 문자열을 입력해 주세요.")
            console.log(str.join(""))
            console.log(sum)
          } 
        }
      }
```
* isblanked() 함수는 참인 경우에만 프로그램 실행 -> isblanked() 함수는 문자열이 ""인지 확인
* isCustomed() 함수는 `//?\n` 구조가 있는 경우 `customCalcul()` 수행하고, 없으면 `noncustomCalcul()` 수행
* 각 `customCalcul()`와 `noncustomCalcul()`가 false를 반환할 시 `ERROR`를 출력, true일 경우 `sum` 출력
---
#### 2. 2.3 (isblanked() 함수)
```
function isblanked() {
      if(str[0]!='"'&&str[1]!='"') {
        return true
      }
      console.log(0)
    }
```
* 문자열이 `""`로만 이루어질 경우 입력 문자열의 첫 번째와 두 번째 문자가 모두 `""`이 아니라면 true 반환
* 문자열이 `""`로만 이루어질 경우 `0`을 출력하고 종료
---
#### 2. 2.4 (isCustom() 함수)
```
let cus = "" 
    function isCustom() {
        for(let i = 2; i<str.length-1; i++) {
        if(str[i+1]=='\\'&&str[i+2]=='n'&&str[i-2]=='/' && str[i-1]=='/' )  {
            cus += str[i]
            point = i
            return true   
            }
        }
        return false
    }

```
* `cus` 변수 선언(custom 구분자를 저장하기 위함, custom 구분자 구조가 한 개만 있다고 가정한다.)
* 문자열 전체를 돌면서 `//`로 시작하고 `\n`으로 끝나는 패턴을 찾는 구조
  * 이 사이의 문자를 커스텀 구분자이며, `cus`에 저장한다.
  *  `//`과 `\n` 위치 인덱스 때문에 for문 범위가 바뀌게 된다.
* 구분자 인덱스 위치를 `point` 변수에 저장한다.
* 커스텀 구분자가 있으면 `true`를 반환하고, 없으면 `false`를 반환한다.
---
#### 2. 2.5 (customCalcul() 함수 && noncustomCalcul() 함수)
```
function customCalcul() {
        let num = ""
        for(let i = point+3; i<str.length; i++) {
            let isExit = arr.includes(str[i])
            if(isExit==true) {
                num += str[i]
                if(i==str.length-1) {
                    sum += Number(num)
                }
                if(str[i+1]==','||str[i+1]==':'||str[i+1]==cus) {
                    sum += Number(num)
                    num = ""
                }
            }
            if(isExit==false) {
                if(str[i]!=',' && str[i]!=':' && str[i]!=cus) {
                    return false
                }
            } 
        }
        return true
    }
```
* for문을 `point+3`으로 시작하는 이유는 해당 위치부터 숫자들이 나오는 인덱스이기 때문
* `isExit` 변수는 `str[i]`가 `arr`배열 안에 있는지 확인하고 `true`와 `false`를 반환한다.
* `true`인 경우 `num`에 붙인다. 마지막 인덱스까지 오면 `sum`에 숫자로 변환하여 더한다.
* 또는, 다음 문자가 기본 구분자, custom 구분자이면 현재까지 숫자를 `sum`에 더하고 `num`은 초기화한다.
* `false`인 경우 만약 숫자도 아니고 기본 구분자(, :)와 custom 구분자도 아닌 경우 사용자가 잘못된 값을 입력했다고 판단하여 `ERROR`를 출력한다.
* `noncustomCalcul()`함수는 `&& str[i]!=cus` 이 부분을 제외하고 똑같다.
---


### 2. 3 Checkout
- [x] 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현하였는가?
- [x] 쉼표, 콜론 구분자를 가지고 구분자를 기준으로 분리한 각 숫자의 합을 반환하는가?
- [x] 문자열 앞부분의 커스텀 구분자를 구분하여 각 숫자의 합을 반환하는가?
- [x] 문자열이 `""`인 경우 `0`을 값으로 반환하는가?
- [x] 사용자가 잘못된 값을 입력할 경우 `ERROR`를 반환하고 애플리케이션은 종료하는가?
- [X] 실행 결과 예시를 잘 따랐는가? 

### 2. 4 추가할 수 있는 사항
- [ ] Refactoring, `customCalcul()`함수와 `noncustomCalcul()`함수는 동작 구조가 유사하여 하나의 함수로 단순화 할 수 있다고 생각된다.
- [ ] `2. 2.2 (출력 동작)`부분에 `if`문이 많으므로 간결하게 할 수 있다고 생각된다.
- [ ] 현재는 구분자가 1글자만 가능하지만, 여러 글자인 경우도 처리할 수 있다고 생각된다.
- [ ] 구분자를 한 개만 사용하는 것이 아닌 여러 개의 custom 구분자를 추가할 수 있다고 생각된다.
- [ ] custom 구분자 구조가 여러 번 반복되어도 마지막 구조에 있는 구분자만 사용하는 경우를 처리할 수 있다고 생각된다.