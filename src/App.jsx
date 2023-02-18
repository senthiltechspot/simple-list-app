import { Auth, useAuth } from "@arcana/auth-react";
import News from "./News";

const onLogin = () => {
  // Route to authenticated page
};
function App() {
  const auth = useAuth();
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <News />
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
