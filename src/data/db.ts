// FIREBASE
import { db } from '@/src/firebase/server/config';
// UTILS
import { applyDBFilters } from '@/src/utils/server/db';
// TYPES
import { IDbFilters } from '@/src/types/db';


export const getCollectionData = async (collection: string, filters: IDbFilters): Promise<FirebaseFirestore.DocumentData[]> => {
  const docsRef = db.collection(collection).limit(5);
  const docsRefWithFilters = filters 
    ? applyDBFilters(docsRef, filters) 
    : docsRef;

  const docsSnapshot = await docsRefWithFilters.get();
  const docData = docsSnapshot.docs.map((document: FirebaseFirestore.DocumentData) => ({
    id: document.id,
    ...document.data(),
    createdAt: document.data().createdAt?.toMillis() ?? null,
    lastUpdatedAt: document.data().lastUpdatedAt?.toMillis() ?? null,
  }));

  return docData;
};

export const getDocumentData = async (collection: string, document: string): Promise<FirebaseFirestore.DocumentData | null> => {
  const docRef = db.collection(collection).doc(document);

  const snapshot = await docRef.get();
  const docData = snapshot.data();

  return {
    id: snapshot.id,
    ...docData,
    createdAt: docData?.createdAt?.toMillis() ?? null,
    lastUpdatedAt: docData?.lastUpdatedAt?.toMillis() ?? null,
  }
}

