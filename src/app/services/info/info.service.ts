import { Injectable } from "@angular/core";

import { combineLatest, merge, Observable, Subject } from "rxjs";
import {
  filter,
  map,
  skip,
  switchAll,
  take,
  withLatestFrom
} from "rxjs/operators";
import { Item } from "../../models/item";
import { Items } from "../../models/items";

import { AngularFireDatabase } from "@angular/fire/database";

export interface Query {
  refresh?: boolean;
  offset: number;
  limit: number;
}

@Injectable({
  providedIn: "root"
})
export class InfoService {
  private queries: Subject<Query>;

  constructor(private db: AngularFireDatabase) {
    this.queries = new Subject<Query>();
  }

  load(query: Query) {
    this.queries.next(query);
  }

  get(): Observable<Items> {
    console.log("##> InfoService get():");

    const rawItemIds = this.db.list<number>("/infos").valueChanges();
    const itemIds = combineLatest(rawItemIds, this.queries).pipe(
      filter(([ids, query]) => query.refresh),
      map(([ids, query]) => ids)
    );
    const selector = ({ offset, limit }, ids) =>
      combineLatest(
        ...ids
          .slice(offset, offset + limit)
          .map(id => this.db.object<Item>("/infos/" + id).valueChanges())
      ) as Observable<any>;
    return merge(
      combineLatest(this.queries, itemIds).pipe(
        map(([query, ids]) => selector(query, ids).pipe(take(1)))
      ),
      this.queries.pipe(
        skip(1),
        withLatestFrom(itemIds, selector)
      )
    ).pipe(switchAll());
  }
}
