import firebase from "firebase/app";
import "firebase/auth";

<FirebaseAuthProvider firebase={firebase} {...config}>
  {
    // my app code
  }
</FirebaseAuthProvider>;
