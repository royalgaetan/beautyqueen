import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  gift,
  heart,
  man,
  menu,
  people,
  person,
  star,
  woman,
} from "ionicons/icons";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle> Prestations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ margin: "25px 20px" }}>
          <h1 style={{ margin: "0", fontWeight: "bold" }}>Décorations</h1>
        </div>

        <IonCard>
          <IonItem detail href="./tab2">
            <IonIcon style={{ color: "orange" }} icon={gift} slot="start" />
            <IonLabel>Décorations Anniversaires</IonLabel>
          </IonItem>

          <IonCardContent>
            Le pack anniversaire est disponible pour les hommes et les femmes
            fetant un anniversaire. Le tarif varie en fonction du nombre de
            personne.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem detail href="./tab2">
            <IonIcon color="success" icon={heart} slot="start" />
            <IonLabel>Décorations Mariages</IonLabel>
          </IonItem>

          <IonCardContent>
            Le pack Mariage est maintenant disponible pour tout type de Mariage
            (Coutumier, Religieux, etc).
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem detail href="./tab2">
            <IonIcon color="danger" icon={star} slot="start" />
            <IonLabel>Soiréé Gala</IonLabel>
          </IonItem>

          <IonCardContent>
            Pour toutes vos soirées gala, Le pack Soirée Gala vous permet
            d'installer un univers festif sans précédant
          </IonCardContent>
        </IonCard>

        <div style={{ margin: "45px 20px 25px 20px" }}>
          <h1 style={{ margin: "0", fontWeight: "bold" }}>Coiffures</h1>
        </div>

        <IonCard>
          <IonItem detail href="./tab2">
            <IonIcon color="tertiary" icon={man} slot="start" />
            <IonLabel>Pack Coiffure Basic Hommes</IonLabel>
          </IonItem>

          <IonCardContent>
            Avec Le Pack Coiffure Basic disponible pour les hommes touchez
            jusqu'à 15 personnes et bénéficier d'une reduction
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem detail href="./tab2">
            <IonIcon color="primary" icon={woman} slot="start" />
            <IonLabel>Pack Coiffure Basic Femmes</IonLabel>
          </IonItem>

          <IonCardContent>
            Bénéficier une reduction avec le Pack Coiffure Basic pour Femme
            disponible Maintenant
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem detail href="./tab2">
            <IonIcon icon={people} slot="start" />
            <IonLabel>Pack Coiffure Prenium Mixte</IonLabel>
          </IonItem>

          <IonCardContent>
            Pour vos Mariages, vos Anniversaires, Vos Cérémonies, Le Pack
            Coiffure Prenium Mixte vous offre la possibilité de bénéficier d'une
            large Reduction sur le nombre de Personne
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
