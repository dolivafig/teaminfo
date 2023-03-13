const Test = require("../test");

describe("Algo", () => {
    describe("reverse", () => {
        // 'reverse' should reverse "Hello World!"
        it("should reverse a given string", () => {
            // In order to test the function, we need to create a working example. First we define 'str'. 
            const str = "Hello World!";
            // Next we define 'reversed' as the value of 'str' reversed.
            const reversed = "!dlroW olleH";
            // We pass 'str' into '.reverse()' and set that value equal to result
            const result = new Algo().reverse(str);
            // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
            expect(result).toEqual(reversed);
        });
    });

    describe("isPalindrome", () => {
        // First test for '.isPalindrome()'
        it("should return true if a string is a palindrome", () => {
            const str = "racecar";

            const result = new Algo().isPalindrome(str);

            expect(result).toEqual(true);
        });
        // Second test for '.isPalindrome()'
        it("should return false if a string is not a palindrome", () => {
            const str = "neon";

            const result = new Algo().isPalindrome(str);

            expect(result).toEqual(false);
        });
        
    });


});