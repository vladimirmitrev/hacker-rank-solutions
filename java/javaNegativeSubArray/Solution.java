package javaNegativeSubArray;

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int arrLength = scanner.nextInt();
        int[] arr = new int[arrLength];

            for (int i = 0; i < arrLength; i++) {
                arr[i] = scanner.nextInt();
            }

        int negativeCount = 0;

        for (int start = 0; start < arrLength; start++) {
            int sum = 0;
            for (int end = start; end < arrLength; end++) {
                sum += arr[end];
                if (sum < 0) {
                    negativeCount++;
                }
            }
        }
        System.out.println(negativeCount);
    }
}