// FIREBASE
import { db } from '@/firebase/server/config';


const getCollectionData = async (collectionRef: string) => {
  const docRef = db.collection(collectionRef).limit(5);

  const docsSnapshot = await docRef.get();
  const docData = docsSnapshot.docs.map((document) => ({
    id: document.id,
    createdAt: document.data().createdAt?.toMillis() || 0,
    lastUpdatedAt: document.data().lastUpdatedAt?.toMillis() || 0,
    ...document.data()
  }));

  return docData as FirebaseFirestore.DocumentData[] | [];
};

export { getCollectionData };