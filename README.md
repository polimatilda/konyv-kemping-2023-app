# konyv-kemping-2023-app
In this project, I'm designing an application for the hungarian reading marathon, Könyv Kemping.

After creating an account, the user is logged in. If the user already has an account, they can log in, update their profile data (e-mail and password) and start using the app.

There is a main page where the user can read about the readathon and choose a guild. Guilds are for giving the participant reading prompts, which are needed to complete the readathon. Each guild has a minimum number of books and prompts the participant needs to read and fulfill.

Prompts can be checked on the profile page, where the chosen guild's prompts show up.

Books can be added to the reading list. After choosing a guild, books can be paired with prompts. When a book is added, it can be checked as read, or if the user does not want to read that book anymore for the readathon, the book can be deleted.

There is also a subpage for listing the events of the readathon ordered by date. If there is an event "today" that particular event is listed under today's events, if it's an upcoming event, it's listed together with the other upcoming events. If it's a past event, it does not show on the page.

There's also a Help subpage where the user can read about the page, and how to use it.

The main page, help page and events page is available without registration, but choosing a guild is only possible after logging in.

The readathon is happening between 2023. 02. 11. - 2023. 02. 25.

The deployed project is available here:
- https://konyv-kemping-2023.firebaseapp.com/login
- https://konyv-kemping-2023.web.app/login

------

Technologies used:
- React
- Bootstrap
- Bootstrap icons
- React Bootstrap
- React Router
- Firebase Authentication
- Firebase Firestore

------

The language of the app is Hungarian since this is a Hungarian readathon.

For styling, I used bootsrtap and React bootstrap with custom coloring.

------

Authentication tutorial used:
- https://youtu.be/PKwu15ldZ7k

React18 + Firebase9 auth help:
- https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/
