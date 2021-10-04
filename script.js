// Created by Shchoholiev
function getLuckyTicketsCount(n){

    let arrWorkPrevious = [1,1,1,1,1,1,1,1,1,1];
    let arrWork = [];
    let sum;
    let k = 0;

    for (let count = 1; count != n/2; count++){

        for (let i = 0; sum !== 0; i++ ){

            sum = 0;

            for (let j = k; j !== (k - 10) ; j--){

                if (arrWorkPrevious[j] == undefined){
                    sum += 0;
                } else {
                    sum += arrWorkPrevious[j];
                }
            }
            arrWork[k] = sum;
            k++;
        }

        arrWork.splice(arrWork.length - 1, 1);

        arrWorkPrevious = arrWork;
        arrWork = [];
        
        sum = 1;
        k = 0;
    }

    return arrWorkPrevious.reduce(function(sum, element){
        return sum + element**2;
    },0);
}

console.log(getLuckyTicketsCount(12)); //n must be even