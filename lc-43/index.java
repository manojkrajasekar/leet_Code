

public string multiply(int num1, int num2) {

    int m = num1.length; 
    int n = num2.length;

    int[] vals = new int[m+n];

    int carry = 0;

    for(int i = m - 1; i>=0; i--) {
        for(int j = n -1; j>=0; j--) {
            int mult = (num1.charAt(i) - '0') * (num2.charAt(j) - '0'); 
            int sum = vals[i+j+1] + mult; 
            vals[i + j] += sum / 10;
            vals[i+j+1] = sum % 10;
        }
    }

    StringBuilder sb = new StringBuilder();

    for(int val: vals) {
        if(sb.length() != 0 || val != 0) {
            sb.append(val);
        }
    }

    return sb.length() == 0 ? "0" : sb.toString();
}