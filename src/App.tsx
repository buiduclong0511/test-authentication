import './App.css'
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import './firebase'

const provider = new FacebookAuthProvider();

const auth = getAuth();

function App() {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("🚀 ~ user:", user)

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
      });
  }

  return (
    <button onClick={handleSignIn}>Sign In</button>
  )
}

export default App
