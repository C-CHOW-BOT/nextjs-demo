import classes from "./EventItem.module.css";
import Button from "../Ui/Button";
import AddressIcon from "../Icons/AddressIcon";
import DateIcon from "../Icons/DateIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          Explore Event
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
}

export default EventItem;
