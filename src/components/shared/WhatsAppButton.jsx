import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsAppButton = () => {
    return (
        <WhatsAppWidget
            phoneNumber="+573105223603"
            message="BIENVENIDO A MTE somos expertos en soluciones energéticas. ¿En que podemos ayudarte? "
            companyName="Mejicali Turbine Energy"
            sendButton="Enviar"
        />
    );
};

export default WhatsAppButton;