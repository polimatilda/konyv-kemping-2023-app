# konyv-kemping-2023-app
In this project, I'm designing an application for the hungarian reading marathon, Könyv Kemping.

After creating an account, the user is logged in. If the user already has an account, they can log in, update their profile data (e-mail and password) and start using the app.

There is a main page where the user can read about the readathon and choose a guild. Guilds are for giving the participant reading prompts, which are needed to complete the readathon. Each guild has a minimum number of books and prompts the participant needs to read and fulfill.

Prompts can be checked on the profile page, where the chosen guild's prompts show up.

Books can be added to the reading list. After choosing a guild, books can be paired with prompts. When a book is added, it can be checked as read, or if the user does not want to read that book anymore for the readathon, the book can be deleted.

The deployed project is available here:
- https://konyv-kemping-2023.firebaseapp.com/login
- https://konyv-kemping-2023.web.app/login

------

These are the basic functions for now, but more is under development.

------

The language of the app is Hungarian since this is a Hungarian readathon.

For styling, I used bootsrtap and React bootstrap with custom coloring.

------

authentication tutorial used:
- https://youtu.be/PKwu15ldZ7k

react18 + firebase9 auth:
- https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/
