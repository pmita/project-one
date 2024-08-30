// FIREBASE
import { db } from '@/firebase/server/config';
// UTILS
import { applyDBFilters } from '@/utils/db';
// TYPES
import { IDbFilters } from '@/types/db';


const getCollectionData = async (collectionRef: string, filters: IDbFilters) => {
  const docRef = db.collection(collectionRef).limit(5);
  const docRefWithFilters = filters 
    ? applyDBFilters(docRef, filters) 
    : docRef;

  const docsSnapshot = await docRefWithFilters.get();
  const docData = docsSnapshot.docs.map((document):any => ({
    id: document.id,
    ...document.data(),
    createdAt: document.data().createdAt?.toMillis() ?? null,
    lastUpdated: document.data().lastUpdated?.toMillis() ?? null,
  }));

  return docData as FirebaseFirestore.DocumentData[] | [];
};

export { getCollectionData };
