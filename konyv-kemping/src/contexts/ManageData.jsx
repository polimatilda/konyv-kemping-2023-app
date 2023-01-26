import { collection, getDocs, updateDoc } from "firebase/firestore";
import { database } from "../firebase"

export const getEvents = async () => {
  const querySnapshot = await getDocs(collection(database, "events"));
  const events = []
  querySnapshot.forEach((doc) => {
    events.push(doc.data())
  });

  return events
}

export const getUserName = async (userId) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  let name = '';
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      name = doc.data().name;
    }
  })
  return name
}


export const updateGuild = async (userId, guild) => {

  const querySnapshot = await getDocs(collection(database, "users"))
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      await updateDoc(doc.ref, { guild: guild });
    }
  });
}


export const getChosenGuild = async (userId) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  let guild = [];
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      guild = doc.data().guild;
    }
  })
  return guild
}

export const updatePrompt = async (userId, name, isCompletedNew) => {

  const querySnapshot = await getDocs(collection(database, "users"))
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      const updatedPrompts = doc.data().guild.prompts.map((prompt) => {
        if (prompt.promptName === name) {
          return {...prompt, isCompleted: isCompletedNew}
        }
        return prompt;
      });
      await updateDoc(doc.ref, {guild: {...doc.data().guild, prompts: updatedPrompts}})
    }
  });

}

export const addToTBR = async (userId, bookData) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      await updateDoc(doc.ref, {tbr: [...(doc.data().tbr || []), bookData]})
    }
  })

  // const querySnapshot = await getDocs(collection(database, "users"))
  
  // const userDoc = querySnapshot.docs.find(doc => doc.data().userId === userId)
  
  // if(userDoc) {
  //   const updatedData = {
  //     tbr: [...(userDoc.data().tbr || []), bookData]
  //   };
  //   await updateDoc(userDoc.ref, updatedData)
  // }

  // const querySnapshot = await getDocs(collection(database, "users"))
  // const userDoc = querySnapshot.docs.find(doc => doc.data().userId === userId)

  // if(userDoc) {
  //   await userDoc.ref.update({
  //     tbr: database.FieldValue.arrayUnion([bookData])
  //   });
  // }
}

export const getTBR = async (userId) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  let tbr = [];
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      tbr = doc.data().tbr;
    }
  })
  return tbr
}

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