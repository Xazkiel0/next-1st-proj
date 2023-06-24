
export default function Home() {
  return (
      <section className="w-full flex-center-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          {/* make more longer text */}
          Promptopia. It is an open-source AI prompting tool for the modern world to discover, create and share creative prompts. You can use it to query leading AI tools such as ChatGPT, Midjourney and more. What kind of prompts are you looking for?

        </p>
        {/* <Feed /> */}
      </section>
  )
}
