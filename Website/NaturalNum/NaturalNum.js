            const numInput = document.getElementById('numInput');
            const factorialOutput = document.getElementById('factorial');
            const sumOutput = document.getElementById('sum');
            const averageOutput = document.getElementById('average');
    
            numInput.addEventListener('input', () => {
                const num = parseInt(numInput.value);
                if (isNaN(num) || num <= 0) {
                    factorialOutput.value = '';
                    sumOutput.value = '';
                    averageOutput.value = '';
                    return;
                }
    
                // Factorial calculation using a while loop
                let factorial = 1, i = num;
                while (i > 1) factorial *= i--;
    
                // Sum calculation using a do-while loop
                let sum = 0, j = 1;
                do {
                    sum += j++;
                } while (j <= num);
    
                // Average calculation using a for loop
                let average = 0;
                for (let k = 1; k <= num; k++) average += k;
                average /= num;
    
                factorialOutput.value = factorial;
                sumOutput.value = sum;
                averageOutput.value = average.toFixed(2);
            });
