import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import urls from 'src/properties';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private oauthService: OAuthService) {

  }

  getUserData() {
    //D1
    const userId = 'jamesrobert999';
    const password = 'James@123';
    //D2
    // const userId='yogeshkumar12';
    // const password = 'Yogesh@123';
    //D3
    // const userId='jamesrobert999';
    // const password = 'James@123';
    //A1
    // const userId='jamesrobert999';
    // const password = 'James@123';
    //A2
    // const userId='jamesrobert999';
    // const password = 'James@123';

    //P
    // const userId=' chrisjordan123';
    // const password = 'Chris@123';
    //s1
    // const userId='LarryLeasure22';
    // const password = 'Leasure@1234';

    //m1
    // const userId='jamesrobert999';
    // const password = 'James@123';



    const url = 'https://services-test.keyassure.live/user/findUser';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userName': userId,
      'password': password
    });
    const options = { headers: headers };
    return this.http.post(url, null, options);
  }

  getUserId() {
    const url = `${urls.getUserId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }

  getUserDetails(userId: any) {

    const url = `${urls.getUserDetails}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': userId,
    });
    const options = { headers: headers };
    return this.http.post(url, null, options);
  }

  getUserFromAsguard(accessToken: any, userId: any) {
    console.log(accessToken);
    console.log(userId);
    const getUserUrl = `https://api.asgardeo.io/t/orgenox1/scim2/Users/${userId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+accessToken
      
    });
    const options = { headers: headers };
    return this.http.get(getUserUrl, options);
  }

  saveUserInDb(userObject:any) {

   // const userSavingUrl = "http://localhost:8080/user/addUser";
   const userSavingUrl=`${urls.userRegister}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'API-Key':"eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5MmU5MTFiOC0wZjlmLTQwNTQtYWYyMy0xZGZlMTlmNTM5OTZAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJiYWxsZXJpbmEgLSBBcHByYWlzYWwiLCJjb250ZXh0IjoiXC9kN2VhZjA3Yy1mYjA1LTQ4NTEtODhkYS0yZTVkZmQwY2Q3MzBcL2JhbGxlcmluYVwvYmFsbGVyaW5hXC9hcHByYWlzYWwtYTBlXC92MS4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiJ2MS4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MTMzNTIwMzAsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcxMzM1MTQzMCwianRpIjoiNjc5OWZmMWItMzllZC00M2MzLThmZWMtNmE1OWQ0MzkwYjgxIn0.FKtzGe7zzozlgoqjjDz4KsJ0b9PpDYOLti8vjOHzXAszCdXM550q83V4mjxViRAyWLa28P8kNtD7cLHdTb-uIqTqgcTaFQtrziOHhH0tlS3C8UmH-4FtiYN5lHLnFCoq3DWvUEEAYj1KCQWR3Up1RWFosy68v_ZzqXR_Cs9X5ecCXPUOxlKcGByM6Oy2gewh_szt8H3n70TloS8nxkQpu5jsW7_JyZIeFNpS3I1aK28niZEcU8fvrG_Cjv6jwkFO2q8Umn7DlptuVmMgsU2mWamxuUMeBO8vSJq0GSZiJdhR8HQpSRXEL41iTIkpFkW_5mRrLee0I4E53AtzojsAUs5XfAQJ87nm1jgSj25YlBP4aJ5SLgqCh25ket1vMI-pTj6GL_a1dOFjDq9_hAD3W5tHzvpTuUfWZbJwEUTyGMc1wrsl3eae-qBCX1aQuO4xn9cjLFz5MTkSg1yEUG6nNKGbdWHU1oaoUE-sFF-h4OjVU9nl_GLCEDmp3y3sZac5WrlJYfqKqK7dSLq_qxJm9XIlK8JcK34gSXjrHK7bl9A66by17MVhumaSgwZlA5_nrmDWyYMM0S9aF_IkD9iTKuoCkZ4qzxzTadbrXwTXlEssk5wISqGaoySDOxK-SCnD-WBAaHhflZxppYeFbdlR8siupSa3nItgdWyTdrgK7i0"
    });
    const options = { headers: headers };
    return this.http.post(userSavingUrl,userObject,options);
  }

