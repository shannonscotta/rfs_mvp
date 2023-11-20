import HomeContentCSS from "./HomeContent.module.css";

const HomeContent = () => {

    return (
        <main className={HomeContentCSS.main}>
        <p>Hi,</p>
        <p>I'm Scott.</p>
        <div>
          <p>Full stack developer,</p>
          <p>lifelong learner, & tech enthusiast.</p>
        </div>
      </main>
    )
}

export default HomeContent;