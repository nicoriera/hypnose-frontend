import React, { useRef }  from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

// PICTURES
import LogoPsynapse from "../assets/pictures/logo_psynapse.png";
import LogoWho from "../assets/pictures/logo_who.png";
import LogoFfhtb from "../assets/pictures/logo_FFHTB.jpg";
import PictureProfil from "../assets/pictures/picture_profil.JPG"
import PictureTabac from "../assets/pictures/arret_tabac.jpg"
import PicturePhobie from "../assets/pictures/phobie.jpg"
import PictureAlimentaire from "../assets/pictures/trouble_alimentaire.jpg"

// COMPONENTS
import Button from "../components/Button"
import Pourquoi from "../components/Pourquoi"

const Accueil = () => {
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
    <div>
      <div  className="accueil-accroche">
          <div className="accueil-text-accroche">
            <h2 className="accueil-text-accroche-citation">
              « Le changement est une porte qui s'ouvre de l’intérieur »
            </h2>
            <p >Tom Peters</p>
          </div>
      </div>
      <div className="container-accueil">
        <div>
            <div className="accueil-text">
              <div className="accueil-text-presentation">
                <h2>Comment l'hypnose peut vous aider ?</h2>
                <p> Si vous êtes sur mon site, c’est que l’idée de changement fait
                écho en vous. Une très grande majorité de nos maux sont installés
                ou maintenus par la partie consciente de notre cerveau. L’état
                d’hypnose, en laissant intervenir notre partie inconsciente, va
                nous permettre de trouver des solutions pour reprendre le contrôle
                sur nos vies. Vous avez déjà, sans le savoir, fait une partie du
                chemin. Continuons cette route ensemble.</p>
              </div>
              <Link to={{ pathname: "https://www.doctolib.fr/" }} target="_blank">
                <Button text="Prendre rendez-vous"/>
              </Link>
            </div>
            <div className="accueil-pourquoi">
              <div>
                <h2>Pourquoi consulter en hypnothérapie ?</h2>
                <div className="accueil-pourquoi-container">
                  <div className="accueil-pourquoi-blocs">
                    <Pourquoi 
                    picture={PictureTabac}
                    alt="arret_tabac"
                    text="Arrêt du tabac et autres addictions"
                    />
                    <Pourquoi 
                    picture={PicturePhobie}
                    alt="phobie"
                    text="Phobies, stress, douleurs, amélioration du sommeil…"
                    />
                    <Pourquoi 
                    picture={PictureAlimentaire}
                    alt="trouble_alimentaire"
                    text="Gestion du trouble alimentaire"
                    />
                  </div>
                  <Link to="/presentation" target="_blank">
                    <Button text="En savoir plus"/>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="accueil-qui">
              <div className="accueil-text-qui">
                <div className="accueil-qui-text">
                  <h2>Qui suis-je ?</h2>
                  <ul>
                    <li>Certifié praticien en hypnose Ericksonienne par l’école de psychotéraphie Psynapse</li>
                    <li>Spécialisé en gestion de poids et arrêt du tabac</li>
                    <li>Certifié technicien en PNL (programmation neuro-linguistique)</li>
                    <li>Reconnu par la FFHTB (Fédération Française d’Hypnose et des Thérapies Brèves) et la WHO (World Hypnosis Organization)</li>
                  </ul>
                  <Link to="/qui" target="_blank">
                    <Button text="En savoir plus"/>
                  </Link>
                </div>
                <div className="picture-accueil">
                  <img  src={PictureProfil} alt="accueil" />
                </div>
              </div>
              <div className="logos-hypnose">
                <p>Certifications reconnues :</p>
                <Link className="logo-psynapse" to={{ pathname: "https://psynapse.fr/" }} target="_blank">
                <img src={LogoPsynapse} alt="logo-psynapse" />
                </Link>
                <Link className="logo-who" to={{ pathname: "https://www.world-hypnosis.org/fr" }} target="_blank">
                <img src={LogoWho} alt="logo-who" />
                </Link>
                <Link className="logo-ffhtb" to={{ pathname: "https://psynapse.fr/certifications-hypnose-pnl/federation-francaise-hypnose-therapies-breves-ffhtb/" }} target="_blank">
                <img src={LogoFfhtb} alt="logo-ffhtb" />
                </Link>
              </div>
            </div>

            <div className="accueil-container-contact">
          <div className="accueil-infos-contact">
          <div className="accueil-info-christophe">
            <h2>Comment me contacter ?</h2>
            <div><span className="bold">Christophe Baccou</span><span> - Praticien en hypnothérapie Ericksonienne certifée</span></div>
            <div className="info-christophe-contact">
              <div><span className="bold">Téléphone : </span><span>06 37 66 52 97</span></div>
              <div><span className="bold">Email : </span><span>christophebaccou.hypnose@gmail.com</span></div>
            </div>
            <div className="info-christophe-venir">
              <div><span className="bold">Lieu : </span><span>14 boulevard du Général de Gaulle 64700 HENDAYE </span></div>
              <div><span className="bold">Horaires : </span><span>du lundi au vendredi de XXh à XXh et samedi matin de XXh à XXh </span></div>
            </div>
            <div><span className="bold">Infos : </span><span>Parking gratuit à Gaztelu Zahar (140 mètres) / Bus n°3 – Arrêt Ville (70 mètres) / Bus n°33-35-37 – Arrêt Mairie (220 mètres) </span></div>
            </div>
          <div className="accueil-container-contact-formulary">
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
          </div>
        </div>
      </div>
  </div>
  );
};

export default Accueil;


