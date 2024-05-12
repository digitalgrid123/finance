import { CorbadoAuth, useCorbado } from "@corbado/react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { isAuthenticated, loading } = useCorbado();
  const navigate = useNavigate();

  if (isAuthenticated && !loading) {
    navigate("/");
  }

  function onLogin() {
    navigate("/");
  }

  return (
    <div className="mx-auto flex items-center justify-center bg-[#1e1e1e] h-screen">
      <CorbadoAuth onLoggedIn={onLogin} />
    </div>
  );
}
