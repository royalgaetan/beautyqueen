import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonLabel,
  IonListHeader,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { menu } from "ionicons/icons";
import { useState } from "react";
import RealisationCard from "../components/RealisationCard";

import pop2 from "./../assets/img/pop2.jpg";
import pop3 from "./../assets/img/pop3.jpg";
import pop4 from "./../assets/img/pop4.jpg";
import pop5 from "./../assets/img/pop5.jpg";

import popH3 from "./../assets/img/popH3.jpg";
import popH4 from "./../assets/img/popH4.jpg";
import popH5 from "./../assets/img/popH5.jpg";

const NosRealisations = () => {
  const [IonSegmentValue, setIonSegmentValue] = useState("femmes");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle> Nos Réalisations</IonTitle>
        </IonToolbar>
        <IonToolbar>
          {" "}
          <IonSegment
            swipeGesture
            mode="md"
            onIonChange={(e) => setIonSegmentValue(e.detail.value!)}
          >
            <IonSegmentButton value="femmes">Femmes</IonSegmentButton>
            <IonSegmentButton value="hommes">Hommes</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: "#eee4e9" }}>
        {/* Segment Card */}

        {/*-- Segment Content --*/}
        <div
          className="Segment__content"
          style={{ margin: "30px 0px 0px 0px" }}
        >
          {IonSegmentValue === "femmes" && (
            <>
              <IonListHeader style={{ margin: "0px 0px 25px 0px" }}>
                <IonLabel>
                  <h1>
                    <b>Coiffures Femmes</b>
                  </h1>
                  <p style={{ fontWeight: "normal" }}>
                    Decouvrez et likez toutes nos coiffures Femmes
                  </p>
                </IonLabel>
              </IonListHeader>
              <div>
                {" "}
                <RealisationCard
                  img={pop2}
                  date="Il y'a 15 min"
                  titre="Tissage Plus"
                  text="Voici notre dernier modèle, venez vite !😚😘😚😚😚🎨"
                />
                <RealisationCard
                  img={pop3}
                  date="Il y'a 1 jour"
                  titre="Tresse Meloo"
                  text="😏quam explicabo odio cupiditate mollitia dignissimos nesciunt sequi
          repellat quibusdam dicta, exercitationem👍 reiciendis vel at reprehenderit🤩🪁."
                />
                <RealisationCard
                  img={pop4}
                  date="Il y'a 2 jours"
                  titre="Rat Epais"
                  text="😚😘😘temporibus, ullam voluptatibus💥👌 fuga mollitia molestias. Et velit
          consectetur odio consequuntur dicta labore, blanditiis placeat🎁🎁😃
          "
                />
                <RealisationCard
                  img={pop5}
                  date="Il y'a 3 jours"
                  titre="Coupe Defrisée"
                  text="💙  inventore neque quibusdam,😎🥰 magnam mollitia aliquid sapiente quo unde
          vitae cumque quasi assumenda adipisci itaque voluptas earum🥳👌👍 eius ipsam🎨💎🎯"
                />
              </div>
            </>

            // <div className="Empty__Segment">
            //   <IonIcon size="large" icon={bookmarksOutline} />
            //   <p>Tous vos favoris s'afficheront ici</p>
            // </div>
          )}
          {IonSegmentValue === "hommes" && (
            <>
              <IonListHeader style={{ margin: "0px 0px 25px 0px" }}>
                <IonLabel>
                  <h1>
                    <b>Coiffures Hommes</b>
                  </h1>
                  <p style={{ fontWeight: "normal" }}>
                    Parcourez toutes nos créations Homme, et Ajoutez un like à
                    celui qui vous plait
                  </p>
                </IonLabel>
              </IonListHeader>
              <div>
                {" "}
                <RealisationCard
                  img={popH3}
                  date="Il y'a 6 heures"
                  titre="Guinz Simple"
                  text="Lorem👌🤩, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi nam repudiandae?🚀"
                />
                <RealisationCard
                  img={popH4}
                  date="Il y'a 22 heures"
                  titre="Deux Temps Epais"
                  text="fugit 😘✔ laboriosam animi iure provident sequi, atque amet nam maiores 💙💨accusamus officia alias quod enim, vel ea."
                />
                <RealisationCard
                  img={popH5}
                  date="Il y'a 1 jour"
                  titre="Coupe Defrisée long"
                  text="veritatis?💭😊 Error eos est 🎨architecto! Dolorem natus, qui, porro illum ipsa
          dignissimos adipisci blanditiis aut iste dolorum voluptas solut 📷😋❤
          "
                />
              </div>
            </>

            // <div className="Empty__Segment">
            //   <IonIcon size="large" icon={duplicateOutline} />
            //   <p>Toutes vos contributions s'afficheront ici</p>
            // </div>
          )}
        </div>
        {/*-- END Segment Content --*/}
      </IonContent>
    </IonPage>
  );
};

export default NosRealisations;
