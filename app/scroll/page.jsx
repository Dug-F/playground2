import ScrollIntoView from "@/app/components/scrollIntoView/ScrollIntoView"

export default function Home() {
  return (
    <div>
      <div style={{ height: "150vh", background: "#ccc" }}>Scroll down to see the animation</div>
      <ScrollIntoView>
      <h1 className="text-9xl font-black text-gray-950 font-poppins italic">
        Welcome.
      </h1>
      </ScrollIntoView>
      <div style={{ height: "200vh", background: "#ddd" }}>More content below</div>
    </div>
  );
}
