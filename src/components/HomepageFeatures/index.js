import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Java",
    Svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#F44336"
          d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
        ></path>
        <path
          fill="#F44336"
          d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
        ></path>
        <g>
          <path
            fill="#1565C0"
            d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
          ></path>
          <path
            fill="#1565C0"
            d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
          ></path>
          <path
            fill="#1565C0"
            d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
          ></path>
          <path
            fill="#1565C0"
            d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
          ></path>
          <path
            fill="#1565C0"
            d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
          ></path>
        </g>
      </svg>
    ),
    description: (
      <>
        Java is a robust, object-oriented programming language known for its
        "Write Once, Run Anywhere" capability through its Java Virtual Machine
        (JVM). Developed by Sun Microsystems (now owned by Oracle), it combines
        high performance with strong type safety and automatic memory management
        through garbage collection. Java's extensive standard library, platform
        independence, and emphasis on security have made it a popular choice for
        enterprise applications, Android development, web services, and
        large-scale systems. It enforces strict object-oriented principles,
        making it excellent for building maintainable and scalable applications.
        With features like multithreading, extensive collection frameworks, and
        backward compatibility, Java remains one of the most widely used
        programming languages in corporate environments and continues to evolve
        with modern programming concepts while maintaining its core principles
        of reliability and security.
      </>
    ),
  },
  {
    title: "JavaScript",
    Svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
        <path
          fill="#000001"
          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
        ></path>
      </svg>
    ),
    description: (
      <>
        JavaScript is a versatile, high-level programming language primarily
        used for web development. Originally designed to run in web browsers for
        creating interactive web pages, it has evolved to become one of the most
        widely-used programming languages, now running on servers (Node.js),
        mobile devices, and desktop applications. It's known for its dynamic
        typing, event-driven programming, and ability to handle both frontend
        and backend development. JavaScript supports multiple programming
        paradigms including object-oriented, functional, and asynchronous
        programming, making it flexible for various use cases. With its vast
        ecosystem of libraries and frameworks (like React, Angular, and
        Node.js), robust package manager (npm), and active developer community,
        JavaScript has become essential in modern software development, enabling
        developers to build everything from simple websites to complex web
        applications, mobile apps, and server-side solutions.
      </>
    ),
  },
  {
    title: "Python",
    Svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <linearGradient
          id="goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1"
          x1="10.458"
          x2="26.314"
          y1="12.972"
          y2="26.277"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#26abe7"></stop>
          <stop offset="1" stop-color="#086dbf"></stop>
        </linearGradient>
        <path
          fill="url(#goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1)"
          d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
        ></path>
        <linearGradient
          id="goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2"
          x1="35.334"
          x2="23.517"
          y1="37.911"
          y2="21.034"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#feb705"></stop>
          <stop offset="1" stop-color="#ffda1c"></stop>
        </linearGradient>
        <path
          fill="url(#goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2)"
          d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
        ></path>
      </svg>
    ),
    description: (
      <>
        Python is a high-level, interpreted programming language renowned for
        its simplicity and readability, following the philosophy "there should
        be one-- and preferably only one --obvious way to do it." Created by
        Guido van Rossum, it emphasizes code readability with its notable use of
        significant whitespace and clean syntax. Python's extensive standard
        library, combined with its vast ecosystem of third-party packages
        (PyPI), makes it versatile for various applications including web
        development, data science, artificial intelligence, scientific
        computing, and automation. Its dynamic typing, automatic memory
        management, and support for multiple programming paradigms (procedural,
        object-oriented, and functional) make it accessible to beginners while
        powerful enough for experts. Python's interpreter-based nature and rich
        data science libraries (like NumPy, Pandas, and TensorFlow) have made it
        the go-to language for data analysis, machine learning, and artificial
        intelligence applications.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{Svg}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className="hero__subtitle" style={{ textAlign: "center" }}>
          "This documentation follows a multi-language approach to mastering
          Data Structures and Algorithms, solving each problem across Java,
          Python, and JavaScript. Each implementation is thoroughly documented
          with algorithmic analysis, complexity breakdowns, and
          language-specific paradigms to understand the unique trade-offs and
          optimizations each language offers, building a comprehensive knowledge
          base for algorithmic growth."
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
