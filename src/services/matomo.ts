import { push } from "@socialgouv/matomo-next";

/* L'argument pour le track event est un turple :
[
    category, // Log an event with an event category (Videos, Music, Games...)
    action, // an event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...)
    name?, // an optional event name
    value? // and optional numeric value
]
*/
export const matomoTrackEvent = (args: [string, string, string?, string?]) => {
    push(["trackEvent", ...args]);
};
