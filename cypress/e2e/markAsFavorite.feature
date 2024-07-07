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




