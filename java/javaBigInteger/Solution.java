package javaBigInteger;

import java.math.BigInteger;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        BigInteger a = new BigInteger(scanner.next());
        BigInteger b = new BigInteger(scanner.next());

        BigInteger add = a.add(b);
        BigInteger multiply = a.multiply(b);

        System.out.println(add);
        System.out.println(multiply);
    }
}
