// FIREBASE
import { db } from '@/firebase/server/config';
// UTILS
import { applyDBFilters } from '@/utils/server/db';
// TYPES
import { IDbFilters } from '@/types/db';


const getCollectionData = async (collection: string, filters: IDbFilters) => {
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

  return docData as FirebaseFirestore.DocumentData[] | [];
};

const getDocumentData = async (collection: string, document: string) => {
  const docRef = db.collection(collection).doc(document);

  const snapshot = await docRef.get();
  const docData = snapshot.data();

  return {
    id: snapshot.id,
    ...docData,
    createdAt: docData?.createdAt?.toMillis() ?? null,
    lastUpdatedAt: docData?.lastUpdatedAt?.toMillis() ?? null,
  } as FirebaseFirestore.DocumentData | null;
}

export { getCollectionData, getDocumentData};
