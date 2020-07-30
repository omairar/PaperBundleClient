import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFilterService {

  constructor(public afs: AngularFirestore) { }

  searchUsers(searchValue){
   
    return this.afs.collection('paperbundle',ref => ref.where('size', '>=', searchValue)
      .where('size', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }
}
