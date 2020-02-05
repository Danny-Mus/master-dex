import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Generation } from 'src/app/models/interfaces/Generation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenerationService {

public getGeneration(): Observable<Generation>{

    return this.httpClient.get<Generation>(`https://pokeapi.co/api/v2/generation`);
}

  constructor(private httpClient: HttpClient) { }
}
