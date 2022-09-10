import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebaseSetup";
import firebase from "firebase/compat/app";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
function Feed() {
  const { user } = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // this use effect fetch posts from firebase
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        // setting posts
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // sending post to firebase

    db.collection("posts").add({
      userId: user.uid,
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      // this is code for server timestamp
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // set input empty
    setInput("");
    // console.log('form submitted ✅');
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
