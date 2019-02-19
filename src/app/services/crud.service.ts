import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { Item } from "../../model/item";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  private collection: AngularFirestoreCollection<Item>;
  constructor(private db: AngularFirestore) {
    this.collection = db.collection<Item>("items");
  }

  reads(): Observable<Item[]> {
    return this.db
      .collection<Item[]>("items")
      .valueChanges()
      .pipe(
        tap(console.log),
        catchError(this.handleError("reads", []))
      );
  }

  create(name: string, pass: string) {
    const id = this.db.createId();
    this.collection.doc(id).set({ id, name, pass });
  }

  delete(id: string) {
    this.collection.doc(id).delete();
  }

  update(item: Item) {
    this.collection.doc(item.id).update(item);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
