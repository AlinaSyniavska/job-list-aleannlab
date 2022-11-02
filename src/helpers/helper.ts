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
    }

}

export {
    helper,
}
