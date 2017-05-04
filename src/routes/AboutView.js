import React from 'react';
import {Grid, Image} from 'react-bootstrap';
import headshot from 'images/headshot.jpeg';

export default function AboutView(props) {
  const styles = {
    imgContainer: {
      height: '200px',
      float: 'right',
      margin: '15px',
      textAlign: 'center',
    },
    img: {
      height: '100%',
    },
    txt: {
      textIndent: '20px',
    },
  };
  const email = (
    <a href="mailto:createclasses@gmail.com">createclasses@gmail.com</a>
  );
  return (
    <Grid>
      <h1 className="text-center">About CrEATe Chefs</h1>
      <div style={styles.txt}>
        <p>
          Hi! I am Jodie Jensen, and I love being in the kitchen. Much of my childhood was spent baking and preparing delicious meals alongside my mother and grandmother, and I've worked at creating mouthwatering dishes for nearly 30 years.
          {' '}
          <span style={styles.imgContainer}>
            <Image src={headshot} style={styles.img} circle />
          </span>
          My greatest joys are my five children, daughter in law, and granddaughter, and we are so excited to be welcoming a second grand late this summer! Enjoying a meal together is my favorite way to spend time with all of them. It has been a pleasure and a reward to teach them, watching as they grow and find their own gifts. Inspiring your children in this way offers a valuable skill set that will last them a lifetime.
        </p>
        <p>
          As I approached my 20th year of homeschooling, I looked for ways to combine my love for both cooking and teaching. CrEATe Cooking Classes became the perfect combination of doing things I love while being present at home with my last two teenagers. I now look forward to meeting and intructing each new student in the most popular room of our home - the kitchen.
        </p>
        <p>
          Call or text 801-856-2768 or e-mail {email} with questions.
        </p>
        <p>
          Special needs students welcome!
        </p>
      </div>
    </Grid>
  );
}
