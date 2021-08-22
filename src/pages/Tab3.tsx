import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { menu } from "ionicons/icons";
import { useState } from "react";
import "./Tab3.css";

import product1 from "./../assets/img/product1.jpg";
import product2 from "./../assets/img/product2.jpg";
import product3 from "./../assets/img/product3.jpg";
import product4 from "./../assets/img/product4.jpg";
import product5 from "./../assets/img/product5.jpg";

import pommande1 from "./../assets/img/pommade1.jpg";
import pommande2 from "./../assets/img/pommade2.jpg";
import pommande3 from "./../assets/img/pommade3.jpg";
import pommande4 from "./../assets/img/pommade4.jpg";

const Tab3: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle> Produits</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar
          className="ion-margin-top"
          mode="ios"
          placeholder="Rechercher n'importe quel produit..."
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>

        <div className="products__Topslider">
          <IonCard className="product__Topslider">
            <img src={product1} alt="product1" />
            <IonCardHeader>
              <IonCardSubtitle>
                Moins 2, Cheveux 2 fois moins sales
              </IonCardSubtitle>
              <IonCardTitle>1000 FCFA</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="product__Topslider">
            <img src={product2} alt="product2" />
            <IonCardHeader>
              <IonCardSubtitle>Allé Coco Cream</IonCardSubtitle>
              <IonCardTitle>2000 FCFA</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="product__Topslider">
            <img src={product3} alt="product3" />
            <IonCardHeader>
              <IonCardSubtitle>Stylo Gel</IonCardSubtitle>
              <IonCardTitle>2000 FCFA</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="product__Topslider">
            <img src={pommande1} alt="pommande1" />
            <IonCardHeader>
              <IonCardSubtitle>Olive Pommado</IonCardSubtitle>
              <IonCardTitle>3100 FCFA</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="product__Topslider">
            <img src={product4} alt="product4" />
            <IonCardHeader>
              <IonCardSubtitle>Coco Cheveux Plus</IonCardSubtitle>
              <IonCardTitle>2000 FCFA</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>

        <div style={{ margin: "25px 20px" }}>
          <h1 style={{ margin: "0", fontWeight: "bold" }}>Suggestions</h1>
        </div>

        <IonRow>
          <IonCol size="6">
            <IonCard>
              <img src={product5} alt="product5" />
              <IonCardHeader>
                <IonCardSubtitle>Orange Crème de Beauté</IonCardSubtitle>
                <IonCardTitle>3500 FCFA</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <img src={pommande2} alt="pommande2" />
              <IonCardHeader>
                <IonCardSubtitle>Sulfure 18</IonCardSubtitle>
                <IonCardTitle>1500 FCFA</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <img src={pommande4} alt="pommande4" />
              <IonCardHeader>
                <IonCardSubtitle>100% Indian Hemp</IonCardSubtitle>
                <IonCardTitle>1000 FCFA</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <img src={product3} alt="product3" />
              <IonCardHeader>
                <IonCardSubtitle>Stylo Gel</IonCardSubtitle>
                <IonCardTitle>2000 FCFA</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <img src={pommande3} alt="pommande3" />
              <IonCardHeader>
                <IonCardSubtitle>Ginger Cream</IonCardSubtitle>
                <IonCardTitle>3500 FCFA</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <img src={product2} alt="product2" />
              <IonCardHeader>
                <IonCardSubtitle>Allé Coco Cream</IonCardSubtitle>
                <IonCardTitle>2000 FCFA</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
