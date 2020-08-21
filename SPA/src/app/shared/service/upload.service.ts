import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';
import { Observable, Subject, of, from } from 'rxjs';
import { catchError } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  url: string = 'https://api.imgur.com/4/';
  constructor(private http: HttpClient) {}
  public upload(
    files: Set<File>,
    url: string
  ): { [key: string]: { progress: Observable<number> } } {
    // this will be the our resulting map
    const status: {
      [key: string]: { progress: Observable<number> };
    } = {};

    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append('file', files[0], files[0].name);

    // create a http-post request and pass the form
    // tell it to report the upload progress
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
    });

    // create a new progress-subject for every file
    const progress = new Subject<number>();

    // send the http-request and subscribe for progress-updates
    this.http
      .request(req)
      .pipe(catchError((err) => of(err)))
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          const percentDone = Math.round((100 * event.loaded) / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is

          progress.complete();
        }
      });

    // Save every progress-observable in a map of all observables
    status[files[0].name] = {
      progress: progress.asObservable(),
    };
    // return the map of progress.observables

    return status;
  }
}
