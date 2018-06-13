import { User } from '../model/user';

export const USER_DATA : User[] = [{

    firstName : "Bill",
    lastName : "Gates",
    company : "microsoft",
    income : 11000110,
    dob : new Date("Dec 21, 1965"),
    isWorking : true,
    image : "assets/image-1465348_960_720.jpg",
    vote: 120
},
{

    firstName : "Steve",
    lastName : "Jobs",
    company : "Apple",
    income : 90000,
    dob : new Date("Dec 21, 1950"),
    isWorking : false,
    image : "assets/cat-icon.png",
    vote: 1
},
{

    firstName : "Nishant",
    lastName : "Nair",
    company : "Societie Generale",
    income : 15000,
    dob : new Date("Oct 30, 1989"),
    isWorking : true,
    image : "assets/download.jpg",
    vote: 0
}
]