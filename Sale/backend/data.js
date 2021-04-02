import bcrypt from 'bcryptjs'

const data={
    users:[
        {
            name:'hung',
            email:'hung@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'van',
            email:'van@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,
        }
    ],
    products:[
        {
           
            name:'Exciter',
            category:'Motor',
            image:'/images/ex3.jpg',
            price:116,
            brand:'Yamaha',
            rating:3,
            numReviews:16,
            description:'chất lượng cao',
            countInStock:8
        },
        {
        
            name:'Sirius',
            category:'Motor',
            image:'/images/ex3.jpg',
            price:109,
            brand:'Yamaha',
            rating:4.5,
            numReviews:18,
            description:'chất lượng cao',
            countInStock:0,
        },
        {
           
            name:'Nouvo',
            category:'Motor',
            image:'/images/ex3.jpg',
            price:110,
            brand:'Yamaha',
            rating:2,
            numReviews:7,
            description:'chất lượng cao',
            countInStock:0
        },
        {
           
            name:'Gravita',
            category:'Motor',
            image:'/images/ex3.jpg',
            price:121,
            brand:'Yamaha',
            rating:3,
            numReviews:3,
            description:'chất lượng cao',
            countInStock:3
        },
        {
           
            name:'Jupiter',
            category:'Motor',
            image:'/images/ex3.jpg',
            price:126,
            brand:'Yamaha',
            rating:3.5,
            numReviews:5,
            description:'chất lượng cao',
            countInStock:3
        },
        {
            
            name:'NVX',
            category:'Motor',
            image:'/images/ex3.jpg',
            price:125,
            brand:'Yamaha',
            rating:4,
            numReviews:10,
            description:'chất lượng cao',
            countInStock:3
        }
    ]
}
export default data;