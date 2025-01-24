package javaPhoneBook;

import java.util.*;
import java.io.*;

class Solution {
    public static void main(String []argh)
    {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();

        HashMap<String, Integer> phoneBook = new HashMap<>();

        for(int i = 0; i < n; i++)
        {
            String name = scanner.nextLine();
            int phone = scanner.nextInt();
            phoneBook.put(name, phone);
        }
        while(scanner.hasNext())
        {
            String nameCalled = scanner.nextLine();

            if (phoneBook.containsKey(nameCalled)) {
                System.out.println(nameCalled + "=" + phoneBook.get(nameCalled));
            } else {
                System.out.println("Not found");
            }
        }
    }
}

