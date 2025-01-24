package javaHashSet;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read the number of pairs
        int N = scanner.nextInt();

        // Create a HashSet to store pairs of names
        HashSet<HashSet<String>> setOfPairsOfNames = new HashSet<>();

        for (int i = 0; i < N; i++) {
            // Create a HashSet for each pair
            HashSet<String> names = new HashSet<>();

            // Read two names and add them to the names HashSet
            names.add(scanner.next());
            names.add(scanner.next());

            // Add the names set to the set of pairs
            setOfPairsOfNames.add(names);

            // Print the size of the set of pairs
            System.out.println(setOfPairsOfNames.size());
        }

        scanner.close();
    }
}
