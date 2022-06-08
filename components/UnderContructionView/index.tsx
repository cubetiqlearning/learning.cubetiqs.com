import Lottie from "react-lottie";
import * as animationData from "../../assets/json/under-construction.json";
import styles from "./../../styles/UnderContructionView.module.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const UnderContructionView = () => {
  return (
    <div className={styles.container}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default UnderContructionView;