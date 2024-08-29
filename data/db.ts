// FIREBASE
import { db } from '@/firebase/server/config';
// UTILS
import { applyDBFilters } from '@/utils/db';
// TYPES
import { IDbFilters } from '@/types/db';


const getCollectionData = async (collectionRef: string, filters: IDbFilters) => {
  const docRef = db.collection(collectionRef).limit(100);
  const docRefWithFilters = filters 
    ? applyDBFilters(docRef, filters) 
    : docRef;

  const docsSnapshot = await docRefWithFilters.get();
  const docData = docsSnapshot.docs.map((document) => ({
    id: document.id,
    createdAt: document.data().createdAt?.toMillis() || 0,
    lastUpdatedAt: document.data().lastUpdatedAt?.toMillis() || 0,
    ...document.data()
  }));

  return docData as FirebaseFirestore.DocumentData[] | [];
};

export { getCollectionData };
