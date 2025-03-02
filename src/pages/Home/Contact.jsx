import { FaLightbulb } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { useForm } from "react-hook-form";
import Logo from "../../assets/images/logo-contact.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const CardContact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    
    const onSubmit = (data) => {
        console.log("Formulario enviado:", data);
        alert("Formulario enviado correctamente");
        reset();
    };

     // Lista de campos del formulario
    const campos = [
        { name: "nombre", label: "Nombre", type: "text", rules: { required: "El nombre es obligatorio", minLength: { value: 3, message: "Debe tener al menos 3 caracteres" } } },
        { name: "telefono", label: "Teléfono", type: "tel", rules: { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]{7,10}$/, message: "Debe ser un número de 7 a 10 dígitos" } } },
        { name: "correo", label: "Correo", type: "email", rules: { required: "El correo es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Correo no válido" } } },
        { name: "Mensaje", label: "Mensaje", type: "textarea", rules: { required: "El comentario es obligatorio", minLength: { value: 10, message: "Debe tener al menos 10 caracteres" } } },
    ];

    return (
        <div className="mt-5 contacto-container">
            <div className="contacto-info">
                <h2>Contactanos:</h2>
                <p>Correo: info@cominio.com</p>
                <p>Llamanos: +34 608 18 04 98</p>
                <div className="contacto-redes">
                    <p>Redes Sociales:</p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="icon-redessociales-contact"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon-redessociales-contact"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="icon-redessociales-contact"/>
                    </a>
                </div>
                <div className="contacto-logo">
                    <img src={Logo} alt="Logo" />
                    <span>Mejicali Turbine Energy</span>
                </div>
                <p className="contacto-reviews">
                    Direccion
                </p>
            </div>
            <div className="row contacto-formulario">
                <div>
                    <h4>¿Cómo podemos ayudarte?</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {campos.slice(0, 2).map(({ name, label, type, rules }) => (
                                <div className="col-md-6 mb-3" key={name}>
                                    <label className="form-label">{label}</label>
                                    <input className="form-control" type={type} {...register(name, rules)} />
                                    {errors[name] && <p className="text-danger">{errors[name].message}</p>}
                                </div>
                            ))}
                        </div>

                        {campos.slice(2).map(({ name, label, type, rules }) => (
                            <div className="mb-3" key={name}>
                                <label className="form-label">{label}</label>
                                {type === "textarea" ? (
                                    <textarea className="form-control" rows="3" {...register(name, rules)}></textarea>
                                ) : (
                                    <input className="form-control" type={type} {...register(name, rules)} />
                                )}
                                {errors[name] && <p className="text-danger">{errors[name].message}</p>}
                            </div>
                        ))}
                        
                        <button type="submit" className="btn btn-primary w-100">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const Contact = () => {
    return (
        <>
            <section className="container-services bottom-margin max-width">
                <div className="container-division-top">
                    <h2 className="title-servicies">¡Energía confiable cuando más la necesitas!</h2>
                    <hr />
                    <p className="text-servicies m-text">
                        En MTE, sabemos que cada minuto cuenta cuando se trata de suministro energético. Por eso, 
                        ofrecemos soluciones diseñadas para garantizar un suministro seguro, eficiente y a la medida de tus necesidades. 
                        Nuestra experiencia en proyectos fast-track nos permite entregar infraestructura energética en tiempo récord, 
                        sin comprometer la calidad ni la seguridad. 
                    </p>
                    <p className="m-text m-sub">
                        <FaLightbulb className="icon-contac"/> Convierte los desafíos en oportunidades. Hablemos sobre tu próximo proyecto. <MdOutlineEnergySavingsLeaf className="icon-contac" color="green"/>
                    </p>
                </div>
                <CardContact />
            </section>
        </>
    );
};

export default Contact;