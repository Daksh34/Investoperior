import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(public fireservices : AngularFirestore) { }

  getHomeDtls(){
    return this.fireservices.collection('Home').snapshotChanges()
  }
}
