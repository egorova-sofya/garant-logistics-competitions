import React from "react";
import { withLayout } from "../../../hoc/Layout/Layout";
import testImg from "../../../assets/img/testImg.jpg";
import s from "./WorkItemPage.module.css";
import LikesCounter from "../../../components/LikesCounter/LikesCounter";

const WorkItemPage = ({}) => {
  // const { id } = useParams()
  return (
    <>
      <article>
        <div className={s.container}>
          <h1 className={s.title}>Lorem Ipsum</h1>
          <div className={s.contentWrapper}>
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor auctor lorem at molestie. Ut non urna pharetra,
              vehicula quam vel, commodo ante. Quisque quis tortor sagittis
              purus commodo finibus in in dolor. Vestibulum id nulla in ligula
              consequat sodales. Aliquam tincidunt bibendum molestie. Maecenas
              viverra justo non mi hendrerit, malesuada posuere ex fringilla.
              Praesent vel dui blandit mi cursus pretium in ac dui. Duis erat
              tortor, mollis at euismod eget, convallis sed mi. Ut leo magna,
              venenatis nec mi non, convallis ullamcorper neque. Pellentesque
              sed blandit metus, vel pellentesque sapien. Curabitur nec arcu
              molestie, fermentum leo eget, efficitur odio. Nunc quis fringilla
              justo.
            </p>
            <p>
              Phasellus a mauris vel nulla placerat convallis a in mauris. Morbi
              tincidunt hendrerit consequat. Etiam vel massa eu tellus
              ullamcorper consectetur. Aenean bibendum ac mauris a vulputate.
              Nulla augue dui, consequat eget odio vel, posuere condimentum
              nisl. Vivamus dapibus varius neque. Proin nisl est, fermentum quis
              elementum quis, auctor a nulla. Ut eu ultrices tellus, aliquam
              semper ipsum. Nulla ut quam consequat, sodales erat sollicitudin,
              mattis tellus. Nam ut imperdiet risus, quis pulvinar nibh. Sed
              vitae dolor volutpat, pellentesque neque ut, efficitur sapien.
            </p>
            <img src={testImg} />
          </div>
          <LikesCounter />
        </div>
      </article>
    </>
  );
};

export default withLayout(WorkItemPage);
