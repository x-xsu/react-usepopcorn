import { useState } from "react";
import { tempWatchedData } from "./App";
import WatchedList from "./WatchedList";
import WatchedSummary from "./WatchedSummary";


export default function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpenWatched, setIsOpenWatched] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpenWatched((open) => !open)}
      >
        {isOpenWatched ? "–" : "+"}
      </button>
      <WatchedSummary watched={watched} />
      {isOpenWatched && <WatchedList watched={watched} />}
    </div>
  );
}
