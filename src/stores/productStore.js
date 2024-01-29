import { defineStore } from "pinia";

export default defineStore('productStore', {

    state: () => ({

        products: [
            {
                id: 1,
                title: '杏桃果醬',
                price: 300,
                image: 'https://cdn.pixabay.com/photo/2017/06/26/18/54/jam-2444752_1280.jpg',
                enabled: 1,
            },
            {
                id: 2,
                title: '櫻桃果醬',
                price: 320,
                image: 'https://cdn.pixabay.com/photo/2016/07/08/10/31/cherries-1503988_1280.jpg',
                enabled: 1,
            },
            {
                id: 3,
                title: '草莓果醬',
                price: 250,
                image: 'https://cdn.pixabay.com/photo/2016/04/14/18/42/strawberry-jam-1329440_1280.jpg',
                enabled: 1,
            },
            {
                id: 4,
                title: '檸檬果醬',
                price: 350,
                image: 'https://cdn.pixabay.com/photo/2017/07/12/17/50/jam-2497654_1280.jpg',
                enabled: 1,
            },
            {
                id: 5,
                title: '蘋果果醬',
                price: 330,
                image: 'https://cdn.pixabay.com/photo/2019/10/02/14/09/jam-4521023_1280.jpg',
                enabled: 1,
            },
            {
                id: 6,
                title: '李子果醬',
                price: 400,
                image: 'https://cdn.pixabay.com/photo/2016/08/10/20/36/plums-1584244_1280.jpg',
                enabled: 1,
            },
            {
                id: 7,
                title: '藍莓果醬',
                price: 280,
                image: 'https://cdn.pixabay.com/photo/2020/06/13/20/07/blueberries-5295659_1280.jpg',
                enabled: 1,
            },
            {
                id: 8,
                title: '鳳梨果醬',
                price: 999,
                image: 'https://miro.medium.com/v2/resize:fit:800/1*TOGHpRhMF0wGXhsrCga94w.png',
                enabled: 0,
            }
        ]

    }),

    getters: {

        sortProducts: ({ products }) => {

        return products.sort((a, b) => a.price - b.price)

        }
        
    }

});