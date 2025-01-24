package javaArrayList;

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        ArrayList<ArrayList<Integer>> arrayList = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            int d = scanner.nextInt();
            ArrayList<Integer> rowList = new ArrayList<>();
            for (int j = 0; j < d ; j++) {
                int num = scanner.nextInt();
                rowList.add(num);
            }
            arrayList.add(rowList);
        }

        int q = scanner.nextInt();

        for (int i = 0; i < q ; i++) {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            try {
                System.out.println(arrayList.get(x - 1).get(y - 1));
            } catch (IndexOutOfBoundsException e) {
                System.out.println("ERROR!");
            }
        }
        scanner.close();
    }
}
//Sample input
//
//5
//5 41 77 74 22 44
//1 12
//4 37 34 36 52
//0
//3 20 22 33
//5
//1 3
//3 4
//3 1
//4 3
//5 5

//Sample Output
//
//74
//52
//37
//ERROR!
//ERROR!