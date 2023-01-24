import { collection, getDocs, addDoc } from "firebase/firestore";
import { database } from "../firebase"

export const getEvents = async () => {
  const querySnapshot = await getDocs(collection(database, "events"));
  const events = []
  querySnapshot.forEach((doc) => {
    events.push(doc.data())
  });

  return events
}

// function writeUserData(userId, name, email) {
//   set(ref(database, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }

// export const writeUserData = async (userId, name) => {
//   try {
//     const docRef = await addDoc(collection(database, "users"), {
//       userId: userId,
//       name: name,
//       guild: [],
//       tbr: []
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }