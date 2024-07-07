## SimpliDot-QA-Automation-Wulan Maulidya
---------------
## Depedency
1. Project ini menggunakan Node.js versi v21.5.0
2. Project ini menggunakan Cypress versi v13.13.0
3. Project ini menggunakan cucumber v4.3.1
4. Project ini menggunakan plugin prettier v3.3.2
----------------
## Note
Pengujian pada fitur "Mark as Favorite" nantinya akan mengalami error pada scenario 4 (sorting movie)<br>
Disebabkan karena adanya elements website yang tidak terdefinisi<br>
sehingga cypress tidak bisa mendektesi element tersebut untuk diinteraksi<br>
keterangan error:<p>
<img width="194" alt="image" src="https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/ed86e875-2a4e-4eb2-aaa5-c09a67a9a547"></p>
untuk handle error seperti gambar diatas sudah dilakukan seperti penambahan file support/index.js 
untuk uncaught exception supaya cypress tidak fail, namun error tetap muncul
```javascript

Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false biar test-nya gak nge-fail
  if (err.message.includes('ga is not defined')) {
    return false;
  }
});

```
----------------
## Point yang dikerjakan
1. <strong>Code Automation</strong> ✅
2. <strong>Scenario Pengujian</strong> ✅
```feature
Feature: Fungsionalitas Marks as Favorite
users can mark a movie to their favorite movie
while users should've done login to Application
if users not login yet then users can't marks as favorite
Also users can mark a few movie (more than one) into their favorite list
Users can remove movie that mark as favorit earlier from their favorite list
futhermore user can sorting their favorite movie list

   @regression
    Scenario: Scenario 1-Marks as Favorite [NEGATIVE]
       Given user visits movie page
       When user select a indonesia languange
       When user select a movie
       And user click a favorite button
       Then movie can not mark as favorite and should have text "Masuk untuk menambahkan film ke daftar sukaan anda"

    Scenario: Scenario 2-Marks as Favorite [POSITIVE]
       Given user visits movie page
       When user select a ind languange
       When user login to Application
       When user select a film
       And user click a fav button
       Then user go to profile and check overview and select sub menu most favorite
       Then user select whether movie or serial tv
       Then user can see that movie should be in their favorite list

    Scenario: Scenario 3-Mark a Fews Movie as Favorite [POSITIVE]
       Given user visits movie page
       When user select a fews movie for mark as favorite
       Then the movie should exist in their favorite list


    Scenario: Scenario 4-Sorting Movie in favorite list [POSITIVE]
       Given user visits movie page
       When user go to their favorite list and sorting the movie in their favorite list
       Then the movie will sorted as their want


    Scenario: Scenario 5-Remove Movie from Favorite list [POSITIVE]
       Given user visits movie page
       When user select a fews movie for remove from their favorite list
       When user check into their movie favorite list
       Then the movie should not exist in their favorite list

```
3. <strong>SreenShots dan ScreenRecord Automation </strong>✅<p>
   <img width="959" alt="image" src="https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/16f5421b-be87-4518-8e0a-08c6f52a4a41"></p>
   https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/05af6c78-89e5-42c6-a00a-c0ac5f0e04af
   
4. <strong>Cara Mengganti Username dan Password Akun Tmdb </strong>✅<br>
   Untuk mengubah username dan password Tmdb silahkan untuk mengakses folder di bawah ini:<br>
   A. Buka folder Cypress > Fixtures > loginData.json<br>
   `fixtures/loginData.json`<br>
   
5. <strong>Note Untuk Reviewer</strong>✅<br>
Point berapa saja dari <strong>kriteria wajib</strong> dan <strong>optional task</strong> yg sudah dikerjakan:</p>
    A. <strong>Kriteria Wajib</strong>:
<ul>
<li><strong>Point 1</strong>: Gambaran fungsionalitas untuk melakukan pengujian automation (ada pada script pengujian di branch main) ✅</li>
<li><strong>Point 2</strong>: Menuliskan scenario pengujian dalam format Gherkin (ada pada nomor 2 di atas) ✅</li>
<li><strong>Point 3</strong>: Menggunakan Cypress untuk pengujian ✅</li><br>
<img width="959" alt="image" src="https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/0eec3d11-be08-4b0a-af74-84f5b192c20f"></p>
<li><strong>Point 4</strong>: Validasi setiap step pengujian ✅</li><br>
Validasi step pada scenario 1:</p>
    
