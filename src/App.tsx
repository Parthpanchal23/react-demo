import { Suspense } from "react";

import Loading from "./component/loading";
import { PasswordGenerator } from "./component";
import img from "./assets/homebanner.jpg";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-full"
    >
      <Suspense fallback={<Loading />}>
        <PasswordGenerator />
      </Suspense>
    </div>
  );
}

export default App;
