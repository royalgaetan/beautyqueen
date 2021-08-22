import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonItem,
  IonCardSubtitle,
  IonInput,
  IonItemDivider,
  IonLabel,
  IonList,
  IonTextarea,
  IonAlert,
} from "@ionic/react";
import {
  call,
  earth,
  informationCircleOutline,
  mail,
  menu,
  send,
} from "ionicons/icons";
import React, { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const [showAlert__About, setShowAlert__About] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle> Contactez-nous</IonTitle>
          <IonButton
            onClick={() => setShowAlert__About(true)}
            fill="clear"
            slot="end"
            shape="round"
          >
            <IonIcon slot="icon-only" icon={informationCircleOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: "#eee4e9" }}>
        <IonAlert
          mode="ios"
          isOpen={showAlert__About}
          onDidDismiss={() => setShowAlert__About(false)}
          cssClass="my-custom-class"
          header={"A propos de Beauty Queen"}
          subHeader={"Propulsé par Venturaplus"}
          message={
            "<br/>" +
            "<div>Votre application pour reserver vos décorations et vos séances de coiffure</div>" +
            "<br/>" +
            "Beauty Queen &copy; 2021. Tous droits réservés. "
          }
          buttons={["OK"]}
        />

        <div style={{ margin: "25px 20px" }}>
          <h3 style={{ margin: "0", fontWeight: "bold" }}>
            Contactez-nous ici !
          </h3>
          <IonCardSubtitle>Support Disponible 24h/24, 7j/7</IonCardSubtitle>
        </div>
        <IonList>
          <IonItemDivider>Ecrivez-nous un message</IonItemDivider>
          <IonItem>
            <IonLabel position="stacked">Nom</IonLabel>
            <IonInput
              value={Name}
              placeholder="Entrez votre nom"
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              value={Email}
              placeholder="Entrez votre email"
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Message</IonLabel>
            <IonTextarea
              rows={3}
              placeholder="Entrez votre message ici..."
              value={Message}
              onIonChange={(e) => setMessage(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          <div className="ion-margin-top" style={{ textAlign: "center" }}>
            {" "}
            <IonButton mode="ios">
              <IonIcon slot="start" icon={send} />
              Envoyer votre message
            </IonButton>
          </div>
        </IonList>

        <IonList
          className="ion-margin-top"
          style={{ marginBottom: "50px", marginTop: "40px" }}
        >
          <IonItemDivider>Nos coordonnés</IonItemDivider>
          <IonItem>
            <IonIcon slot="start" icon={call} />
            <IonLabel>00242 06 000 00 00</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={call} />
            <IonLabel>00242 05 000 00 00</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={mail} />
            <IonLabel>beautyqueen@gmail.com</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={earth} />
            <IonLabel>www.beautyqueen.com</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
