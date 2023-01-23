import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase"

export const getEvents = async () => {
  const querySnapshot = await getDocs(collection(database, "events"));
  const events = []
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    events.push(doc.data())
  });

  return events
}