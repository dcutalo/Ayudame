import React, { useState } from "react";
import { IonContent, IonModal, IonButton } from "@ionic/react";

const JoinSession: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton expand="block" onClick={() => setShowModal(false)}>
          Close
        </IonButton>
      </IonModal>
      <IonButton expand="block" onClick={() => setShowModal(true)}>
        Join Session
      </IonButton>
    </div>
  );
};

export default JoinSession;
