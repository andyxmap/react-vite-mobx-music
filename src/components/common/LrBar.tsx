import Button from "@mui/material/Button"
import { useNavigate, useLocation,Link } from "react-router-dom";

export function LRBar() {
    const nav = useNavigate();
    const location = useLocation();

    return (
        <div style={{display:"flex",justifyContent:"flex-end",height:"60px",margin:"10px",alignItems:"center"}}>
            
            {(() => {
                switch (location.pathname) {
                    case "/login": return <Button variant="outlined"  sx={{ margin: 1 }} onClick={() => {
                        nav("/register")
                    }}>
                        {"REGISTRARSE"}
                    </Button>;
                    case "/register": return <Button variant="outlined" sx={{ margin: 1 }} onClick={() => {
                        nav("/login")
                    }}>
                        {"INICIAR SESIÓN"}
                    </Button>;
                }
            })()}



        </div>
    )
}