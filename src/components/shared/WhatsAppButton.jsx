import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsAppButton = () => {
    return (
        <WhatsAppWidget
            phoneNumber="+573145908319"
            message="¡Hola! ¿Cómo puedo ayudarte?"
            companyName="Mi Empresa"
            sendButton="Enviar"
        />
    );
};

export default WhatsAppButton;