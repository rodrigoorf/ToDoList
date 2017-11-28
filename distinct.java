import java.util.ArrayList;

public class Solution {

	public int solution(int[] A){
		ArrayList<Integer> valores = new ArrayList<Integer>();
		int diferentes = 0;
		for (int i = 0; i < A.length; i++){
			if (!valores.contains(A[i])){
				valores.add(A[i]);
				diferentes++;
			}
		}
		return diferentes;
	}
}