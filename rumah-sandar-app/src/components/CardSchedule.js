export default function CardSchedule() {
  let indexColor = eventTypeList && eventTypeList.indexOf(item.event_type);
  return (
    <div>
      <Card
        style={{ backgroundColor: colors[indexColor] }}
        className="event-card"
      >
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <h3 className="event-type">{item.event_type}</h3>
          <p className="event-time">
            {startHr + ":" + startMin + " " + startampm + " "}-
            {" " + endHr + ":" + endMin + " " + endampm}
          </p>
        </Card.Body>
      </Card>
      <Card className="event-card date-card">
        <Card.Body className="date-body">
          <h3 className="event-type month">{month}</h3>
          <h3 className="event-type date">{date}</h3>
        </Card.Body>
      </Card>
    </div>
  );
}
