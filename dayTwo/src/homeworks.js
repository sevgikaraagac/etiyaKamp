
// FIND PRIME NUMBERS
function prime(...numbers){
    let isPrime=true
    let primes=[];
    let notPrime=[];
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]<2){
            isPrime=false
        }
        else{
        for(let j=2;j<=numbers[i]/2;j++){
            if(numbers[i]%j==0){
            isPrime=false
            break;}
            else
            isPrime=true
        }
    }
        if(isPrime){
            primes.push(numbers[i])
        }
        else{
            notPrime.push(numbers[i])
        }
    
    }
    
    console.log("Asal Sayİlar: "+ primes)
    console.log("Asal Olmayan Sayİlar: " +notPrime)
}
prime(2,1,0,17,30,5,8,9,29,7,12,19,23,80,79,4)



//  FRIEND NUMBERS

function isFriend(n, m)
{  
    let result = 0;
    let result2=0;
 
    for (let i = 2; i <= Math.sqrt(n); i++)
    {
        if (n % i == 0)
        {
            if (i == (n / i))
                result += i;
            else
                result += (i + n / i);
        }
    }
    for (let i = 2; i <= Math.sqrt(m); i++)
    {
        if (m % i == 0)
        {
            if (i == (m / i))
                result2 += i;
            else
                result2 += (i + m / i);
        }
    }
 
    result=result + 1;
    result2=result2 + 1;

    if (n != result2 | m!=result)
    return console.log(m+" ve "+n+" arkadas sayilar degil ");
    else
    return console.log(m+" ve "+n+" arkadas sayilar");
}
 
isFriend(220, 284)
isFriend(6, 8)
isFriend(17296, 18416)
isFriend(1184, 1210)
isFriend(13, 60)
isFriend(2620, 2924)



// PERFECT NUMBERS 1 TO 1000

function perfectNumbers(){
    for(let i=1;i<=1000;i++)
    {
        let sum=0;
        for(let j=1; j<=i/2; j++){
            if(i%j==0){
                sum+=j;
            }
        }
        if(i==sum){
            console.log(i+" mukemmel sayidir");
        }
    }
}

 perfectNumbers()
 
 
// PRIME NUMBERS 1 TO 1000

 function primeNumbers() {
    let primes=[];
    for (let i = 2; i < 1000; i++) {
         let count=0;
        for (let j = 2; j < i; j++) {
            if (i%j==0) {
                count+=1
            }
            
        }
        if(count==0){
            primes.push(i)
        }
    }
    console.log(primes)
}

primeNumbers();





