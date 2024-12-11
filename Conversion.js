 function convert(inputId, resultId, type) {
            const input = parseFloat(document.getElementById(inputId).value);
            let result = '';

            if (isNaN(input)) {
                alert('Please enter a valid number.');
                return;
            }

            switch (type) {
                case 'fToC':
                    result = ((input - 32) * 5 / 9).toFixed(2) + ' °C';
                    break;
                case 'cToF':
                    result = ((input * 9 / 5) + 32).toFixed(2) + ' °F';
                    break;
                case 'mToFt':
                    result = (input * 3.28084).toFixed(2) + ' ft';
                    break;
                case 'ftToM':
                    result = (input / 3.28084).toFixed(2) + ' m';
                    break;
                default:
                    alert('Unknown conversion type.');
                    return;
            }

            document.getElementById(resultId).value = result;
        }

        function clearResult(resultId) {
            document.getElementById(resultId).value = '';
        }