//   checkUser(userId?:any){
//     //const showurl= `http://localhost:8080/user/fetchUser/${userId}`;
//     const showurl= `${urls.checkUser}+'/'+${userId}`;
//    const headers = new HttpHeaders({
//      'Content-Type': 'application/json',
//      // 'userId':userId 
//    });
//    const options = {headers:headers};
//    return this.http.post(showurl,null,options);
//  }
 userCount(userId?:any){
  //const url= `http://localhost:8080/user/userCount?id=${userId}`;

 const url= `${urls.usercount}?id=${userId}`;
 const headers = new HttpHeaders({
   'Content-Type': 'application/json',
    'userId':userId,
    'API-Key':"eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5MmU5MTFiOC0wZjlmLTQwNTQtYWYyMy0xZGZlMTlmNTM5OTZAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJiYWxsZXJpbmEgLSBBcHByYWlzYWwiLCJjb250ZXh0IjoiXC9kN2VhZjA3Yy1mYjA1LTQ4NTEtODhkYS0yZTVkZmQwY2Q3MzBcL2JhbGxlcmluYVwvYmFsbGVyaW5hXC9hcHByYWlzYWwtYTBlXC92MS4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiJ2MS4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MTMzNTIwMzAsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcxMzM1MTQzMCwianRpIjoiNjc5OWZmMWItMzllZC00M2MzLThmZWMtNmE1OWQ0MzkwYjgxIn0.FKtzGe7zzozlgoqjjDz4KsJ0b9PpDYOLti8vjOHzXAszCdXM550q83V4mjxViRAyWLa28P8kNtD7cLHdTb-uIqTqgcTaFQtrziOHhH0tlS3C8UmH-4FtiYN5lHLnFCoq3DWvUEEAYj1KCQWR3Up1RWFosy68v_ZzqXR_Cs9X5ecCXPUOxlKcGByM6Oy2gewh_szt8H3n70TloS8nxkQpu5jsW7_JyZIeFNpS3I1aK28niZEcU8fvrG_Cjv6jwkFO2q8Umn7DlptuVmMgsU2mWamxuUMeBO8vSJq0GSZiJdhR8HQpSRXEL41iTIkpFkW_5mRrLee0I4E53AtzojsAUs5XfAQJ87nm1jgSj25YlBP4aJ5SLgqCh25ket1vMI-pTj6GL_a1dOFjDq9_hAD3W5tHzvpTuUfWZbJwEUTyGMc1wrsl3eae-qBCX1aQuO4xn9cjLFz5MTkSg1yEUG6nNKGbdWHU1oaoUE-sFF-h4OjVU9nl_GLCEDmp3y3sZac5WrlJYfqKqK7dSLq_qxJm9XIlK8JcK34gSXjrHK7bl9A66by17MVhumaSgwZlA5_nrmDWyYMM0S9aF_IkD9iTKuoCkZ4qzxzTadbrXwTXlEssk5wISqGaoySDOxK-SCnD-WBAaHhflZxppYeFbdlR8siupSa3nItgdWyTdrgK7i0"
 });
 const options = {headers:headers};
 return this.http.get(url,options);
}

  get userName(): string | null {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['username'];
  }
  get id(): string | null {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['sub'];
  }

  get claim(): any {
    const claims = this.oauthService.getIdentityClaims();
    return claims;
  }

  getAccessToken() {
    const accessTokenUrl = `
    https://api.asgardeo.io/t/orgenox1/oauth2/token?grant_type=client_credentials&scope=internal_user_mgt_view`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': "Basic dnBmY2RKbENLck5iMF82bmgzTjBNWW1vZm5ZYTpEcHlxVlJKWkxmY0doYzg2SFZKQTdsTXBjZEJKNWVQWmhmYUhnVHpPemxRYQ==",
    });
    const options = { headers: headers };
    return this.http.post(accessTokenUrl, null, options);
  }


  
  getDropdowns(){
    const dropDowns_url=`${urls.dropDowns}`;
 
     const headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'API-Key':"eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5MmU5MTFiOC0wZjlmLTQwNTQtYWYyMy0xZGZlMTlmNTM5OTZAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJiYWxsZXJpbmEgLSBDb25maWdjb2RlcyIsImNvbnRleHQiOiJcL2Q3ZWFmMDdjLWZiMDUtNDg1MS04OGRhLTJlNWRmZDBjZDczMFwvYmFsbGVyaW5hXC9iYWxsZXJpbmFcL2NvbmZpZ2NvZGVzLTYzMVwvdjEuMCIsInB1Ymxpc2hlciI6ImNob3Jlb19wcm9kX2FwaW1fYWRtaW4iLCJ2ZXJzaW9uIjoidjEuMCIsInN1YnNjcmlwdGlvblRpZXIiOm51bGx9XSwiZXhwIjoxNzEzNDM4NjI1LCJ0b2tlbl90eXBlIjoiSW50ZXJuYWxLZXkiLCJpYXQiOjE3MTM0MzgwMjUsImp0aSI6IjhiNWQ2ZjNjLWVmMTUtNGNmNi05NzNkLTQ0ZThiMDE4MDlhMiJ9.TFceIudVl6HsjBPSyaj6KGavIgoHc_ZMnE6J0fI0NFGoLeUS7b8NJTo5o3n47ctWAH9XLqOjB1Mk5M21UtXrg4I6sM5UtlmYpb1STzcV6jjIhSsV68aYCl4_RkQuwNKeSyyYTjW8ncP36otu57V1g_DKJEu6X1y7Eoya-KVd0wr_u_4Qe7i8Z1N7IIkN37P2PFvIA8I9ck06zsCTlVEKmqV_lATFxB9goMz9uEaqaGGt2e8MLgB8BA1QYugGWiteVB0oo1eVPbdz36eVNVYutao5iaZ6MQFBursRkGDnrPjwVm2pMArN2z729rtH-Sc6-G6y-qTqqpP-ofCIbkXwgg509RP9VIedp30bnZYXbeJNMDyjQWC_OLLXSpNgA6QjnmuCC2vI9oGfeiqzxKkh2S9ka8HHCTTVQ12tXSgHspDZQw43bUtfeSK7K54Kdsn6gmQAApSY25IaSQm-gYYlH6PJ4U6_7L_dJBR_HcyZHV-klFSeVy3LdgPMGmh9vKGE6nk_u9ca6OfCubiIEryYKFcKcknv1Rj_NuilKzzYQ7ia7rSjzF8nZar0fNNqQ5cn9M8EV-T4MIm_vrAi1d-0pRk1Jcvn_jGK_dZee-heTIBy9OPiQQIhsit8vwENEG4yP-14VKvgCdNQpu7fV3KLQnylambJvJMcwDH9E9Xh_84"
       
     });
 
     const options = {headers:headers};
     return this.http.post(dropDowns_url,null,options);
   }

}
