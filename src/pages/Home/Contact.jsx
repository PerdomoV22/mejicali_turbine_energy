import { FaLightbulb } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { useForm } from "react-hook-form";
import Logo from "../../assets/images/logo-Contact.png";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser"; 

const CardContact = () => {

    // Traduccion de la pagina 
    const { t } = useTranslation();
    // Campos del formulario con traducción
    const fields = [
        { name: "nombre", type: "text" },
        { name: "telefono", type: "tel" },
        { name: "correo", type: "email" },
        { name: "mensaje", type: "textarea" }
    ];

    // Validacion de los campos del formulario con React hook y funcionalidad con EmailJS
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    
    const onSubmit = (data) => {
        console.log("Formulario enviado:", data);
    
        // Enviar el formulario con EmailJS
        emailjs
            .send(
                "service_q2pd06p", // Reemplazar con el SERVICE ID de la empresa
                "template_0qn0odg", // Reemplaza con el TEMPLATE ID de la empresa
                {
                    nombre: data.nombre,
                    telefono: data.telefono,
                    correo: data.correo,
                    mensaje: data.mensaje,
                },
                "-UrzpY75y3-wha2L9" // Reemplaza con el PUBLIC KEY de la empresa
            )
            .then(
                (response) => {
                    console.log("Correo enviado con éxito!", response);
                    alert(t("contact.form.alert"));
                    reset();
                },
                (error) => {
                    console.error("Error al enviar el mensaje:", error);
                    alert(t("contact.form.alertError"));
                }
            );
    };

    return (
        <div className="mt-5 contacto-container">
            <div className="contacto-info">
                <h2>{t("contact.contactInfo.title")}</h2>
                <p>{t("contact.contactInfo.email")}</p>
                <p>{t("contact.contactInfo.phone")}</p>
                <div className="contacto-logo">
                    <img src={Logo} alt="Logo MTE" />
                    <span>Mejicali Turbine Energy</span>
                </div>
                <p className="contacto-reviews">{t("contact.contactInfo.address")}</p>
            </div>

            <div className="row contacto-formulario">
                <div>
                    <h4>{t("contact.form.title")}</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {fields.slice(0, 2).map(({ name, type }) => (
                                <div className="col-md-6 mb-3" key={name}>
                                    <label className="form-label">{t(`contact.form.fields.${name}.label`)}</label>
                                    <input
                                        className="form-control"
                                        type={type}
                                        {...register(name, { required: t(`contact.form.fields.${name}.error`) })}
                                    />
                                    {errors[name] && <p className="text-danger">{errors[name].message}</p>}
                                </div>
                            ))}
                        </div>

                        {fields.slice(2).map(({ name, type }) => (
                            <div className="mb-3" key={name}>
                                <label className="form-label">{t(`contact.form.fields.${name}.label`)}</label>
                                {type === "textarea" ? (
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        {...register(name, { required: t(`contact.form.fields.${name}.error`) })}
                                    ></textarea>
                                ) : (
                                    <input
                                        className="form-control"
                                        type={type}
                                        {...register(name, { required: t(`contact.form.fields.${name}.error`) })}
                                    />
                                )}
                                {errors[name] && <p className="text-danger">{errors[name].message}</p>}
                            </div>
                        ))}

                        <button type="submit" className="btn btn-primary w-100">
                            {t("contact.form.submit")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="container-services bottom-margin max-width">
            <div className="container-division-top">
                <h2 className="title-servicies">{t("contact.title")}</h2>
                <hr />
                <p className="text-servicies m-text">{t("contact.description")}</p>
                <p className="m-text m-sub">
                    <FaLightbulb className="icon-contac" /> {t("contact.cta")}{" "}
                    <MdOutlineEnergySavingsLeaf className="icon-contac" color="green" />
                </p>
            </div>
            <CardContact />
        </section>
    );
};
    
    export default Contact;