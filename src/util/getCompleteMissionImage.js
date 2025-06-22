import missionStamp from "./../assets/missionStamp.png";
import missionOne from "./../assets/missionOne.png";
import missionTwo from "./../assets/missionTwo.png";
import missionAll from "./../assets/missionAll.png";

export default function getCompleteMissionImage(completeNum) {
  switch (completeNum) {
    case 1:
      return missionOne;
    case 2:
      return missionTwo;
    case 3:
      return missionAll;
    default:
      return missionStamp;
  }
}
