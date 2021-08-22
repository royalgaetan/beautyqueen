import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  bagCheck,
  call,
  colorWand,
  home,
  location,
  people,
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

import { NosSalons } from "./pages/NosSalons";
import NosRealisations from "./pages/NosRealisations";
import Contact from "./pages/Contact";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import Brand_logo from "./assets/afro.png";

/* Theme variables */
import "./theme/variables.css";
import { useState } from "react";

const App = () => {
  const [Gender, setGender] = useState("femme");

  const Set__Gender = (gender: any) => {
    setGender(gender);
    console.log(gender);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu
          contentId="main_content"
          swipeGesture
          side="start"
          type="overlay"
        >
          <IonHeader>
            <IonToolbar color="danger">
              <div style={{ textAlign: "center" }}>
                {" "}
                <img width="40%" src={Brand_logo} alt="Brand_logo" />
              </div>
              <h1 style={{ textAlign: "center", margin: "-30px 0px 20px 0px" }}>
                <b>
                  <IonLabel color="light">Beauty queen</IonLabel>
                </b>
              </h1>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="ion-margin">
              <IonLabel>Vous interagissez en tant que</IonLabel>
              <IonButton expand="block" color="dark">
                <IonSelect
                  value={Gender}
                  placeholder="Select One"
                  onIonChange={(e) => {
                    Set__Gender(e.detail.value);
                  }}
                >
                  <IonSelectOption value="femme">Femme</IonSelectOption>
                  <IonSelectOption value="homme">Homme</IonSelectOption>
                </IonSelect>
              </IonButton>
            </div>

            <IonList lines="none" style={{ margin: "30px 0px" }}>
              <IonItem detail href="/tab1">
                <IonButton fill="clear">
                  <IonIcon color="danger" slot="start" icon={home} />
                </IonButton>
                Actualités
              </IonItem>
              <IonItem detail href="/tab2">
                <IonButton fill="clear">
                  <IonIcon color="danger" slot="start" icon={people} />
                </IonButton>
                Prestations
              </IonItem>
              <IonItem detail href="/tab3">
                <IonButton fill="clear">
                  <IonIcon color="danger" slot="start" icon={bagCheck} />
                </IonButton>
                Produits
              </IonItem>
            </IonList>

            <IonList lines="none" style={{ margin: "30px 0px" }}>
              <IonItem detail href="/salons">
                <IonButton fill="clear">
                  <IonIcon color="danger" slot="start" icon={location} />
                </IonButton>
                Nos salons
              </IonItem>
              <IonItem href="/realisations" detail>
                <IonButton fill="clear">
                  <IonIcon color="danger" slot="start" icon={colorWand} />
                </IonButton>{" "}
                Nos réalisations
              </IonItem>
              <IonItem href="/contact" detail>
                <IonButton fill="clear">
                  <IonIcon color="danger" slot="start" icon={call} />
                </IonButton>
                Contactez-nous
              </IonItem>
            </IonList>
          </IonContent>
          <IonFooter>
            <div
              style={{ textAlign: "center", margin: "5px", fontSize: "small" }}
            >
              <p>Beauty Queen &copy; 2021. Tous droits réservés.</p>
            </div>
          </IonFooter>
        </IonMenu>
        <IonRouterOutlet id="main_content">
          <Route exact path="/tab1">
            {Gender === "femme" && <Tab1 type="femme" />}
            {Gender === "homme" && <Tab1 type="homme" />}
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>

          <Route path="/salons">
            <NosSalons />
          </Route>
          <Route path="/realisations">
            <NosRealisations />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
