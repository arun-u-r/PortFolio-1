import '../index.css'; // Ensure you have a corresponding CSS file for styles

const BubbleContainer = () => {
  return (
    <div className="container flex flex-row items-center object-contain w-[80%] h-full px-10 ">
      {Array.from({ length: 3 }).map((_, bubbleIndex) => (
        <div key={bubbleIndex} className="bubble">
          {Array.from({ length: 7 }).map((_, spanIndex) => (
            <span key={spanIndex}></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BubbleContainer;
