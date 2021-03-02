import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonModal,
} from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Ayudame</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol className="ion-text-center">
              <IonButton expand="block" href="/setup">
                Create Session
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol className="ion-text-center">
              <IonModal isOpen={showModal}>
                <p>This is modal content</p>
                <IonButton expand="block" onClick={() => setShowModal(false)}>
                  Close
                </IonButton>
              </IonModal>
              <IonButton expand="block" onClick={() => setShowModal(true)}>
                Join Session
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
