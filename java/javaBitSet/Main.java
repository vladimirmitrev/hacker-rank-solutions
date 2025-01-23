import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();

        int operationsCount = scanner.nextInt();

        scanner.nextLine();

        BitSet bitSet1 = new BitSet(size);
        BitSet bitSet2 = new BitSet(size);


        for (int i = 0; i < operationsCount; i++) {
//            String[] tokens = scanner.nextLine().split(" ");
            String operationLine = scanner.nextLine();
            String[] tokens = operationLine.split(" ");

            String operation = tokens[0];
            int leftValue = Integer.parseInt(tokens[1]);

//            int rightValue = Integer.parseInt(tokens[2]);

            switch (operation) {
                case "AND":
                    if (leftValue == 1) {
                        bitSet1.and(bitSet2);
                    } else {
                        bitSet2.and(bitSet1);
                    }
                    break;
                case "OR":
                    if (leftValue == 1) {
                        bitSet1.or(bitSet2);
                    } else {
                        bitSet2.or(bitSet1);
                    }
                    break;
                case "XOR":
                    if (leftValue == 1) {
                        bitSet1.xor(bitSet2);
                    } else {
                        bitSet2.xor(bitSet1);
                    }
                    break;
                case "FLIP":
                    int rightValue = Integer.parseInt(tokens[2]);
                    if (leftValue == 1) {
                        bitSet1.flip(rightValue);
                    } else {
                        bitSet2.flip(rightValue);
                    }
                    break;
                case "SET":
                    int index = Integer.parseInt(tokens[2]);
                    if (leftValue == 1) {
                        bitSet1.set(index);
                    } else {
                        bitSet2.set(index);
                    }
                    break;

                default:
                    break;
            }
            System.out.println(bitSet1.cardinality() + " " + bitSet2.cardinality());
        }
//        System.out.println(bitSet1.cardinality() + " " + bitSet2.cardinality());
        scanner.close();

    }
}