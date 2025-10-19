import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요."); 
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
export default App;
