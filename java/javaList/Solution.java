package javaList;

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int listSize = scanner.nextInt();

        List<Integer> integerList = new ArrayList<>();

        for (int i = 0; i < listSize; i++) {
            int num = scanner.nextInt();
            integerList.add(num);
        }
        int numOfOperations = scanner.nextInt();
        scanner.nextLine();
        for (int i = 0; i < numOfOperations; i++) {
            String command = scanner.nextLine();
            String[] arr = scanner.nextLine().split(" ");

            if (command.equals("Insert")) {
                int index = Integer.parseInt(arr[0]);
                int number = Integer.parseInt(arr[1]);
                integerList.add(index, number);
            } else if (command.equals("Delete")) {
                int index = Integer.parseInt(arr[0]);
                integerList.remove(index);
            }
        }
        for (Integer integer : integerList) {
            System.out.print(integer + " ");
        }
    }
}
