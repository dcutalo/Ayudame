import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonItem,
  IonInput,
  IonCard,
  IonList,
  IonLabel,
  IonButton,
  IonBackButton,
  IonButtons,
} from "@ionic/react";

import "../theme/variables.css";

const Setup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle className="ion-text-center">Ayudame</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonInput placeholder="Enter Location"></IonInput>
        </IonItem>
        <IonItem>
          <IonCard>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Input 1</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Input 2</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Input 3</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Input 4</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Input 5</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonList>
          </IonCard>
        </IonItem>
        <IonButton className="ion-float-right ion-margin">
          Find Restaurants
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Setup;
