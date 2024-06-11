import codeIcon from "../../assets/code-svgrepo-com.svg";
import computerIcon from "../../assets/computer-pc-svgrepo-com.svg";
import fidgetIcon from "../../assets/fidget-spinner-svgrepo-com.svg";

export default function contentData() {
    const data = [
        {
            id:1,
            type:"image",
            title:"Create user interfaces from components",
            descFirst:"React lets you build user interfaces out of individual pieces called components. Create your own React components like <span className=\"desc-highlighted\">Thumbnail</span>,<span className=\"desc-highlighted\">LikeButton</span>, and <span className=\"desc-highlighted\">Video</span> . Then combine them into entire screens, pages, and apps.",
            descLast:"Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
            btnFlag:false
        },        
        {
            id:2,
            type:"image",
            title:"Write components with code and markup",
            descFirst:"React components are JavaScript functions. Want to show some content conditionally? Use an <span className=\"desc-highlighted\">if</span> statement. Displaying a list? Try array <span className=\"desc-highlighted\">map()</span>. Learning React is learning programming.",
            descLast:"This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.",
            btnFlag:false
        },
        {
            id:3,
            type:"image",
            title:"Add interactivity wherever you need it",
            descFirst:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
            descLast:"Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
            btnFlag:true,
            btnText:"Add React to your page",
            btnIcon:{codeIcon}
        },
        {
            id:4,
            type:"image",
            title:"Go full-stack with a framework",
            descFirst:"React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.",
            descLast:"React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.",
            btnFlag:true,
            btnText:"Get started with a framework",
            btnIcon:{fidgetIcon}
        },
        {
            id:5,
            type:"card",
            title:"Use the best from every platform",
            descFirst:"People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.",
            descLast:"With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.",
            btnFlag:true,
            btnText:"Build for native platforms",
            btnIcon:{computerIcon}
        },

    ]

    return data;
    
}