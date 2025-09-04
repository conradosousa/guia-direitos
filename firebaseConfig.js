// Substitua os valores abaixo pelas credenciais do seu projeto Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlkRPuvByz09Z9G-saNOKhCbRlNMkQIr8",
    authDomain: "direitos-e-beneficios.firebaseapp.com",
    projectId: "direitos-e-beneficios",
    storageBucket: "direitos-e-beneficios.firebasestorage.app",
    messagingSenderId: "628210386581",
    appId: "1:628210386581:web:15f1adb32cdd2e8caa7d9c",
    measurementId: "G-J6JFZRSQRZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
