package javaExectionHandling;

import java.util.Scanner;

class MyCalculator {

    long power(int n, int p) throws Exception {
        if (n < 0 || p < 0 ) {
            throw new Exception("n or p should not be negative.");
        } else if (n == 0 && p == 0) {
            throw new Exception("n and p should not be zero.");
        }
        long result = (long) Math.pow(n, p);

        return result;
    }
}

public class Solution {
    public static final MyCalculator my_calculator = new MyCalculator();
    public static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (scanner.hasNextInt()) {
            int n = scanner.nextInt();
            int p = scanner.nextInt();

            try {
                System.out.println(my_calculator.power(n, p));
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}