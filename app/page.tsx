// import LogoLoader from "@/components/LogoLoader";
// import HomeContent from "./HomeContent";

// export default function Page() {
//   return (
//     <LogoLoader>
//       <HomeContent />
//     </LogoLoader>
//   );
// }

import FullScreenLoader from "@/components/FullScreenLoader";
import HomeContent from "./HomeContent";

export default function Page() {
  return (
    <FullScreenLoader>
      <HomeContent />
    </FullScreenLoader>
  );
}
