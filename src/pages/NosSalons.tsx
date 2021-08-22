import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { menu } from "ionicons/icons";

import map2 from "./../assets/img/map2.png";

export const NosSalons = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle> Nos Salons</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img
          src={map2}
          style={{ height: "-webkit-fill-available", width: "500px" }}
          alt="map2"
        />
      </IonContent>
    </IonPage>
  );
};
