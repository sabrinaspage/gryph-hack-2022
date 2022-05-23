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
