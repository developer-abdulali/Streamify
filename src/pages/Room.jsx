// import { useParams } from "react-router";
// import RoomComponent from "../components/RoomComponent";

// const Room = () => {
//   const { roomID } = useParams();

//   return (
//     <div>
//       <RoomComponent roomID={roomID} />
//     </div>
//   );
// };

// export default Room;

import { useParams } from "react-router-dom";
import RoomComponent from "../components/RoomComponent";

const Room = () => {
  const { roomID } = useParams();

  return (
    <div>
      <RoomComponent roomID={roomID} />
    </div>
  );
};

export default Room;
