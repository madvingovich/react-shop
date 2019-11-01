
export default class BookstoreService {

    data = [
        {
            id:1,
            imageUrl: 'https://i2.rozetka.ua/goods/3623381/35309639_images_3623381376.jpg',
            title: 'Сила настоящего',
            author: 'Экхарт Толле',
            price: 300
        },
        {
            id:2,
            imageUrl: 'https://i1.rozetka.ua/goods/1626184/9408991_images_1626184291.jpg',
            title: 'Автостопом по галактике',
            author: 'Адам Дуглас',
            price: 350
        },
        {
            id:3,
            imageUrl: 'https://knijky.ru/sites/default/files/styles/264x390/public/49c8834b9c031145b1a807be5e7c3af0_full.jpg?itok=K1m79FYF',
            title: 'Оружие - слово',
            author: 'Александр Котлячков',
            price: 250
        }
    ];
    
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > .05 ? resolve(this.data) : reject('Eto Oshibka v Knigah')
            }, 700);
        })
    }
}