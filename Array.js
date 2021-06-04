class Array
{
    constructor(parray)
    {
        this.array=parray;
    }
    number_repetiton=(searchnumber)=>
    {
    let search_number=searchnumber;
    let array_length=this.array.length;
    let repetition=0;
      for(let i=0;i<=array_length;i++)
      {
          this.array[i]=Math.floor(Math.random()*(31-1)+1)
          //random number n<30
      }
      for(let i=0;i<=array_length;i++)
      {
         if(searchnumber===this.array[i])
         {
             repetition=repetition+1;
         }
      }
      return {searchnumber,repetition}
    }


}
module.exports={Array}