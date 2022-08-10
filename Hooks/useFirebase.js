import { initializeApp } from "firebase/app";
import {
  addDoc,
  deleteDoc,
  doc,
  collection,
  getFirestore,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
function useFirebase() {
  const [todoData, setodoData] = useState([]);
  useEffect(() => {
    getAllData();
  }, []);

  function getDate(operation) {
    var today = new Date();
    const date = today.toLocaleDateString("en-US");
    const time = today.toLocaleTimeString("en-US");

    if (operation == "update") {
      return `Updated At: ${date} Time :${time}`;
    }
    return `Created At: ${date} Time :${time}`;
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  async function addData(header, description) {
    try {
      const usersRef = collection(db, "Todo");
      const userRef = doc(usersRef);
      const id = userRef.id;
      const ref = await setDoc(userRef, {
        Header: header,
        Description: description,
        Finished: false,
        id: id,
        Date: getDate("create"),
      });
      console.log("Added");
      getAllData();
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
      console.log("Error: ", error);
    }
  }

  async function getAllData() {
    try {
      const docRef = collection(db, "Todo");
      const documentSnapshot = await getDocs(docRef);
      const data = documentSnapshot.docs.map((doc) => doc.data());
      setodoData(data);
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
        Date: getDate("update"),
      });
      console.log("Successfully updated");
    } catch (error) {
      console.log(error);
    }
  }
  return {
    todoData,
    getDataWithId,
    addData,
    getAllData,
    deleteData,
    updateData,
  };
}
export default useFirebase;
