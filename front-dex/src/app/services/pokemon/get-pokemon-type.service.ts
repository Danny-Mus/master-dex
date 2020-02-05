import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Type } from 'src/app/models/interfaces/Type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TypeService {

public getType(): Observable<Type>{

    return this.httpClient.get<Type>(`https://pokeapi.co/api/v2/type`);
}

  constructor(private httpClient: HttpClient) { }
}
