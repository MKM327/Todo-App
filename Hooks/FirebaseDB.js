import { initializeApp } from "firebase/app";
import {
  addDoc,
  deleteDoc,
  doc,
  collection,
  getFirestore,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
function InitFirebase() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  async function addData(header, description) {
    try {
      const addedData = await addDoc(collection(db, "Todo"), {
        Header: header,
        Description: description,
        Finished: false,
        Date: new Date(),
      });
      console.log(addedData.id);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDataWithId(id) {
    try {
      const docRef = doc(db, "Todo", id);
      const documentSnapshot = await getDoc(docRef);
      const data = documentSnapshot.data();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllData() {
    try {
      const docRef = collection(db, "Todo");
      const documentSnapshot = await getDocs(docRef);
      const data = documentSnapshot.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteData(id) {
    try {
      await deleteDoc(doc(db, "Todo", id));
      console.log("Successfully deleted");
    } catch (error) {
      console.log(error);
    }
  }
  async function updateData(id, header, description, finished) {
    try {
      await updateDoc(doc(db, "Todo", id), {
        Header: header,
        Description: description,
        Finished: finished,
        Date: new Date(),
      });
      console.log("Successfully updated");
    } catch (error) {
      console.log(error);
    }
  }
  return { getDataWithId, addData, getAllData, deleteData, updateData };
}
export default InitFirebase;
