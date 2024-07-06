## SimpliDot-QA-Automation
## Wulan Maulidya

---------------
Github ini berisikan beberapa point yaitu:
1. <strong>Code Automation</strong>
2. <strong>Scenario Pengujian</strong>
```feature
Feature: Fungsionalitas Marks as Favorite
users can mark a movie to their favorite movie
while users should've done login to Application
if users not login yet then users can't marks as favorite
Also users can mark a few movie (more than one) into their favorite list
Users can remove movie that mark as favorit earlier from their favorite list
futhermore user can sorting their favorite movie list


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
       Then user go to profile and check overview 
       Then user select sub menu most favorite
       Then user select whether movie or serial tv
       Then user can see that movie should be in their favorite list

    Scenario: Scenario 3-Mark a Fews movie as Favorite
       When user select a fews movie for mark as favorite
       Then user go to profile and click menu overview
       When user select sub menu most favorite
       When user select whether movie or serial tv
       Then user can see that movie should be in their favorite list


    Scenario: Scenario 4-Sorting movie in favorite list



    Scenario: Scenario 5-Remove Movie from Favorite list
```
3. <strong>SreenShots dan ScreenRecord Automation </strong><br>
4. <strong>Cara Mengganti Username dan Password Akun Tmdb </strong><br>
   Untuk mengubah username dan password Tmdb silahkan untuk mengakses folder di bawah ini:<br>
   A. Buka folder Cypress > Fixtures > loginData.json<br>
   `fixtures/loginData.json`<br>
5. <strong>Note Untuk Reviewer</strong><br>
Point berapa saja dari <strong>kriteria wajib</strong> dan <strong>optional task</strong> yg sudah dikerjakan:</p>
   A. <strong>Kriteria Wajib</strong>:
<ul>
<li><strong>Point 1</strong>: Gambaran fungsionalitas untuk melakukan pengujian automation (ada pada script pengujian di branch main)</li>
<li><strong>Point 2</strong>: Menuliskan scenario pengujian dalam format Gherkin (ada pada nomor 2 di atas)</li>
<li><strong>Point 3</strong>: Menggunakan Cypress untuk pengujian</li><br>
<img width="959" alt="image" src="https://github.com/wulanmaulidya/simpliDot-QA-Automation/assets/91161995/0eec3d11-be08-4b0a-af74-84f5b192c20f"></p>
<li><strong>Point 4</strong>: Validasi setiap step pengujian</li><br>
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
shdsgdh
```
Validasi step pada scenario 4:<br>
```javascript
sahghgdhasd
```
Validasi step pada scenario 5:<br>
```javascript
sjadjhj
```
<li><strong>Point 5</strong>: Username dan Password Tmdb (ada pada nomor 4 di atas)</li><br>

   
   

