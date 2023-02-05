import classes from './ThankYou.module.css';
import img from './assets/illustration-thank-you.svg';

export default function ThankYou({submit}) {
    return (
        <div className={classes.container}>
            <img src={img} alt='thank-you' />
            <div className={classes.selected}>You selected {submit} out of 5</div>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    );
}