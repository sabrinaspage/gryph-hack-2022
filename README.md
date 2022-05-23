
# Skript - Skripting the Unscripted ✨

## Inspiration 💡

Going *Virtual* has become the new norm with the advent of **Covid-19**. Applications like **Zoom** are booming a lot & have become *part & parcel* of every student as well as teacher's life! We noticed that Zoom meetings/lectures can be *tiring* and we often miss out on a small snippet of the meeting while we are distracted by sudden events. Improper tackling of so many students online has made new loopholes in the current education system. Whether a student is interested or not in a class, if he’s/she’s looking towards what the teacher is teaching — these informations are extremely valuable to the teachers as well as the school/college they are enrolled in. Moreover, from student’s perspective, it becomes so hectic to go through the entire recording to see if what we missed was important or not.

We believe that with the power of AI, this can be solved if proceeded creatively. Thus we made **Skript** ✨

## What it does 🤔

**Skript** is a smart web-app designed for those out there who get distracted during Zoom calls. It,

- Analyses user's face to determine when the user is looking away in an active session
- Features sentiment analysis to study the mood of the user throughout the session
- Allows users to record audio/video from a session automatically and or manually
- Extracts the *distracted* timestamps w/ contents from the session using parent transcript
- Let's user ask question directly from the same thing, returning hightly accurate answers.

## How we built it ⚙️

- We depended on the Material-UI docs, React documentation and TypeScript documentation
- The Sentiment Analysis model is actually crafted with **Pytorch**, & is powered by Affdex-API
- The QnA model is fueled by **Tensorflow**'s BERT.
- Referred to React hooks like useContext, useState, useEffect
- Frontend development referred to Figma for designs and constantly reiterated based on changes
- Used VSC's inbuilt features in its fullest potential
- Frontend and backend paired together to deploy on Netlify, **CircleCi** and Heroku
- Used **CockroachDB** to store video sessions, users and session information
- **Google Cloud platform** was used for speech-to-text

------

## Design

We were heavily inspired by the revised version of **Double Diamond** design process developed by **UK Research Council**, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution.

![Double-Diamond](https://res.cloudinary.com/devpost/image/fetch/s--zhzzgMUi--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/Qmdy6iR3qoSRzrQrtRScVAdSmw9ECbmAXqE3mxMsU3AKNe)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Material UI** design. We utilized design tools like Figma, Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

------

# Research 📚

- GoEmotions: A Dataset of Fine-Grained Emotions, ACL 2020 : https://arxiv.org/pdf/2005.00547v2.pdf
- Real-time Convolutional Neural Networks for Emotion and Gender Classification : https://arxiv.org/pdf/1710.07557v1.pdf
- https://demodesk.com/blog/online-meetings/most-common-issues-explained
- https://blog.zoom.us/new-ways-to-combat-zoom-meeting-disruptions

**CREDITS**

- Design Resources : Freepik
- Icons : Icons8, MUI
- Font : Fredoka One / Manrope / Montserrat / Roboto

------

## Challenges we ran into 😤

- There was a big-time difference between all of the members and therefore communication was vital for this project to succeed.
- There was also a difference in skill level; participating in a hackathon was a new experience to some team members and some were learning new software.
- Power Outage because of storm messed up the whole schedule x__x
- Using Material UI’s Grid system is a pain.

## Accomplishments that we're proud of ✨

We are proud of finishing the project on time which seemed like a tough task as we started working on it quite late due to other commitments and were also able to add most of the features that we envisioned for the app during ideation. Moreover, we learned a lot about different Web technologies and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

## What we learned 🙌

**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)

## What's next? 🚀

*We believe that our App has great potential*. Besides, we plan to expand it's capabilities by *incorporating other languages*. Our next step is to expand the number of variables taken into account in our algorithm. This will not only permit a *greater audience* but also facilitate the exchange of diverse information and technical expertise globally. Additionally, we intend to continue improving the accuracy and speed of our Machine learning Model to provide better accuracy & low-spec support.

**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**
