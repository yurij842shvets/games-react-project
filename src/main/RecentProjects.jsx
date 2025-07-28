import styled from "styled-components";
import data from "../../recentprojects.json";

export default function RecentProjects() {
  return (
    <>
      <div>
        <h2>Our Recent Projects</h2>
        <p>
          Take a look at some of our most exciting gaming projects — from
          console to VR experiences, crafted with passion and precision.
          {data.map(({img}, index) => (
            <img key={index} src={img} alt="Recent Project" />
          ))}
        </p>
      </div>
    </>
  );
}
