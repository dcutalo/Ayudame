import { IonList, IonCard, IonItem, IonLabel, IonInput } from "@ionic/react";

const SetupInputs: React.FC = () => {
  return (
    <IonCard>
      <IonItem>
        <IonInput placeholder="Enter Location"></IonInput>
      </IonItem>
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
  );
};

export default SetupInputs;
