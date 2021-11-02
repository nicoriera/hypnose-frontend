import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
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
    <div>
      <div className="container-contact">
        <div className="infos-contact">
          <div className="info-christophe">
            <h4>Christophe BACCOU</h4>
            <p>Formation à l'IFH (institut français d'hypnose) à Bordeaux</p>
          </div>

          <div className="info-consultation">
            <h4>Consultations</h4>
            <p>
              Durant le confinement du au COVID, possibilité de séance par
              visioconférence.
            </p>
            <div>Hendaye</div>
            <div>7 impasse Saint Paul</div>
            <div>64700 HENDAYE</div>
            <div>Tél. 06 12 34 56 78</div>
            <div>contact@chris-hypnose.fr</div>
          </div>
        </div>

        <div className="container-contact-formulary">
          <h3>Formulaire de contact</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
              <form className="contact-formulary" onSubmit={handleSubmit}>
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
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
