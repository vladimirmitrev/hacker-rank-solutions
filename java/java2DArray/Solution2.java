package java2DArray;

import java.io.*;
import java.util.*;


public class Solution2 {
    public static void main(String[] args) throws IOException {
        Scanner s= new Scanner(System.in);
        int[][] arr=new int[6][6];
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                arr[i][j]=s.nextInt();
            }
        }
        System.out.println(largestHourGlass(arr));
    }
    public static int largestHourGlass(int[][] arr){
        int largestHourGlass=Integer.MIN_VALUE;
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 4; j++) {

                int sum = arr[i][j] + arr[i+1][j+1] + arr[i-1][j-1] + arr[i+1][j-1] + arr[i-1][j+1] + arr[i-1][j] + arr[i+1][j];
                if(sum > largestHourGlass){
                    largestHourGlass = sum;
                }
            }
        }
        return largestHourGlass;
    }
}
