# 문자열 덧셈 계산기

<details>
<summary>프리코스 진행 방식</summary>

## 0. 프리코스 진행 방식

#### 0. 1 진행 방식

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

* 구분자 앞에 있는 문자는 숫자로 파악한다. (문자가 몇 개가 있을지 모름)
* custom 구분자 존재 여부에 따라 다르게 작성
* custom 구분자는 문자열 앞에 존재할 수밖에 없음
* 문자열이 `""`인 경우 0을 출력
* 사용자가 잘못된 값을 입력하면 `ERROR` 출력
* 숫자가 일의 자리가 아닌 경우, 십의 자리, 백의 자리도 될 수 있다.

<br>

<details>
<summary>처음 코드</summary>

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
* 입력 문자열을 `str` 배열 안에 split("")하여 한 글자씩 저장
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
* 문자열이 `""`로만 이루어질 경우 입력 문자열의 첫 번째와 두 번째 문자가 모두 `""`이 아니라면 true 반환한다.
* 문자열이 `""`로만 이루어질 경우 `0`을 출력하고 종료한다.
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
  *  `//`과 `\n` 위치 인덱스 때문에 `for문` 범위가 바뀌게 된다.
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

</details>

<br>

<details>
<summary>개선 코드</summary>



### 2. 3 코드 개선 및 리펙토링

```
import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"); 
        let str = input.trim().split("");
        let divider = [',', ':', '-']

        let point = 0
        let custom = false

        for(let i = 2; i<str.length-2; i++) {
            if(str[i+1]=='\\'&&str[i+2]=='n'&&str[i-2]=='/' && str[i-1]=='/' )  {
                divider.push(str[i])
                point = i
                custom = true
            }
        }

        function isblanked(str) {
            if(str.length==0) {
                return true
            }
            return false
        }

        function calculate(str, startIndex, divider) {
            let sum = 0
            let num = ""
            let error = false
            for(let i = startIndex; i<str.length; i++) {
                let isExist = Number.isInteger(Number(str[i]))
                if(isExist) {
                    if(str[i-1]=='-') {
                        num+='-'
                    }
                    num+=str[i]
                    if(i==str.length-1||divider.includes(str[i+1])) {
                        sum += Number(num)
                        num = ""
                    }
                }
                else {
                    if(!divider.includes(str[i])) {
                        error = true
                        return {error: true}
                    }
                }
            }
            return {error: false, sum}
        }

        if(isblanked(str)) {
            Console.print("0")
        }
        else {
            let startIndex = custom ? point+3 : 0
            let result = calculate(str, startIndex, divider)

            if(result.error) {
                Console.print("ERROR")
            }
            else {
                Console.print(str.join(""))
                Console.print(result.sum)
            }
        }

    }
}

new App().run();
export default App;
```

#### 2. 3. 1 (변수 선언과 custom 구분자 확인)
```
const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"); 
let str = input.trim().split("");
let divider = [',', ':', '-']

let point = 0
let custom = false

for(let i = 2; i<str.length-2; i++) {
    if(str[i+1]=='\\'&&str[i+2]=='n'&&str[i-2]=='/' && str[i-1]=='/' )  {
        divider.push(str[i])
        point = i
        custom = true
    }
}
```
* `str`배열은 `input`에 입력받은 문자열을 `.split("")`을하고 배열 형식으로 저장한다.
* `divider[]`은 기본 구분자(',', ':')와 음수 기호('-')를 포함한다.
  
* `point`변수는 custom 구분자 위치(인덱스)를 저장하기 위해 사용한다.
  
* `custom`변수는 custom 구분자 존재 여부를 나타내기 위해 사용한다. (기본값: `false`)

* `for문`을 통해 문자열 전체를 돌면서 `//구분자\n`구조일 경우 `divider`배열에 custom 구분자를 추가한다.
  * 문자열에서 `\`를 인식하기 위해  `\\`로 표기해야 한다.
  
* `point`변수에 custom 구분자 인덱스를 `i`에 저장한다.
* custom 구분자가 존재할 경우 `custom = true`로 변경한다.
* custom 구분자 구조가 1개 이상일 수 있으므로 문자열 끝까지 반복한다.
  * 여러 개의 custom 구분자를 추가한다.


#### 2. 3. 2 (출력 동작)
```
if(isblanked(str)) {
    console.log("0")
}
else {
    let startIndex = custom ? point+3 : 0
    let result = calculate(str, startIndex, divider)

    if(result.error) {
        console.log("ERROR")
    }
    else {
        console.log("덧셈할 문자열을 입력해 주세요.")
        console.log(str.join(""))
        console.log(result.sum)
    }
}

