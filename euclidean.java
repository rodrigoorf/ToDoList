import java.util.ArrayList;

public class Solution {

	public int solution(int N, int M){
		int i = 0;
		int cont = 0;
		while (cont < N){
			i++;
			cont = cont + ((M - 1) % N);
		}
		return i;
	}
}