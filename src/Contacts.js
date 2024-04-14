
const mapContact = (contact) =>{
    console.log(contact);
}

const fetchContacts = async ()=>{
    const   response = await fetch("https://randomuser.me/api/?results=100&seed=fullstackio")
    const  data = response.json;
    console.log(data);
}

const fetchUserContacts = async ()=>{
    const   response = await fetch("https://randomuser.me/api/?results=100&seed=fullstackio")
    const  data = response.json;
    console.log(data);
}

const fetchRandomContacts = async ()=>{
    const   response = await fetch("https://randomuser.me/api/?results=100&seed=fullstackio")
    const  data = response.json;
    console.log(data);
}

