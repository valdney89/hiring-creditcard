import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hiring } from '@shared/models/hiring';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HiringService {
    url = `${environment.apiUrl}contratacoes`

    constructor(
        private http: HttpClient
    ) {}

    saveHiring(hiring: Hiring): Observable<Hiring>{
        return this.http.post<Hiring>(this.url, hiring)
    }
}
