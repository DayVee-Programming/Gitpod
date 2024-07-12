import { useState } from "react";
import { v4 } from "uuid";
import { images } from "./assets/images/images";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Motto from "./components/Motto";
import Environments from "./components/Environments";
import Remote from "./components/Remote";
import Feedback from "./components/Feedback";
import Start from "./components/Start";
import Footer from "./components/Footer";
import { GitPodContext } from "./context/gitPodContext";
import Bars from "./components/Bars";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [navbar, setNavbar] = useState({
    links: [
      {
        id: v4(),
        value: "Features",
        to: "#",
      },
      {
        id: v4(),
        value: "Pricing",
        to: "#",
      },
      {
        id: v4(),
        value: "Blog",
        to: "#",
      },
      {
        id: v4(),
        value: "Docs",
        to: "#",
      },
      {
        id: v4(),
        value: "Changelog",
        to: "#",
      },
      {
        id: v4(),
        value: "We're hiring",
        to: "#",
      },
    ],
  });
  const [banner, setBanner] = useState({
    images: [
      {
        id: v4(),
        value: images.gitlabIcon,
        to: "#",
      },
      {
        id: v4(),
        value: images.githubIcon,
        to: "#",
      },
      {
        id: v4(),
        value: images.bitbucketIcon,
        to: "#",
      },
    ],
  });
  const [feedback, setFeedback] = useState({
    cards: [
      {
        id: v4(),
        comment: `GitPod is incredibly cool. \n
            In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.
          `,
        img: images.feedbackCard1,
        author: `Ben Halpern`,
        position: `Creator and Co-founder @forem and @ThePracticalDev`,
      },
      {
        id: v4(),
        comment: `Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked. \n
            Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)
          `,
        img: images.feedbackCard2,
        author: `Michael Friedrich`,
        position: `Developer Evangelist @GitLab`,
      },
      {
        id: v4(),
        comment: `Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!`,
        img: images.feedbackCard3,
        author: `Julius Volz`,
        position: `Creator @PrometheusIO`,
      },
      {
        id: v4(),
        comment: `I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “http://gitpod.io/#” to the URL. A+ tool all around.`,
        img: images.feedbackCard4,
        author: `David Ressler`,
        position: `Engineering Manager @instagram`,
      },
      {
        id: v4(),
        comment: `GitPod is a game-changer for open-source contribution! It's making collaboration and development so much easier. I can't wait to see how it shapes the future of open-source projects!`,
        img: images.feedbackCard5,
        author: `Daniel Wright`,
        position: `Creator @pinterest`,
      },
    ],
    companies: [
      {
        id: v4(),
        img: images.feedbackCompany1,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany2,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany3,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany4,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany5,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany6,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany7,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany8,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany9,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany10,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany11,
        link: "#",
      },
      {
        id: v4(),
        img: images.feedbackCompany12,
        link: "#",
      },
    ],
  });
  const [start, setStart] = useState({
    connects: [
      {
        id: v4(),
        img: images.gitlabIcon2,
        to: "#",
        text: "GitLab",
      },
      {
        id: v4(),
        img: images.githubIcon3,
        to: "#",
        text: "GitHub",
      },
      {
        id: v4(),
        img: images.bitbucketIcon2,
        to: "#",
        text: "Bitbucket",
      },
    ],
    workspaces: [
      {
        id: v4(),
        img: images.typescriptIcon,
        title: "Node or TypeScript",
        to: "#",
      },
      {
        id: v4(),
        img: images.pythonIcon,
        title: "Python",
        to: "#",
      },
      {
        id: v4(),
        img: images.goIcon,
        title: "Go",
        to: "#",
      },
      {
        id: v4(),
        img: images.rustIcon,
        title: "Rust",
        to: "#",
      },
      {
        id: v4(),
        img: images.javaIcon,
        title: "Java",
        to: "#",
      },
      {
        id: v4(),
        img: images.svelteIcon,
        title: "Svelte",
        to: "#",
      },
    ],
  });
  const [footer, setFooter] = useState({
    firstList: [
      {
        id: v4(),
        value: "Gitpod",
        to: "#",
      },
      {
        id: v4(),
        value: "Home",
        to: "#",
      },
      {
        id: v4(),
        value: "Features",
        to: "#",
      },
      {
        id: v4(),
        value: "Pricing",
        to: "#",
      },
      {
        id: v4(),
        value: "Changelog",
        to: "#",
      },
      {
        id: v4(),
        value: "Self-Hosted",
        to: "#",
      },
      {
        id: v4(),
        value: "Gitpod vs GitHub Codespaces",
        to: "#",
      },
      {
        id: v4(),
        value: "Status",
        to: "#",
      },
    ],
    secondList: [
      {
        id: v4(),
        value: "Developer",
        to: "#",
      },
      {
        id: v4(),
        value: "Getting started",
        to: "#",
      },
      {
        id: v4(),
        value: "Screencasts",
        to: "#",
      },
      {
        id: v4(),
        value: "Blog",
        to: "#",
      },
      {
        id: v4(),
        value: "Documentation",
        to: "#",
      },
      {
        id: v4(),
        value: "Report a bug",
        to: "#",
      },
      {
        id: v4(),
        value: "Community",
        to: "#",
      },
    ],
    thirdList: [
      {
        id: v4(),
        value: "Company",
        to: "#",
      },
      {
        id: v4(),
        value: "About",
        to: "#",
      },
      {
        id: v4(),
        value: "Careers",
        to: "#",
      },
      {
        id: v4(),
        value: "Contact",
        to: "#",
      },
      {
        id: v4(),
        value: "ContMedia Kitact",
        to: "#",
      },
    ],
    fourthList: [
      {
        id: v4(),
        value: "Legal",
        to: "#",
      },
      {
        id: v4(),
        value: "Imprint",
        to: "#",
      },
      {
        id: v4(),
        value: "Terms of Service",
        to: "#",
      },
      {
        id: v4(),
        value: "Privacy Policy",
        to: "#",
      },
    ],
    socials: [
      {
        id: v4(),
        img: images.twitterIcon,
        to: "#",
      },
      {
        id: v4(),
        img: images.githubIcon2,
        to: "#",
      },
      {
        id: v4(),
        img: images.whatsappIcon,
        to: "#",
      },
    ],
  });
  const [areBarsOpen, setAreBarsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <GitPodContext.Provider
      value={{ areBarsOpen, setAreBarsOpen, isPlaying, setIsPlaying }}
    >
      <Navbar navbar={navbar} />
      <Banner banner={banner} />
      <Motto />
      <Environments />
      <Remote />
      <Feedback feedback={feedback} />
      <Start start={start} />
      <Footer footer={footer} />

      {areBarsOpen && <Bars navbar={navbar} />}
      {isPlaying && <VideoPlayer />}
    </GitPodContext.Provider>
  );
}

export default App;
