export const functions = {
    wurzel: (num1:number) => {
        if (num1 > 0) {
            return Math.sqrt(num1);
        }
        else if (num1 == 0) {
            return 0;
        }
        else return undefined;
    },
    /*
    isNull: () => null,
     kann auch so formuliert werden
    sub: function(num1:number,num2:number) {
        return num1-num2;

    },
    div: function(num1:number,num2:number) {
        return num1-num2;

    },


        filter: (name:string) => {
            return name;
        }
*/
}




