import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {

        //입력 문자열 받기
        let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"); 
        const printString = input

        //빈 문자열 예외처리
        if(input.length==0) {
            Console.print("결과 : 0")
            return
        }

        //허용된 구분자를 배열에 저장
        const divider = [',', ':']

        //커스텀 구분자 추가
        const customStart = '//' 
        const customEnd = '\\n' 
        if(input.startsWith(customStart)) {
            const endIndex = input.indexOf(customEnd)
            if(endIndex==-1) {
                Console.print("[ERROR]")
                return
            }
            const customDivider = input.slice(customStart.length, endIndex)
            if(customDivider.length!=1) {
                Console.print("[ERROR]")
                return
            }
            divider.push(customDivider)
            input = input.slice(endIndex+customEnd.length)
        }


        const nums = input.split("")
        let sum = 0
        let str = ""
        for(let i = 0; i<nums.length; i++) {
            if(!isNaN(Number(nums[i])) && Number(nums[i]) >= 0) {
                str+=nums[i]
            }
            else if(divider.includes(nums[i])) {
                sum += Number(str)
                str = ""
            }
            else {
                Console.print("[ERROR]")
                return
            }
        }
        if(str!="") {
            sum += Number(str)
        }
        Console.print(printString)
        Console.print('결과 : '+sum)
    }
}

new App().run();
export default App;