```javascript
Then("movie can not mark as favorite and should have text {string}", () => {
    cy.get('li.tooltip.use_tooltip').then($assertion => {
        if($assertion.length > 0){
            cy.wrap($assertion[1]).title('eq', 'Masuk untuk menambahkan film ke daftar sukaan anda')
        }else{
    cy.log('Element is not found')
    cy.wait(3000)
})
})
```
Validasi step pada scenario 2:<br>
```javascript
Then ('user can see that movie should be in their favorite list', () => {
    cy.get('#results_page_1').should('exist')
    cy.title('eq', 'Kimetsu no Yaiba').should('exist')
    cy.wait(3000)
})
```
Validasi step pada scenario 3:<br>
```javascript
Then('the movie should exist in their favorite list', () => {
    cy.get('#results_page_1').should('exist')
    cy.title('eq', 'Despicable Me 4').should('exist')
    cy.title('eq', 'The Boy and the Heron').should('exist')
    cy.wait(3000)
})
```
Validasi step pada scenario 4:<br>
```javascript
cy.get('#results_page_1').should('exist')
```
Validasi step pada scenario 5:<br>
```javascript
Then('the movie should not exist in their favorite list', () => {
    cy.get('#results_page_1').should('not.exist')
})

```
<li><strong>Point 5</strong>: Username dan Password Tmdb (ada pada nomor 4 di atas) ✅</li>
username dan password dibuat di dalam file <strong>support/login_helper.js</strong> untuk data loginnya ada dalam file <strong>fixtures/loginData.json</strong></p>
<li><strong>Point 6</strong>: Menggunakan Git dan Github dengan rapi, detail dan jelas ✅</li>
<li><strong>Point 7</strong>: Membuat dokumentasi project dalam bentuk markdown (.md) file ✅</li>
</ul>
    B. <strong>Saran / Optional Task</strong>
<ul>
<li><strong>Point 1</strong>: Codeline yang dibuat pada test kali ini clean dan mudah dibaca, seperti:</li>
    A. Menghapus kode atau comment yg tidak digunakan ✅<br>
    B. Indentasi yang rapi ✅<br>
    C. Menghapus import yang tidak digunakan ✅<br>

<li><strong>Point 2</strong>: Penulisan scenario menggunakan bahasa inggris (us) (ada pada nomor 2 di atas) ✅</li>
<li><strong>Point 5</strong>: Memberikan saran ke tim UI / UX maupun developer dari hasil dan fungsionalitas fitur saat ini yg menurut anda ada kurang ✅</li><br>

## Feedback/Saran
----------------
1. <strong>Saran untuk Developer</strong><br>
user tidak bisa me-remove dan undo favorite film dari daftar kesukaan mereka melalui profile (button dibawah desc),<br>
user harus me-remove movie/undo favorite dari beranda (dicari satu-satu filmnya) ini membuat UX tidak efisien dan kurang flexible<br>
baiknya developer bisa menangani route dan integrasi pada databasenya dengan lebih baik lagi.<br>
<img width="959" alt="image" src="https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/ea9fc2de-1353-4917-b7a4-163f944712c3"><p>

2. <strong>Saran untuk UI/UX</strong><br>
ui/ux terkait fitur favorite di beranda menurut saya harus dibenahi,<br>
ketika user marks as favorite lewat hompage aplikasi notifnya akan bertumpuk jika kita menambahkan secara cepat<br>
dan terlihat acak-acakan.<br>
<img width="958" alt="image" src="https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/ffdc3564-efd3-475d-a3c5-db8e292e98df"><p>

3. <strong>Saran cy.get/data-test pengujian</strong><br>
ini di luar dari fitur marks as favorite, tapi saya sebagai QA/tester ingin memberi saran kepada developer untuk lebih aware<br>
terhadap penamaan element website, seperti konsisten memberikan id, name, class untuk memudahkan environment pengujian pada aplikasi<br>
code clean pengujian dihasilkan dari developer yang juga konsisten dan clean dalam penamaan sebuah element website<br>
untuk menghindari error seperti pada scenario 4.<br>



