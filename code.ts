const availableCharcters = "abcdefghijklmnopqrstuvwxyz0123456789";
const emailProvider = ["gmail", "yahoo", "hotmail", "outlook", "icloud"];
const firstName = ["Aabesh","Aabishkar","Aadesh","Aaryan","Abhinav","Achut","Adarsh","Akhil","Anish","Babik","Badal","Bappa","Bhaskar","Bhupal","Bibidh","Bishwaraj","Brijesh","Cheetri","Chetan","Dawa","Deepson","Denis","Dev","Dharma","Fanindra","Gagan","Ganesh","Gaurav","Girish","Gyanu","Haridas","Hem","Indra","Ishwar","Jagadish","Jeevan","Kabir","Kamal","Kanchan","Kapil","Karun","Ketan","Kirtiman","Kovid","Krsna","Kumar","Lokesh","Maansa","Madan","Madhav","Mahindra","Mangal","Manzil","Meera","Milan","Mukti","Mukul","Murali","Naval","Neel","Nehan","Nigam","Nimish","Niral","Nirav","Omprakash","Pabitra","Paresh","Pavan","Prabal","Pradeep","Pratik","Puru","Rabin","Rahul","Rakshek","Rama","Ranjit","Raz","Resham","Ridam","Rituraj","Roshan","Rudra","Sabir","Ada","Anupama","Akrodinni","Bagh","Bairagi","Bijayata","Chet","Chaitna","Charushri","Daxa","Deena","Dipika","Eakveera","Ferika","Faleesha","Gita","Ganga","Garima","Himani","Hreeta","Irsia","Ireshi","Jahan","Jwala","Januka","Jenisha","Koel","Khavia","Karishma","Laksmi","Mina","Myra","Mithu","Mahini","Mandira","Neeta","Nisha","Ojmana","Ojasini","Pihu","Puja","Priti","Pragya","Rim","Reya","Richika","Sani","Soma","Shila","Suhana","Tulsi","Tripati","Ulyana","Veerata","Vrushali"];
const lastName = ["Adhikari","Buddhacharya","Bishwakarma","Chaudhary","Chowdhury","Chhetri","Chetry","Gurung","Magar","Maharjan","Pokharel","Rai","Shah","Shrestha","Singh","Tamang","Thapa","Tharu"];

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
    // currently only ui is designed
    // message has not yet been passed
    let message: string = "";

    switch (msg.type) {
        case "first-name":
            message = getFirstName();
            break;
        case "last-name":
            message = getLastName();
            break;
        case "full-name":
            message = getFullName();
            break;
        case "email":
            message = getEmail();
            break;
        case "phn":
            message = getPhoneNumber();
            break;
        case "address":
            // code
        case "date":
            message = getRandomDate();
            break;
        default:
            // code
    }

    console.log(message);

    // figma.closePlugin();
};

/**
 * Function to get first name
 * @returns {string} first name
 */
const getFirstName = (): string => {
    const randomNumber = getRandomInt(0, firstName.length);
    const fName: string = firstName[randomNumber];
    return fName;
};

/**
 * Function to get last name
 * @returns {string} last name
 */
const getLastName = (): string => {
    const randomNumber = getRandomInt(0, lastName.length);
    const lName: string = lastName[randomNumber];
    return lName;
};

/**
 * Function to get full name
 * @returns {string} full name
 */
const getFullName = (): string => {
    const fName = getFirstName();
    const lName = getLastName();
    const fullName: string = `${fName} ${lName}`;
    return fullName;
};

/**
 * Function to generate a random phone number
 * @returns {string} phone number
 */
const getPhoneNumber = (): string => {
    let phnNumber: string = `+977 984`
    for (let i = 0; i < 7; i++) {
        phnNumber += `${getRandomInt(0, 9)}`;
    }
    return phnNumber;
}

/**
 * Funtion to generate a random email address
 * @returns {string} email address
 */
const getEmail = (): string => {
    let emailLength = getRandomInt(10, 15);
    let email: string = "";
    while(emailLength>0){
        emailLength--;
        email += availableCharcters[getRandomInt(0, availableCharcters.length)];
    }
    email += `@${emailProvider[getRandomInt(0, emailProvider.length)]}.com`;

    return email;
}

/**
 * Function to generate a random date
 * @returns {string} date
 */
const getRandomDate = (): string => {
    const year = getRandomInt(1970, 2020);
    const month = getRandomInt(1, 12);
    const day = getRandomInt(1, 28);
    const date = `${year}-${month}-${day}`;
    return date;
}

/**
 * Function to generate a random number within a range
 * @param {number} min - Minimum range
 * @param {number} max - Maximum range
 * @returns {number} between min and max
 */
const getRandomInt = (min, max): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
