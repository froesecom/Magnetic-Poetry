#Magnetic Poetry
Final project for General Assembly

##The concept

This is a single page word game that allows users to create poems and send them to friends. That friend can then alter the poem if they like, and pass it along. Users drag words onto the 'fridge' to write poetry.

The app creates, reads, updates, and deletes from the database using AJAX. Users do not explicity have to tell the app when or what to save/update. Instead their actions determine what is needed to create 'stories' in the database.

The user interface is intead to be very simple and users don't need to have any understanding of what is going on behind the scenes to use it. Most of the interface is drag and drop.

##Data
###Story
####has_many :story_parts

Created when a user chooses categories of words from the drop down. A hashbang is then pushed into the URL so that users can share their story via with URL.

###Story Part
####belongs_to :story, belongs_to :word
Once a word is dragged onto the 'fridge' div, a story part is created. Story parts story x/y coordinates of the word, as well as the word_id and story_id. These are used to place words on the page when a story is loaded.

###Category
####has_many :words
Used to filter words. No create/delete/update functionality for users... That's done on the backend by the grand master flash developer.

###Word
####belongs_to :category
Words are filtered using the category drop down menu. When dragged to the fridge the relevate word data is saved to a storypart.

To do list:
- supercoach
- add media query for mobile's saying this doesn't work.......!
- contact me div that slides in
- add more words
- write readme
- drop and reseed heroku database (change seed to not destroy words)
- clean up
- write tests

##TECHNOLOGY
- Ruby on Rails
- JavaScript
- AJAX
- jQuery
- JQuery UI
- Underscore
- jQueryRotate
- AddThis API
- Facebook OpenGraph
- RSpec
- wiselinks (support for .pushState() in non-compatable browsers)

##TO-DO 
- mobile compatibility http://touchpunch.furf.com/
- finish testing
- clean up and refactor
- underscore templates for creating word divs.



