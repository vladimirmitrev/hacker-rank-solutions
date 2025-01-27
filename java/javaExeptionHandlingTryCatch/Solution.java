package javaExeptionHandlingTryCatch;

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        try {
            int x = scanner.nextInt();
            int y = scanner.nextInt();


            if (y == 0) {
                throw new ArithmeticException("/ by zero");
            }
            int result = x / y;

            System.out.println(result);

        } catch (InputMismatchException ee){
            System.out.println("java.util.InputMismatchException");
        }
        catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}