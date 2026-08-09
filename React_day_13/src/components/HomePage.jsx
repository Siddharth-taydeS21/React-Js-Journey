import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import NewVersion from "./NewVersion";
import OldVersion from "./OldVersion";

export default function HomePage() {
  return (
    <main className="py-15 flex justify-center gap-4 flex-col items-center">
      <div className="size-40 my-10 animate-[spin_8s_linear_infinite] flex justify-center items-center">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' alt="react-logo" />
      </div>
      <h1 className="text-3xl font-bold text-green-300 text-shadow-2xs/50">Hey there! You are on Home page Now!</h1>
      <p>No content added on the page yet! it's Coming Soon!</p>
      {/* <NewVersion />
      <OldVersion /> */}

      <ClickCounter />
      <HoverCounter />
    </main>
  )
}
