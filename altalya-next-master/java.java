import java.util.*;
public class java{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int i=1;
        int num = 1;
        while(i<=a*a){
            if(i%a==0){
                System.out.println(num);
                num=1;
            }else{
                System.out.print(num);
                num++;
            }
            i++;
        }
    }
}