package javaStack;

import java.util.*;
class Solution {

    public static void main(String []argh) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            String input = scanner.next();

            if (isBalanced(input)) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
        }
    }

    private static boolean isBalanced(String input) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < input.length(); i++) {

            if (input.charAt(i) == '(' || input.charAt(i) == '{' || input.charAt(i) == '[') {
                stack.push(input.charAt(i));
            } else {
                if (!stack.empty() &&
                        ((stack.peek() == '(' && input.charAt(i) == ')') ||
                        (stack.peek() == '{' && input.charAt(i) == '}') ||
                        (stack.peek() == '[' && input.charAt(i) == ']'))) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }
        return stack.empty();
    }
}
