import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonButton,
} from "@ionic/react";
import {
  heartOutline,
  paperPlaneOutline,
  downloadOutline,
} from "ionicons/icons";
import React from "react";

interface LayoutProps {
  img?: any;
  date?: string;
  titre?: string;
  text?: string;
}

const RealisationCard: React.FC<LayoutProps> = ({ img, date, titre, text }) => {
  return (
    <IonCard className="ion-margin-bottom" style={{ marginBottom: "40px" }}>
      <img src={img} alt={img} />
      <IonCardHeader>
        <IonCardSubtitle>{date}</IonCardSubtitle>
        <IonCardTitle>{titre}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <div
          style={{ borderBottom: " solid #d4d4d4 1px", paddingBottom: "10px" }}
        >
          {text}
        </div>

        <IonItem lines="none" className="ion-margin-top">
          <IonButton fill="clear" slot="start" color="dark" shape="round">
            {" "}
            <IonIcon slot="icon-only" icon={heartOutline} />
          </IonButton>

          <IonButton fill="clear" slot="start" color="dark" shape="round">
            {" "}
            <IonIcon slot="icon-only" icon={paperPlaneOutline} />
          </IonButton>

          <IonButton fill="clear" slot="end" color="dark" shape="round">
            {" "}
            <IonIcon slot="icon-only" icon={downloadOutline} />
          </IonButton>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default RealisationCard;
