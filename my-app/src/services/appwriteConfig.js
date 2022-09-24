import { Client, Account, ID, Databases } from "appwrite";

// SDK configuration. Sends things to our DB. no server api :(
const client = new Client()
  .setEndpoint("http://localhost/v1")
  .setProject("VirtualJunkyard2022");

// create an account instance from appwriteConfig?
const account = new Account(client);
export const databases = new Databases(client);

// Register user without a promise
export const registerUser = () => {
  account.create(ID.unique(), "email@email.com", "password", "Jane Doe").then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};
//subscribe? to the files channel
// aka listen to changes. ya idrk what this means
// client.subscribe("files", (response) => {
//   if (response.events.includes("buckets.*.files.*.create")) {
//     // Log when a new file is uploaded
//     console.log(response.payload);
//   }
// });

export const addItem = (item) => {
  const promise = databases.createDocument(
    "site-data",
    "all-items",
    ID.unique(),
    item
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

export const addItemOld = () => {
  let hardCodedItem = {
    itemName: "TV",
    itemDescription: "very basic TV",
    itemUser: "defaultUser",
    itemImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-clean-tv-01-1646859499.jpg",
  };

  const promise = databases.createDocument(
    "site-data",
    "all-items",
    ID.unique(),
    hardCodedItem
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

export function getAllItems2() {
  const promise = databases.listDocuments("site-data", "all-items");
  let listOfItems;
  promise.then(
    function (response) {
      listOfItems = response;
      console.log("below is list of items.documents: ");
      console.log(listOfItems.documents);
      //console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
  console.log(listOfItems);
  return listOfItems;
}

//register user with a promise
// const promise = account.create(ID.unique(), 'email@email.com', 'password');
// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error) //Failure
// });
