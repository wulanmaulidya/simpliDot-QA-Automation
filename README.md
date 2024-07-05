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
3. <strong>SreenShots dan ScreenRecord Automation </strong>
4. <strong>Cara Mengganti Username dan Password Akun Tmdb </strong><br>
   Untuk mengubah username dan password Tmdb silahkan untuk mengakses folder di bawah ini:<br>
   a. Buka folder Cypress > Fixtures > loginData.json<br>
   `fixtures/loginData.json`<br>
5. <strong>Note Untuk Reviewer</strong><br>
   1. 
   
   

