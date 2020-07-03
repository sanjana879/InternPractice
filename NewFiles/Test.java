/*
Feel free to add other functions to this file for practice!
*/
class Test
{
	public static void main ( String args[] )
	{
		System.out.println("This is a test class!");
		
		int testArr[] = {1,2,3};
		System.out.println("1+2+3 = " + getSum(testArr));
	}

	public static int getSum(int args[]){
		int sum = 0;
		for(int i=0; i < args.length; i++){
			sum+=args[i];
		}
		return sum;
	}
}
