import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { menu } from "ionicons/icons";
import "./Tab1.css";

// IMG FEMME
import img_femme1 from "./../assets/img/img_femme1.jpg";
import img_femme2 from "./../assets/img/img_femme2.jpg";
import img_femme3 from "./../assets/img/img_femme3.png";

import pop1 from "./../assets/img/pop1.jpg";
import pop2 from "./../assets/img/pop2.jpg";
import pop3 from "./../assets/img/pop3.jpg";
import pop4 from "./../assets/img/pop4.jpg";
import pop5 from "./../assets/img/pop5.jpg";
import pop6 from "./../assets/img/pop6.jpg";
import pop7 from "./../assets/img/pop7.jpg";
// END IMG FEMME

// IMG HOMME
import img_homme1 from "./../assets/img/img_homme1.jpg";
import img_homme2 from "./../assets/img/img_homme2.jpg";
import img_homme3 from "./../assets/img/img_homme3.jpg";

import popH1 from "./../assets/img/popH1.jpg";
import popH2 from "./../assets/img/popH2.jpg";
import popH3 from "./../assets/img/popH3.jpg";
import popH4 from "./../assets/img/popH4.jpg";
import popH5 from "./../assets/img/popH5.jpg";
import popH6 from "./../assets/img/popH6.jpg";
import popH7 from "./../assets/img/popH7.jpg";
// END IMG HOMME

import gift1 from "./../assets/img/gift1.png";

interface LayoutProps {
  type?: any;
}

const Tab1: React.FC<LayoutProps> = ({ type }) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 500,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle> Actualités</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundColor: "#eee4e9" }}>
        <div>
          {/* <div style={{ margin: "0px 10px" }}>
          <h1 style={{ margin: "0" }}>Nouveautés</h1>
        </div> */}
          <IonCard>
            <IonItem color="warning" lines="none" detail>
              <IonThumbnail slot="start">
                <img src={gift1} alt="Gift_icon" />
              </IonThumbnail>
              <IonCardHeader className="Card__bonus">
                <IonCardTitle>Bénéficier de 50% de REDUCTION </IonCardTitle>
                <IonCardSubtitle>
                  Cliquer pour avoir votre Code Promo
                </IonCardSubtitle>
              </IonCardHeader>
            </IonItem>
          </IonCard>

          <IonCard>
            <IonSlides
              pager={true}
              options={slideOpts}
              style={{
                height: "300px;",
                objectFit: "cover",
                marginTop: "-10px",
              }}
            >
              {type === "femme" && (
                <>
                  <IonSlide className="slide__Container">
                    <img width="px" src={img_femme1} alt="img_femme1" />
                  </IonSlide>
                  <IonSlide className="slide__Container">
                    <img width="px" src={img_femme2} alt="img_femme2" />
                  </IonSlide>
                  <IonSlide className="slide__Container">
                    <img width="px" src={img_femme3} alt="img_femme3" />
                  </IonSlide>
                </>
              )}
              {type === "homme" && (
                <>
                  <IonSlide className="slide__Container">
                    <img width="px" src={img_homme1} alt="img_homme1" />
                  </IonSlide>
                  <IonSlide className="slide__Container">
                    <img width="px" src={img_homme2} alt="img_homme2" />
                  </IonSlide>
                  <IonSlide className="slide__Container">
                    <img width="px" src={img_homme3} alt="img_homme3" />
                  </IonSlide>
                </>
              )}
            </IonSlides>

            <IonCardContent>
              {" "}
              <IonButton mode="ios" expand="block" color="dark">
                Reservez Maintenant !
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        <div style={{ margin: "25px 20px" }}>
          <h1 style={{ margin: "0", fontWeight: "bold" }}>Populaires</h1>
        </div>

        {/* CARDS FEMME */}
        {type === "femme" && (
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <img src={pop1} alt="pop1_img" />
                <IonCardHeader>
                  <IonCardSubtitle>AFRO Coupe</IonCardSubtitle>
                  <IonCardTitle>2000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={pop2} alt="pop2_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Tissage Plus</IonCardSubtitle>
                  <IonCardTitle>1500 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={pop3} alt="pop3_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Tresse Meloo</IonCardSubtitle>
                  <IonCardTitle>3000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={pop4} alt="pop4_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Rat Epais</IonCardSubtitle>
                  <IonCardTitle>2000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={pop5} alt="pop5_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Coupe Defrisée</IonCardSubtitle>
                  <IonCardTitle>4000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={pop6} alt="pop6_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Coupe Mini Defrisée </IonCardSubtitle>
                  <IonCardTitle>2500 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={pop7} alt="pop7_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Tresse Cordon </IonCardSubtitle>
                  <IonCardTitle>2500 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        )}
        {/* END CARDS FEMME */}

        {/* CARDS HOMME */}
        {type === "homme" && (
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <img src={popH1} alt="popH1_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Trois Temps Simple</IonCardSubtitle>
                  <IonCardTitle>1000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={popH2} alt="popH2_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Remuage Plus</IonCardSubtitle>
                  <IonCardTitle>1500 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={popH3} alt="popH3_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Guinz Simple</IonCardSubtitle>
                  <IonCardTitle>1000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={popH4} alt="popH4_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Deux Temps Epais</IonCardSubtitle>
                  <IonCardTitle>500 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={popH5} alt="popH5_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Coupe Defrisée long</IonCardSubtitle>
                  <IonCardTitle>1200 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={popH6} alt="popH6_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Coupe Simple</IonCardSubtitle>
                  <IonCardTitle>1000 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <img src={popH7} alt="popH7_img" />
                <IonCardHeader>
                  <IonCardSubtitle>Coupe Defrisée</IonCardSubtitle>
                  <IonCardTitle>2500 FCFA</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        )}
        {/* END CARDS HOMME */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
