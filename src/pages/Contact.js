import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import Map from "../components/Map";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lk100qa",
        "template_ek4pxmj",
        form.current,
        "user_cKq2Z3T1s3HXVMbKN6Cg6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const initialValues = {
    nom: "",
    email: "",
    demande: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required("Obligatoire"),
    email: Yup.string()
      .email("Adresse e-mail non valide")
      .required("Obligatoire"),
    demande: Yup.string().required("Obligatoire"),
    message: Yup.string()
      .min(15, "15 caractères minimum ou plus")
      .required("Obligatoire"),
  });

  return (
    <div className="container">
      <div className="container-contact">
        <div className="infos-contact">
          <div className="info-christophe">
            <h2>Comment me contacter ?</h2>
            <div><span className="bold">Christophe Baccou</span><span> - Praticien en hypnothérapie Ericksonienne certifée</span></div>
            <div className="info-christophe-contact">
              <div><span className="bold">Téléphone : </span><span>06 XX XX XX XX</span></div>
              <div><span className="bold">Email : </span><span>christophebaccou.hypnose@gmail.com</span></div>
            </div>
            <div className="info-christophe-venir">
              <div><span className="bold">Lieu : </span><span>14 boulevard du Général de Gaulle 64700 HENDAYE </span></div>
              <div><span className="bold">Horraires : </span><span>du lundi au vendredi de XXh à XXh et samedi matin de XXh à XXh </span></div>
            </div>
            <div><span className="bold">Infos : </span><span>Parking gratuit à Gaztelu Zahar (140 mètres) / Bus n°3 – Arrêt Ville (70 mètres) / Bus n°33-35-37 – Arrêt Mairie (220 mètres) </span></div>
            </div>
          <div className="container-contact-formulary">
            <h3>Formulaire de contact</h3>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              resetForm({ values: "" });
              sendEmail();
            }}
            >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                ref={form}
                className="contact-formulary"
                onSubmit={sendEmail}
              >
                <input
                  id="nom"
                  type="text"
                  name="nom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  placeholder="Votre nom"
                  autoFocus={true}
                />
                <div className="error">
                  {errors.nom && touched.nom && errors.nom}
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Votre email"
                />
                <div className="error">
                  {errors.email && touched.email && errors.email}
                </div>

                <input
                  id="text"
                  type="text"
                  name="demande"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.demande}
                  placeholder="Votre demande concerne"
                />
                <div className="error">
                  {errors.demande && touched.demande && errors.demande}
                </div>

                <textarea
                  id="textaera"
                  type="textaera"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Votre message"
                />
                <div className="error">
                  {errors.message && touched.message && errors.message}
                </div>

                <button
                  className="button-contact"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Envoyer
                </button>
              </form>
              )}
              </Formik>
            </div>
        </div>
        <Map/>
      </div>
    </div>
  );
};

export default Contact;
