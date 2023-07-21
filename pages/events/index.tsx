import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
