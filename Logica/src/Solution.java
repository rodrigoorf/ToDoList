import java.util.ArrayList;

public class Solution {
	// array.md
	public int solution(int[] A){
		ArrayList<Integer> valores = new ArrayList<Integer>();
		ArrayList<Integer> qtde = new ArrayList<Integer>();
		for (int i = 0; i < A.length; i++){
			if (valores.contains(A[i]) == false){
				if (A[i] <= 0){
					return -167;
				}
				valores.add(A[i]);
				int vetor = valores.indexOf(A[i]);
				qtde.add(vetor, 1);
			} else {
				int vetor = valores.indexOf(A[i]);
				qtde.set(vetor, qtde.get(vetor) + 1);
			}
		}
		int result = -167; // resultado definido caso a condi��o desejada n�o seja satisfeita
		for (int i = 0; i < valores.size(); i++){
			int tempV = valores.get(i);
			int tempQ = qtde.get(i);
			if (tempQ == 1){
				result = tempV;
			}
		}
		return result;
	}
	
	public int sol2(int[] A){
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