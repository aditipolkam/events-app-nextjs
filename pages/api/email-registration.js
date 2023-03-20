import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  const { method } = req;
  const filePath = buildPath();
  console.log(method, filePath);
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return res.status(404).json({ message: "No events found!" });
  }
  if (method === "POST") {
    const { email, eventId } = req.body;
    console.log(email, eventId);
    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(409).json({
            message: `You have already registered with email: ${email}`,
          });
          return event;
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }

      return event;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    res.status(201).json({
      message: `You have been registered succesfully with email: ${email}`,
    });
  }
}
