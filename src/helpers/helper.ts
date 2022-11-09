const helper = {
    getRandomIntInclusive: (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    getDiffDate: (startDate: string) => {
        const now  = new Date() as any;
        const date = new Date(startDate) as any;

        const diffHours = Math.ceil((now - date) / 36e5);
        return Math.floor(diffHours / 24);
    },

    formatNumbersAsCurrencyFull: (salary: string) => {
        const salaryArr = salary.split('-');

        const salaryNumbers = salaryArr.map(item => {
            return item.endsWith('k') ?
                item.replace(/k/gi, '000')
                : item;
        });

        let euro = Intl.NumberFormat('en-DE', {
            style: 'currency',
            currency: 'EUR',
        });

        return euro.format(Number(salaryNumbers[0])).concat('-', euro.format(Number(salaryNumbers[1])));
    },

    formatNumbersAsCurrency: (salary: string, currency: string = 'EUR') => {
        let sign;
        const salaryArr = salary.split('-');

        const salaryNumbers = salaryArr.map(item => {
            return item.endsWith('k') ?
                item.replace(/k/gi, '000')
                : item;
        });

        switch (currency) {
            case 'EUR':
                sign = '€';
                break;
            case 'USD':
                sign = '$';
                break;
            case 'GBP':
                sign = '£';
                break;
            default:
                sign = '€';
        }

        return sign.concat(salaryNumbers[0], '-', salaryNumbers[1]);
    },

}

export {
    helper,
}
