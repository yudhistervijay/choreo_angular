import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppraisalPageComponent } from '../appraisal-page/appraisal-page.component';
import { AppComponent } from '../app.component';
import { SharedService } from './shared.service';
import { environment } from 'src/environments/environment';
import contextPaths from 'src/context';
import urls from 'src/properties';


@Injectable({
  providedIn: 'root'
})
export class AprraisalService implements OnInit{

    // public userData!:any;
    public userId:any;
    public userRole:any;

    // public userId:any="598d968b-a7ac-4d26-87a4-ed4659e2d472";

  constructor(private http:HttpClient ,private sharedServices:SharedService) { 
    console.log(environment.production);
    // console.log(contextPaths.appraisal);

    // this.userData=this.sharedServices?.getUserData();
    // if(this.userData){
    //   this.userId=this.userData?.id;
    // }

              
    this.userId  = sessionStorage.getItem('userData');
    this.userRole = sessionStorage.getItem('userRole');
    console.log(this.userId);

  }

  getUserId(){
    return this.userId;
  }

  getUserRole(){
    return this.userRole;
  }

  ngOnInit(): void {
   
  }

  getAppraisalCards(currentPage:any,pageSize:any): Observable<any>{
    const url= `${urls.getAppraisalcards}?pageNo=${currentPage}&pageSize=${pageSize}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',     
      'userId':this.userId,
      'API-Key':"eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5MmU5MTFiOC0wZjlmLTQwNTQtYWYyMy0xZGZlMTlmNTM5OTZAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJiYWxsZXJpbmEgLSBBcHByYWlzYWwiLCJjb250ZXh0IjoiXC9kN2VhZjA3Yy1mYjA1LTQ4NTEtODhkYS0yZTVkZmQwY2Q3MzBcL2JhbGxlcmluYVwvYmFsbGVyaW5hXC9hcHByYWlzYWwtYTBlXC92MS4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiJ2MS4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MTM0MzgzNzMsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcxMzQzNzc3MywianRpIjoiNzQ4NDVlNDAtY2MxMS00MGU3LThkMGItOWEwMWVmYmVjMTZkIn0.dwfH0bpoiv5feN2y8hK-d4RTpFNDtiG0K_kwkO6aHHO-5isvHF6a13sNIsXClu-DHHCNE1i_RrTxPETMjThDteY16pIxVz9optGUplcG2RiuK1FaPZlfsscEDMb3jtift6At6V2TJpMgrt6bOM1p6nvG3vCXI8QBZiyrOpUrQHE_gfeRruUpW5jYXO1g73EwUWQMF8ydaMVZmawwZgaxRqqkpyfsmqXaDKv6YjxNIjDip64udbCRnWVg2aONtn4LdCcnQPzEGjuxGSqrW-WRNPeESbWhoSfdsvZlR5YP2kFbyOmiuepAMXpUvCpoYyODejal6CM2gOnhNRJ_l8H_7H67M793GDLMO3SATEoOmXZSi7Z9jOcWQzPDwQA8j3feh7oIO-KcPhPt_mORcKwQQYniA6vwkMgeNy7Hw-uS5_bs1bRbIj7v1KsErhB1y11p1S-bb7e7kHS85SJxZSOQxZAL4-ET5Rws70aI9BPaC196xUZk5jPPt1gw6IX69SrEJV5NzpTgmgp0fc0KzwBCNlMfZFLvpH2yiLKZJX9wYnKFMMAMXnVFtPmKCVHRMDqaaBr1xeH-VlxnhZggm4r5FaBRXZaoYuzyeUwT3jTr-1mFejs5FI1CUJZDlmguN6bQ1w9rINmkdHe5JVG_hIyQ3P8GnGAgP60ZgK4TEe6KezY"
    });

    const options = {headers:headers};
    return this.http.post(url,null,options);
  }

  checkVinNumber(vin:any){
    const url=`${urls.checkVinNumberAvailable}?vin=${vin}`;
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId':this.userId
    });

    const options = {headers:headers};
    return this.http.post(url,null,options);
  }



  getDropdowns(){
   const dropDowns_url=`${urls.dropDowns}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId':this.userId,
    });

    const options = {headers:headers};
    return this.http.post(dropDowns_url,null,options);
  }

  
  getFilteredAppraisalCards(currentPage: any, pageSize: any,object:any){
    let params = new HttpParams();
    params = params.append('pageNo', String(currentPage)); // Using append for the first parameter
    params = params.append('pageSize', String(pageSize));
    const url = `${urls.appraisalFilter}?${params.toString()}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId':this.userId
    });
 
    const options = {headers:headers};

    return this.http.post(url,object,options)
  }

  getDropdownsForAppraisalFilter(filterObject:any){
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId':this.userId
    });

    const options = {headers:headers};

    const module:string = 'appraisal';
    console.log(module);
    const params = new HttpParams().set('module', module)
    const url = `${urls.filterDropDown}?${params.toString()}`
    return this.http.post(url,filterObject,options);
  }

  uploadImageInDb(file:File){
    const url = `${urls.uploadImage}`

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(url,file);
  }

  uploadVideoInDb(file:File){
    const url = `${urls.uploadVideo}`;
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(url,formData);
  }

  createNewApprisal(object:any){
    const url =`${urls.addAppraisalVehicles}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId':this.userId
    });
    const options = {headers:headers};
    return this.http.post(url,object,options);
  }

  fetchAccessToken(){
    
    const url=`${urls.fetchAccessToken}`;
    return this.http.post(url,null)

  }

  deleteApparaisal(id:any){
    const params = new HttpParams().set('apprRef',id);    
    const deleteAppraisal_url=`${urls.deleteAppraisal}?${params.toString()}`;
    return this.http.post(deleteAppraisal_url,null);
  }

  

  draftAppraisal(object:any){    
    const url = `${urls.draftApprVeh}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId':this.userId
    });
    const options = {headers:headers};
    return this.http.post(url,object,options);
  }
  updateDraftAppraisal(object:any , apprid:any){
    const url = `${urls.updateDraftAppraisalVehicle}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'id':apprid
    });
    const options = {headers:headers};

    return this.http.post(url,object,options)
} 

  updateExistingAppraisal(object:any , apprid:any){
      const url = `${urls.updateAppraiseVehicle}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'id':apprid
      });
      const options = {headers:headers};

      return this.http.post(url,object,options)
  } 

  getAppraisalShowToUi(apprId:number){
    
    const url=`${urls.showToUi}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'AppraisalId':apprId
    });
    const options = {headers:headers};
    return this.http.post(url,null,options);
  }

  
  moveToInventory(apprId:any){

    const params:HttpParams = new HttpParams().set('apprRef',apprId);
    const moveToInv_url = `${urls.moveToInventory}?${params.toString()}`;
    return this.http.post(moveToInv_url,null);
  }

}
