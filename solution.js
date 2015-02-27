// you can also use imports, for example:
import java.util.*;

class Solution {
    public int solution(int[] A, int[] B) {
        
        int survived = 0;
        int numDown = 0;
        int length = A.length;

        Stack down = new Stack();
        
        for (int i = 0; i < length; i++) {
            
            if (B[i] == 1) {
                down.push(i);
            }
            else {
                numDown = down.size();

                if (numDown == 0) {
                    survived++;
                }
                else {
                    
                    for (int j = 0; j < numDown; j++) {
                        if (A[(int)down.peek()] < A[i]) 
                            down.pop();                
                        else
                            j = numDown;
                    }
                
                    if (down.size() == 0) {
                        survived++;
                    }
                }                       
            }
        }
        
        return survived + down.size();
    }
}
