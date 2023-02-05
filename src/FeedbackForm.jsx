import classes from './FeedbackForm.module.css';
import img from './assets/icon-star.svg';
import { useState } from 'react';

export default function FeedbackForm({setSubmit}) {
    const [selection, setSelection] = useState(null);
    
    const options = [1, 2, 3, 4, 5];

    return (
        <div className={classes.container}>
            <img src={img} alt='star' />
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            {
                options.map((el, index) => 
                    <button className={classes.options} key={index} type="submit" onClick={(e) => setSelection(e.target.innerText)}>{el}</button>
                )
            }
          </div>
          <button type="submit" className={classes.submitBtn} onClick={() => setSubmit(selection)}>SUBMIT</button>
      </div>
    );
}