```
* `isblanked()`함수를 사용하여 입력 문자열이 빈 문자열인지 확인한다.
  * `isblanked()`함수가 **true일 경우** 빈 문자열로 판단하여 `0`을 출력하고 프로그램을 종료한다.
  
* `isblanked()`함수가 **false일 경우** 문자열이 있다고 판단하고 진행한다.
* `startIndex`변수는 `custom`이 **true일 경우** `point+3`값을, **false일 경우** `0`을 갖는다.
* `result`변수는 `calculate()`함수 반환값을 가진다.
  
* `result.error`이 **true일 경우** `ERROR`를 출력하고 프로그램을 종료한다.

* `result.error`이 **false일 경우** 입력받은 문자열과 `sum`값을 출력한다.
  * 문구
  * 원본 문자열
  * `sum` 값 

#### 2. 3. 3 (isblanked() 함수)
```
function isblanked(str) {
        if(str.length==0) {
            return true
        }
        return false
    }
```
* `isblanked()`함수를 사용하여 빈 문자열인지 확인한다.
  * 비어 있으면 `true`반환
  
  * 비어 있지 않으면 `false`반환
  
* 빈 문자열이 아닌 경우, `custom`함수를 통해 custom 구조 여부를 확인한다.
* custom 구조가 있으면, `calculate()`함수를 `point+3(시작 위치)`를 매개변수로 호출한다.
* custom 구조가 있으면, `calculate()`함수를 `0(시작 위치)`를 매개변수로 호출한다.

#### 2. 3. 4 (isblanked() 함수)
```
function calculate(str, startIndex, divider) {
        let sum = 0
        let num = ""
        let error = false
        for(let i = startIndex; i<str.length; i++) {
            let isExist = Number.isInteger(Number(str[i]))
            if(isExist) {
                if(str[i-1]=='-') {
                    num+='-'
                }
                num+=str[i]
                if(i==str.length-1||divider.includes(str[i+1])) {
                    sum += Number(num)
                    num = ""
                }
            }
            else {
                if(!divider.includes(str[i])) {
                    error = true
                    return {error: true}
                }
            }
        }
        return {error: false, sum}
    }
```
* `calculate()`함수는 문자열에서 숫자만을 계산을 수행하는 함수로, 3개의 매개변수를 받는다.
  
    * `str`: 입력 문자열이 배열형태로 저장
  
    * `startIndex`: for문 시작 인덱스
    * `divider`: 허가된 구분자 목록
* `sum`변수는 문자열 중 숫자들을 더한 값을 저장한다.
* `num`변수 초깃값을 `""`로, 조건을 만족한 수를 문자로 저장하는 역할이다.
* `error`변수는 사용자가 잘못된 문자를 입력했는지 여부를 확인하는 역할이다.
* `isExist`변수는 `str[i]`이 숫자인지 검사하는 역할이다.
  * `Number.isInteger()`: 숫자가 정수일 때만 `true`
* `isExist==true`일 경우
  * `[str[i-1]]`값이 `-`이면 음수이므로 `num`에 `-`를 먼저 붙인다.
  
  * 이후 `num`에 숫자를 붙인다.
  * 다음 문자가 문자열의 끝이거나, `divider`배열에 포함된 구분자이면 `num`을 `Number()`를 활용하여 숫자로 변환한 후 `sum`에 더한 뒤 `num`을 초기화한다.
* `isExsit==false`인 경우
  * 해당 문자가 `divider`배열에 포함된 구분자인지 확인한다.
  
  * 허용된 구분자가 아닌경우 잘못된 입력이므로 `ERROR`를 출력하고 `error`를 `true`로 바꾼 뒤 함수를 종료한다.
  * `return`값을 `{error: true}`로 보낸다.
* `for문` 완료 후 `error`이 발생하지 않았다면, `return`값을 `{error: false`로 보낸다.

</details>

### 2. 4 Checkout

- [x] 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현하였는가?
- [x] 쉼표, 콜론 구분자를 가지고 구분자를 기준으로 분리한 각 숫자의 합을 반환하는가?
- [x] 문자열 앞부분의 커스텀 구분자를 구분하여 각 숫자의 합을 반환하는가?
- [x] 문자열이 `""`인 경우 `0`을 값으로 반환하는가?
- [x] 사용자가 잘못된 값을 입력할 경우 `ERROR`를 반환하고 애플리케이션은 종료하는가?
- [X] 실행 결과 예시를 잘 따랐는가? 


### 2. 5 개선 사항

- [X] Refactoring 후, `customCalcul()`함수와 `noncustomCalcul()`함수는 동작 구조가 유사하여 하나의 함수로 통합하였다.
- [X] `2. 2.2 (출력 동작)`부분에 `if`문이 많아 간결하게 정리하였다.
- [X] 입력 문자열이 `""`조건을 `str.length==0`이라는 조건으로 변경하였다.
- [X] `arr[]배열`을 제거하고 `Number.isInteger()`함수를 활용해 코드를 단순화하였다.
- [X] custom 구분자를 1개 이상 사용할 수 있도록 변경하였다.
- [X] 음수인 경우도 처리 할 수 있도록 변경하였다.
