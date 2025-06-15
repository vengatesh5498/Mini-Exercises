let count = 10 
// Assigning a variable to count down until 10

const countdown = setInterval (() => // setInterval-Inbuilt JS function | => this symbol means through every element
{
    if (count > 0) //Until the countdown reaches 0 it counts for every number from 10
        {console.log(count);
        count--; //Counts 1 number negative from 10 this is equivalent to count=count-1 or count-=1
    }
    else {
        console.log ("Blast Off"); //Blasts off after iterating through 10 counts starting from 10, 9.... and so on
        clearInterval (countdown); //clearInterval-Inbuilt JS function
    }
},1000); //The iteration until blastoff happens ever 1000 millisecond