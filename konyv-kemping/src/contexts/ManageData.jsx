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
      name = doc.data().name
    }
  })
  return name
}

export const updateGuild = async (userId, guild) => {

  const querySnapshot = await getDocs(collection(database, "users"))
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      await updateDoc(doc.ref, { guild: guild })
    }
  });
}


export const getChosenGuild = async (userId) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  let guild = [];
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      guild = doc.data().guild
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
          return { ...prompt, isCompleted: isCompletedNew }
        }
        return prompt;
      });
      await updateDoc(doc.ref, { guild: { ...doc.data().guild, prompts: updatedPrompts } })
    }
  });

}

export const addToTBR = async (userId, bookData) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      await updateDoc(doc.ref, { tbr: [...(doc.data().tbr || []), bookData] })
    }
  })
}

export const getTBR = async (userId) => {
  const querySnapshot = await getDocs(collection(database, "users"))
  let tbr = [];
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      tbr = doc.data().tbr
    }
  })
  return tbr
}

export const updateBookStatus = async (userId, id, isReadNew) => {

  const querySnapshot = await getDocs(collection(database, "users"))
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      const updatedBooks = doc.data().tbr.map((book) => {
        if (book.id === id) {
          return { ...book, isRead: isReadNew }
        }
        return book
      });
      await updateDoc(doc.ref, { tbr: updatedBooks })
    }
  })

}

export const deleteBookFromTBR = async (userId, id) => {
  const querySnapshot = await getDocs(collection(database, "users"));
  querySnapshot.forEach(async (doc) => {
    if (doc.data().userId === userId) {
      const updatedBooks = doc.data().tbr.filter(book => (book.id !== id))
      await updateDoc(doc.ref, { tbr: updatedBooks });
    }
  });
}