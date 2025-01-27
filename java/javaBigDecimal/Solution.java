package javaBigDecimal;

import java.math.BigDecimal;
import java.util.*;

class Solution {

    public static void main(String []args){
        //Input
        Scanner scanner = new Scanner(System.in);
        int n =  scanner.nextInt();
        String[] s = new String[n+2];
        for(int i = 0; i < n; i++) {
            s[i] = scanner.next();
        }
        scanner.close();

        Arrays.sort(s, 0, n, (a, b) -> {
            BigDecimal bigA = new BigDecimal(a);
            BigDecimal bigB = new BigDecimal(b);
            return bigB.compareTo(bigA);
        });

        for(int i = 0; i < n; i++)
        {
            System.out.println(s[i]);
        }
    }
}